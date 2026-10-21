document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "planBAmbientLightV1";

  function createDefaultState() {
    return {
      power: false,
      color: "#FFFFFF",
      brightness: 60,
      mode: "steady",
      breathSpeed: "medium",
      trainingSync: false
    };
  }

  const DEFAULT_STATE = createDefaultState();

  const ambientPowerToggle = document.getElementById("ambientPowerToggle");
  const featureGroup = document.getElementById("featureGroup");
  const presetGrid = document.getElementById("presetGrid");
  const brightnessSlider = document.getElementById("brightnessSlider");
  const brightnessValue = document.getElementById("brightnessValue");
  const modeSegment = document.getElementById("modeSegment");
  const breathingSpeedGroup = document.getElementById("breathingSpeedGroup");
  const trainingSyncToggle = document.getElementById("trainingSyncToggle");
  const resetDefaultsBtn = document.getElementById("resetDefaultsBtn");
  const resetDefaultsModal = document.getElementById("resetDefaultsModal");
  const closeResetModalBtn = document.getElementById("closeResetModalBtn");
  const cancelResetBtn = document.getElementById("cancelResetBtn");
  const confirmResetBtn = document.getElementById("confirmResetBtn");

  let state = loadState();

  function normalizeHex(color) {
    if (typeof color !== "string") return "#FFFFFF";
    const value = color.trim();
    if (!/^#[0-9a-fA-F]{6}$/.test(value)) return "#FFFFFF";
    return value.toUpperCase();
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultState();
      const parsed = JSON.parse(raw);
      const merged = { ...DEFAULT_STATE, ...parsed };
      merged.color = normalizeHex(merged.color);
      merged.brightness = clamp(Number(merged.brightness) || DEFAULT_STATE.brightness, 0, 100);
      merged.mode = merged.mode === "breathing" ? "breathing" : "steady";
      merged.breathSpeed = ["slow", "medium", "fast"].includes(merged.breathSpeed) ? merged.breathSpeed : "medium";
      merged.trainingSync = Boolean(merged.trainingSync);
      merged.power = Boolean(merged.power);
      return merged;
    } catch (error) {
      return createDefaultState();
    }
  }

  function resetToDefaults() {
    state = createDefaultState();
    saveState();
    render();
  }

  function openResetModal() {
    if (resetDefaultsModal) resetDefaultsModal.classList.add("active");
  }

  function closeResetModal() {
    if (resetDefaultsModal) resetDefaultsModal.classList.remove("active");
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function setToggle(el, isOn) {
    if (!el) return;
    el.classList.toggle("is-on", isOn);
    el.setAttribute("aria-checked", isOn ? "true" : "false");
  }

  function renderPresets() {
    if (!presetGrid) return;
    presetGrid.querySelectorAll(".preset-chip").forEach((chip) => {
      const chipColor = normalizeHex(chip.dataset.color || "");
      chip.classList.toggle("is-active", chipColor === state.color);
    });
  }

  function renderMode() {
    const modeButtons = modeSegment ? modeSegment.querySelectorAll("[data-mode]") : [];
    const speedButtons = breathingSpeedGroup ? breathingSpeedGroup.querySelectorAll("[data-speed]") : [];
    const modeLocked = state.trainingSync;

    if (modeSegment) modeSegment.classList.toggle("is-locked", modeLocked);
    modeButtons.forEach((btn) => {
      const mode = btn.dataset.mode;
      btn.classList.toggle("is-active", mode === state.mode);
      btn.disabled = modeLocked;
    });

    if (breathingSpeedGroup) {
      breathingSpeedGroup.classList.toggle("is-hidden", state.mode !== "breathing");
    }

    speedButtons.forEach((btn) => {
      const speed = btn.dataset.speed;
      btn.classList.toggle("is-active", speed === state.breathSpeed);
      btn.disabled = modeLocked;
    });
  }

  function render() {
    setToggle(ambientPowerToggle, state.power);
    setToggle(trainingSyncToggle, state.trainingSync);

    if (featureGroup) {
      featureGroup.classList.toggle("is-disabled", !state.power);
    }

    if (brightnessSlider) brightnessSlider.value = String(state.brightness);
    if (brightnessValue) brightnessValue.textContent = String(state.brightness);

    renderPresets();
    renderMode();
  }

  if (ambientPowerToggle) {
    ambientPowerToggle.addEventListener("click", () => {
      state.power = !state.power;
      saveState();
      render();
    });
  }

  if (presetGrid) {
    presetGrid.querySelectorAll(".preset-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.color = normalizeHex(chip.dataset.color || "");
        saveState();
        render();
      });
    });
  }

  if (brightnessSlider) {
    brightnessSlider.addEventListener("input", (event) => {
      state.brightness = clamp(Number(event.target.value), 0, 100);
      saveState();
      render();
    });
  }

  if (modeSegment) {
    modeSegment.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        state.mode = btn.dataset.mode === "breathing" ? "breathing" : "steady";
        saveState();
        render();
      });
    });
  }

  if (breathingSpeedGroup) {
    breathingSpeedGroup.querySelectorAll("[data-speed]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        const speed = btn.dataset.speed;
        if (["slow", "medium", "fast"].includes(speed)) {
          state.breathSpeed = speed;
          saveState();
          render();
        }
      });
    });
  }

  if (trainingSyncToggle) {
    trainingSyncToggle.addEventListener("click", () => {
      state.trainingSync = !state.trainingSync;
      saveState();
      render();
    });
  }

  if (resetDefaultsBtn) resetDefaultsBtn.addEventListener("click", openResetModal);
  if (closeResetModalBtn) closeResetModalBtn.addEventListener("click", closeResetModal);
  if (cancelResetBtn) cancelResetBtn.addEventListener("click", closeResetModal);
  if (confirmResetBtn) {
    confirmResetBtn.addEventListener("click", () => {
      resetToDefaults();
      closeResetModal();
    });
  }

  render();
});
