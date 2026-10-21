(() => {
  const AMBIENT_STORAGE_KEY = "planBAmbientLightV1";
  const controlCenter = document.getElementById("controlCenter");
  if (!controlCenter) return;

  const shell = document.querySelector(".device-shell");
  const content = document.querySelector(".content");
  const panel = document.getElementById("controlCenterPanel");
  const handle = document.getElementById("controlCenterHandle");
  const panelDragZone = document.getElementById("controlCenterDrag");
  const scrim = document.getElementById("controlCenterScrim");
  const wifiTile = document.getElementById("wifiToggleTile");
  const ambientCard = document.getElementById("ccAmbientCard");
  const ambientPowerToggle = document.getElementById("ambientPowerToggleCc");
  const ambientStatusText = document.getElementById("ambientStatusTextCc");
  const ambientBrightnessSlider = document.getElementById("ambientBrightnessSliderCc");
  const ambientBrightnessValue = document.getElementById("ambientBrightnessValueCc");
  const ambientModeSegment = document.getElementById("ambientModeSegment");
  const ambientModeLockHint = document.getElementById("ambientModeLockHint");
  const musicCard = document.getElementById("ccMusicCard");
  const musicTitle = document.getElementById("ccMusicTitle");
  const musicArtist = document.getElementById("ccMusicArtist");
  const progressFill = document.getElementById("ccProgressFill");
  const currentTimeText = document.getElementById("ccCurrentTime");
  const totalTimeText = document.getElementById("ccTotalTime");
  const prevBtn = document.getElementById("ccPrevBtn");
  const nextBtn = document.getElementById("ccNextBtn");
  const shuffleBtn = document.getElementById("ccShuffleBtn");
  const playBtn = document.getElementById("ccPlayBtn");
  const playIcon = document.getElementById("ccPlayIcon");
  const pauseIcon = document.getElementById("ccPauseIcon");
  const playlistToggleBtn = document.getElementById("ccPlaylistToggleBtn");
  const playlistPanel = document.getElementById("ccPlaylistPanel");
  const playlistList = document.getElementById("ccPlaylistList");

  if (!shell || !content || !panel || !handle || !panelDragZone || !scrim) return;

  let panelOffset = 0;
  let openProgress = 0;
  let isOpen = false;
  let dragState = null;
  let suppressHandleClick = false;

  const sliderState = {
    brightness: 0.62,
    volume: 0.58
  };

  let ambientState = loadAmbientState();

  function createAmbientDefaultState() {
    return {
      power: false,
      color: "#FFFFFF",
      brightness: 60,
      mode: "steady",
      breathSpeed: "medium",
      trainingSync: false
    };
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function normalizeAmbientState(raw) {
    const defaults = createAmbientDefaultState();
    const merged = { ...defaults, ...(raw || {}) };
    merged.power = Boolean(merged.power);
    merged.brightness = clamp(Number(merged.brightness) || defaults.brightness, 0, 100);
    merged.mode = merged.mode === "breathing" ? "breathing" : "steady";
    merged.breathSpeed = ["slow", "medium", "fast"].includes(merged.breathSpeed) ? merged.breathSpeed : "medium";
    merged.trainingSync = Boolean(merged.trainingSync);
    return merged;
  }

  function loadAmbientState() {
    try {
      const raw = localStorage.getItem(AMBIENT_STORAGE_KEY);
      if (!raw) return createAmbientDefaultState();
      return normalizeAmbientState(JSON.parse(raw));
    } catch (_error) {
      return createAmbientDefaultState();
    }
  }

  function saveAmbientState() {
    localStorage.setItem(AMBIENT_STORAGE_KEY, JSON.stringify(ambientState));
  }

  function syncAmbientStateFromStorage() {
    ambientState = loadAmbientState();
    renderAmbientCard();
    applyAmbientVisual();
  }

  function setAmbientSwitchState(isOn) {
    if (!ambientPowerToggle) return;
    ambientPowerToggle.classList.toggle("is-on", isOn);
    ambientPowerToggle.setAttribute("aria-checked", isOn ? "true" : "false");
  }

  function applyAmbientVisual() {
    if (!ambientState.power) {
      shell.classList.remove("ambient-light-on", "ambient-breathing");
      shell.style.removeProperty("--ambient-glow");
      return;
    }

    const glow = 0.06 + (ambientState.brightness / 100) * 0.26;
    shell.style.setProperty("--ambient-glow", glow.toFixed(2));
    shell.classList.add("ambient-light-on");
    shell.classList.toggle("ambient-breathing", ambientState.mode === "breathing");
  }

  function renderAmbientCard() {
    const modeLocked = ambientState.trainingSync;
    const modeButtons = ambientModeSegment ? ambientModeSegment.querySelectorAll("[data-mode]") : [];
    setAmbientSwitchState(ambientState.power);

    if (ambientStatusText) {
      ambientStatusText.textContent = ambientState.power ? "On" : "Off";
    }
    if (ambientBrightnessSlider) {
      ambientBrightnessSlider.value = String(ambientState.brightness);
      ambientBrightnessSlider.disabled = !ambientState.power;
    }
    if (ambientBrightnessValue) {
      ambientBrightnessValue.textContent = String(ambientState.brightness);
    }

    modeButtons.forEach((button) => {
      const isActive = button.dataset.mode === ambientState.mode;
      button.classList.toggle("is-active", isActive);
      button.disabled = !ambientState.power || modeLocked;
    });

    if (ambientCard) {
      ambientCard.classList.toggle("is-off", !ambientState.power);
      ambientCard.classList.toggle("is-mode-locked", modeLocked);
    }
    if (ambientModeLockHint) {
      ambientModeLockHint.hidden = !modeLocked;
    }
  }

  function updateAmbientState(patch) {
    ambientState = normalizeAmbientState({ ...ambientState, ...patch });
    saveAmbientState();
    renderAmbientCard();
    applyAmbientVisual();
  }

  function updateOffset() {
    const height = panel.getBoundingClientRect().height || 280;
    panelOffset = Math.max(height + 18, 280);
    applyProgress(openProgress);
  }

  function applyProgress(nextProgress) {
    const clamped = Math.max(0, Math.min(1, nextProgress));
    openProgress = clamped;
    const translateY = panelOffset * (1 - clamped);
    panel.style.transform = `translateY(${translateY}px)`;
    scrim.style.opacity = String(clamped);
    controlCenter.classList.toggle("is-open", clamped > 0);
    if (clamped > 0.98) {
      document.body.classList.add("cc-open");
      isOpen = true;
      handle.setAttribute("aria-expanded", "true");
    } else if (clamped < 0.02) {
      document.body.classList.remove("cc-open");
      isOpen = false;
      handle.setAttribute("aria-expanded", "false");
    }
  }

  function openCenter() {
    syncAmbientStateFromStorage();
    panel.style.removeProperty("transition");
    scrim.style.removeProperty("transition");
    requestAnimationFrame(() => {
      panel.style.transition = "";
      scrim.style.transition = "";
      applyProgress(1);
    });
  }

  function closeCenter() {
    panel.style.removeProperty("transition");
    scrim.style.removeProperty("transition");
    requestAnimationFrame(() => {
      panel.style.transition = "";
      scrim.style.transition = "";
      applyProgress(0);
    });
  }

  function startDragOpen(pointerId, clientY) {
    dragState = { pointerId, mode: "open", startY: clientY, moved: false };
    panel.style.transition = "none";
    scrim.style.transition = "none";
  }

  function startDragClose(pointerId, clientY) {
    dragState = { pointerId, mode: "close", startY: clientY, moved: false };
    panel.style.transition = "none";
    scrim.style.transition = "none";
  }

  function onPointerMove(event) {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const deltaY = event.clientY - dragState.startY;
    if (Math.abs(deltaY) > 4) dragState.moved = true;

    if (dragState.mode === "open") {
      applyProgress(Math.max(0, Math.min(1, -deltaY / panelOffset)));
    } else {
      applyProgress(Math.max(0, Math.min(1, 1 + (deltaY / panelOffset))));
    }
  }

  function onPointerUp(event) {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const finalProgress = openProgress;
    const mode = dragState.mode;
    const moved = dragState.moved;
    dragState = null;
    panel.style.transition = "";
    scrim.style.transition = "";
    if (mode === "open") {
      if (finalProgress > 0.32 || !moved) openCenter();
      else closeCenter();
      suppressHandleClick = moved;
    } else {
      if (finalProgress < 0.68) closeCenter();
      else openCenter();
    }
  }

  handle.setAttribute("aria-expanded", "false");
  handle.addEventListener("click", () => {
    if (suppressHandleClick) {
      suppressHandleClick = false;
      return;
    }
    if (isOpen) closeCenter();
    else openCenter();
  });
  handle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) closeCenter();
      else openCenter();
    }
  });
  handle.addEventListener("pointerdown", (event) => {
    if (isOpen) return;
    handle.setPointerCapture(event.pointerId);
    startDragOpen(event.pointerId, event.clientY);
  });
  panelDragZone.addEventListener("pointerdown", (event) => {
    if (!isOpen) return;
    panelDragZone.setPointerCapture(event.pointerId);
    startDragClose(event.pointerId, event.clientY);
  });

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  scrim.addEventListener("click", closeCenter);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) closeCenter();
  });

  function wireTileToggle(tile) {
    if (!tile) return;
    tile.addEventListener("click", () => {
      const active = tile.classList.toggle("active");
      const state = tile.querySelector(".cc-tile-state");
      if (state) state.textContent = active ? "On" : "Off";
      tile.setAttribute("aria-pressed", String(active));
    });
  }

  wireTileToggle(wifiTile);

  (function wireThemeSwitch() {
    const themeSegment = document.getElementById("ccThemeSegment");
    if (!themeSegment) return;
    themeSegment.querySelectorAll("[data-theme]").forEach((button) => {
      const isDark = button.dataset.theme === "dark";
      button.classList.toggle("is-active", isDark);
      button.setAttribute("aria-pressed", String(isDark));
      if (!isDark) {
        button.addEventListener("click", (event) => {
          event.preventDefault();
        });
      }
    });
  })();

  if (wifiTile) {
    let longPressTimer = null;
    let suppressNextWifiClick = false;
    const clearLongPress = () => {
      if (!longPressTimer) return;
      window.clearTimeout(longPressTimer);
      longPressTimer = null;
    };
    const startLongPress = () => {
      clearLongPress();
      longPressTimer = window.setTimeout(() => {
        suppressNextWifiClick = true;
        window.location.href = "plan-b-device-settings.html";
      }, 550);
    };
    wifiTile.addEventListener("pointerdown", startLongPress);
    wifiTile.addEventListener("pointerup", clearLongPress);
    wifiTile.addEventListener("pointercancel", clearLongPress);
    wifiTile.addEventListener("pointerleave", clearLongPress);
    wifiTile.addEventListener("contextmenu", (event) => event.preventDefault());
    wifiTile.addEventListener("click", (event) => {
      if (!suppressNextWifiClick) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressNextWifiClick = false;
    }, { capture: true });
  }

  const sliders = [...controlCenter.querySelectorAll(".cc-slider[data-slider]")];
  const volumePath = document.getElementById("volumeIconPath");

  function applyBrightness(value) {
    const brightness = 0.72 + value * 0.5;
    content.style.filter = `brightness(${brightness.toFixed(2)})`;
  }

  function applyVolumeIcon(value) {
    if (!volumePath) return;
    if (value < 0.05) {
      volumePath.setAttribute("d", "M11 5L6 9H3v6h3l5 4V5z");
    } else {
      volumePath.setAttribute("d", "M11 5L6 9H3v6h3l5 4V5zm3.5 4.5a5 5 0 0 1 0 5m2.5-7.5a8.5 8.5 0 0 1 0 10");
    }
  }

  function renderSlider(sliderEl, value) {
    const fill = sliderEl.querySelector(".cc-slider-fill");
    const thumb = sliderEl.querySelector(".cc-slider-thumb");
    const percent = Math.round(value * 100);
    if (fill) fill.style.height = `${percent}%`;
    if (thumb) thumb.style.bottom = `${percent}%`;
    sliderEl.setAttribute("aria-valuenow", String(percent));
  }

  function setSliderValue(key, value) {
    const clamped = Math.max(0, Math.min(1, value));
    sliderState[key] = clamped;
    const sliderEl = controlCenter.querySelector(`.cc-slider[data-slider="${key}"]`);
    if (sliderEl) renderSlider(sliderEl, clamped);
    if (key === "brightness") applyBrightness(clamped);
    if (key === "volume") applyVolumeIcon(clamped);
  }

  function wireSlider(sliderEl) {
    const key = sliderEl.dataset.slider;
    const track = sliderEl.querySelector(".cc-slider-track");
    if (!key || !track) return;

    function setValueFromPointer(clientY) {
      const rect = track.getBoundingClientRect();
      const ratio = (rect.bottom - clientY) / rect.height;
      setSliderValue(key, ratio);
    }

    track.addEventListener("pointerdown", (event) => {
      track.setPointerCapture(event.pointerId);
      setValueFromPointer(event.clientY);
      const move = (moveEvent) => setValueFromPointer(moveEvent.clientY);
      const stop = () => {
        track.removeEventListener("pointermove", move);
        track.removeEventListener("pointerup", stop);
        track.removeEventListener("pointercancel", stop);
      };
      track.addEventListener("pointermove", move);
      track.addEventListener("pointerup", stop);
      track.addEventListener("pointercancel", stop);
    });
  }

  sliders.forEach((slider) => wireSlider(slider));
  setSliderValue("brightness", sliderState.brightness);
  setSliderValue("volume", sliderState.volume);

  if (ambientPowerToggle) {
    ambientPowerToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      updateAmbientState({ power: !ambientState.power });
    });
  }

  if (ambientBrightnessSlider) {
    ambientBrightnessSlider.addEventListener("input", (event) => {
      const next = clamp(Number(event.target.value), 0, 100);
      updateAmbientState({ brightness: next });
    });
  }

  if (ambientModeSegment) {
    ambientModeSegment.querySelectorAll("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.disabled) return;
        const mode = button.dataset.mode === "breathing" ? "breathing" : "steady";
        updateAmbientState({ mode });
      });
    });
  }

  if (ambientCard) {
    let longPressTimer = null;
    let suppressNextCardClick = false;
    const clearLongPress = () => {
      if (!longPressTimer) return;
      window.clearTimeout(longPressTimer);
      longPressTimer = null;
    };

    ambientCard.addEventListener("pointerdown", (event) => {
      if (event.target.closest(".cc-switch, .cc-range, .cc-segment-btn")) return;
      clearLongPress();
      longPressTimer = window.setTimeout(() => {
        suppressNextCardClick = true;
        window.location.href = "plan-b-ambient-light-settings.html";
      }, 550);
    });
    ambientCard.addEventListener("pointerup", clearLongPress);
    ambientCard.addEventListener("pointerleave", clearLongPress);
    ambientCard.addEventListener("pointercancel", clearLongPress);
    ambientCard.addEventListener("click", (event) => {
      if (!suppressNextCardClick) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressNextCardClick = false;
    }, { capture: true });
  }

  const songPool = [
    { title: "Night Sprint", artist: "Pulse Drive", durationSec: 200 },
    { title: "Skyline Tempo", artist: "Nova Loop", durationSec: 186 },
    { title: "Core Ignite", artist: "Atlas Beat", durationSec: 214 },
    { title: "Urban Drift", artist: "Kilo Wave", durationSec: 176 },
    { title: "Iron Rhythm", artist: "Mosaic Run", durationSec: 208 },
    { title: "Midnight Cardio", artist: "Rift Lane", durationSec: 192 },
    { title: "Voltage Lift", artist: "Neon Harbor", durationSec: 203 }
  ];
  let playlist = [];
  let trackIndex = 0;
  let currentSec = 48;
  let isPlaying = true;
  let progressTimer = null;
  let playlistExpanded = false;

  function formatTime(totalSec) {
    const minute = Math.floor(totalSec / 60);
    const second = totalSec % 60;
    return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  }

  function renderPlaylist() {
    if (!playlistList) return;
    playlistList.innerHTML = "";
    playlist.forEach((track, index) => {
      const item = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cc-playlist-item";
      if (index === trackIndex) btn.classList.add("is-active");
      btn.textContent = `${track.title} · ${track.artist}`;
      btn.addEventListener("click", () => {
        trackIndex = index;
        currentSec = 0;
        renderMusicTrack();
        renderMusicProgress();
        renderPlaylist();
      });
      item.appendChild(btn);
      playlistList.appendChild(item);
    });
  }

  function pickRandomPlaylist(count) {
    const cloned = [...songPool];
    for (let i = cloned.length - 1; i > 0; i -= 1) {
      const randomIdx = Math.floor(Math.random() * (i + 1));
      [cloned[i], cloned[randomIdx]] = [cloned[randomIdx], cloned[i]];
    }
    return cloned.slice(0, Math.min(count, cloned.length));
  }

  function regeneratePlaylist() {
    playlist = pickRandomPlaylist(4);
    trackIndex = 0;
    currentSec = 0;
    renderMusicTrack();
    renderMusicProgress();
    renderPlaylist();
  }

  function togglePlaylist(nextExpanded) {
    playlistExpanded = nextExpanded;
    if (playlistPanel) {
      playlistPanel.classList.toggle("is-collapsed", !nextExpanded);
      playlistPanel.setAttribute("aria-hidden", String(!nextExpanded));
    }
    if (playlistToggleBtn) {
      playlistToggleBtn.setAttribute("aria-expanded", String(nextExpanded));
      playlistToggleBtn.setAttribute("aria-label", nextExpanded ? "Collapse Playlist" : "Expand Playlist");
    }
  }

  function renderMusicTrack() {
    const track = playlist[trackIndex];
    if (!track) return;
    if (musicTitle) musicTitle.textContent = track.title;
    if (musicArtist) musicArtist.textContent = track.artist;
    if (totalTimeText) totalTimeText.textContent = formatTime(track.durationSec);
  }

  function renderMusicProgress() {
    const track = playlist[trackIndex];
    if (!track) return;
    const ratio = track.durationSec ? currentSec / track.durationSec : 0;
    if (progressFill) progressFill.style.width = `${Math.max(0, Math.min(1, ratio)) * 100}%`;
    if (currentTimeText) currentTimeText.textContent = formatTime(currentSec);
  }

  function stopProgressTimer() {
    if (!progressTimer) return;
    window.clearInterval(progressTimer);
    progressTimer = null;
  }

  function nextTrack(step) {
    if (!playlist.length) return;
    trackIndex = (trackIndex + step + playlist.length) % playlist.length;
    currentSec = 0;
    renderMusicTrack();
    renderMusicProgress();
    renderPlaylist();
  }

  function startProgressTimer() {
    stopProgressTimer();
    progressTimer = window.setInterval(() => {
      if (!isPlaying) return;
      const track = playlist[trackIndex];
      if (!track) return;
      currentSec += 1;
      if (currentSec >= track.durationSec) {
        nextTrack(1);
      } else {
        renderMusicProgress();
      }
    }, 1000);
  }

  function setPlayState(nextPlaying) {
    isPlaying = nextPlaying;
    if (musicCard) musicCard.classList.toggle("playing", nextPlaying);
    if (playIcon) playIcon.hidden = nextPlaying;
    if (pauseIcon) pauseIcon.hidden = !nextPlaying;
    if (playBtn) playBtn.setAttribute("aria-label", nextPlaying ? "Pause" : "Play");
    if (nextPlaying) startProgressTimer();
    else stopProgressTimer();
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      nextTrack(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextTrack(1);
    });
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      setPlayState(!isPlaying);
    });
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      if (playlist.length < 2) return;
      let nextIndex = trackIndex;
      while (nextIndex === trackIndex) {
        nextIndex = Math.floor(Math.random() * playlist.length);
      }
      trackIndex = nextIndex;
      currentSec = 0;
      renderMusicTrack();
      renderMusicProgress();
      renderPlaylist();
    });
  }

  if (playlistToggleBtn) {
    playlistToggleBtn.addEventListener("click", () => {
      const willExpand = !playlistExpanded;
      if (willExpand) {
        regeneratePlaylist();
      }
      togglePlaylist(willExpand);
    });
  }

  renderAmbientCard();
  applyAmbientVisual();
  regeneratePlaylist();
  togglePlaylist(false);
  renderMusicTrack();
  renderMusicProgress();
  setPlayState(isPlaying);
  updateOffset();
  applyProgress(0);
  window.addEventListener("resize", updateOffset);
})();
