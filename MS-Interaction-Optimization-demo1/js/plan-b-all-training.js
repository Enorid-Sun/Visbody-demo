(function initAllTrainingPage() {
  const root = document.getElementById("allTrainingScreen");
  if (!root || document.body.dataset.planBPage !== "all-training") return;

  const demoData = (window.PlanBDemo && window.PlanBDemo.libraryData && window.PlanBDemo.libraryData.allTraining) || {};
  const assetPaths = (window.PlanBDemo && window.PlanBDemo.assetPaths) || [];

  const tabButtons = Array.from(document.querySelectorAll(".all-training-tab"));
  const viewButtons = Array.from(document.querySelectorAll(".at-view-btn"));
  const filterToggle = document.getElementById("allTrainingFilterToggle");
  const filterCollapse = document.getElementById("allTrainingFilterCollapse");
  const filterPanel = document.getElementById("allTrainingFilterPanel");
  const searchInput = document.getElementById("allTrainingSearchInput");
  const listEl = document.getElementById("allTrainingList");
  const listInnerEl = document.getElementById("allTrainingListInner");
  const emptyEl = document.getElementById("allTrainingEmpty");
  const resultCountEl = document.getElementById("allTrainingResultCount");
  const resultTitleEl = document.getElementById("allTrainingResultTitle");

  const TAB_CONFIG = {
    moves: {
      label: "Moves",
      filters: [
        { key: "scene", label: "Scene", options: ["Strength Training", "Pilates", "Cardio Fat Burn", "Stretch Recovery"] },
        { key: "equipment", label: "Equipment", options: ["Dual Cable", "Bodyweight", "Barbell", "Handle"] },
        { key: "targetArea", label: "Target Area", options: ["Full Body", "Upper Limbs", "Shoulders", "Back", "Glutes", "Legs"] },
        { key: "difficulty", label: "Difficulty", options: ["Beginner", "Intermediate", "Advanced"] },
        { key: "supportsAi", label: "AI Support", options: ["Yes", "No"] }
      ]
    },
    aiMoves: {
      label: "AI Moves",
      filters: [
        { key: "scene", label: "Scene", options: ["Strength Training", "Pilates", "Cardio Fat Burn", "Stretch Recovery"] },
        { key: "equipment", label: "Equipment", options: ["Dual Cable", "Bodyweight", "Barbell", "Handle"] },
        { key: "targetArea", label: "Target Area", options: ["Full Body", "Upper Limbs", "Shoulders", "Back", "Glutes", "Legs"] },
        { key: "difficulty", label: "Difficulty", options: ["Beginner", "Intermediate", "Advanced"] }
      ]
    },
    plans: {
      label: "Plans",
      filters: [
        { key: "planType", label: "Plan Type", options: ["Recommended", "Personalized"] },
        { key: "scene", label: "Scene", options: ["Strength Training", "Pilates", "Cardio Fat Burn", "Stretch Recovery"] },
        { key: "cycleWeeks", label: "Cycle", options: ["2 Weeks", "3 Weeks", "4 Weeks"] },
        { key: "sessionsPerWeek", label: "Sessions / Week", options: ["3 Sessions", "4 Sessions", "5 Sessions"] },
        { key: "targetArea", label: "Target Area", options: ["Full Body", "Upper Limbs", "Shoulders", "Back", "Glutes", "Legs"] },
        { key: "difficulty", label: "Difficulty", options: ["Beginner", "Intermediate", "Advanced"] }
      ]
    }
  };

  const state = {
    activeTab: "moves",
    viewMode: "list",
    keyword: "",
    filterMap: {
      moves: {},
      aiMoves: {},
      plans: {}
    },
    panelOpen: false
  };

  function toFilterValue(item, key) {
    if (key === "supportsAi") return item.supportsAi ? "Yes" : "No";
    if (key === "planType") return item && item.isPersonalized ? "Personalized" : "Recommended";
    return item[key];
  }

  function slugifyToken(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function resolveCardCover(item, index) {
    if (item && item.cover) return String(item.cover);
    if (!assetPaths.length) return "";
    return String(assetPaths[index % assetPaths.length] || "");
  }

  function getFiltersForTab(tab) {
    return TAB_CONFIG[tab] ? TAB_CONFIG[tab].filters : [];
  }

  function ensureTabFilterState(tab) {
    if (!state.filterMap[tab]) state.filterMap[tab] = {};
    getFiltersForTab(tab).forEach(({ key }) => {
      if (!state.filterMap[tab][key]) state.filterMap[tab][key] = new Set();
    });
  }

  function setPanelOpen(open) {
    state.panelOpen = open;
    if (filterCollapse) {
      filterCollapse.classList.toggle("is-open", open);
      filterCollapse.setAttribute("aria-hidden", String(!open));
    }
    if (filterToggle) {
      filterToggle.setAttribute("aria-expanded", String(open));
      filterToggle.classList.toggle("is-open", open);
      filterToggle.setAttribute("aria-label", open ? "Collapse filters" : "Expand filters");
    }
    if (open) renderFilterPanel();
  }

  function getItemsForTab(tab) {
    const items = Array.isArray(demoData[tab]) ? demoData[tab] : [];
    return items.map((item, index) => ({ ...item, __index: index }));
  }

  function applyFilters(items) {
    const tab = state.activeTab;
    const filterMap = state.filterMap[tab] || {};
    const normalizedKeyword = state.keyword.trim().toLowerCase();
    return items.filter((item) => {
      const filterMatched = getFiltersForTab(tab).every(({ key }) => {
        const set = filterMap[key];
        if (!set || set.size === 0) return true;
        return set.has(toFilterValue(item, key));
      });
      if (!filterMatched) return false;
      if (!normalizedKeyword) return true;
      return String(item.name || "").toLowerCase().includes(normalizedKeyword);
    });
  }

  function setViewMode(mode) {
    if (mode !== "list" && mode !== "waterfall") return;
    state.viewMode = mode;
    if (listEl) listEl.dataset.view = mode;
    viewButtons.forEach((btn) => {
      const active = btn.dataset.view === mode;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function openActionDetail(item) {
    if (state.activeTab === "plans") {
      const planId = item && item.id ? String(item.id) : "";
      const query = new URLSearchParams({ from: "all-training" });
      if (planId) query.set("planId", planId);
      window.location.href = `plan-b-plan-detail.html?${query.toString()}`;
      return;
    }
    const thumb = assetPaths[item.__index % Math.max(1, assetPaths.length)] || "";
    const payload = {
      name: item.name || "Workout Title",
      summary: item.summary || "Training session",
      difficulty: item.difficulty || "Intermediate",
      scene: item.scene || "Strength Training",
      equipment: item.equipment || "Bodyweight",
      cycleWeeks: item.cycleWeeks || ""
    };
    if (thumb) payload.thumb = thumb;
    try {
      sessionStorage.setItem("planBAdMetaV1", JSON.stringify(payload));
    } catch (e) {
      /* ignore */
    }
    window.location.href = `plan-b-move-detail.html?from=all-training&tab=${encodeURIComponent(state.activeTab)}&idx=${encodeURIComponent(String(item.__index || 0))}`;
  }

  function renderList() {
    if (!listInnerEl || !resultTitleEl || !resultCountEl || !emptyEl) return;
    const tab = state.activeTab;
    const filtered = applyFilters(getItemsForTab(tab));
    resultTitleEl.textContent = TAB_CONFIG[tab].label;
    resultCountEl.textContent = `${filtered.length} ${filtered.length === 1 ? "item" : "items"}`;
    listInnerEl.innerHTML = "";
    emptyEl.hidden = filtered.length > 0;

    filtered.forEach((item) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "all-training-list-item";
      row.addEventListener("click", () => openActionDetail(item));

      const content = document.createElement("div");
      content.className = "all-training-list-content";

      const top = document.createElement("div");
      top.className = "all-training-list-top";
      const titleWrap = document.createElement("div");
      titleWrap.className = "all-training-title-wrap";
      const name = document.createElement("h3");
      name.textContent = item.name || "Untitled";
      const summary = document.createElement("p");
      summary.textContent = item.summary || "Training content";
      titleWrap.append(name, summary);

      top.append(titleWrap);

      const meta = document.createElement("div");
      meta.className = "all-training-meta";

      const level = document.createElement("span");
      const difficultyText = item.difficulty || "Intermediate";
      level.className = `all-training-level cat-difficulty val-difficulty-${slugifyToken(difficultyText)}`;
      level.textContent = difficultyText;
      meta.appendChild(level);

      const metaTags = [];
      if (item.scene) metaTags.push({ category: "scene", value: item.scene });
      if (item.equipment) metaTags.push({ category: "equipment", value: item.equipment });
      if (item.targetArea) metaTags.push({ category: "target", value: item.targetArea });
      if (tab === "moves" && item.supportsAi) metaTags.push({ category: "ai", value: "AI" });
      if (tab === "plans") {
        if (item.cycleWeeks) metaTags.push({ category: "cycle", value: item.cycleWeeks });
        if (item.sessionsPerWeek) metaTags.push({ category: "sessions", value: item.sessionsPerWeek });
      }
      metaTags.forEach(({ category, value }) => {
        const chip = document.createElement("span");
        chip.className = `all-training-tag cat-${slugifyToken(category)} val-${slugifyToken(category)}-${slugifyToken(value)}`;
        chip.textContent = value;
        meta.appendChild(chip);
      });

      content.append(top, meta);

      const image = document.createElement("div");
      image.className = "all-training-list-image";
      const cover = resolveCardCover(item, item.__index || 0);
      if (cover) {
        const safeCover = cover.replace(/"/g, "%22");
        image.style.backgroundImage = `url("${safeCover}")`;
      }

      row.append(image, content);
      listInnerEl.appendChild(row);
    });
  }

  function renderFilterPanel() {
    if (!filterPanel) return;
    const tab = state.activeTab;
    ensureTabFilterState(tab);
    filterPanel.innerHTML = "";
    getFiltersForTab(tab).forEach(({ key, label, options }) => {
      const group = document.createElement("section");
      group.className = "all-training-filter-group";
      const title = document.createElement("p");
      title.className = "all-training-filter-group-title";
      title.textContent = label;
      const optionsWrap = document.createElement("div");
      optionsWrap.className = "all-training-filter-options";
      const set = state.filterMap[tab][key];

      const allChip = document.createElement("button");
      allChip.type = "button";
      allChip.className = "all-training-filter-chip";
      allChip.textContent = "All";
      allChip.classList.toggle("is-active", set.size === 0);
      allChip.addEventListener("click", () => {
        set.clear();
        renderFilterPanel();
        renderList();
      });
      optionsWrap.appendChild(allChip);

      options.forEach((option) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "all-training-filter-chip";
        chip.textContent = option;
        chip.classList.toggle("is-active", set.has(option));
        chip.addEventListener("click", () => {
          if (set.has(option)) set.delete(option);
          else set.add(option);
          renderFilterPanel();
          renderList();
        });
        optionsWrap.appendChild(chip);
      });
      group.append(title, optionsWrap);
      filterPanel.appendChild(group);
    });
  }

  function setActiveTab(tab) {
    if (!TAB_CONFIG[tab]) return;
    if (state.panelOpen) setPanelOpen(false);
    state.activeTab = tab;
    ensureTabFilterState(tab);
    tabButtons.forEach((btn) => {
      const active = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
    renderList();
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
  });

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => setViewMode(button.dataset.view));
  });

  if (filterToggle) {
    filterToggle.addEventListener("click", () => setPanelOpen(!state.panelOpen));
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.keyword = searchInput.value || "";
      renderList();
    });
  }

  ensureTabFilterState(state.activeTab);
  const initParams = new URLSearchParams(window.location.search);
  const initTab = initParams.get("tab");
  if (initTab && TAB_CONFIG[initTab]) state.activeTab = initTab;
  setViewMode("list");
  setPanelOpen(false);
  renderFilterPanel();
  renderList();
  const initView = initParams.get("view");
  if (initView === "waterfall" || initView === "list") setViewMode(initView);
  if (initParams.get("filters") === "open") setPanelOpen(true);
})();
