(function initTrainingRecordsPage() {
  const root = document.getElementById("trainingRecordsScreen");
  if (!root || document.body.dataset.planBPage !== "training-records") return;

  const rangeButtons = Array.from(document.querySelectorAll(".tr-range-btn"));
  const backBtn = document.getElementById("trainingRecordsBackBtn");
  const clearFilterBtn = document.getElementById("clearChartFilterBtn");
  const activeFilterHint = document.getElementById("activeFilterHint");
  const historyListContainer = document.getElementById("historyListContainer");
  const historyEmpty = document.getElementById("historyEmpty");
  const volumeEmptyOverlay = document.getElementById("volumeEmptyOverlay");
  const qualityEmptyOverlay = document.getElementById("qualityEmptyOverlay");
  const chartsView = document.getElementById("trChartsView");
  const listView = document.getElementById("trListView");
  const statPeriodEl = document.getElementById("trStatPeriod");
  const periodNavEl = document.getElementById("trPeriodNav");
  const periodPrevBtn = document.getElementById("trPeriodPrev");
  const periodNextBtn = document.getElementById("trPeriodNext");
  const filterStartYear = document.getElementById("trFilterStartYear");
  const filterStartMonth = document.getElementById("trFilterStartMonth");
  const filterEndYear = document.getElementById("trFilterEndYear");
  const filterEndMonth = document.getElementById("trFilterEndMonth");
  const filterDateReset = document.getElementById("trFilterDateReset");
  const monthFilterSelects = [filterStartYear, filterStartMonth, filterEndYear, filterEndMonth];
  const frontMuscleLegend = document.getElementById("frontMuscleLegend");
  const backMuscleLegend = document.getElementById("backMuscleLegend");

  const chartEls = {
    volume: document.getElementById("volumeChart"),
    quality: document.getElementById("qualityChart"),
    source: document.getElementById("sourceChart"),
    mode: document.getElementById("modeChart")
  };

  const TYPE_COLORS = {
    Strength: "#4da3ff",
    Pilates: "#b38bff",
    Cardio: "#ff974d"
  };

  const MODE_LABELS = {
    Strength: "Strength",
    Pilates: "Pilates",
    Cardio: "Cardio"
  };

  const SOURCE_LABELS = {
    "Plan Follow": "Plan Follow",
    "Free Training": "Free Training",
    "Movement Follow": "Movement Follow"
  };

  const MONTH_FILTER_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MONTH_FILTER_YEARS = [2024, 2025, 2026, 2027, 2028];

  function getModeLabel(mode) {
    return MODE_LABELS[mode] || mode;
  }

  function getSourceLabel(source) {
    return SOURCE_LABELS[source] || source;
  }

  const PERIOD_ANCHORS = {
    weekStart: "2026-06-09",
    monthYear: 2026,
    monthIndex: 5
  };

  const WEEKDAY_ZH = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const WEEKDAY_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const MUSCLE_LABELS = {
    chest: { zh: "胸部", en: "Chest" },
    core: { zh: "核心", en: "Core" },
    arms: { zh: "手臂", en: "Arms" },
    glutes: { zh: "臀部", en: "Glutes" },
    legs: { zh: "腿部", en: "Legs" },
    back: { zh: "背部", en: "Back" },
    rearShoulders: { zh: "后肩", en: "Rear shoulders" },
    hamstrings: { zh: "腘绳肌", en: "Hamstrings" }
  };

  const FRONT_MUSCLE_IDS = ["chest", "core", "arms", "glutes", "legs"];
  const BACK_MUSCLE_IDS = ["back", "rearShoulders", "hamstrings"];

  function isZhLocale() {
    return (document.documentElement.lang || "").toLowerCase().indexOf("zh") === 0;
  }

  function getMuscleLabel(id) {
    var meta = MUSCLE_LABELS[id];
    if (!meta) return id;
    return isZhLocale() ? meta.zh : meta.en;
  }

  function parseYmd(ymd) {
    var parts = String(ymd || "").split("-");
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  }

  function formatMd(date) {
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return month + "/" + day;
  }

  function addDays(date, days) {
    var next = new Date(date.getTime());
    next.setDate(next.getDate() + days);
    return next;
  }

  function formatYmd(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function formatPeriodSlash(start, end) {
    return formatYmd(start).replace(/-/g, "/") + "-" + formatYmd(end).replace(/-/g, "/");
  }

  function getWeekRange(offset) {
    var start = addDays(parseYmd(PERIOD_ANCHORS.weekStart), (offset || 0) * 7);
    var end = addDays(start, 6);
    return { start: start, end: end };
  }

  function getMonthRange(offset) {
    var monthIndex = PERIOD_ANCHORS.monthIndex + (offset || 0);
    var year = PERIOD_ANCHORS.monthYear + Math.floor(monthIndex / 12);
    var normalizedMonth = ((monthIndex % 12) + 12) % 12;
    var start = new Date(year, normalizedMonth, 1);
    var end = new Date(year, normalizedMonth + 1, 0);
    return { start: start, end: end };
  }

  function getActivePeriodRange() {
    if (state.range === "week") return getWeekRange(state.weekOffset);
    if (state.range === "month") return getMonthRange(state.monthOffset);
    return null;
  }

  function getPeriodOffset() {
    if (state.range === "week") return state.weekOffset;
    if (state.range === "month") return state.monthOffset;
    return 0;
  }

  function buildWeekAxisLabels() {
    var range = getWeekRange(state.weekOffset);
    var names = isZhLocale() ? WEEKDAY_ZH : WEEKDAY_EN;
    var labels = [];
    for (var i = 0; i < 7; i += 1) {
      labels.push(names[addDays(range.start, i).getDay()]);
    }
    return labels;
  }

  function buildMonthWeekAxisLabels() {
    var range = getMonthRange(state.monthOffset);
    var start = range.start;
    var end = range.end;
    var labels = [];
    var cursor = new Date(start.getTime());
    var weekCount = 4;
    for (var i = 0; i < weekCount; i += 1) {
      var weekStart = new Date(cursor.getTime());
      var weekEnd = i === weekCount - 1 ? end : addDays(weekStart, 6);
      if (weekEnd > end) weekEnd = end;
      labels.push(formatMd(weekStart) + "-" + formatMd(weekEnd));
      cursor = addDays(weekEnd, 1);
      if (cursor > end) break;
    }
    return labels;
  }

  function getChartAxisLabels(range) {
    if (range === "week") return buildWeekAxisLabels();
    if (range === "month") return buildMonthWeekAxisLabels();
    return [];
  }

  const WEEK_DATA = {
      volumeByType: {
        Strength: [0, 0, 0, 0, 0, 0, 0],
        Pilates: [0, 0, 0, 0, 0, 0, 0],
        Cardio: [1100, 900, 1400, 1300, 800, 1800, 1000]
      },
      qualityScore: [],
      sourceSplit: [
        { name: "Plan Follow", value: 4 },
        { name: "Free Training", value: 3 }
      ],
      modeSplit: [
        { name: "Strength", value: 4 },
        { name: "Pilates", value: 2 },
        { name: "Cardio", value: 1 }
      ],
      bodyLoad: {
        chest: 78,
        core: 66,
        arms: 72,
        glutes: 58,
        legs: 74,
        back: 63,
        rearShoulders: 49,
        hamstrings: 54
      },
      bodySessions: {
        chest: 8,
        core: 6,
        arms: 7,
        glutes: 5,
        legs: 9,
        back: 6,
        rearShoulders: 4,
        hamstrings: 5
      },
      records: [
        { title: "Strength: Full-body workout", time: "Today 08:30", date: "2026-06-16", duration: "45m", metric: "8,200 kg", mode: "Strength", source: "Plan Follow" },
        { title: "Pilates: Core flow", time: "Yesterday 19:20", date: "2026-06-15", duration: "32m", metric: "1,120 kg", mode: "Pilates", source: "Movement Follow" },
        { title: "Strength: Upper-body strength", time: "Fri 07:40", date: "2026-06-13", duration: "56m", metric: "10,500 kg", mode: "Strength", source: "Plan Follow" },
        { title: "Cardio: Rowing HIIT", time: "Thu 18:05", date: "2026-06-12", duration: "28m", metric: "420 kcal", mode: "Cardio", source: "Movement Follow" },
        { title: "Strength: Lower-body chain", time: "Tue 08:00", date: "2026-06-10", duration: "42m", metric: "7,600 kg", mode: "Strength", source: "Plan Follow" },
        { title: "Pilates: Spine reset", time: "Mon 20:12", date: "2026-06-09", duration: "35m", metric: "980 kg", mode: "Pilates", source: "Plan Follow" }
      ]
    };

  const MONTH_DATA = {
      volumeByType: {
        Strength: [0, 0, 0, 0],
        Pilates: [0, 0, 0, 0],
        Cardio: [6900, 7100, 8200, 7600]
      },
      qualityScore: [],
      sourceSplit: [
        { name: "Plan Follow", value: 1 },
        { name: "Free Training", value: 9 }
      ],
      modeSplit: [
        { name: "Strength", value: 0 },
        { name: "Pilates", value: 0 },
        { name: "Cardio", value: 10 }
      ],
      bodyLoad: {
        chest: 12,
        core: 24,
        arms: 20,
        glutes: 48,
        legs: 80,
        back: 22,
        rearShoulders: 10,
        hamstrings: 65
      },
      bodySessions: {
        chest: 2,
        core: 4,
        arms: 3,
        glutes: 6,
        legs: 10,
        back: 2,
        rearShoulders: 1,
        hamstrings: 7
      },
      records: [
        { title: "Cardio: Endurance ride", time: "Jun 2 07:55", date: "2026-06-02", duration: "35m", metric: "530 kcal", mode: "Cardio", source: "Movement Follow" },
        { title: "Cardio: Hill sprints", time: "Jun 5 18:40", date: "2026-06-05", duration: "25m", metric: "410 kcal", mode: "Cardio", source: "Free Training" },
        { title: "Cardio: Tempo rowing", time: "Jun 10 07:28", date: "2026-06-10", duration: "31m", metric: "460 kcal", mode: "Cardio", source: "Movement Follow" },
        { title: "Cardio: Ride builder", time: "Jun 13 19:10", date: "2026-06-13", duration: "38m", metric: "590 kcal", mode: "Cardio", source: "Plan Follow" },
        { title: "Cardio: Recovery run", time: "Jun 16 06:58", date: "2026-06-16", duration: "27m", metric: "350 kcal", mode: "Cardio", source: "Free Training" }
      ]
    };

  const LEGACY_YEAR_RECORDS = [
    { title: "Strength: Progressive press", time: "Mar 20 08:12", date: "2026-03-20", duration: "53m", metric: "9,850 kg", mode: "Strength", source: "Plan Follow" },
    { title: "Pilates: Balance control", time: "Mar 18 19:03", date: "2026-03-18", duration: "33m", metric: "1,230 kg", mode: "Pilates", source: "Plan Follow" },
    { title: "Cardio: Zone 2 ride", time: "Mar 15 07:35", date: "2026-03-15", duration: "42m", metric: "620 kcal", mode: "Cardio", source: "Movement Follow" },
    { title: "Strength: Pulling power", time: "Mar 10 08:24", date: "2026-03-10", duration: "49m", metric: "8,900 kg", mode: "Strength", source: "Free Training" },
    { title: "Strength: Leg explosiveness", time: "Mar 7 07:50", date: "2026-03-07", duration: "58m", metric: "10,980 kg", mode: "Strength", source: "Plan Follow" },
    { title: "Pilates: Mobility reset", time: "Mar 2 20:02", date: "2026-03-02", duration: "37m", metric: "1,420 kg", mode: "Pilates", source: "Free Training" }
  ];

  function mergeUniqueRecords(recordGroups) {
    var allRecords = [];
    var seen = new Set();
    recordGroups.forEach(function (group) {
      (group || []).forEach(function (record) {
        var key = [record.title, record.time, record.duration, record.metric, record.mode, record.source].join("|");
        if (seen.has(key)) return;
        seen.add(key);
        allRecords.push(record);
      });
    });
    return allRecords;
  }

  const PERIOD_DATA = {
    week: WEEK_DATA,
    month: MONTH_DATA,
    all: {
      records: mergeUniqueRecords([WEEK_DATA.records, MONTH_DATA.records, LEGACY_YEAR_RECORDS])
    }
  };

  const state = {
    range: "week",
    weekOffset: 0,
    monthOffset: 0,
    listFilters: { type: "", scene: "" },
    dateFilter: { start: "", end: "" }
  };

  const charts = {
    volume: null,
    quality: null,
    source: null,
    mode: null
  };

  function initCharts() {
    if (!window.echarts) {
      Object.values(chartEls).forEach((el) => {
        if (!el) return;
        el.innerHTML = "<p style='padding:12px;color:#9fb0c6;font-size:12px;'>Chart library failed to load.</p>";
      });
      return;
    }
    charts.volume = echarts.init(chartEls.volume);
    charts.quality = echarts.init(chartEls.quality);
    charts.source = echarts.init(chartEls.source);
    charts.mode = echarts.init(chartEls.mode);
    wireChartEvents();
  }

  function computeMovingAverage(values, windowSize) {
    return values.map(function (_, index) {
      var start = Math.max(0, index - windowSize + 1);
      var section = values.slice(start, index + 1);
      var sum = section.reduce(function (acc, current) { return acc + current; }, 0);
      return Math.round(sum / section.length);
    });
  }

  function mapZoneLevel(value, maxValue) {
    if (!maxValue || value <= 0) return 0;
    var ratio = value / maxValue;
    if (ratio >= 0.9) return 5;
    if (ratio >= 0.7) return 4;
    if (ratio >= 0.5) return 3;
    if (ratio >= 0.3) return 2;
    return 1;
  }

  function applyBodyMap(bodyLoad) {
    var zoneIds = ["chest", "core", "arms", "glutes", "legs", "back", "rearShoulders", "hamstrings"];
    var values = zoneIds.map(function (id) { return Number(bodyLoad[id] || 0); });
    var maxValue = Math.max.apply(null, values.concat([0]));
    zoneIds.forEach(function (zoneId) {
      var path = document.getElementById(zoneId);
      if (!path) return;
      path.classList.remove("tr-zone-1", "tr-zone-2", "tr-zone-3", "tr-zone-4", "tr-zone-5");
      var level = mapZoneLevel(Number(bodyLoad[zoneId] || 0), maxValue);
      if (level > 0) path.classList.add("tr-zone-" + String(level));
    });
  }

  function renderMuscleLegends(bodySessions) {
    if (!frontMuscleLegend || !backMuscleLegend) return;
    var sessions = bodySessions || {};

    function renderList(container, ids) {
      var items = ids.map(function (id) {
        return { id: id, count: Number(sessions[id] || 0), label: getMuscleLabel(id) };
      }).sort(function (a, b) { return b.count - a.count; });
      container.innerHTML = "";
      items.forEach(function (item) {
        var row = document.createElement("li");
        row.className = "tr-muscle-legend-item";
        var name = document.createElement("span");
        name.className = "tr-muscle-legend-name";
        name.textContent = item.label;
        var count = document.createElement("span");
        count.className = "tr-muscle-legend-count";
        count.textContent = String(item.count);
        row.append(name, count);
        container.appendChild(row);
      });
    }

    renderList(frontMuscleLegend, FRONT_MUSCLE_IDS);
    renderList(backMuscleLegend, BACK_MUSCLE_IDS);
  }

  function setRange(range) {
    if (!PERIOD_DATA[range]) return;
    state.range = range;
    rangeButtons.forEach(function (button) {
      var active = button.dataset.range === range;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    applyViewMode();
    renderAll();
  }

  function setListFilter(group, value) {
    if (group === "type") state.listFilters.type = value;
    if (group === "scene") state.listFilters.scene = value;
    document.querySelectorAll('.tr-filter-chip[data-group="' + group + '"]').forEach(function (chip) {
      chip.classList.toggle("is-active", (chip.dataset.value || "") === value);
    });
    renderHistory();
  }

  function resetListFilterChips() {
    document.querySelectorAll(".tr-filter-chip").forEach(function (chip) {
      chip.classList.toggle("is-active", (chip.dataset.value || "") === "");
    });
  }

  function clearFilter() {
    state.listFilters = { type: "", scene: "" };
    resetListFilterChips();
    state.dateFilter.start = "";
    state.dateFilter.end = "";
    resetMonthFilterSelects();
    renderHistory();
  }

  function formatMonthFilterLabel(ym) {
    if (!ym) return "";
    var parts = ym.split("-");
    var monthIndex = Number(parts[1]) - 1;
    if (!parts[0] || monthIndex < 0 || monthIndex > 11) return ym;
    return MONTH_FILTER_LABELS[monthIndex] + " " + parts[0];
  }

  function getMonthFilterValue(yearSelect, monthSelect) {
    if (!yearSelect || !monthSelect || !yearSelect.value || !monthSelect.value) return "";
    return yearSelect.value + "-" + monthSelect.value;
  }

  function resetMonthFilterSelects() {
    monthFilterSelects.forEach(function (select) {
      if (select) select.value = "";
    });
  }

  function initMonthFilterSelects() {
    [filterStartYear, filterEndYear].forEach(function (select) {
      if (!select || select.options.length > 1) return;
      MONTH_FILTER_YEARS.forEach(function (year) {
        var option = document.createElement("option");
        option.value = String(year);
        option.textContent = String(year);
        select.appendChild(option);
      });
    });
  }

  function getCurrentData() {
    if (state.range === "all") return PERIOD_DATA.all;
    var offset = getPeriodOffset();
    if (state.range === "week" && offset === 0) return WEEK_DATA;
    if (state.range === "month" && offset === 0) return MONTH_DATA;
    return buildSyntheticPeriodData(state.range, offset);
  }

  function scaleObjectNumbers(obj, factor) {
    var result = {};
    Object.keys(obj || {}).forEach(function (key) {
      result[key] = Math.max(0, Math.round(Number(obj[key] || 0) * factor));
    });
    return result;
  }

  function scaleSplitValues(split, factor) {
    return (split || []).map(function (item) {
      return {
        name: item.name,
        value: Math.max(0, Math.round(Number(item.value || 0) * factor))
      };
    });
  }

  function buildSyntheticPeriodData(range, offset) {
    var base = range === "week" ? WEEK_DATA : MONTH_DATA;
    var factor = 1 + offset * 0.12;
    return {
      volumeByType: base.volumeByType,
      qualityScore: base.qualityScore,
      sourceSplit: scaleSplitValues(base.sourceSplit, factor),
      modeSplit: scaleSplitValues(base.modeSplit, factor),
      bodyLoad: scaleObjectNumbers(base.bodyLoad, factor),
      bodySessions: scaleObjectNumbers(base.bodySessions, factor),
      records: []
    };
  }

  function getStatPeriodLabel(range) {
    var isZh = isZhLocale();
    var prefix = isZh ? "数据统计周期为：" : "Data period: ";
    var periodRange = range === "week" ? getWeekRange(state.weekOffset) : getMonthRange(state.monthOffset);
    return prefix + formatPeriodSlash(periodRange.start, periodRange.end);
  }

  function updatePeriodNavControls() {
    if (!periodNavEl) return;
    var showNav = state.range === "week" || state.range === "month";
    periodNavEl.hidden = !showNav;
    if (!showNav) return;
    var offset = getPeriodOffset();
    var isWeek = state.range === "week";
    var isZh = isZhLocale();
    if (periodPrevBtn) {
      periodPrevBtn.setAttribute("aria-label", isZh
        ? (isWeek ? "上一周" : "上一月")
        : (isWeek ? "Previous week" : "Previous month"));
    }
    if (periodNextBtn) {
      periodNextBtn.disabled = offset >= 0;
      periodNextBtn.setAttribute("aria-label", isZh
        ? (isWeek ? "下一周" : "下一月")
        : (isWeek ? "Next week" : "Next month"));
    }
  }

  function shiftPeriod(delta) {
    if (state.range === "week") {
      state.weekOffset += delta;
      if (state.weekOffset > 0) state.weekOffset = 0;
    } else if (state.range === "month") {
      state.monthOffset += delta;
      if (state.monthOffset > 0) state.monthOffset = 0;
    } else {
      return;
    }
    updatePeriodNavControls();
    renderAll();
  }

  function updateStatPeriodDisplay() {
    if (!statPeriodEl) return;
    if (state.range === "week" || state.range === "month") {
      statPeriodEl.textContent = getStatPeriodLabel(state.range);
      statPeriodEl.hidden = false;
      updatePeriodNavControls();
      return;
    }
    statPeriodEl.textContent = "";
    statPeriodEl.hidden = true;
    updatePeriodNavControls();
  }

  function applyViewMode() {
    var isAllRange = state.range === "all";
    if (chartsView) chartsView.hidden = isAllRange;
    if (listView) listView.hidden = !isAllRange;
    if (!isAllRange) {
      requestAnimationFrame(function () {
        resizeAllCharts();
      });
    }
  }

  function applySeriesOffset(values, offset) {
    var factor = 1 + (offset || 0) * 0.1;
    return (values || []).map(function (value) {
      return Math.max(0, Math.round(Number(value || 0) * factor));
    });
  }

  function buildDemoVolumeSeries(range, count, offset) {
    var presets = {
      week: {
        Strength: [4100, 5600, 5200, 6700, 7200, 6400, 6900],
        Pilates: [860, 980, 1200, 910, 1320, 1050, 1180],
        Cardio: [1450, 1320, 1580, 1490, 1660, 1740, 1600]
      },
      month: {
        Strength: [16800, 18200, 19600, 20500],
        Pilates: [3900, 4300, 4700, 5200],
        Cardio: [6100, 6800, 7200, 7600]
      }
    };
    var base = presets[range] || presets.week;
    return {
      Strength: applySeriesOffset(base.Strength.slice(0, count), offset),
      Pilates: applySeriesOffset(base.Pilates.slice(0, count), offset),
      Cardio: applySeriesOffset(base.Cardio.slice(0, count), offset)
    };
  }

  function buildDemoQualitySeries(range, count, offset) {
    var presets = {
      week: [84, 86, 88, 89, 91, 92, 93],
      month: [83, 85, 87, 89]
    };
    var base = presets[range] || presets.week;
    return applySeriesOffset(base.slice(0, count), offset).map(function (value, index) {
      return Math.min(100, Math.max(60, value + index));
    });
  }

  /** Week and month always show charts without empty overlays. */
  function updateEmptyOverlays() {
    if (volumeEmptyOverlay) volumeEmptyOverlay.hidden = true;
    if (qualityEmptyOverlay) qualityEmptyOverlay.hidden = true;
  }

  function renderVolumeChart(data) {
    if (!charts.volume) return;
    var axisLabels = getChartAxisLabels(state.range);
    var demoVolume = buildDemoVolumeSeries(state.range, axisLabels.length, getPeriodOffset());
    var strengthSeries = demoVolume.Strength;
    var pilatesSeries = demoVolume.Pilates;
    var cardioSeries = demoVolume.Cardio;
    var totals = axisLabels.map(function (_, index) {
      return (strengthSeries[index] || 0) + (pilatesSeries[index] || 0) + (cardioSeries[index] || 0);
    });
    var trend = computeMovingAverage(totals, 3);
    var isMonthRange = state.range === "month";

    charts.volume.setOption({
      animationDuration: 350,
      grid: { left: 34, right: 18, top: 30, bottom: isMonthRange ? 34 : 26 },
      legend: {
        top: 0,
        textStyle: { color: "#cbd5e1", fontSize: 10 },
        itemHeight: 8,
        itemWidth: 12
      },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: axisLabels,
        axisLabel: {
          color: "#9fb0c6",
          fontSize: isMonthRange ? 9 : 10,
          interval: 0,
          rotate: isMonthRange ? 24 : 0
        },
        axisLine: { lineStyle: { color: "rgba(148,163,184,0.24)" } }
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#9fb0c6", fontSize: 10, formatter: "{value}" },
        splitLine: { lineStyle: { color: "rgba(148,163,184,0.14)" } }
      },
      series: [
        { name: "Strength", type: "bar", stack: "volume", barMaxWidth: 22, itemStyle: { color: TYPE_COLORS.Strength, borderRadius: [4, 4, 0, 0] }, data: strengthSeries },
        { name: "Pilates", type: "bar", stack: "volume", barMaxWidth: 22, itemStyle: { color: TYPE_COLORS.Pilates, borderRadius: [4, 4, 0, 0] }, data: pilatesSeries },
        { name: "Cardio", type: "bar", stack: "volume", barMaxWidth: 22, itemStyle: { color: TYPE_COLORS.Cardio, borderRadius: [4, 4, 0, 0] }, data: cardioSeries },
        {
          name: "Moving avg",
          type: "line",
          smooth: true,
          symbolSize: 5,
          lineStyle: { width: 2, color: "#67e8f9" },
          itemStyle: { color: "#67e8f9" },
          data: trend
        }
      ]
    });
  }

  function renderQualityChart(data) {
    if (!charts.quality) return;
    var axisLabels = getChartAxisLabels(state.range);
    var qualitySeries = buildDemoQualitySeries(state.range, axisLabels.length, getPeriodOffset());
    var isMonthRange = state.range === "month";
    charts.quality.setOption({
      animationDuration: 350,
      grid: { left: 34, right: 18, top: 18, bottom: isMonthRange ? 34 : 26 },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: axisLabels,
        axisLabel: {
          color: "#9fb0c6",
          fontSize: isMonthRange ? 9 : 10,
          interval: 0,
          rotate: isMonthRange ? 24 : 0
        },
        axisLine: { lineStyle: { color: "rgba(148,163,184,0.24)" } }
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 100,
        axisLabel: { color: "#9fb0c6", fontSize: 10 },
        splitLine: { lineStyle: { color: "rgba(148,163,184,0.14)" } }
      },
      series: [{
        name: "AI score",
        type: "line",
        smooth: true,
        connectNulls: false,
        symbolSize: 6,
        lineStyle: { width: 2.5, color: "#4ade80" },
        areaStyle: { color: "rgba(74, 222, 128, 0.16)" },
        itemStyle: { color: "#4ade80" },
        data: qualitySeries
      }]
    });
  }

  function buildRingOption(dataset, title) {
    var total = dataset.reduce(function (sum, item) { return sum + Number(item.value || 0); }, 0);
    return {
      animationDuration: 350,
      color: dataset.map(function (item) {
        if (item.name === "Strength" || item.name === "Plan Follow") return TYPE_COLORS.Strength;
        if (item.name === "Pilates") return TYPE_COLORS.Pilates;
        if (item.name === "Cardio" || item.name === "Free Training") return TYPE_COLORS.Cardio;
        return "#94a3b8";
      }),
      title: {
        text: String(total),
        subtext: "Sessions",
        left: "center",
        top: "35%",
        textStyle: { color: "#f8fafc", fontSize: 18, fontWeight: 700 },
        subtextStyle: { color: "#9fb0c6", fontSize: 10 }
      },
      tooltip: { trigger: "item" },
      legend: {
        bottom: 0,
        textStyle: { color: "#cbd5e1", fontSize: 10 },
        itemWidth: 10,
        itemHeight: 8
      },
      series: [{
        name: title,
        type: "pie",
        radius: ["54%", "76%"],
        center: ["50%", "42%"],
        itemStyle: { borderColor: "rgba(2,6,23,0.9)", borderWidth: 2 },
        label: { show: false },
        data: dataset.map(function (item) {
          return {
            name: SOURCE_LABELS[item.name] || MODE_LABELS[item.name] || item.name,
            value: item.value
          };
        })
      }]
    };
  }

  function renderStructureCharts(data) {
    if (!charts.source || !charts.mode) return;
    charts.source.setOption(buildRingOption(data.sourceSplit, "Source mix"));
    charts.mode.setOption(buildRingOption(data.modeSplit, "Mode mix"));
  }

  function toSourceClass(source) {
    if (source === "Plan Follow") return "source-plan";
    if (source === "Movement Follow") return "source-move";
    return "source-free";
  }

  function toModeClass(mode) {
    if (mode === "Strength") return "mode-strength";
    if (mode === "Pilates") return "mode-pilates";
    return "mode-cardio";
  }

  function getMonthRangeStart(ym) {
    return ym ? ym + "-01" : "";
  }

  function getMonthRangeEnd(ym) {
    if (!ym) return "";
    var parts = ym.split("-");
    var year = Number(parts[0]);
    var month = Number(parts[1]);
    if (!year || !month) return "";
    var lastDay = new Date(year, month, 0).getDate();
    return ym + "-" + String(lastDay).padStart(2, "0");
  }

  function recordMatchesMonthFilter(itemDate) {
    if (!itemDate) return true;
    if (state.dateFilter.start && itemDate < getMonthRangeStart(state.dateFilter.start)) return false;
    if (state.dateFilter.end && itemDate > getMonthRangeEnd(state.dateFilter.end)) return false;
    return true;
  }

  function filterRecords(records) {
    var filtered = records || [];
    if (state.listFilters.type) {
      filtered = filtered.filter(function (item) {
        return item.source === state.listFilters.type;
      });
    }
    if (state.listFilters.scene) {
      filtered = filtered.filter(function (item) {
        return item.mode === state.listFilters.scene;
      });
    }
    if (state.dateFilter.start || state.dateFilter.end) {
      filtered = filtered.filter(function (item) {
        return recordMatchesMonthFilter(item.date);
      });
    }
    return filtered;
  }

  function hasActiveFilters() {
    return Boolean(state.listFilters.type)
      || Boolean(state.listFilters.scene)
      || Boolean(state.dateFilter.start)
      || Boolean(state.dateFilter.end);
  }

  function updateFilterIndicator() {
    if (!activeFilterHint || !clearFilterBtn) return;
    var parts = [];
    if (state.listFilters.type) {
      parts.push("Training type: " + getSourceLabel(state.listFilters.type));
    }
    if (state.listFilters.scene) {
      parts.push("Scene: " + getModeLabel(state.listFilters.scene));
    }
    if (state.dateFilter.start || state.dateFilter.end) {
      var startText = state.dateFilter.start ? formatMonthFilterLabel(state.dateFilter.start) : "Any";
      var endText = state.dateFilter.end ? formatMonthFilterLabel(state.dateFilter.end) : "Any";
      parts.push("Month: " + startText + " to " + endText);
    }
    clearFilterBtn.hidden = !hasActiveFilters();
    activeFilterHint.hidden = parts.length === 0;
    if (parts.length) activeFilterHint.textContent = parts.join(" · ");
  }

  function syncDateFilterFromInputs() {
    state.dateFilter.start = getMonthFilterValue(filterStartYear, filterStartMonth);
    state.dateFilter.end = getMonthFilterValue(filterEndYear, filterEndMonth);
    renderHistory();
  }

  function resetDateFilter() {
    state.dateFilter.start = "";
    state.dateFilter.end = "";
    resetMonthFilterSelects();
    renderHistory();
  }

  function renderHistory() {
    var data = getCurrentData();
    var filtered = filterRecords(data.records || []);
    historyListContainer.innerHTML = "";
    historyEmpty.hidden = filtered.length > 0;

    filtered.forEach(function (record) {
      var row = document.createElement("article");
      row.className = "tr-history-row";

      var top = document.createElement("div");
      top.className = "tr-row-top";

      var titleWrap = document.createElement("div");
      var title = document.createElement("h3");
      title.className = "tr-row-title";
      title.textContent = record.title;
      var time = document.createElement("p");
      time.className = "tr-row-time";
      time.textContent = record.time;
      titleWrap.append(title, time);

      var value = document.createElement("p");
      value.className = "tr-row-value";
      value.textContent = record.metric + " · " + record.duration;
      top.append(titleWrap, value);

      var meta = document.createElement("div");
      meta.className = "tr-row-meta";

      var sourceChip = document.createElement("span");
      sourceChip.className = "tr-chip " + toSourceClass(record.source);
      sourceChip.textContent = getSourceLabel(record.source);

      var modeChip = document.createElement("span");
      modeChip.className = "tr-chip " + toModeClass(record.mode);
      modeChip.textContent = getModeLabel(record.mode);

      meta.append(sourceChip, modeChip);
      row.append(top, meta);
      historyListContainer.appendChild(row);
    });

    updateFilterIndicator();
  }

  function renderAll() {
    var data = getCurrentData();
    updateStatPeriodDisplay();
    if (state.range === "all") {
      if (volumeEmptyOverlay) volumeEmptyOverlay.hidden = true;
      if (qualityEmptyOverlay) qualityEmptyOverlay.hidden = true;
      renderHistory();
      return;
    }
    updateEmptyOverlays();
    renderVolumeChart(data);
    renderQualityChart(data);
    renderStructureCharts(data);
    applyBodyMap(data.bodyLoad || {});
    renderMuscleLegends(data.bodySessions || {});
  }

  function wireChartEvents() {
    /* Intentionally left blank:
     * chart-click-to-filter behavior was removed when list moved to All Training tab.
     */
  }

  function wireEvents() {
    if (periodPrevBtn) {
      periodPrevBtn.addEventListener("click", function () {
        shiftPeriod(-1);
      });
    }
    if (periodNextBtn) {
      periodNextBtn.addEventListener("click", function () {
        shiftPeriod(1);
      });
    }

    rangeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        setRange(button.dataset.range);
      });
    });

    if (backBtn) {
      backBtn.addEventListener("click", function () {
        window.location.href = "plan-b-profile.html";
      });
    }
    if (clearFilterBtn) {
      clearFilterBtn.addEventListener("click", clearFilter);
    }
    monthFilterSelects.forEach(function (select) {
      if (!select) return;
      select.addEventListener("change", syncDateFilterFromInputs);
    });
    if (filterDateReset) {
      filterDateReset.addEventListener("click", resetDateFilter);
    }

    document.querySelectorAll(".tr-filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        setListFilter(chip.dataset.group, chip.dataset.value || "");
      });
    });

    var homeTabBtn = document.getElementById("homeTabBtn");
    var allTrainingNavBtn = document.getElementById("allTrainingNavBtn");
    var profileTabBtn = document.getElementById("profileTabBtn");

    if (homeTabBtn) {
      homeTabBtn.addEventListener("click", function () {
        window.location.href = "index-plan-b-home.html";
      });
    }
    if (allTrainingNavBtn) {
      allTrainingNavBtn.addEventListener("click", function () {
        window.location.href = "plan-b-all-training.html";
      });
    }
    if (profileTabBtn) {
      profileTabBtn.addEventListener("click", function () {
        window.location.href = "plan-b-profile.html";
      });
    }

    window.addEventListener("resize", function () {
      Object.keys(charts).forEach(function (key) {
        if (charts[key] && charts[key].resize) charts[key].resize();
      });
    });
  }

  function resizeAllCharts() {
    Object.keys(charts).forEach(function (key) {
      if (charts[key] && charts[key].resize) charts[key].resize();
    });
  }

  initMonthFilterSelects();
  initCharts();
  applyViewMode();
  wireEvents();
  renderAll();
  requestAnimationFrame(function () {
    resizeAllCharts();
    requestAnimationFrame(resizeAllCharts);
  });
})();
