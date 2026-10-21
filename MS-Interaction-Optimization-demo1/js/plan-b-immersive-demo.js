/* Presentation-only fixture. No camera acquisition or AI inference.
 * Called only by the immersive page bridge in plan-b-verify.js. */
(() => {
  "use strict";
  if (document.body.dataset.planBPage !== "immersive") return;
  const config = {
    initial: { seconds: 132, volume: 81, energy: 2.7, calories: 14 },
    states: [
      { score: 96, tier: "Perfect", color: "#b8f56a", rgb: "184,245,106", text: "本次节奏很棒，保持住！" },
      { score: 86, tier: "Better", color: "#55d8ec", rgb: "85,216,236", text: "本次双臂同步，做得不错！" },
      { score: 74, tier: "Good", color: "#b8acff", rgb: "184,172,255", text: "本次节奏平稳，继续保持。" },
      { score: 59, tier: "Miss", color: "#ff776c", rgb: "255,119,108", text: "本次双臂不同步，下次同步拉回。" },
      { score: 62, tier: "Miss", color: "#ff776c", rgb: "255,119,108", text: "本次躯干有晃动，下次注意稳定。" },
      { score: null, tier: "Miss", color: "#a6b4bf", rgb: "166,180,191", text: "请让全身出现在镜头里，并确保镜头前没有遮挡", unknown: true }
    ]
  };
  const $ = id => document.getElementById("iwDemo-" + id);
  let active = false, playing = true, bridge, elapsed = 0, last = 0, frame = 0;
  let current = 0, score = 96, target = 96, volume = 81, reps = 4, bag = [];
  let items = [], pending = null, messageAge = 0;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const screen = document.getElementById("immersiveWorkoutScreen");
  const bars = [];
  function paintGauge(value) {
    const lit = Math.round(value / 5);
    bars.forEach((el, i) => el.classList.toggle("lit", i < lit));
    $("gauge").style.setProperty("--fill", lit / 20 * 100 + "%");
  }
  function fitLine(el, base) {
    let size = screen.clientWidth * base / 100;
    el.style.fontSize = size + "px";
    while (el.scrollWidth > el.clientWidth && size > screen.clientWidth * .022) {
      size -= .3; el.style.fontSize = size + "px";
    }
  }
  function fitAll() {
    items.forEach(item => fitLine(item.firstChild, 4));
    if (pending) fitLine($("bubble-title"), 4.5);
  }
  function clearMessages() {
    items = []; pending = null;
    $("result-list").replaceChildren();
    $("result-bubble").style.display = "none";
  }
  function commit() {
    if (!pending) return;
    const result = pending; pending = null;
    const row = document.createElement("div");
    row.className = "iw-demo-result-row";
    row.style.setProperty("--result-color", result.color);
    row.style.setProperty("--index", 0);
    const title = document.createElement("strong");
    title.textContent = result.text; row.append(title);
    items.unshift(row); $("result-list").append(row); fitLine(title, 4);
    items.forEach((item, i) => item.style.setProperty("--index", i));
    while (items.length > 3) items.pop().remove();
    $("result-bubble").style.display = "none";
  }
  function showMessage(state) {
    if (pending) commit();
    pending = state; messageAge = 0;
    if (reduced.matches) { commit(); return; }
    const bubble = $("result-bubble");
    bubble.style.setProperty("--result-color", state.color);
    $("bubble-title").textContent = state.text;
    bubble.style.display = "flex";
    bubble.style.transform = "translateY(3cqw) scale(.78)";
    bubble.firstElementChild.style.visibility = "visible";
    fitLine($("bubble-title"), 4.5);
  }
  function messageTick(dt) {
    if (!pending) return;
    if (reduced.matches) { commit(); return; }
    messageAge += dt;
    const bubble = $("result-bubble");
    if (messageAge < 180) {
      const p = 1 - Math.pow(1 - messageAge / 180, 3);
      bubble.style.transform = `translateY(${3 * (1 - p)}cqw) scale(${.78 + .22 * p})`;
    } else if (messageAge < 650) {
      bubble.style.transform = "translateY(0) scale(1)";
    } else if (messageAge < 1000) {
      const p = (messageAge - 650) / 350;
      bubble.firstElementChild.style.visibility = "hidden";
      bubble.style.transform = `translateY(${3 * p}cqw) scale(${1 - .82 * p})`;
    } else commit();
  }
  function stateChange(index) {
    const old = config.states[current], state = config.states[index];
    current = index; target = state.score;
    screen.dataset.demoState = String(index);
    screen.style.setProperty("--demo-accent", state.color);
    screen.style.setProperty("--demo-rgb", state.rgb);
    $("bodycard").classList.toggle("is-unknown", !!state.unknown);
    $("gauge").classList.toggle("unknown", !!state.unknown);
    if (state.unknown) $("score").textContent = "—";
    else { volume += 3; reps = reps % 12 + 1; }
    $("volume").textContent = volume.toFixed(1);
    $("energy").textContent = (volume / 30).toFixed(1);
    $("calories").textContent = Math.round(14 + (volume - 81) / 6);
    $("progress").style.width = reps / 12 * 100 + "%";
    if (state.unknown || old.unknown) clearMessages();
    $("wash").classList.remove("pulse"); $("gauge").classList.remove("sweep");
    void $("wash").offsetWidth;
    $("wash").classList.add("pulse");
    if (!state.unknown) $("gauge").classList.add("sweep");
    showMessage(state);
    bridge.onResult(state);
    screen.dispatchEvent(new CustomEvent("planb:demo-result", {
      detail: { source: "simulation", stateIndex: index, ...state }
    }));
  }
  // Shuffled bag: random order while ensuring every fixture is reachable.
  function nextState() {
    if (!active || !playing || document.getElementById("iwDrawer").classList.contains("open")) return;
    if (!bag.length) {
      bag = config.states.map((_, i) => i);
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      if (bag[bag.length - 1] === current) [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    stateChange(bag.pop());
  }
  function tick(now) {
    const dt = Math.min(now - last, 100); last = now;
    if (playing && !document.hidden) {
      elapsed += dt;
      if (target !== null) {
        score = reduced.matches ? target : score + (target - score) * Math.min(dt / 180, 1);
        $("score").textContent = Math.round(score); paintGauge(score);
      }
      const seconds = config.initial.seconds + Math.floor(elapsed / 1000);
      $("time").textContent = String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
      bridge.onTick(elapsed / 1000);
      messageTick(dt);
    }
    if (active) frame = requestAnimationFrame(tick);
  }
  function togglePlaying() {
    playing = !playing;
    screen.classList.toggle("iw-demo-paused", !playing);
    $("trigger").disabled = !playing;
    document.getElementById("iwPlayBtn").textContent = playing ? "Pause" : "Play";
    document.getElementById("iwPlayBtn").setAttribute("aria-pressed", String(!playing));
    bridge.onPlaying(playing); last = performance.now();
  }
  function snapshot() {
    return {
      dataSource: "simulation", isSimulated: true,
      durationSeconds: config.initial.seconds + Math.floor(elapsed / 1000),
      capacityKg: volume, energyKj: Number((volume / 30).toFixed(1)),
      caloriesKcal: Math.round(14 + (volume - 81) / 6)
    };
  }
  function start(callbacks) {
    if (active) return;
    active = true; bridge = callbacks; last = performance.now();
    for (let i = 0; i < 20; i++) {
      const bar = document.createElement("i"); $("gauge").append(bar); bars.push(bar);
    }
    paintGauge(score);
    screen.dataset.demoState = "0";
    screen.dataset.dataSource = "simulation";
    $("trigger").addEventListener("click", nextState);
    new ResizeObserver(fitAll).observe(screen);
    reduced.addEventListener("change", () => { if (reduced.matches && pending) commit(); });
    document.addEventListener("visibilitychange", () => { last = performance.now(); });
    bridge.onResult(config.states[0]);
    frame = requestAnimationFrame(tick);
  }
  window.PlanBImmersiveDemo = {
    get active() { return active; },
    start, togglePlaying, snapshot,
    stop() { active = false; cancelAnimationFrame(frame); }
  };
})();
