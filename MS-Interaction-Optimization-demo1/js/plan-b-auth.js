(function () {
  const HOME_PATH = "index-plan-b-home.html";
  const LOGIN_PATH = "plan-b-login.html";
  const DEVICE_LOGIN_TTL_MS = 5 * 60 * 1000;
  const DEFAULT_DEVICE = {
    deviceId: "ms-5502",
    deviceName: "MS-5502"
  };

  function getPageName() {
    return document.body?.dataset?.planBPage || "";
  }

  function getUserStore() {
    return window.PlanBUserStore || null;
  }

  function showToast(message, duration) {
    const toast = document.getElementById("authToast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove("is-hidden");
    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => {
      toast.classList.add("is-hidden");
    }, duration || 1800);
  }

  function goTo(path, delay) {
    if (!delay) {
      window.location.href = path;
      return;
    }
    window.setTimeout(() => {
      window.location.href = path;
    }, delay);
  }

  function bindBackButtons() {
    document.querySelectorAll("[data-auth-back]").forEach((node) => {
      node.addEventListener("click", () => {
        const target = node.getAttribute("data-auth-back");
        goTo(target || HOME_PATH);
      });
    });
  }

  function bindMethodTabs(onMethodChange) {
    const tabs = document.querySelectorAll("[data-auth-method-tab]");
    const forms = document.querySelectorAll("[data-auth-method-panel]");
    if (!tabs.length || !forms.length) return;
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const method = tab.getAttribute("data-auth-method-tab");
        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle("active", active);
          item.setAttribute("aria-selected", active ? "true" : "false");
        });
        forms.forEach((panel) => {
          panel.classList.toggle("is-hidden", panel.getAttribute("data-auth-method-panel") !== method);
        });
        if (typeof onMethodChange === "function") onMethodChange(method);
      });
    });
  }

  function formatCountdown(expiresAt, at) {
    const remainMs = Math.max(0, expiresAt - (at || Date.now()));
    const totalSec = Math.ceil(remainMs / 1000);
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function buildQrUrl(payload) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=12&data=${encodeURIComponent(payload)}`;
  }

  function createSessionId() {
    return `dls-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function bindQrLogin() {
    const panel = document.getElementById("qrLoginPanel");
    if (!panel) return { start: () => {}, stop: () => {} };

    const deviceNameEl = document.getElementById("qrDeviceName");
    const imageEl = document.getElementById("qrLoginImage");
    const fallbackEl = document.getElementById("qrLoginFallback");
    const countdownEl = document.getElementById("qrCountdown");
    const sessionIdEl = document.getElementById("qrSessionId");
    const statusTextEl = document.getElementById("qrStatusText");
    const scanBtn = document.getElementById("qrSimulateScanBtn");
    const confirmBtn = document.getElementById("qrSimulateConfirmBtn");
    const refreshBtn = document.getElementById("qrRefreshBtn");
    const successAvatar = document.getElementById("qrSuccessAvatar");
    const successName = document.getElementById("qrSuccessName");
    const views = {
      active: document.getElementById("qrActiveView"),
      scanned: document.getElementById("qrScannedView"),
      confirmed: document.getElementById("qrConfirmedView"),
      expired: document.getElementById("qrExpiredView")
    };

    let session = null;
    let timerId = 0;
    let redirectTimerId = 0;
    let running = false;

    function setStatusText(text) {
      if (statusTextEl) statusTextEl.textContent = text;
    }

    function showView(name) {
      Object.keys(views).forEach((key) => {
        const node = views[key];
        if (!node) return;
        node.classList.toggle("is-hidden", key !== name);
      });
    }

    function setQrImage(payload) {
      if (!imageEl) return;
      const url = buildQrUrl(payload);
      imageEl.classList.remove("is-hidden");
      if (fallbackEl) {
        fallbackEl.classList.add("is-hidden");
        fallbackEl.setAttribute("aria-hidden", "true");
      }
      imageEl.onerror = () => {
        imageEl.classList.add("is-hidden");
        if (fallbackEl) {
          fallbackEl.classList.remove("is-hidden");
          fallbackEl.setAttribute("aria-hidden", "false");
        }
      };
      imageEl.onload = () => {
        imageEl.classList.remove("is-hidden");
        if (fallbackEl) {
          fallbackEl.classList.add("is-hidden");
          fallbackEl.setAttribute("aria-hidden", "true");
        }
      };
      imageEl.src = url;
    }

    function syncControls() {
      const status = session?.status || "active";
      if (scanBtn) scanBtn.disabled = status !== "active";
      if (confirmBtn) confirmBtn.disabled = status !== "scanned";
    }

    function createSession() {
      const issuedAt = Date.now();
      session = {
        id: createSessionId(),
        deviceId: DEFAULT_DEVICE.deviceId,
        deviceName: DEFAULT_DEVICE.deviceName,
        issuedAt,
        expiresAt: issuedAt + DEVICE_LOGIN_TTL_MS,
        status: "active"
      };
      if (deviceNameEl) deviceNameEl.textContent = session.deviceName;
      if (sessionIdEl) sessionIdEl.textContent = `Session ${session.id.slice(-8)}`;
      if (countdownEl) countdownEl.textContent = formatCountdown(session.expiresAt);
      const payload = JSON.stringify({
        type: "device-login",
        sessionId: session.id,
        deviceId: session.deviceId,
        deviceName: session.deviceName,
        expiresAt: session.expiresAt
      });
      setQrImage(payload);
      showView("active");
      setStatusText("Waiting for scan");
      syncControls();
      return session;
    }

    function expireSession() {
      if (!session || session.status === "confirmed") return;
      session = { ...session, status: "expired" };
      showView("expired");
      setStatusText("QR code expired");
      syncControls();
    }

    function tick() {
      if (!session || !running) return;
      if (session.status === "active" || session.status === "scanned") {
        if (Date.now() >= session.expiresAt) {
          expireSession();
          return;
        }
        if (countdownEl && session.status === "active") {
          countdownEl.textContent = formatCountdown(session.expiresAt);
        }
      }
    }

    function startTimer() {
      window.clearInterval(timerId);
      timerId = window.setInterval(tick, 1000);
    }

    function stop() {
      running = false;
      window.clearInterval(timerId);
      window.clearTimeout(redirectTimerId);
      timerId = 0;
      redirectTimerId = 0;
    }

    function start() {
      running = true;
      createSession();
      startTimer();
    }

    function refresh() {
      createSession();
      if (running) startTimer();
      showToast("QR code refreshed");
    }

    function simulateScan() {
      if (!session || session.status !== "active") return;
      if (Date.now() >= session.expiresAt) {
        expireSession();
        return;
      }
      session = { ...session, status: "scanned" };
      showView("scanned");
      setStatusText("Scanned — confirm on phone");
      syncControls();
      showToast("Phone scanned the QR code");
    }

    function simulateConfirm() {
      if (!session || session.status !== "scanned") return;
      if (Date.now() >= session.expiresAt) {
        expireSession();
        return;
      }
      const store = getUserStore();
      const user = store ? store.loginAsMobileQrUser() : null;
      session = {
        ...session,
        status: "confirmed",
        userId: user?.id || "user-demo-001",
        userNickname: user?.nickname || "Athlete"
      };
      if (successAvatar) successAvatar.textContent = user?.avatar || "A";
      if (successName) successName.textContent = user?.nickname || "Athlete";
      showView("confirmed");
      setStatusText("Login successful");
      syncControls();
      showToast("Device login confirmed");
      window.clearTimeout(redirectTimerId);
      redirectTimerId = window.setTimeout(() => {
        goTo(HOME_PATH);
      }, 1100);
    }

    scanBtn?.addEventListener("click", simulateScan);
    confirmBtn?.addEventListener("click", simulateConfirm);
    refreshBtn?.addEventListener("click", refresh);

    return { start, stop, refresh };
  }

  function bindLoginPage() {
    const quickLoginBtn = document.getElementById("quickLoginBtn");
    const policyCheckbox = document.getElementById("loginPolicyAgree");
    const passwordLoginBtn = document.getElementById("loginPasswordBtn");
    const codeLoginBtn = document.getElementById("loginCodeBtn");
    const message = "Please confirm you have read the User Agreement and Privacy Policy";
    const store = getUserStore();
    const qrLogin = bindQrLogin();

    if (store) {
      const lastUser = store.getLastUser();
      store.applyUserToDom(document);
      const quickName = quickLoginBtn?.querySelector("[data-user-name]");
      const quickAvatar = quickLoginBtn?.querySelector("[data-user-avatar]");
      if (quickName) quickName.textContent = lastUser.nickname;
      if (quickAvatar) quickAvatar.textContent = lastUser.avatar;
    }

    function submitLogin() {
      if (!policyCheckbox?.checked) {
        showToast(message);
        return;
      }
      if (store) store.loginAsDefault();
      goTo(HOME_PATH);
    }

    quickLoginBtn?.addEventListener("click", () => {
      if (store) {
        const lastUser = store.getLastUser();
        store.setUser(lastUser);
      }
      goTo(HOME_PATH);
    });
    passwordLoginBtn?.addEventListener("click", submitLogin);
    codeLoginBtn?.addEventListener("click", submitLogin);

    bindMethodTabs((method) => {
      if (method === "qr") {
        qrLogin.start();
      } else {
        qrLogin.stop();
      }
    });
  }

  function bindRegisterPage() {
    const nextBtn = document.getElementById("registerNextBtn");
    const policyCheckbox = document.getElementById("registerPolicyAgree");
    const passwordInput = document.getElementById("registerPassword");
    const confirmInput = document.getElementById("registerConfirmPassword");

    nextBtn?.addEventListener("click", () => {
      if (!policyCheckbox?.checked) {
        showToast("Please confirm you have read the User Agreement and Privacy Policy");
        return;
      }
      if (passwordInput && confirmInput && passwordInput.value !== confirmInput.value) {
        showToast("Passwords do not match");
        return;
      }
      goTo("plan-b-profile-completion.html");
    });
  }

  function bindUnitToggles() {
    document.querySelectorAll("[data-unit-toggle]").forEach((group) => {
      const buttons = group.querySelectorAll("[data-unit-value]");
      const targetId = group.getAttribute("data-unit-target");
      const targetInput = targetId ? document.getElementById(targetId) : null;
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((other) => other.classList.toggle("active", other === button));
          if (targetInput) targetInput.placeholder = button.getAttribute("data-unit-placeholder") || "";
        });
      });
    });
  }

  function populateBirthYearOptions() {
    const sel = document.getElementById("profileBirthYear");
    if (!sel || sel.options.length > 1) return;
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 100;
    const frag = document.createDocumentFragment();
    for (let y = currentYear; y >= minYear; y -= 1) {
      const opt = document.createElement("option");
      opt.value = String(y);
      opt.textContent = String(y);
      frag.appendChild(opt);
    }
    sel.appendChild(frag);
  }

  function bindProfileCompletionPage() {
    bindUnitToggles();
    populateBirthYearOptions();
    const saveBtn = document.getElementById("profileCompletionSaveBtn");
    saveBtn?.addEventListener("click", () => {
      const store = getUserStore();
      const nicknameInput = document.getElementById("profileNickname");
      const nickname = nicknameInput?.value?.trim();
      if (store) {
        store.setUser({
          ...store.DEFAULT_USER,
          nickname: nickname || store.DEFAULT_USER.nickname,
          avatar: (nickname || store.DEFAULT_USER.nickname).slice(0, 1).toUpperCase(),
          source: "register"
        });
      }
      showToast("Registration successful");
      goTo(HOME_PATH, 900);
    });
  }

  function bindForgotPasswordPage() {
    const saveBtn = document.getElementById("forgotPasswordSaveBtn");
    const passwordInput = document.getElementById("forgotPassword");
    const confirmInput = document.getElementById("forgotConfirmPassword");
    saveBtn?.addEventListener("click", () => {
      if (passwordInput && confirmInput && passwordInput.value !== confirmInput.value) {
        showToast("Passwords do not match");
        return;
      }
      showToast("Password reset successful");
      goTo(LOGIN_PATH, 900);
    });
  }

  function init() {
    bindBackButtons();
    switch (getPageName()) {
      case "login":
        bindLoginPage();
        break;
      case "register":
        bindMethodTabs();
        bindRegisterPage();
        break;
      case "profile-completion":
        bindProfileCompletionPage();
        break;
      case "forgot-password":
        bindForgotPasswordPage();
        break;
      default:
        bindMethodTabs();
        break;
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
