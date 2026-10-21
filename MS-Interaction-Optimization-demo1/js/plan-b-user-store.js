(function (global) {
  const STORAGE_KEY = "planBUserV1";
  const AUTH_SESSION_KEY = "planBAuthSessionV1";
  const LAST_USER_KEY = "planBLastUserV1";

  const DEFAULT_USER = {
    id: "user-alyona",
    nickname: "Alyona",
    avatar: "A",
    accountSummary: "Plan B member",
    source: "default"
  };

  /** Mirrors APP Demo `mockUser` after mobile confirms device login. */
  const MOBILE_QR_USER = {
    id: "user-demo-001",
    nickname: "Athlete",
    avatar: "A",
    accountSummary: "MotionStation member · Device linked",
    source: "qr"
  };

  function safeParse(raw) {
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;
      return parsed;
    } catch (_err) {
      return null;
    }
  }

  function normalizeUser(user) {
    if (!user || typeof user !== "object" || !user.nickname) return { ...DEFAULT_USER };
    const nickname = String(user.nickname || DEFAULT_USER.nickname).trim() || DEFAULT_USER.nickname;
    const avatar = String(user.avatar || nickname).trim().slice(0, 1).toUpperCase() || "A";
    return {
      id: String(user.id || DEFAULT_USER.id),
      nickname,
      avatar,
      accountSummary: String(user.accountSummary || DEFAULT_USER.accountSummary),
      source: String(user.source || "default")
    };
  }

  function getCurrentUser() {
    const session = safeParse(localStorage.getItem(AUTH_SESSION_KEY));
    if (!session || !session.loggedIn) return null;
    const stored = safeParse(localStorage.getItem(STORAGE_KEY));
    return normalizeUser(stored && stored.nickname ? stored : DEFAULT_USER);
  }

  function getDisplayUser() {
    const current = getCurrentUser();
    if (current) return current;
    const last = safeParse(localStorage.getItem(LAST_USER_KEY));
    return normalizeUser(last && last.nickname ? last : DEFAULT_USER);
  }

  function getLastUser() {
    const last = safeParse(localStorage.getItem(LAST_USER_KEY));
    return normalizeUser(last && last.nickname ? last : DEFAULT_USER);
  }

  function isLoggedIn() {
    const session = safeParse(localStorage.getItem(AUTH_SESSION_KEY));
    return Boolean(session && session.loggedIn);
  }

  function setUser(user, options) {
    const next = normalizeUser(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    localStorage.setItem(LAST_USER_KEY, JSON.stringify(next));
    if (!options || options.login !== false) {
      localStorage.setItem(
        AUTH_SESSION_KEY,
        JSON.stringify({
          loggedIn: true,
          loggedInAt: Date.now(),
          source: next.source
        })
      );
    }
    return next;
  }

  function loginAsDefault() {
    return setUser(DEFAULT_USER);
  }

  function loginAsMobileQrUser() {
    return setUser(MOBILE_QR_USER);
  }

  function logout() {
    localStorage.setItem(
      AUTH_SESSION_KEY,
      JSON.stringify({
        loggedIn: false,
        loggedOutAt: Date.now()
      })
    );
    localStorage.removeItem(STORAGE_KEY);
  }

  function applyUserToDom(root) {
    const scope = root || document;
    const user = getDisplayUser();
    scope.querySelectorAll("[data-user-avatar]").forEach((node) => {
      node.textContent = user.avatar;
    });
    scope.querySelectorAll("[data-user-name]").forEach((node) => {
      node.textContent = user.nickname;
    });
    scope.querySelectorAll("[data-user-congrats]").forEach((node) => {
      node.textContent = `Great Job, ${user.nickname}`;
    });
    scope.querySelectorAll("[data-user-summary]").forEach((node) => {
      node.textContent = user.accountSummary;
    });
    return user;
  }

  function boot() {
    applyUserToDom(document);
  }

  const api = {
    STORAGE_KEY,
    AUTH_SESSION_KEY,
    LAST_USER_KEY,
    DEFAULT_USER,
    MOBILE_QR_USER,
    getCurrentUser,
    getDisplayUser,
    getLastUser,
    isLoggedIn,
    setUser,
    loginAsDefault,
    loginAsMobileQrUser,
    logout,
    applyUserToDom,
    boot
  };

  global.PlanBUserStore = api;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
