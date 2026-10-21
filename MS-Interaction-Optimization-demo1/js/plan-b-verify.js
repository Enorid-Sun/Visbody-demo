const { assetPaths, libraryData } = window.PlanBDemo;

const PLAN_B_PAGE = document.body.dataset.planBPage || "full";
const IW_UI_ZH = PLAN_B_PAGE === "immersive";
const STORAGE_AD_META = "planBAdMetaV1";
const STORAGE_REPORT_PAYLOAD = "planBReportPayloadV1";
const STORAGE_JOINED_PLANS = "planBJoinedPlansV1";
const STORAGE_PLAN_PROGRESS = "planBPlanProgressV1";
const STORAGE_PLAN_TRAINING_DAYS = "planBPlanTrainingDaysV1";
const STORAGE_PLAN_DAY_RESCHEDULE = "planBPlanDayRescheduleV1";
const STORAGE_PLAN_TRAINING_SESSION = "planBPlanTrainingSessionV1";

const grid = document.getElementById("exploreGrid");
const title = document.getElementById("exploreTitle");
const sideTabs = document.querySelectorAll(".side-tab");
const exploreViewButtons = document.querySelectorAll(".explore-view-btn");
const modal = document.getElementById("trainingTypeModal");
const startTrainingModalBtn = document.getElementById("startTrainingModalBtn");
const closeTrainingTypeModal = document.getElementById("closeTrainingTypeModal");
const allTrainingNavBtn = document.getElementById("allTrainingNavBtn");
const shell = document.querySelector(".device-shell");
const moveDetailScreen = document.getElementById("moveDetailScreen");
const exitMoveDetailBtn = document.getElementById("exitMoveDetailBtn");
const adActionName = document.getElementById("adActionName");
const adActionIntro = document.getElementById("adActionIntro");
const adIntensityValue = document.getElementById("adIntensityValue");
const adSportValue = document.getElementById("adSportValue");
const adEquipValue = document.getElementById("adEquipValue");
const adTargetValue = document.getElementById("adTargetValue");
const adActionHero = document.getElementById("adActionHero");
const adInstallVisual = document.getElementById("adInstallVisual");
const adVideoFallback = document.getElementById("adVideoFallback");
const adInstallInlineMedia = document.getElementById("adInstallInlineMedia");
const adInstallInlineImage = document.getElementById("adInstallInlineImage");
const adInstallInlineVideo = document.getElementById("adInstallInlineVideo");
const adInstallInlineVideoSource = document.getElementById("adInstallInlineVideoSource");
const adStartTrainingBtn = document.getElementById("adStartTrainingBtn");
const immersiveWorkoutScreen = document.getElementById("immersiveWorkoutScreen");
const iwVideo = document.getElementById("iwVideo");
const iwVideoSource = document.getElementById("iwVideoSource");
const iwActionTitle = document.getElementById("iwActionTitle");
const iwFlipBtn = document.getElementById("iwFlipBtn");
const iwPlayBtn = document.getElementById("iwPlayBtn");
const iwEndBtn = document.getElementById("iwEndBtn");
const iwProgressFill = document.getElementById("iwProgressFill");
const iwTimeText = document.getElementById("iwTimeText");
const iwDrawer = document.getElementById("iwDrawer");
const iwDrawerHandle = document.getElementById("iwDrawerHandle");
const iwSummaryMode = document.getElementById("iwSummaryMode");
const iwSummaryWeight = document.getElementById("iwSummaryWeight");
const iwModeChip = document.getElementById("iwModeChip");
const iwMetaChip = document.getElementById("iwMetaChip");
const iwEquipBarbell = document.getElementById("iwEquipBarbell");
const iwEquipOther = document.getElementById("iwEquipOther");
const iwSetupChip = document.getElementById("iwSetupChip");
const iwResistanceStatus = document.getElementById("iwResistanceStatus");
const iwSideGroup = document.getElementById("iwSideGroup");
const iwBalanceGroup = document.getElementById("iwBalanceGroup");
const iwBalanceSetupRow = document.getElementById("iwBalanceSetupRow");
const iwSplitTargets = document.getElementById("iwSplitTargets");
const iwSplitLeftVal = document.getElementById("iwSplitLeftVal");
const iwSplitRightVal = document.getElementById("iwSplitRightVal");
const iwModeGroup = document.getElementById("iwModeGroup");
const iwDecreaseBtn = document.getElementById("iwDecreaseBtn");
const iwIncreaseBtn = document.getElementById("iwIncreaseBtn");
const iwWeightValue = document.getElementById("iwWeightValue");
const iwParamPanel = document.getElementById("iwParamPanel");
const iwParamLabel = document.getElementById("iwParamLabel");
const iwParamDisplay = document.getElementById("iwParamDisplay");
const iwParamSlider = document.getElementById("iwParamSlider");
const iwParamTip = document.getElementById("iwParamTip");
const iwParamSubmit = document.getElementById("iwParamSubmit");
const iwSpringBar = document.getElementById("iwSpringBar");
const iwSpringCoil = document.getElementById("iwSpringCoil");
const iwSpringBarValue = document.getElementById("iwSpringBarValue");
const iwStepNote = document.querySelector(".iw-step-note");
const iwChartTabs = document.getElementById("iwChartTabs");
const iwChartCanvas = document.getElementById("iwChartCanvas");
const iwChartCtx = iwChartCanvas ? iwChartCanvas.getContext("2d") : null;
const iwAiPanel = document.getElementById("iwAiPanel");
const iwAiReadyOverlay = document.getElementById("iwAiReadyOverlay");
const iwAiReadyPanel = document.getElementById("iwAiReadyPanel");
const iwRecogStatus = document.getElementById("iwRecogStatus");
const iwRecogAlert = document.getElementById("iwRecogAlert");
const iwRecogHint = document.getElementById("iwRecogHint");
const iwRecogZoneFrame = document.getElementById("iwRecogZoneFrame");
const iwRecogCompleteBadge = document.getElementById("iwRecogCompleteBadge");
const iwAiScoreValue = document.getElementById("iwAiScoreValue");
const iwAiScoreRing = document.getElementById("iwAiScoreRing");
const iwAiTierValue = document.getElementById("iwAiTierValue");
const iwAiHintText = document.getElementById("iwAiHintText");
const iwAiRingCard = document.querySelector("#iwAiPanel .iw-ai-ring-card");
const iwAiResult = document.getElementById("iwAiResult");
const iwComboBadge = document.getElementById("iwComboBadge");
const ptProgressTrack = document.getElementById("ptProgressTrack");
const ptCurrentMoveName = document.getElementById("ptCurrentMoveName");
const ptCurrentMoveMeta = document.getElementById("ptCurrentMoveMeta");
const ptNextMovePreview = document.getElementById("ptNextMovePreview");
const ptSkipMoveBtn = document.getElementById("ptSkipMoveBtn");
const ptRunningControls = document.getElementById("ptRunningControls");
const ptPauseTrainingBtn = document.getElementById("ptPauseTrainingBtn");
const ptEndTrainingBtn = document.getElementById("ptEndTrainingBtn");
const ptRestOverlay = document.getElementById("ptRestOverlay");
const ptRestCountdown = document.getElementById("ptRestCountdown");
const ptRestNextMove = document.getElementById("ptRestNextMove");
const ptSkipRestBtn = document.getElementById("ptSkipRestBtn");
const trainingReportScreen = document.getElementById("trainingReportScreen");
const reportCloseBtn = document.getElementById("reportCloseBtn");
const reportUserAvatar = document.getElementById("reportUserAvatar");
const reportCongratsTitle = document.getElementById("reportCongratsTitle");
const reportSessionMeta = document.getElementById("reportSessionMeta");
const reportDurationValue = document.getElementById("reportDurationValue");
const reportCapacityValue = document.getElementById("reportCapacityValue");
const reportCapacityStat = document.getElementById("reportCapacityStat");
const reportEnergyValue = document.getElementById("reportEnergyValue");
const reportEnergyLabel = document.getElementById("reportEnergyLabel");
const reportCaloriesValue = document.getElementById("reportCaloriesValue");
const reportCaloriesLabel = document.getElementById("reportCaloriesLabel");
const reportModeLabel = document.getElementById("reportModeLabel");
const reportEquipmentLabel = document.getElementById("reportEquipmentLabel");
const reportSceneLabel = document.getElementById("reportSceneLabel");
const reportIntensityRange = document.getElementById("reportIntensityRange");
const reportIntensityBar = document.getElementById("reportIntensityBar");
const reportIntensityLegend = document.getElementById("reportIntensityLegend");
const reportIntensityLegendNote = document.getElementById("reportIntensityLegendNote");
const reportConsistency = document.getElementById("reportConsistency");
const reportCoachNote = document.getElementById("reportCoachNote");
const reportActionAnalysisBlock = document.getElementById("reportActionAnalysisBlock");
const reportModeSetupBlock = document.getElementById("reportModeSetupBlock");
const reportStrengthPowerBlock = document.getElementById("reportStrengthPowerBlock");
const reportActionCompletionBlock = document.getElementById("reportActionCompletionBlock");
const reportActionList = document.getElementById("reportActionList");
const reportPowerCurveBlock = document.getElementById("reportPowerCurveBlock");
const reportPowerCurveMeta = document.getElementById("reportPowerCurveMeta");
const reportPowerCurveTabs = document.getElementById("reportPowerCurveTabs");
const reportPowerCurveSvg = document.getElementById("reportPowerCurveSvg");
const reportPowerCurveFoot = document.getElementById("reportPowerCurveFoot");
const reportPowerScroll = document.getElementById("reportPowerScroll");
const reportPowerNavPrev = document.getElementById("reportPowerNavPrev");
const reportPowerNavNext = document.getElementById("reportPowerNavNext");
const reportAmpSvg = document.getElementById("reportAmpSvg");
const reportAmpFoot = document.getElementById("reportAmpFoot");
const reportAmpScroll = document.getElementById("reportAmpScroll");
const reportAmpNavPrev = document.getElementById("reportAmpNavPrev");
const reportAmpNavNext = document.getElementById("reportAmpNavNext");
const reportFinalScoreWrap = document.getElementById("reportFinalScoreWrap");
const reportFinalScoreValue = document.getElementById("reportFinalScoreValue");
const reportAccuracyDistBlock = document.getElementById("reportAccuracyDistBlock");
const reportAccuracyBetter = document.getElementById("reportAccuracyBetter");
const reportAccuracyGood = document.getElementById("reportAccuracyGood");
const reportAccuracyPerfect = document.getElementById("reportAccuracyPerfect");
const reportAccuracyBetterLabel = document.getElementById("reportAccuracyBetterLabel");
const reportAccuracyGoodLabel = document.getElementById("reportAccuracyGoodLabel");
const reportAccuracyPerfectLabel = document.getElementById("reportAccuracyPerfectLabel");
const reportAgainBtn = document.getElementById("reportAgainBtn");
const reportHomeBtn = document.getElementById("reportHomeBtn");

const adMeta = {
  name: "Workout Title",
  intro: "Loading...",
  intensity: "Intermediate",
  sport: "Strength",
  duration: "12 min",
  equip: "Smart cable + dual handle",
  target: "Chest",
  thumb: assetPaths[0],
  video: "assets/workout-demo.mp4",
  keypoints: [
    "Stable start position; engage pelvis and core first.",
    "Keep primary muscles driving through the working phase; avoid momentum.",
    "Return in a controlled tempo with consistent path."
  ],
  breathing: "Exhale on the concentric phase, inhale on the eccentric; keep ribcage and core coordinated and avoid breath-holding.",
  mistakes: [
    "Shrugging and neck compensation.",
    "Moving too fast with poor control.",
    "Unstable end position and joint path drift."
  ],
  installation: "Check anchor point, cable path, and handle direction before your first rep.",
  aiSupported: true
};

const videoPlayParamConfig = {
  defaultMode: "standard",
  defaultWeight: 50.0,
  minWeight: 0,
  maxWeight: 200,
  weightStep: 0.5,
  spring: { minLevel: 1, maxLevel: 10, rawSoft: 250, rawHard: 10 },
  isokinetic: { minLevel: 1, maxLevel: 25, rawMultiplier: 10 }
};

const PILATES_RESISTANCE = { min: 5, max: 45, step: 1, default: 5 };

/** kcal → kJ conversion (Energy Output = Calories × KCAL_TO_KJ). */
const KCAL_TO_KJ = 4.184;
const MET_CONST = 0.0175;
const DEFAULT_WEIGHT_KG = 70;
const MET_BODYWEIGHT_CARDIO = 6;
const MET_RESISTANCE_CARDIO_FALLBACK = 7;

function energyKjFromCalories(caloriesKcal) {
  return Math.max(0, Number(caloriesKcal) || 0) * KCAL_TO_KJ;
}

function caloriesFromFixedMet(met, weightKg, durationSeconds) {
  const durationMin = Math.max(0, Number(durationSeconds) || 0) / 60;
  const safeWeight = Math.max(1, Number(weightKg) || DEFAULT_WEIGHT_KG);
  const safeMet = Math.max(0, Number(met) || 0);
  return safeMet * MET_CONST * safeWeight * durationMin;
}

function caloriesFromCapacityKg(capacityKg) {
  return Math.max(0, Number(capacityKg) || 0) * 0.38 * 0.24;
}

function isBodyweightCardioPayload(payload, reportContext) {
  const scene = payload?.reportFromScene || "";
  const trainingType = payload?.trainingType || "";
  const context = `${scene} ${reportContext || ""} ${trainingType}`;
  return scene === "bodyweight-cardio"
    || trainingType === "cardio"
    || trainingType === "bodyweight_cardio"
    || /bodyweight[_\s-]*cardio|non[-\s]*resistance[_\s-]*cardio/i.test(context);
}

function resolveSessionCaloriesKcal(payload, durationSeconds, capacityKg) {
  const reportContext = `${payload?.reportFromScene || ""} ${payload?.sceneLabel || ""} ${payload?.trainingType || ""}`;
  if (isBodyweightCardioPayload(payload, reportContext)) {
    return caloriesFromFixedMet(MET_BODYWEIGHT_CARDIO, payload?.weightKg || DEFAULT_WEIGHT_KG, durationSeconds);
  }
  const capacityBased = caloriesFromCapacityKg(capacityKg);
  if (capacityBased <= 0 && (payload?.trainingType === "resistance_cardio" || /resistance[_\s-]*cardio/i.test(reportContext))) {
    return caloriesFromFixedMet(MET_RESISTANCE_CARDIO_FALLBACK, payload?.weightKg || DEFAULT_WEIGHT_KG, durationSeconds);
  }
  return capacityBased;
}

function isPilatesSport(sport) {
  return /pilates/i.test(String(sport || ""));
}

function isIwPilatesContext() {
  return isPilatesSport(adMeta.sport);
}

function getIwBounds() {
  if (isIwPilatesContext()) {
    return {
      min: PILATES_RESISTANCE.min,
      max: PILATES_RESISTANCE.max,
      step: PILATES_RESISTANCE.step,
      default: PILATES_RESISTANCE.default
    };
  }
  return {
    min: videoPlayParamConfig.minWeight,
    max: videoPlayParamConfig.maxWeight,
    step: videoPlayParamConfig.weightStep,
    default: videoPlayParamConfig.defaultWeight
  };
}

function springHue(kg, min, max) {
  const span = max - min;
  if (span <= 0) return 120;
  const ratio = Math.max(0, Math.min(1, (kg - min) / span));
  return 120 * (1 - ratio);
}

function springColor(kg, min, max) {
  const hue = springHue(kg, min, max);
  return `hsl(${hue}, 75%, 55%)`;
}

function updateSpringBarVisual(coilEl, valueEl, kg, min, max) {
  if (!coilEl) return;
  const color = springColor(kg, min, max);
  coilEl.style.setProperty("--spring-color", color);
  coilEl.style.background = color;
  if (valueEl) {
    const display = Number.isInteger(kg) ? String(kg) : kg.toFixed(1);
    valueEl.textContent = `${display} kg`;
  }
}

function updatePilatesSpringBarVisual(coilEl, markerEl, kg, min, max) {
  const span = max - min;
  const ratio = span > 0 ? Math.max(0, Math.min(1, (kg - min) / span)) : 0;
  if (markerEl) markerEl.style.left = `${ratio * 100}%`;
  if (coilEl) {
    coilEl.style.background = "linear-gradient(90deg, #4ade80 0%, #a3e635 22%, #facc15 50%, #fb923c 78%, #ef4444 100%)";
  }
}

function formatResistanceDisplay(kg, bounds) {
  if (bounds.step >= 1) return String(Math.round(kg));
  return kg.toFixed(1);
}

function snapshotUserSetWeightKg(weightValue, bounds) {
  const boundsSafe = bounds || getIwBounds();
  const clamped = clamp(Number(weightValue) || 0, boundsSafe.min, boundsSafe.max);
  return boundsSafe.step >= 1 ? Math.round(clamped) : Math.round(clamped * 10) / 10;
}

function syncIwSpringBarUI() {
  if (!iwSpringBar || iwSpringBar.hidden) return;
  const bounds = getIwBounds();
  updateSpringBarVisual(iwSpringCoil, iwSpringBarValue, iwState.weight, bounds.min, bounds.max);
}

function applyIwPilatesContext() {
  const bounds = getIwBounds();
  const isPilates = isIwPilatesContext();
  if (iwSpringBar) iwSpringBar.hidden = !isPilates;
  if (iwStepNote) iwStepNote.textContent = IW_UI_ZH ? `步进：${bounds.step} kg` : `Step: ${bounds.step} kg`;
  if (isPilates) {
    iwState.weight = bounds.default;
    iwState.weightLeft = bounds.default;
    iwState.weightRight = bounds.default;
  }
  syncIwWeightUI();
}

const iwModeMap = IW_UI_ZH
  ? { standard: "标准", spring: "弹簧", eccentric: "离心", isokinetic: "等速" }
  : { standard: "Standard", spring: "Spring", eccentric: "Eccentric", isokinetic: "Isokinetic" };
const iwModeMapReport = { standard: "Standard", spring: "Spring", eccentric: "Eccentric", isokinetic: "Isokinetic" };
const iwState = {
  mode: videoPlayParamConfig.defaultMode,
  equipment: "barbell",
  weight: videoPlayParamConfig.defaultWeight,
  weightLeft: videoPlayParamConfig.defaultWeight,
  weightRight: videoPlayParamConfig.defaultWeight,
  sideParticipation: "both",
  weightBalance: "match",
  editSide: "left",
  springLevel: videoPlayParamConfig.spring.minLevel,
  isokineticLevel: videoPlayParamConfig.isokinetic.minLevel,
  tab: "rom",
  playing: true,
  mirrored: false,
  chartTick: 0,
  rafId: 0
};
const iwTrainingState = {
  active: false,
  startedAt: 0,
  lastSecond: -1,
  resistanceTimeline: []
};
const iwAiState = {
  ready: false,
  score: 0,
  tier: "Miss",
  personVisible: true,
  cycleStep: 0,
  combo: 0,
  lastSecond: -1,
  scoreSum: 0,
  scoreSamples: 0,
  tierCounts: { better: 0, good: 0, perfect: 0 },
  comboHideTimer: 0
};
const IW_AI_RING_RADIUS = Number(iwAiScoreRing?.getAttribute("r")) || 46;
const IW_AI_RING_CIRCUMFERENCE = 2 * Math.PI * IW_AI_RING_RADIUS;
const IW_AI_RING_GRADIENT_ID = "iwAiRingGradient";
const IW_AI_RING_PALETTE = {
  miss: ["#ff7a7a", "#ff3b30"],
  good: ["#ffe680", "#ffb703"],
  better: ["#7db6ff", "#2563eb"],
  perfect: ["#ffc48a", "#ff8f3f"]
};
const IW_AI_OUT_OF_ZONE_TIER = "Out of tracking zone";
const IW_AI_OUT_OF_ZONE_HINT = "Move back into the camera view to continue AI tracking.";
const IW_AI_CLICK_STATES = IW_UI_ZH
  ? [
    { score: 0, tier: "未识别", hint: "动作未识别。", personVisible: true },
    { score: 94, tier: "完美", hint: "动作非常标准。", personVisible: true },
    { score: 86, tier: "较好", hint: "请再将腿抬高一些", personVisible: true },
    { score: 80, tier: "良好", hint: "请再将腿抬高一些", personVisible: true },
    { score: null, scoreDisplay: "--", tier: "超出识别区域", tierKey: "out-of-zone", hint: "请回到相机画面内以继续 AI 追踪。", personVisible: false }
  ]
  : [
    { score: 0, tier: "Miss", hint: "Action not recognized.", personVisible: true },
    { score: 94, tier: "Perfect", hint: "Your form is very standard.", personVisible: true },
    { score: 86, tier: "Better", hint: "Lift your leg a bit higher", personVisible: true },
    { score: 80, tier: "Good", hint: "Lift your leg a bit higher", personVisible: true },
    { score: null, scoreDisplay: "--", tier: IW_AI_OUT_OF_ZONE_TIER, tierKey: "out-of-zone", hint: IW_AI_OUT_OF_ZONE_HINT, personVisible: false }
  ];
const ptState = {
  active: false,
  paused: false,
  inRest: false,
  moveIndex: 0,
  moveStartAt: 0,
  moveStartTimelineIndex: 0,
  moveProgress: [],
  repsCompleted: 0,
  repTimerId: 0,
  restTimerId: 0,
  restRemaining: 30,
  sessionElapsedSeconds: 0,
  sessionName: "Plan Training",
  sessionMoves: [],
  moveResults: [],
  sessionTotalSeconds: 0
};
function getReportUser() {
  const store = window.PlanBUserStore;
  const user = store ? store.getDisplayUser() : null;
  return {
    name: user?.nickname || "Alyona",
    avatar: user?.avatar || "A"
  };
}
const reportUser = getReportUser();
let reportFromScene = "";
let reportPowerCurveSelectedKey = "session";
let pilatesEndTrainingFn = null;
let selectedTrainer = "";
let iwRecognitionTimerId = 0;
let iwRecogCycleIndex = 0;
const IW_AI_GUIDANCE_DWELL_MS = 2200;
const IW_AI_SCAN_MS = 800;
const IW_AI_SUCCESS_DWELL_MS = 1200;
const IW_RECOG_FAILURE_DWELL_MS = 2500;
const IW_RECOG_HINT_MESSAGE = "请面向屏幕站立确保相机能够有效识别。";
const IW_RECOG_FAILURE_MESSAGE = "请确保相机镜头未被遮挡或环境光不存在过暗或过曝情况。";
const IW_RECOG_CYCLE = ["scanning", "failure", "success"];
const adInstallPreviewAsset = {
  image: "assets/show.jpg",
  video: ""
};

let currentCategory = "plans";
let currentFilter = "recommended";
let exploreViewMode = "list";
const featuredPlanBanner = document.getElementById("featuredPlanBanner");
const featuredPlanType = document.getElementById("featuredPlanType");
const featuredPlanTitle = document.getElementById("featuredPlanTitle");
const todayPlanReminder = document.getElementById("todayPlanReminder");
const todayPlanTitle = document.getElementById("todayPlanTitle");
const todayPlanSubtitle = document.getElementById("todayPlanSubtitle");
const todayPlanList = document.getElementById("todayPlanList");
const todayPlanActionBtn = document.getElementById("todayPlanActionBtn");
const dayChips = document.querySelectorAll(".week-strip .day-chip");
const dailyCard = document.querySelector(".weekly-card");
let selectedHomeDate = null;

function exploreDataKey(category) {
  return category === "aiMoves" ? "moves" : category;
}

function resolveExploreFilter(category, filter) {
  const safeCategory = String(category || "");
  const safeFilter = String(filter || "recommended");
  const planCompatibleFilter = safeCategory === "plans" && safeFilter === "latest" ? "personalized" : safeFilter;
  if (safeCategory !== "plans" && planCompatibleFilter === "personalized") return "latest";
  return planCompatibleFilter;
}

function exploreGridItems(category, filter) {
  const key = exploreDataKey(category);
  const filterKey = resolveExploreFilter(category, filter);
  const bucket = libraryData[key];
  return bucket && bucket[filterKey] ? bucket[filterKey] : [];
}

function exploreGridTitle(category, filter) {
  const filterKey = resolveExploreFilter(category, filter);
  if (category === "plans") return filterKey === "personalized" ? "Personalized" : "Plans";
  if (category === "aiMoves") return "AI Moves";
  const bucket = libraryData[category];
  return bucket && bucket.title ? bucket.title : "";
}

function resolveFeaturedPlan() {
  const plans = libraryData.plans && libraryData.plans.recommended ? libraryData.plans.recommended : [];
  const targetIdx = plans.findIndex((item) => item && item[0] === "Lean Strength 21");
  const idx = targetIdx >= 0 ? targetIdx : 0;
  const plan = plans[idx] || ["Lean Strength 21", "", "21 days"];
  const titleText = plan[0];
  const typeText = /pilates/i.test(titleText) ? "Pilates" : "Strength Training";
  const thumb = "assets/card3.jpg";
  return { idx, plan, titleText, typeText, thumb };
}

function deriveJoinedPlansFromLibrary() {
  const plans = libraryData.plans && libraryData.plans.recommended ? libraryData.plans.recommended : [];
  if (!plans.length) return [];
  const leanIndex = plans.findIndex((item) => item && item[0] === "Lean Strength 21");
  const preferredOrder = [];
  if (leanIndex >= 0) preferredOrder.push(leanIndex);
  plans.forEach((_, index) => {
    if (index !== leanIndex) preferredOrder.push(index);
  });
  return preferredOrder.slice(0, 4).map((index) => {
    const item = plans[index];
    return {
      index,
      item,
      title: item[0] || "Untitled Plan",
      summary: item[1] || "Training session",
      duration: item[2] || "14 days"
    };
  });
}

function resolveJoinedPlansForToday(now = new Date()) {
  const dayOfMonth = now.getDate();
  // Demo rule: joined plans are active on these dates.
  if (![12, 13, 14, 15, 17, 18].includes(dayOfMonth)) return [];
  return deriveJoinedPlansFromLibrary();
}

function resolveHomeTrainingState(now = new Date(), joinedPlans = []) {
  if (!joinedPlans.length) return "free_only";
  const dayOfMonth = now.getDate();
  if ([12, 14, 18].includes(dayOfMonth)) return "joined_training";
  if ([13, 15, 17].includes(dayOfMonth)) return "joined_rest";
  return "free_only";
}

function buildTodaySessions(joinedPlans, now = new Date()) {
  const dayOfMonth = now.getDate();
  const labels = ["Mobility", "Core", "Power", "Tempo", "Conditioning", "Recovery", "Technique"];
  return joinedPlans
    .map((plan) => {
      const slotSeed = (plan.index * 37 + dayOfMonth * 17) % 5;
      const hour = 7 + slotSeed * 2;
      const minute = slotSeed % 2 ? "30" : "00";
      return {
        ...plan,
        slot: `${String(hour).padStart(2, "0")}:${minute}`,
        focus: labels[(dayOfMonth + plan.index) % labels.length]
      };
    })
    .sort((a, b) => a.slot.localeCompare(b.slot))
    .slice(0, 2);
}

function resolvePlanIdFromSelection(item, index) {
  const allTraining = (libraryData && libraryData.allTraining) || {};
  const plans = Array.isArray(allTraining.plans) ? allTraining.plans : [];
  if (!plans.length) return "";
  const objectItem = item && !Array.isArray(item) && typeof item === "object" ? item : null;
  if (objectItem && typeof objectItem.id === "string") return objectItem.id;
  const byIndex = plans[index];
  if (byIndex && typeof byIndex.id === "string") return byIndex.id;
  if (Array.isArray(item) && item[0]) {
    const byName = plans.find((plan) => plan && String(plan.name).toLowerCase() === String(item[0]).toLowerCase());
    if (byName && typeof byName.id === "string") return byName.id;
  }
  const first = plans[0];
  return first && typeof first.id === "string" ? first.id : "";
}

function openPlanDetailFromSelection(item, index, from = "home") {
  const params = new URLSearchParams({ from });
  const planId = resolvePlanIdFromSelection(item, index);
  if (planId) params.set("planId", planId);
  if (currentCategory === "plans" && resolveExploreFilter(currentCategory, currentFilter) === "personalized") {
    params.set("personalized", "1");
  }
  window.location.href = `plan-b-plan-detail.html?${params.toString()}`;
}

function hasSkippedDayStatus(planId) {
  if (!planId) return false;
  try {
    const raw = sessionStorage.getItem(STORAGE_PLAN_PROGRESS);
    const parsed = raw ? JSON.parse(raw) : {};
    const statusMap = parsed && typeof parsed === "object" ? parsed[planId] : null;
    if (!statusMap || typeof statusMap !== "object" || Array.isArray(statusMap)) return false;
    return Object.values(statusMap).some((status) => status === "skipped");
  } catch (e) {
    return false;
  }
}

function renderTodayPlanReminder(nowInput) {
  const now = nowInput || selectedHomeDate || new Date();
  const joinedPlans = resolveJoinedPlansForToday(now);
  const homeState = resolveHomeTrainingState(now, joinedPlans);
  if (featuredPlanBanner) featuredPlanBanner.classList.toggle("is-hidden", homeState !== "free_only");
  if (todayPlanReminder) todayPlanReminder.classList.toggle("is-hidden", homeState === "free_only");
  if (!todayPlanReminder || !todayPlanTitle || !todayPlanSubtitle || !todayPlanList || !todayPlanActionBtn) return;

  todayPlanList.innerHTML = "";
  todayPlanReminder.classList.remove("is-rest-clickable");
  todayPlanReminder.removeAttribute("role");
  todayPlanReminder.removeAttribute("tabindex");
  todayPlanReminder.onkeydown = null;
  todayPlanReminder.onclick = null;
  if (homeState === "free_only") {
    todayPlanActionBtn.hidden = true;
    todayPlanActionBtn.onclick = null;
    return;
  }

  if (homeState === "joined_rest") {
    todayPlanReminder.classList.add("is-rest");
    todayPlanTitle.textContent = "Today is Rest Day";
    todayPlanSubtitle.textContent = "You can still choose free training today.";
    todayPlanActionBtn.hidden = true;
    todayPlanActionBtn.onclick = null;
    const fallbackPlan = joinedPlans[0] || resolveFeaturedPlan();
    const openRestDayPlanDetail = () => {
      currentCategory = "plans";
      currentFilter = "recommended";
      if (Array.isArray(fallbackPlan.item)) openPlanDetailFromSelection(fallbackPlan.item, fallbackPlan.index, "home");
      else openPlanDetailFromSelection(fallbackPlan.plan, fallbackPlan.idx, "home");
    };
    todayPlanReminder.classList.add("is-rest-clickable");
    todayPlanReminder.setAttribute("role", "button");
    todayPlanReminder.setAttribute("tabindex", "0");
    todayPlanReminder.onclick = openRestDayPlanDetail;
    todayPlanReminder.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRestDayPlanDetail();
      }
    };
    return;
  }

  const todaySessions = buildTodaySessions(joinedPlans, now);
  todayPlanReminder.classList.remove("is-rest");
  todayPlanTitle.textContent = todaySessions.length > 1 ? "Today has 2 planned sessions" : "Today has 1 planned session";
  todayPlanSubtitle.textContent = "Based on plans you joined.";

  const statusLabels = ["Not Finished", "Completed", "Incomplete", "Skipped"];
  const isDay14WithTwoPlans = now.getDate() === 14 && todaySessions.length >= 2;
  const day14StatusOverride = ["Skipped", "Incomplete"];
  const progressSamples = ["30%", "70%"];
  const progressToneClasses = [
    "today-plan-item--tone-1",
    "today-plan-item--tone-2",
    "today-plan-item--tone-3"
  ];
  todaySessions.forEach((session, index) => {
    const row = document.createElement("div");
    row.className = "today-plan-item";
    row.classList.add(progressToneClasses[index % progressToneClasses.length]);
    row.style.setProperty("--plan-progress", progressSamples[index % progressSamples.length]);
    const name = document.createElement("strong");
    name.textContent = `${session.title} · ${session.focus}`;
    const meta = document.createElement("span");
    meta.className = "today-plan-status";
    const sessionPlanId = resolvePlanIdFromSelection(session.item, session.index);
    if (hasSkippedDayStatus(sessionPlanId)) {
      meta.textContent = "Skipped";
    } else if (isDay14WithTwoPlans && index < day14StatusOverride.length) {
      meta.textContent = day14StatusOverride[index];
    } else {
      meta.textContent = statusLabels[index % statusLabels.length];
    }
    row.append(name, meta);
    todayPlanList.appendChild(row);
  });

  todayPlanActionBtn.hidden = false;
  todayPlanActionBtn.textContent = "Start Training";
  todayPlanActionBtn.onclick = () => {
    currentCategory = "plans";
    currentFilter = "recommended";
    openPlanDetailFromSelection(todaySessions[0].item, todaySessions[0].index, "home");
  };
}

function wireFeaturedPlanBanner() {
  if (!featuredPlanBanner) return;
  const featuredPlan = resolveFeaturedPlan();
  if (featuredPlanTitle) featuredPlanTitle.textContent = featuredPlan.titleText;
  if (featuredPlanType) featuredPlanType.textContent = featuredPlan.typeText;
  featuredPlanBanner.setAttribute("aria-label", `Open plan detail for ${featuredPlan.titleText}`);
  featuredPlanBanner.style.backgroundImage =
    `linear-gradient(to top, rgba(2, 6, 23, 0.94), rgba(2, 6, 23, 0.52) 48%, rgba(2, 6, 23, 0.2)), url("${featuredPlan.thumb}")`;

  const openFeaturedPlanDetail = () => {
    openPlanDetailFromSelection(featuredPlan.plan, featuredPlan.idx, "home");
  };

  featuredPlanBanner.addEventListener("click", openFeaturedPlanDetail);
  featuredPlanBanner.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFeaturedPlanDetail();
    }
  });
}
wireFeaturedPlanBanner();
renderTodayPlanReminder();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function metricTrendText(change) {
  if (change === 0) return "Same as last day";
  return `${change > 0 ? "+" : ""}${change}% vs last day`;
}

function updateDailySnapshot() {
  if (!dailyCard) return;
  const dial = dailyCard.querySelector(".dial");
  const dialInner = dailyCard.querySelector(".dial-inner");
  const dialLabel = dailyCard.querySelector(".dial-center span");
  const dialValue = dailyCard.querySelector(".dial-center strong");
  const metricValues = dailyCard.querySelectorAll(".weekly-metric .value");
  const metricTrends = dailyCard.querySelectorAll(".weekly-metric p");
  if (!dial || !dialInner || !dialValue || metricValues.length < 3 || metricTrends.length < 3) return;

  if (dialLabel) dialLabel.textContent = "Daily";

  const effort = randomInt(180, 520);
  const time = randomInt(8, 45);
  const freq = randomInt(1, 5);
  const effortPct = (effort - 180) / (520 - 180);
  const timePct = (time - 8) / (45 - 8);
  const freqPct = (freq - 1) / (5 - 1);
  const progressPct = Math.round(((effortPct + timePct + freqPct) / 3) * 100);

  dialValue.textContent = `${progressPct}%`;
  metricValues[0].innerHTML = `${effort}<small>cal</small>`;
  metricValues[1].innerHTML = `${time}<small>min</small>`;
  metricValues[2].innerHTML = `${freq}<small>days</small>`;

  metricTrends[0].textContent = metricTrendText(randomInt(-18, 24));
  metricTrends[1].textContent = metricTrendText(randomInt(-15, 20));
  metricTrends[2].textContent = metricTrendText(randomInt(-12, 15));

  const effortDeg = Math.round(45 + effortPct * 300);
  const timeDeg = Math.round(40 + timePct * 300);
  const freqDeg = Math.round(35 + freqPct * 300);
  dial.style.setProperty("--effort-deg", `${effortDeg}deg`);
  dialInner.style.setProperty("--time-deg", `${timeDeg}deg`);
  dialInner.style.setProperty("--freq-deg", `${freqDeg}deg`);
}

function wireDailyCalendarInteraction() {
  if (!dayChips.length || !dailyCard) return;
  const buildDateFromChip = (chip) => {
    const dayText = chip.querySelector("strong");
    const dayNum = dayText ? parseInt(dayText.textContent || "", 10) : NaN;
    if (!Number.isFinite(dayNum)) return new Date();
    const base = new Date();
    return new Date(base.getFullYear(), base.getMonth(), dayNum);
  };

  const activeChip = Array.from(dayChips).find((chip) => chip.classList.contains("day-chip--active"));
  if (activeChip) {
    selectedHomeDate = buildDateFromChip(activeChip);
    renderTodayPlanReminder(selectedHomeDate);
  }

  dayChips.forEach((chip) => {
    chip.setAttribute("role", "button");
    chip.setAttribute("tabindex", "0");
    const onSelect = () => {
      dayChips.forEach((item) => item.classList.toggle("day-chip--active", item === chip));
      updateDailySnapshot();
      selectedHomeDate = buildDateFromChip(chip);
      renderTodayPlanReminder(selectedHomeDate);
    };
    chip.addEventListener("click", onSelect);
    chip.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect();
      }
    });
  });
}
wireDailyCalendarInteraction();

function syncAccordionVisibility() {
  const elKeypoints = document.getElementById("adAccordionKeypoints");
  if (elKeypoints) {
    elKeypoints.style.display = adMeta.keypoints && adMeta.keypoints.length ? "" : "none";
    const content = document.getElementById("adKeypointsContent");
    if (content && adMeta.keypoints && Array.isArray(adMeta.keypoints)) {
      let ul = content.querySelector("ul");
      if (!ul) {
        ul = document.createElement("ul");
        content.prepend(ul);
      }
      ul.innerHTML = adMeta.keypoints.map(m => `<li>${m}</li>`).join("");
    }
  }

  const elBreathing = document.getElementById("adAccordionBreathing");
  if (elBreathing) {
    elBreathing.style.display = adMeta.breathing ? "" : "none";
    const content = document.getElementById("adBreathingContent");
    if (content && adMeta.breathing) content.innerHTML = `<p>${adMeta.breathing}</p>`;
  }

  const elMistakes = document.getElementById("adAccordionMistakes");
  if (elMistakes) {
    elMistakes.style.display = adMeta.mistakes && adMeta.mistakes.length ? "" : "none";
    const content = document.getElementById("adMistakesContent");
    if (content && adMeta.mistakes && Array.isArray(adMeta.mistakes)) {
      content.innerHTML = `<ul>${adMeta.mistakes.map(m => `<li>${m}</li>`).join("")}</ul>`;
    }
  }

  const elInstallation = document.getElementById("adAccordionInstallation");
  if (elInstallation) {
    elInstallation.style.display = adMeta.installation ? "" : "none";
    const contentP = document.querySelector("#adInstallationContent p");
    if (contentP && adMeta.installation) {
      contentP.textContent = adMeta.installation;
    }
  }
}

function syncActionDetail() {
  if (adActionName) adActionName.textContent = adMeta.name;
  if (adActionIntro) adActionIntro.textContent = adMeta.intro;
  if (adIntensityValue) adIntensityValue.textContent = adMeta.intensity;
  if (adSportValue) adSportValue.textContent = adMeta.sport;
  if (adEquipValue) adEquipValue.textContent = adMeta.equip;
  if (adTargetValue) adTargetValue.textContent = adMeta.target;
  if (adActionHero) {
    adActionHero.src = adMeta.thumb;
    adActionHero.alt = `Illustration for ${adMeta.name}`;
  }
  if (adInstallVisual) {
    adInstallVisual.src = adInstallPreviewAsset.image;
    adInstallVisual.alt = `Equipment setup illustration for ${adMeta.name}`;
  }
  if (adVideoFallback) adVideoFallback.textContent = "";
  
  syncAccordionVisibility();
  syncInstallInlineType();
}

function syncInstallInlineType() {
  if (!adInstallInlineImage || !adInstallInlineVideo || !adInstallInlineVideoSource || !adInstallInlineMedia) return;
  const hasVideo = Boolean(adInstallPreviewAsset.video);
  const hasMedia = Boolean(adInstallPreviewAsset.video || adInstallPreviewAsset.image);
  
  adInstallInlineMedia.classList.toggle("hidden", !hasMedia);
  adInstallInlineImage.classList.toggle("hidden", hasVideo || !adInstallPreviewAsset.image);
  adInstallInlineVideo.classList.toggle("hidden", !hasVideo);
  
  if (hasVideo) {
    adInstallInlineVideoSource.src = adInstallPreviewAsset.video;
    adInstallInlineVideo.load();
  } else if (adInstallPreviewAsset.image) {
    adInstallInlineImage.src = adInstallPreviewAsset.image;
  } else {
    adInstallInlineVideo.pause();
    adInstallInlineVideoSource.src = "";
  }
}

function openMoveDetail(item, index) {
  if (currentCategory === "plans") {
    openPlanDetailFromSelection(item, index, PLAN_B_PAGE === "home" ? "home" : "full");
    return;
  }
  if (PLAN_B_PAGE === "home") {
    const params = new URLSearchParams({
      idx: String(index),
      cat: currentCategory,
      filter: currentFilter
    });
    window.location.href = `plan-b-move-detail.html?${params.toString()}`;
    return;
  }
  const objectItem = item && !Array.isArray(item) && typeof item === "object" ? item : null;
  const [nameFromArray, descFromArray, tagFromArray] = Array.isArray(item) ? item : [];
  const safeAssetLength = Math.max(1, assetPaths.length);
  adMeta.name = (objectItem && objectItem.name) || nameFromArray || "Workout Title";
  adMeta.intro = (objectItem && (objectItem.summary || objectItem.intro)) || descFromArray || "Training session";
  adMeta.intensity = (objectItem && objectItem.difficulty) || tagFromArray || "Intermediate";
  adMeta.sport = (objectItem && objectItem.scene) || "Strength";
  adMeta.duration = (objectItem && objectItem.cycleWeeks) || "12 min";
  adMeta.equip = (objectItem && objectItem.equipment) || "Smart cable + dual handle";
  adMeta.target = (objectItem && objectItem.target) || "Chest";
  adMeta.thumb = (objectItem && objectItem.thumb) || assetPaths[index % safeAssetLength];
  adMeta.keypoints = (objectItem && objectItem.keypoints) || [
    "Stable start position; engage pelvis and core first.",
    "Keep primary muscles driving through the working phase; avoid momentum.",
    "Return in a controlled tempo with consistent path."
  ];
  adMeta.breathing = objectItem && objectItem.breathing !== undefined ? objectItem.breathing : "Exhale on the concentric phase, inhale on the eccentric; keep ribcage and core coordinated and avoid breath-holding.";
  adMeta.mistakes = objectItem && objectItem.mistakes !== undefined ? objectItem.mistakes : [
    "Shrugging and neck compensation.",
    "Moving too fast with poor control.",
    "Unstable end position and joint path drift."
  ];
  adMeta.installation = objectItem && objectItem.installation !== undefined ? objectItem.installation : "Check anchor point, cable path, and handle direction before your first rep.";
  adMeta.aiSupported = objectItem && Object.prototype.hasOwnProperty.call(objectItem, "supportsAi") ? Boolean(objectItem.supportsAi) : true;
  adMeta.video = "assets/workout-demo.mp4";
  syncActionDetail();
  if (modal) hideTrainingTypeModal();
  if (shell) shell.classList.add("app-detail-active");
  if (moveDetailScreen) {
    moveDetailScreen.classList.add("active");
    moveDetailScreen.setAttribute("aria-hidden", "false");
  }
}

function closeMoveDetailScreen() {
  if (PLAN_B_PAGE === "move-detail") {
    window.location.href = "index-plan-b-home.html";
    return;
  }
  if (!moveDetailScreen) return;
  moveDetailScreen.classList.remove("active");
  moveDetailScreen.setAttribute("aria-hidden", "true");
  if (shell) shell.classList.remove("app-detail-active");
  if (immersiveWorkoutScreen) {
    immersiveWorkoutScreen.classList.remove("active");
    immersiveWorkoutScreen.setAttribute("aria-hidden", "true");
  }
  if (shell) shell.classList.remove("app-immersive-active");
  if (iwVideo) iwVideo.pause();
  if (iwState.rafId) {
    cancelAnimationFrame(iwState.rafId);
    iwState.rafId = 0;
  }
}

function formatTime(seconds) {
  const safe = Math.max(0, Number.isFinite(seconds) ? seconds : 0);
  const m = Math.floor(safe / 60);
  const s = Math.floor(safe % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function buildSyntheticTimeline(durationSeconds, baseResistance) {
  const total = Math.max(1, Math.floor(durationSeconds));
  const userKg = snapshotUserSetWeightKg(baseResistance);
  return Array.from({ length: total }, () => userKg);
}

function computeDistribution(timeline, maxResistance) {
  const safeTimeline = timeline.length ? timeline : [0];
  const zoneStep = maxResistance / 5;
  const zones = [
    { className: "tr-intensity-z1", from: 0, to: zoneStep, label: `0-${zoneStep.toFixed(0)}kg`, seconds: 0 },
    { className: "tr-intensity-z2", from: zoneStep, to: zoneStep * 2, label: `${zoneStep.toFixed(0)}-${(zoneStep * 2).toFixed(0)}kg`, seconds: 0 },
    { className: "tr-intensity-z3", from: zoneStep * 2, to: zoneStep * 3, label: `${(zoneStep * 2).toFixed(0)}-${(zoneStep * 3).toFixed(0)}kg`, seconds: 0 },
    { className: "tr-intensity-z4", from: zoneStep * 3, to: zoneStep * 4, label: `${(zoneStep * 3).toFixed(0)}-${(zoneStep * 4).toFixed(0)}kg`, seconds: 0 },
    { className: "tr-intensity-z5", from: zoneStep * 4, to: maxResistance + 0.0001, label: `${(zoneStep * 4).toFixed(0)}-${maxResistance.toFixed(0)}kg`, seconds: 0 }
  ];
  safeTimeline.forEach((value) => {
    const v = clamp(value, 0, maxResistance);
    const idx = Math.min(4, Math.floor(v / zoneStep));
    zones[idx].seconds += 1;
  });
  const total = safeTimeline.length;
  zones.forEach((zone) => {
    zone.ratio = zone.seconds / total;
  });
  return zones;
}

function calcConsistency(timeline, maxResistance) {
  if (!timeline.length) return 0;
  const avg = timeline.reduce((sum, item) => sum + item, 0) / timeline.length;
  const variance = timeline.reduce((sum, item) => sum + (item - avg) ** 2, 0) / timeline.length;
  const std = Math.sqrt(variance);
  return Math.round(clamp(100 - (std / Math.max(1, maxResistance)) * 180, 0, 100));
}

function getCoachNote(consistency, peakResistance, maxResistance) {
  const peakRatio = peakResistance / Math.max(1, maxResistance);
  if (consistency >= 86 && peakRatio >= 0.7) return "Excellent pacing. Keep this output profile and increase peak resistance by 2-5kg next session.";
  if (consistency >= 72) return "Great control overall. Try extending your high-intensity phase to improve total work capacity.";
  return "Your intensity fluctuated more than expected. Focus on smoother tempo and steady force application next round.";
}

function sumResistanceTimeline(timeline) {
  return timeline.reduce((sum, value) => sum + Number(value || 0), 0);
}

function resetIwTrainingCapture() {
  iwTrainingState.active = true;
  iwTrainingState.startedAt = performance.now();
  iwTrainingState.lastSecond = -1;
  iwTrainingState.resistanceTimeline = [];
}

function stopIwTrainingCapture() {
  const elapsedMs = Math.max(0, performance.now() - (iwTrainingState.startedAt || performance.now()));
  const durationSeconds = Math.max(0, Math.round(elapsedMs / 1000));
  const timeline = iwTrainingState.resistanceTimeline.slice();
  iwTrainingState.active = false;
  iwTrainingState.startedAt = 0;
  iwTrainingState.lastSecond = -1;
  iwTrainingState.resistanceTimeline = [];
  return { durationSeconds, timeline };
}

function resetIwAiCapture() {
  iwAiState.ready = false;
  iwAiState.score = 0;
  iwAiState.tier = "Miss";
  iwAiState.personVisible = true;
  iwAiState.cycleStep = 0;
  iwAiState.combo = 0;
  iwAiState.lastSecond = -1;
  iwAiState.scoreSum = 0;
  iwAiState.scoreSamples = 0;
  iwAiState.tierCounts = { better: 0, good: 0, perfect: 0 };
  if (iwAiState.comboHideTimer) {
    clearTimeout(iwAiState.comboHideTimer);
    iwAiState.comboHideTimer = 0;
  }
  if (iwComboBadge) iwComboBadge.hidden = true;
  updateIwAiPanel(
    0,
    IW_UI_ZH ? "未识别" : "Miss",
    IW_UI_ZH ? "动作未识别。" : "Action not recognized.",
    { personVisible: true }
  );
}

function resolveIwAiClickState(step) {
  const safeStep = Math.max(0, Number(step) || 0);
  return IW_AI_CLICK_STATES[safeStep % IW_AI_CLICK_STATES.length];
}

function resolveIwAiCycleState(second) {
  const cycle = Math.max(0, Number(second) || 0) % 8;
  if (cycle < 2) {
    return { score: 0, tier: "Miss", hint: "Action not recognized." };
  }
  if (cycle < 4) {
    return { score: 94, tier: "Perfect", hint: "Your form is very standard." };
  }
  if (cycle < 6) {
    return { score: 86, tier: "Better", hint: "Lift your leg a bit higher" };
  }
  return { score: 80, tier: "Good", hint: "Lift your leg a bit higher" };
}

function ensureIwAiRingGradient() {
  if (!iwAiScoreRing) return null;
  const svg = iwAiScoreRing.ownerSVGElement;
  if (!svg) return null;
  const ns = "http://www.w3.org/2000/svg";
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS(ns, "defs");
    svg.insertBefore(defs, svg.firstChild);
  }
  let gradient = svg.querySelector(`#${IW_AI_RING_GRADIENT_ID}`);
  if (!gradient) {
    gradient = document.createElementNS(ns, "linearGradient");
    gradient.setAttribute("id", IW_AI_RING_GRADIENT_ID);
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");
    const startStop = document.createElementNS(ns, "stop");
    startStop.setAttribute("offset", "0%");
    const endStop = document.createElementNS(ns, "stop");
    endStop.setAttribute("offset", "100%");
    gradient.append(startStop, endStop);
    defs.appendChild(gradient);
  }
  return gradient;
}

function updateIwAiRingGradient(tier) {
  if (!iwAiScoreRing) return;
  const tierKey = String(tier || "better").toLowerCase();
  const palette = IW_AI_RING_PALETTE[tierKey] || IW_AI_RING_PALETTE.better;
  const gradient = ensureIwAiRingGradient();
  if (!gradient) return;
  const stops = gradient.querySelectorAll("stop");
  if (stops[0]) stops[0].setAttribute("stop-color", palette[0]);
  if (stops[1]) stops[1].setAttribute("stop-color", palette[1]);
  iwAiScoreRing.style.stroke = `url(#${IW_AI_RING_GRADIENT_ID})`;
}

function resolveAiTier(score) {
  if (score >= 90) return "Perfect";
  if (score >= 75) return "Good";
  return "Better";
}

function resolveAiHint(second, score) {
  if (score >= 88) return "Great stability, keep it up.";
  const hints = [
    "Lift your leg a bit higher.",
    "Brace your core a bit tighter.",
    "Slow down the return phase slightly."
  ];
  return hints[Math.abs(second) % hints.length];
}

function updateIwAiRing(score) {
  if (!iwAiScoreRing) return;
  const safeScore = clamp(Number(score) || 0, 0, 100);
  const progressRatio = safeScore / 100;
  iwAiScoreRing.style.strokeDasharray = String(IW_AI_RING_CIRCUMFERENCE);
  iwAiScoreRing.style.strokeDashoffset = String(IW_AI_RING_CIRCUMFERENCE * (1 - progressRatio));
}

function showIwComboBadge(comboCount) {
  if (!iwComboBadge) return;
  iwComboBadge.textContent = IW_UI_ZH ? `连击 × ${comboCount}` : `Combo * ${comboCount}`;
  iwComboBadge.hidden = false;
  iwComboBadge.style.animation = "none";
  // restart animation
  void iwComboBadge.offsetWidth;
  iwComboBadge.style.animation = "";
  if (iwAiState.comboHideTimer) clearTimeout(iwAiState.comboHideTimer);
  iwAiState.comboHideTimer = window.setTimeout(() => {
    iwComboBadge.hidden = true;
  }, 900);
}

function updateIwAiSkeletonPresence(personVisible, message) {
  const isVisible = personVisible !== false;
  if (iwAiResult) {
    iwAiResult.dataset.personVisible = isVisible ? "true" : "false";
  }
  if (iwAiHintText && !isVisible) {
    iwAiHintText.textContent = message || IW_AI_OUT_OF_ZONE_HINT;
  }
}

function updateIwAiPanel(score, tier, hint, options = {}) {
  const rawScore = Number(score);
  const hasNumericScore = Number.isFinite(rawScore);
  const safeScore = clamp(hasNumericScore ? rawScore : 0, 0, 100);
  const scoreDisplay = options.scoreDisplay ?? (hasNumericScore ? String(Math.round(safeScore)) : "--");
  const personVisible = options.personVisible !== false;
  const tierKey = options.tierKey || String(tier || "").toLowerCase().replace(/\s+/g, "-");
  if (iwAiScoreValue) iwAiScoreValue.textContent = scoreDisplay;
  updateIwAiRing(safeScore);
  if (iwAiTierValue) {
    iwAiTierValue.textContent = tier;
    iwAiTierValue.dataset.tier = tierKey;
  }
  if (iwAiPanel) {
    iwAiPanel.dataset.tier = personVisible ? String(tier || "").toLowerCase() : "miss";
  }
  updateIwAiRingGradient(personVisible ? tier : "Miss");
  if (iwAiHintText) {
    iwAiHintText.textContent = hint || "Lift your leg a bit higher.";
  }
  updateIwAiSkeletonPresence(personVisible, hint);
}

function applyIwAiStateAndStats(score, tier, hint, options = {}) {
  const personVisible = options.personVisible !== false;
  const rawScore = Number(score);
  const safeScore = Number.isFinite(rawScore) ? rawScore : 0;
  if (personVisible && (tier === "Good" || tier === "Perfect")) {
    iwAiState.combo += 1;
    if (iwAiState.combo >= 3) showIwComboBadge(iwAiState.combo);
  } else {
    iwAiState.combo = 0;
  }
  iwAiState.score = safeScore;
  iwAiState.tier = tier;
  iwAiState.personVisible = personVisible;
  if (personVisible) {
    iwAiState.scoreSum += safeScore;
    iwAiState.scoreSamples += 1;
    if (tier === "Perfect") iwAiState.tierCounts.perfect += 1;
    else if (tier === "Good") iwAiState.tierCounts.good += 1;
    else if (tier === "Better") iwAiState.tierCounts.better += 1;
  }
  updateIwAiPanel(score, tier, hint, options);
}

function advanceIwAiCycleOnClick() {
  if (!iwAiState.ready) return;
  iwAiState.cycleStep = (iwAiState.cycleStep + 1) % IW_AI_CLICK_STATES.length;
  const nextState = resolveIwAiClickState(iwAiState.cycleStep);
  applyIwAiStateAndStats(nextState.score, nextState.tier, nextState.hint, nextState);
}

function openReportFromIwTraining() {
  const { durationSeconds: measuredDuration, timeline: measuredTimeline } = stopIwTrainingCapture();
  const timeline = measuredTimeline.length
    ? measuredTimeline
    : buildSyntheticTimeline(Math.max(18, measuredDuration || Math.round(iwVideo.currentTime || 0)), iwState.weight, iwState.mode);
  const durationSeconds = Math.max(1, measuredDuration || timeline.length);
  const capacityKg = sumResistanceTimeline(timeline);
  const scoreSamples = Math.max(0, Number(iwAiState.scoreSamples) || 0);
  const finalAiScore = scoreSamples > 0
    ? Math.round(iwAiState.scoreSum / scoreSamples)
    : 93;
  const totalTierSamples = Math.max(
    1,
    (iwAiState.tierCounts.better || 0) + (iwAiState.tierCounts.good || 0) + (iwAiState.tierCounts.perfect || 0)
  );
  const accuracyDistribution = {
    better: Math.round(((iwAiState.tierCounts.better || 0) / totalTierSamples) * 100),
    good: Math.round(((iwAiState.tierCounts.good || 0) / totalTierSamples) * 100),
    perfect: Math.round(((iwAiState.tierCounts.perfect || 0) / totalTierSamples) * 100)
  };
  const distSum = accuracyDistribution.better + accuracyDistribution.good + accuracyDistribution.perfect;
  if (distSum !== 100) {
    accuracyDistribution.better = Math.max(0, accuracyDistribution.better + (100 - distSum));
  }
  const aiSummary = `Better ${accuracyDistribution.better}% · Good ${accuracyDistribution.good}% · Perfect ${accuracyDistribution.perfect}%`;
  const reportPayloadBase = {
    reportFromScene: "immersive",
    userName: getReportUser().name,
    userAvatar: getReportUser().avatar,
    sceneLabel: "Action Training",
    durationSeconds,
    capacityKg,
    modeLabel: iwModeMapReport[iwState.mode] || "Standard",
    equipmentLabel: iwState.equipment === "barbell" ? "Barbell" : "Handles",
    maxResistance: 120,
    timeline,
    finalAiScore,
    accuracyDistribution,
    aiSummary
  };
  const caloriesKcal = resolveSessionCaloriesKcal(reportPayloadBase, durationSeconds, capacityKg);
  const energyKj = energyKjFromCalories(caloriesKcal);
  const reportPayload = {
    ...reportPayloadBase,
    energyKj,
    caloriesKcal
  };
  if (PLAN_B_PAGE === "immersive" && window.PlanBImmersiveDemo?.active) {
    Object.assign(reportPayload, window.PlanBImmersiveDemo.snapshot());
    reportPayload.aiSummary = "Simulated demo · " + reportPayload.aiSummary;
    window.PlanBImmersiveDemo.stop();
  }
  if (PLAN_B_PAGE === "immersive") {
    try {
      sessionStorage.setItem(STORAGE_REPORT_PAYLOAD, JSON.stringify(reportPayload));
    } catch (e) {
      /* ignore */
    }
    window.location.href = "plan-b-training-report.html";
    return;
  }
  closeImmersiveWorkout();
  reportFromScene = "immersive";
  showTrainingReport(reportPayload);
}

function hideTrainingReport() {
  if (!trainingReportScreen) return;
  trainingReportScreen.classList.remove("active");
  trainingReportScreen.setAttribute("aria-hidden", "true");
}

function hashTextSeed(text) {
  return Array.from(String(text || "")).reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function buildPowerSeries(resistanceSeries) {
  const safe = Array.isArray(resistanceSeries) ? resistanceSeries : [];
  if (!safe.length) return [];
  const rough = safe.map((value, idx) => {
    const prev = idx > 0 ? Number(safe[idx - 1] || 0) : Number(value || 0);
    const delta = Math.abs(Number(value || 0) - prev);
    return Math.max(0, Number(value || 0) * 0.46 + delta * 1.8);
  });
  return rough.map((_, idx) => {
    const from = Math.max(0, idx - 1);
    const to = Math.min(rough.length - 1, idx + 1);
    const segment = rough.slice(from, to + 1);
    return segment.reduce((sum, item) => sum + item, 0) / segment.length;
  });
}

const INTENSITY_ZONE_CLASSES = [
  "tr-intensity-z1",
  "tr-intensity-z2",
  "tr-intensity-z3",
  "tr-intensity-z4",
  "tr-intensity-z5"
];

function roundResistanceBucket(value) {
  const numeric = Number(value) || 0;
  if (numeric <= 0) return 0;
  return Math.round(numeric);
}

function intensityClassForResistance(resistanceKg, sessionMin, sessionMax) {
  if (sessionMax <= sessionMin) return INTENSITY_ZONE_CLASSES[2];
  const position = (resistanceKg - sessionMin) / (sessionMax - sessionMin);
  const idx = Math.min(
    INTENSITY_ZONE_CLASSES.length - 1,
    Math.round(position * (INTENSITY_ZONE_CLASSES.length - 1))
  );
  return INTENSITY_ZONE_CLASSES[idx];
}

function formatDurationCompact(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  if (m > 0 && s > 0) return `${m}m ${s}s`;
  if (m > 0) return `${m}m`;
  return `${s}s`;
}

function buildIntensityDistribution(timeline) {
  const samples = (Array.isArray(timeline) ? timeline : [])
    .map((value) => Number(value) || 0)
    .filter((value) => value > 0);
  const bucketCounts = new Map();

  samples.forEach((value) => {
    const kg = roundResistanceBucket(value);
    if (kg <= 0) return;
    bucketCounts.set(kg, (bucketCounts.get(kg) || 0) + 1);
  });

  if (!bucketCounts.size) {
    return { zones: [], ceiling: 0, settingsCount: 0, workingSeconds: 0, sessionSpan: "" };
  }

  const total = [...bucketCounts.values()].reduce((sum, count) => sum + count, 0) || 1;
  const entries = [...bucketCounts.entries()]
    .map(([resistanceKg, count]) => ({
      resistanceKg,
      seconds: count,
      ratio: count / total
    }))
    .sort((a, b) => a.resistanceKg - b.resistanceKg);

  const sessionMin = entries[0].resistanceKg;
  const sessionMax = entries[entries.length - 1].resistanceKg;
  let dominantRatio = 0;
  entries.forEach((entry) => { if (entry.ratio > dominantRatio) dominantRatio = entry.ratio; });

  const zones = entries.map((entry) => ({
    className: intensityClassForResistance(entry.resistanceKg, sessionMin, sessionMax),
    label: `${entry.resistanceKg}kg`,
    resistanceKg: entry.resistanceKg,
    ratio: entry.ratio,
    seconds: entry.seconds,
    durationLabel: formatDurationCompact(entry.seconds),
    dominant: entry.ratio === dominantRatio
  }));

  return {
    zones,
    ceiling: sessionMax,
    settingsCount: zones.length,
    workingSeconds: total,
    sessionSpan: sessionMin === sessionMax ? `${sessionMin}kg` : `${sessionMin}-${sessionMax}kg`
  };
}

function buildAmplitudeSeries(sourceSeries) {
  const safe = (Array.isArray(sourceSeries) ? sourceSeries : []).map((value) => Number(value) || 0);
  if (!safe.length) return [];
  const maxValue = Math.max(1, ...safe);
  // Range of motion tends to run inversely to load and oscillate per rep,
  // so derive a plausible amplitude curve from the available load/power series.
  const rough = safe.map((value, idx) => {
    const normalized = value / maxValue;
    const wave = Math.sin(idx * 0.55) * 0.16 + Math.sin(idx * 0.21 + 0.8) * 0.1;
    const base = 0.92 - normalized * 0.42;
    return Math.max(0.18, base + wave);
  });
  return rough.map((_, idx) => {
    const from = Math.max(0, idx - 1);
    const to = Math.min(rough.length - 1, idx + 1);
    const segment = rough.slice(from, to + 1);
    return segment.reduce((sum, item) => sum + item, 0) / segment.length;
  });
}

function buildAiQualitySnapshot(move, actualReps, actualSets) {
  const seed = hashTextSeed((move && move.name) || "") + actualReps * 11 + actualSets * 7;
  const perfectRate = Math.max(58, Math.min(96, 68 + (seed % 24)));
  const errorRate = Math.max(4, 100 - perfectRate);
  const errorTypes = (move && move.aiQualityTemplate && Array.isArray(move.aiQualityTemplate.errorTypes) && move.aiQualityTemplate.errorTypes.length)
    ? move.aiQualityTemplate.errorTypes
    : ["Knee Valgus", "Short Range", "Core Instability"];
  const weights = errorTypes.map((_, idx) => ((seed + (idx + 1) * 13) % 10) + 1);
  const totalWeight = weights.reduce((sum, item) => sum + item, 0) || 1;
  let usedPercent = 0;
  const errorStats = errorTypes.map((label, idx) => {
    const raw = idx === errorTypes.length - 1
      ? Math.max(0, errorRate - usedPercent)
      : Math.round((errorRate * weights[idx]) / totalWeight);
    usedPercent += raw;
    return { label, percent: raw };
  }).filter((item) => item.percent > 0);
  const topErrors = errorStats
    .slice()
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 2);
  const summary = `Across ${Math.max(1, actualSets)} sets of ${(move && move.name) || "this move"}, ${errorRate}% reps showed form errors.`;
  return { perfectRate, errorStats, summary, topErrors };
}

const POWER_CURVE_HEIGHT = 140;
const POWER_CURVE_PX_PER_POINT = 14;
const POWER_CURVE_MIN_WIDTH = 320;
const AMPLITUDE_DISPLAY_CM = 40;

function buildPowerCurvePoints(series, width, height) {
  const points = Array.isArray(series) ? series : [];
  const padX = 8;
  const padY = 12;
  if (!points.length) return "";
  const maxValue = Math.max(1, ...points);
  const minValue = Math.min(...points);
  const range = Math.max(1, maxValue - minValue);
  return points.map((value, idx) => {
    const x = padX + (idx / Math.max(1, points.length - 1)) * (width - padX * 2);
    const normalized = (value - minValue) / range;
    const y = height - padY - normalized * (height - padY * 2);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}

function renderScrollableCurve(svgEl, footEl, series, accent, unit, displayScale) {
  if (!svgEl) return;
  const points = Array.isArray(series) ? series : [];
  const width = Math.max(POWER_CURVE_MIN_WIDTH, points.length * POWER_CURVE_PX_PER_POINT);
  const height = POWER_CURVE_HEIGHT;
  svgEl.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svgEl.setAttribute("width", String(width));
  svgEl.style.width = `${width}px`;
  const linePoints = buildPowerCurvePoints(points, width, height);
  if (!linePoints) {
    svgEl.innerHTML = "";
    if (footEl) footEl.textContent = "No data captured";
    return;
  }
  const areaPoints = `8,${height} ${linePoints} ${(width - 8).toFixed(2)},${height}`;
  svgEl.innerHTML = `
    <polygon points="${areaPoints}" fill="${accent.fill}" stroke="none"></polygon>
    <polyline points="${linePoints}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"></polyline>
    <polyline points="${linePoints}" fill="none" stroke="${accent.line}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline>
  `;
  if (footEl) {
    const scale = Number(displayScale) || 1;
    const peak = Math.max(...points) * scale;
    const avg = (points.reduce((sum, item) => sum + item, 0) / points.length) * scale;
    footEl.textContent = `Peak ${peak.toFixed(0)}${unit} · Avg ${avg.toFixed(0)}${unit}`;
  }
}

function bindChartScrollNav(scrollEl, prevBtn, nextBtn) {
  if (!scrollEl || scrollEl.dataset.navBound === "1") return;
  scrollEl.dataset.navBound = "1";

  const updateNav = () => {
    const overflow = scrollEl.scrollWidth - scrollEl.clientWidth > 6;
    if (!overflow) {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      return;
    }
    const atStart = scrollEl.scrollLeft <= 6;
    const atEnd = scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth - 6;
    if (prevBtn) prevBtn.hidden = atStart;
    if (nextBtn) nextBtn.hidden = atEnd;
  };

  scrollEl.addEventListener("scroll", updateNav, { passive: true });
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      scrollEl.scrollBy({ left: -(Math.round(scrollEl.clientWidth * 0.75) || 200), behavior: "smooth" });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      scrollEl.scrollBy({ left: Math.round(scrollEl.clientWidth * 0.75) || 200, behavior: "smooth" });
    });
  }
  scrollEl._chartNavUpdate = updateNav;
}

function syncChartScrollNav(scrollEl) {
  if (!scrollEl) return;
  scrollEl.scrollLeft = 0;
  requestAnimationFrame(() => {
    if (typeof scrollEl._chartNavUpdate === "function") scrollEl._chartNavUpdate();
  });
}

function renderReportPowerCurve(payload) {
  if (!reportPowerCurveBlock || !reportPowerCurveSvg || !reportPowerCurveTabs || !reportPowerCurveMeta) return;
  const sessionPower = buildPowerSeries(payload && payload.timeline);
  const moveRows = Array.isArray(payload && payload.planMovesData) ? payload.planMovesData : [];
  const moveOptions = moveRows
    .filter((row) => Array.isArray(row && row.powerSeries) && row.powerSeries.length)
    .map((row, idx) => ({
      key: `move-${idx}`,
      label: row.name || `Move ${idx + 1}`,
      series: row.powerSeries
    }));
  const options = [{ key: "session", label: "Session", series: sessionPower }, ...moveOptions];
  reportPowerCurveBlock.hidden = !options.some((item) => item.series.length);
  if (reportPowerCurveBlock.hidden) return;
  if (!options.some((item) => item.key === reportPowerCurveSelectedKey)) {
    reportPowerCurveSelectedKey = "session";
  }
  reportPowerCurveTabs.innerHTML = "";
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tr-power-tab${option.key === reportPowerCurveSelectedKey ? " is-active" : ""}`;
    btn.textContent = option.label;
    btn.addEventListener("click", () => {
      reportPowerCurveSelectedKey = option.key;
      renderReportPowerCurve(payload);
    });
    reportPowerCurveTabs.appendChild(btn);
  });
  const active = options.find((item) => item.key === reportPowerCurveSelectedKey) || options[0];
  const powerPoints = Array.isArray(active.series) ? active.series : [];
  const amplitudePoints = buildAmplitudeSeries(powerPoints);
  reportPowerCurveMeta.textContent = active.key === "session" ? "Session" : active.label;

  renderScrollableCurve(
    reportPowerCurveSvg,
    reportPowerCurveFoot,
    powerPoints,
    { line: "rgba(255,171,99,0.96)", fill: "rgba(255,140,70,0.16)" },
    "W",
    1
  );
  renderScrollableCurve(
    reportAmpSvg,
    reportAmpFoot,
    amplitudePoints,
    { line: "rgba(94,234,255,0.96)", fill: "rgba(94,234,255,0.16)" },
    "cm",
    AMPLITUDE_DISPLAY_CM
  );

  bindChartScrollNav(reportPowerScroll, reportPowerNavPrev, reportPowerNavNext);
  bindChartScrollNav(reportAmpScroll, reportAmpNavPrev, reportAmpNavNext);
  syncChartScrollNav(reportPowerScroll);
  syncChartScrollNav(reportAmpScroll);
}

function renderReportActionCompletion(planMovesData) {
  if (!reportActionList) return;
  const safeMoves = Array.isArray(planMovesData) ? planMovesData : [];
  const hiddenCards = [];
  reportActionList.innerHTML = "";
  if (!safeMoves.length) {
    const empty = document.createElement("p");
    empty.className = "tr-coach-note";
    empty.textContent = "No move completion data available for this plan day.";
    reportActionList.appendChild(empty);
    return;
  }
  safeMoves.forEach((item, idx) => {
    const row = item && typeof item === "object" ? item : {};
    const moveName = row.name || `Move ${idx + 1}`;
    const targetSets = Math.max(0, Number(row.targetSets) || 0);
    const targetReps = Math.max(0, Number(row.targetReps) || 0);
    const actualSets = Math.max(0, Number(row.actualSets) || 0);
    const actualReps = Math.max(0, Number(row.actualReps) || 0);
    const durationSeconds = Math.max(0, Number(row.durationSeconds) || 0);
    const aiSupported = Boolean(row.aiSupported);
    const quality = row.aiQuality && typeof row.aiQuality === "object" ? row.aiQuality : null;
    const perfectRate = quality ? Math.max(0, Math.min(100, Number(quality.perfectRate) || 0)) : 0;
    const summaryText = quality && quality.summary ? quality.summary : "";
    const topErrors = quality && Array.isArray(quality.topErrors) ? quality.topErrors : [];

    const card = document.createElement("article");
    card.className = "tr-action-item";
    card.innerHTML = `
      <div class="tr-action-item-top">
        <strong>${moveName}</strong>
        <span class="tr-action-time">${formatTime(durationSeconds)}</span>
      </div>
      <div class="tr-action-meta">
        <span class="tr-action-metric"><em>Target Reps</em>${targetReps}</span>
        <span class="tr-action-metric"><em>Actual Reps</em>${actualReps}</span>
        <span class="tr-action-metric"><em>Target Sets</em>${targetSets}</span>
        <span class="tr-action-metric"><em>Actual Sets</em>${actualSets}</span>
      </div>
      ${aiSupported && quality ? `
      <div class="tr-quality">
        <div class="tr-quality-head">
          <span>Perfect Ratio</span>
          <span>${perfectRate}%</span>
        </div>
        <div class="tr-quality-bar"><i style="width:${perfectRate}%"></i></div>
        <div class="tr-quality-errors">
          ${summaryText ? `<p>${summaryText}</p>` : ""}
          ${topErrors.map((entry) => `<p>${entry.label}: ${entry.percent}% occurrences</p>`).join("")}
        </div>
      </div>` : ""}
    `;
    if (idx >= 1) {
      card.hidden = true;
      hiddenCards.push(card);
    }
    reportActionList.appendChild(card);
  });
  if (hiddenCards.length) {
    const expandBtn = document.createElement("button");
    expandBtn.type = "button";
    expandBtn.className = "tr-btn tr-btn--ghost tr-action-expand-btn";
    expandBtn.textContent = "Show All Moves";
    expandBtn.setAttribute("aria-expanded", "false");
    expandBtn.addEventListener("click", () => {
      const isExpanded = expandBtn.getAttribute("aria-expanded") === "true";
      hiddenCards.forEach((card) => { card.hidden = isExpanded; });
      expandBtn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      expandBtn.textContent = isExpanded ? "Show All Moves" : "Collapse Moves";
    });
    reportActionList.appendChild(expandBtn);
  }
}

function renderReportAccuracyDistribution(distribution) {
  if (!reportAccuracyDistBlock || !reportAccuracyBetter || !reportAccuracyGood || !reportAccuracyPerfect) return;
  const safe = distribution && typeof distribution === "object" ? distribution : null;
  if (!safe) {
    reportAccuracyDistBlock.hidden = true;
    return;
  }
  const better = Math.max(0, Math.min(100, Number(safe.better) || 0));
  const good = Math.max(0, Math.min(100, Number(safe.good) || 0));
  const perfect = Math.max(0, Math.min(100, Number(safe.perfect) || 0));
  const total = Math.max(1, better + good + perfect);
  const betterPct = Math.round((better / total) * 100);
  const goodPct = Math.round((good / total) * 100);
  const perfectPct = Math.max(0, 100 - betterPct - goodPct);
  reportAccuracyBetter.style.width = `${betterPct}%`;
  reportAccuracyGood.style.width = `${goodPct}%`;
  reportAccuracyPerfect.style.width = `${perfectPct}%`;
  if (reportAccuracyBetterLabel) reportAccuracyBetterLabel.textContent = `Better ${betterPct}%`;
  if (reportAccuracyGoodLabel) reportAccuracyGoodLabel.textContent = `Good ${goodPct}%`;
  if (reportAccuracyPerfectLabel) reportAccuracyPerfectLabel.textContent = `Perfect ${perfectPct}%`;
  reportAccuracyDistBlock.hidden = false;
}

function showTrainingReport(payload) {
  if (payload && payload.reportFromScene) reportFromScene = payload.reportFromScene;
  const {
    userName,
    userAvatar,
    sceneLabel,
    durationSeconds,
    capacityKg,
    energyKj,
    caloriesKcal,
    modeLabel,
    equipmentLabel,
    maxResistance,
    timeline,
    planName,
    planDayName,
    planMovesData,
    finalAiScore,
    accuracyDistribution,
    aiSummary
  } = payload;
  const safeTimeline = Array.isArray(timeline) ? timeline : [];
  const peak = safeTimeline.length ? Math.max(...safeTimeline) : 0;
  const consistency = calcConsistency(safeTimeline, maxResistance);
  const isPlanTrainingReport = reportFromScene === "plan-training";
  const reportContext = `${reportFromScene || ""} ${sceneLabel || ""} ${modeLabel || ""} ${equipmentLabel || ""} ${planName || ""} ${payload.trainingType || ""}`;
  const isPilatesReport = reportFromScene === "pilates" || /\bpilates\b/i.test(reportContext);
  const isBodyweightCardioReport = isBodyweightCardioPayload(payload, reportContext);
  const hideResistanceMetrics = isPilatesReport || isBodyweightCardioReport;
  const effectiveCaloriesKcal = resolveSessionCaloriesKcal(payload, durationSeconds, capacityKg);
  const useEstimatedBurnLabels = isBodyweightCardioReport || payload?.isEstimatedBurn === true;
  const intensity = buildIntensityDistribution(timeline);
  const reportIntensityDistribution = intensity.zones;
  if (reportUserAvatar) reportUserAvatar.textContent = String(userAvatar || "A").slice(0, 1).toUpperCase();
  if (reportCongratsTitle) reportCongratsTitle.textContent = `Great Job, ${userName}`;
  if (reportSessionMeta) {
    reportSessionMeta.textContent = isPlanTrainingReport
      ? `Training completed • ${planName || "Plan Training"} • ${planDayName || "Week 1, Day 1"}`
      : `Session complete • ${sceneLabel}`;
  }
  const hasFinalAiScore = Number.isFinite(Number(finalAiScore));
  if (reportActionAnalysisBlock) reportActionAnalysisBlock.hidden = !hasFinalAiScore;
  if (reportFinalScoreWrap) reportFinalScoreWrap.hidden = !hasFinalAiScore;
  if (reportFinalScoreValue && hasFinalAiScore) reportFinalScoreValue.textContent = `${Math.round(Number(finalAiScore))}`;
  if (reportDurationValue) reportDurationValue.textContent = formatTime(durationSeconds);
  if (reportCapacityValue) reportCapacityValue.textContent = Number(capacityKg).toFixed(1);
  if (reportEnergyLabel) reportEnergyLabel.textContent = useEstimatedBurnLabels ? "Est. Energy Output" : "Output Energy";
  if (reportCaloriesLabel) reportCaloriesLabel.textContent = useEstimatedBurnLabels ? "Est. Calories" : "Calories";
  if (reportEnergyValue) reportEnergyValue.textContent = String(Math.max(0, Math.round(energyKjFromCalories(effectiveCaloriesKcal))));
  if (reportCaloriesValue) reportCaloriesValue.textContent = String(Math.max(0, Math.round(effectiveCaloriesKcal)));
  if (reportModeLabel) reportModeLabel.textContent = modeLabel;
  if (reportEquipmentLabel) reportEquipmentLabel.textContent = equipmentLabel;
  if (reportSceneLabel) reportSceneLabel.textContent = sceneLabel;
  if (reportIntensityRange) {
    if (!intensity.settingsCount) {
      reportIntensityRange.textContent = "No resistance recorded";
    } else {
      reportIntensityRange.textContent = intensity.settingsCount > 1
        ? `${intensity.settingsCount} settings · ${intensity.sessionSpan}`
        : `1 setting · ${intensity.sessionSpan}`;
    }
  }
  if (reportIntensityBar) {
    if (!reportIntensityDistribution.length) {
      reportIntensityBar.innerHTML = `<span class="tr-intensity-empty">No resistance data for this session.</span>`;
    } else {
      reportIntensityBar.innerHTML = reportIntensityDistribution
        .map((zone) => {
          const pct = Math.round(zone.ratio * 100);
          const showLabel = zone.ratio >= 0.08;
          const segmentLabel = showLabel
            ? (zone.ratio >= 0.14 ? `${zone.label} · ${pct}%` : `${pct}%`)
            : "";
          return `<span class="tr-intensity-segment ${zone.className}${zone.dominant ? " is-dominant" : ""}" style="width:${(zone.ratio * 100).toFixed(2)}%" role="img" aria-label="${zone.label}, ${zone.durationLabel}, ${pct}% of working time">${segmentLabel ? `<b class="tr-intensity-segment-label">${segmentLabel}</b>` : ""}</span>`;
        })
        .join("");
    }
  }
  if (reportIntensityLegend) {
    if (!reportIntensityDistribution.length) {
      reportIntensityLegend.innerHTML = "";
    } else {
      reportIntensityLegend.innerHTML = reportIntensityDistribution
        .map((zone) => `<div class="tr-legend-item${zone.dominant ? " is-dominant" : ""}"><span class="tr-legend-dot ${zone.className}"></span><span>${zone.label} · ${zone.durationLabel} · ${Math.round(zone.ratio * 100)}%${zone.dominant ? " · Top" : ""}</span></div>`)
        .join("");
    }
  }
  if (reportIntensityLegendNote) {
    reportIntensityLegendNote.textContent = reportIntensityDistribution.length
      ? "Each row is a resistance level you set during this session. Segments are ordered low to high; color shows relative intensity."
      : "Complete a strength session to see which resistance levels you used and for how long.";
  }
  if (reportCapacityStat) reportCapacityStat.hidden = hideResistanceMetrics;
  if (reportModeSetupBlock) reportModeSetupBlock.hidden = isPlanTrainingReport || hideResistanceMetrics;
  if (reportStrengthPowerBlock) reportStrengthPowerBlock.hidden = hideResistanceMetrics;
  if (reportActionCompletionBlock) reportActionCompletionBlock.hidden = !isPlanTrainingReport;
  if (isPlanTrainingReport) renderReportActionCompletion(planMovesData);
  else if (reportActionList) reportActionList.innerHTML = "";
  renderReportPowerCurve(payload);
  if (reportConsistency) reportConsistency.textContent = `${consistency}%`;
  if (reportCoachNote) reportCoachNote.textContent = aiSummary || getCoachNote(consistency, peak, maxResistance);
  renderReportAccuracyDistribution(accuracyDistribution);
  if (trainingReportScreen) {
    trainingReportScreen.classList.add("active");
    trainingReportScreen.setAttribute("aria-hidden", "false");
  }
}

function sampleIwTraining(currentSeconds) {
  if (!iwTrainingState.active) return;
  const second = Math.floor(currentSeconds);
  if (second === iwTrainingState.lastSecond) return;
  iwTrainingState.lastSecond = second;
  const bounds = getIwBounds();
  iwTrainingState.resistanceTimeline.push(snapshotUserSetWeightKg(iwState.weight, bounds));
  if (iwTrainingState.resistanceTimeline.length > 7200) iwTrainingState.resistanceTimeline.shift();
  // AI score state now changes by clicking the score card.
}

function updateIwTimeUI() {
  if (!iwVideo || !iwProgressFill || !iwTimeText) return;
  const current = iwVideo.currentTime || 0;
  const total = Number.isFinite(iwVideo.duration) && iwVideo.duration > 0 ? iwVideo.duration : 600;
  const progress = Math.min(100, (current / total) * 100);
  iwProgressFill.style.width = `${progress}%`;
  iwTimeText.textContent = `${formatTime(current)} / ${formatTime(total)}`;
  sampleIwTraining(current);
}

function clampIwWeight(val, bounds) {
  const clamped = Math.min(bounds.max, Math.max(bounds.min, val));
  if (bounds.step >= 1) return Math.round(clamped);
  return Math.round(clamped * 10) / 10;
}

function getIwSideSetupSummary() {
  const side = iwState.sideParticipation;
  const balance = iwState.weightBalance;
  if (side === "left") return IW_UI_ZH ? "仅左侧" : "Left only";
  if (side === "right") return IW_UI_ZH ? "仅右侧" : "Right only";
  if (balance === "split") {
    const bounds = getIwBounds();
    const left = formatResistanceDisplay(iwState.weightLeft, bounds);
    const right = formatResistanceDisplay(iwState.weightRight, bounds);
    return IW_UI_ZH ? `双侧 · 左 ${left} · 右 ${right}` : `Both · L ${left} · R ${right}`;
  }
  return IW_UI_ZH ? "双侧 · 同步" : "Both · Matched";
}

function getIwResistanceStatusText() {
  const side = iwState.sideParticipation;
  const balance = iwState.weightBalance;
  if (side === "left") return IW_UI_ZH ? "仅左侧缆绳参与" : "Left cable only";
  if (side === "right") return IW_UI_ZH ? "仅右侧缆绳参与" : "Right cable only";
  if (balance === "split") {
    const bounds = getIwBounds();
    const left = formatResistanceDisplay(iwState.weightLeft, bounds);
    const right = formatResistanceDisplay(iwState.weightRight, bounds);
    return IW_UI_ZH
      ? `双侧参与 · 左 ${left} kg · 右 ${right} kg`
      : `Both sides active · L ${left} kg · R ${right} kg`;
  }
  return IW_UI_ZH ? "双侧同步承重" : "Both sides active · matched weight";
}

function getIwActiveWeight() {
  if (iwState.sideParticipation === "left") return iwState.weightLeft;
  if (iwState.sideParticipation === "right") return iwState.weightRight;
  if (iwState.weightBalance === "split") {
    return iwState.editSide === "right" ? iwState.weightRight : iwState.weightLeft;
  }
  return iwState.weightLeft;
}

function setIwActiveWeight(val) {
  const bounds = getIwBounds();
  const next = clampIwWeight(val, bounds);
  if (iwState.sideParticipation === "left") {
    iwState.weightLeft = next;
    iwState.weight = next;
    return;
  }
  if (iwState.sideParticipation === "right") {
    iwState.weightRight = next;
    iwState.weight = next;
    return;
  }
  if (iwState.weightBalance === "match") {
    iwState.weightLeft = next;
    iwState.weightRight = next;
    iwState.weight = next;
    return;
  }
  if (iwState.editSide === "right") iwState.weightRight = next;
  else iwState.weightLeft = next;
  iwState.weight = getIwActiveWeight();
}

function getIwSummaryWeightText() {
  const bounds = getIwBounds();
  if (iwState.sideParticipation === "both" && iwState.weightBalance === "split") {
    const left = formatResistanceDisplay(iwState.weightLeft, bounds);
    const right = formatResistanceDisplay(iwState.weightRight, bounds);
    return `${left} / ${right}`;
  }
  return formatResistanceDisplay(getIwActiveWeight(), bounds);
}

function syncIwSideSetupUI() {
  const isBarbell = iwState.equipment === "barbell";
  const side = iwState.sideParticipation;
  const balance = iwState.weightBalance;
  const showBalance = side === "both";
  const showSplit = showBalance && balance === "split";

  if (iwSideGroup) {
    iwSideGroup.querySelectorAll(".iw-seg-btn").forEach((btn) => {
      const sideKey = btn.dataset.side || "both";
      btn.classList.toggle("active", sideKey === side);
      btn.disabled = isBarbell && sideKey !== "both";
    });
  }
  if (iwBalanceSetupRow) iwBalanceSetupRow.hidden = !showBalance;
  if (iwBalanceGroup) {
    iwBalanceGroup.querySelectorAll(".iw-seg-btn").forEach((btn) => {
      const balanceKey = btn.dataset.balance || "match";
      btn.classList.toggle("active", balanceKey === balance);
      btn.disabled = isBarbell && balanceKey === "split";
    });
  }
  if (iwSplitTargets) iwSplitTargets.hidden = !showSplit;
  if (showSplit) {
    const bounds = getIwBounds();
    if (iwSplitLeftVal) iwSplitLeftVal.textContent = formatResistanceDisplay(iwState.weightLeft, bounds);
    if (iwSplitRightVal) iwSplitRightVal.textContent = formatResistanceDisplay(iwState.weightRight, bounds);
    iwSplitTargets.querySelectorAll(".iw-split-pill").forEach((pill) => {
      const editSide = pill.dataset.editSide || "left";
      pill.classList.toggle("active", editSide === iwState.editSide);
      pill.classList.toggle("iw-split-pill--side-left", editSide === "left");
      pill.classList.toggle("iw-split-pill--side-right", editSide === "right");
    });
  }

  const statusText = getIwResistanceStatusText();
  const summaryText = getIwSideSetupSummary();
  if (iwResistanceStatus) iwResistanceStatus.textContent = statusText;
  if (iwSetupChip) iwSetupChip.textContent = summaryText;
}

function setIwSideParticipation(side) {
  if (iwState.equipment === "barbell" && side !== "both") return;
  iwState.sideParticipation = side;
  if (side === "left") iwState.editSide = "left";
  if (side === "right") iwState.editSide = "right";
  syncIwSideSetupUI();
  syncIwWeightUI();
}

function setIwWeightBalance(balance) {
  if (iwState.equipment === "barbell" && balance === "split") return;
  if (iwState.sideParticipation !== "both") return;
  iwState.weightBalance = balance;
  if (balance === "match") {
    const synced = getIwActiveWeight();
    iwState.weightLeft = synced;
    iwState.weightRight = synced;
  }
  syncIwSideSetupUI();
  syncIwWeightUI();
}

function setIwEditSide(side) {
  if (iwState.weightBalance !== "split" || iwState.sideParticipation !== "both") return;
  iwState.editSide = side === "right" ? "right" : "left";
  syncIwSideSetupUI();
  syncIwWeightUI();
}

function syncIwWeightUI() {
  if (!iwWeightValue) return;
  const bounds = getIwBounds();
  iwState.weightLeft = clampIwWeight(iwState.weightLeft, bounds);
  iwState.weightRight = clampIwWeight(iwState.weightRight, bounds);
  iwState.weight = clampIwWeight(getIwActiveWeight(), bounds);

  const v = formatResistanceDisplay(getIwActiveWeight(), bounds);
  iwWeightValue.textContent = v;
  if (iwSummaryWeight) iwSummaryWeight.textContent = getIwSummaryWeightText();
  syncIwSideSetupUI();

  const iwDialProgress = document.getElementById("iwDialProgress");
  if (iwDialProgress) {
    const span = bounds.max - bounds.min;
    const percent = span > 0 ? (getIwActiveWeight() - bounds.min) / span : 0;
    const dasharray = 339.29;
    const offset = dasharray - (dasharray * Math.max(0, Math.min(1, percent)));
    iwDialProgress.style.strokeDashoffset = offset;
  }
  syncIwSpringBarUI();
}

function springLevelToRaw(level) {
  const ratio = (level - videoPlayParamConfig.spring.minLevel) / (videoPlayParamConfig.spring.maxLevel - videoPlayParamConfig.spring.minLevel);
  return Math.round(videoPlayParamConfig.spring.rawSoft + ratio * (videoPlayParamConfig.spring.rawHard - videoPlayParamConfig.spring.rawSoft));
}

function isokineticLevelToRaw(level) {
  return level * videoPlayParamConfig.isokinetic.rawMultiplier;
}

function getIsoTip(level) {
  if (IW_UI_ZH) {
    if (level <= 5) return "慢速 / 稳定 — 限速较强，适合峰值力量训练。";
    if (level <= 15) return "标准 / 增肌 — 模拟常规健身房节奏。";
    return "爆发 / 运动 — 允许快速启动，限速较小。";
  }
  if (level <= 5) return "Slow / stability — strong speed limit, good for peak-force work.";
  if (level <= 15) return "Standard / hypertrophy — simulates typical gym tempo.";
  return "Power / sport — allows fast start, minimal speed limit.";
}

function updateIwParamPanel() {
  if (!iwParamPanel || !iwMetaChip || !iwParamLabel || !iwParamSlider || !iwParamDisplay || !iwParamTip || !iwParamSubmit) return;
  if (iwState.mode === "spring") {
    iwParamPanel.classList.add("show");
    iwParamLabel.textContent = IW_UI_ZH ? "弹簧档位" : "Spring level";
    iwParamSlider.min = String(videoPlayParamConfig.spring.minLevel);
    iwParamSlider.max = String(videoPlayParamConfig.spring.maxLevel);
    iwParamSlider.value = String(iwState.springLevel);
    iwParamDisplay.textContent = IW_UI_ZH ? `档位 ${iwState.springLevel}` : `Level ${iwState.springLevel}`;
    iwParamTip.textContent = IW_UI_ZH
      ? "档位越高，弹簧越硬，阻力随幅度增加越快。"
      : "Higher level = stiffer spring, resistance rises more with range.";
    iwParamSubmit.textContent = IW_UI_ZH
      ? `提交 springCoefficient = ${springLevelToRaw(iwState.springLevel)}`
      : `Submit springCoefficient = ${springLevelToRaw(iwState.springLevel)}`;
    iwMetaChip.textContent = IW_UI_ZH ? "弹簧阻力" : "Spring resistance";
  } else if (iwState.mode === "isokinetic") {
    iwParamPanel.classList.add("show");
    iwParamLabel.textContent = IW_UI_ZH ? "等速档位" : "Isokinetic level";
    iwParamSlider.min = String(videoPlayParamConfig.isokinetic.minLevel);
    iwParamSlider.max = String(videoPlayParamConfig.isokinetic.maxLevel);
    iwParamSlider.value = String(iwState.isokineticLevel);
    iwParamDisplay.textContent = IW_UI_ZH ? `档位 ${iwState.isokineticLevel}` : `Level ${iwState.isokineticLevel}`;
    iwParamTip.textContent = getIsoTip(iwState.isokineticLevel);
    iwParamSubmit.textContent = IW_UI_ZH
      ? `提交 isokineticRaw = ${isokineticLevelToRaw(iwState.isokineticLevel)}`
      : `Submit isokineticRaw = ${isokineticLevelToRaw(iwState.isokineticLevel)}`;
    iwMetaChip.textContent = IW_UI_ZH ? "速度限制" : "Speed limit";
  } else {
    iwParamPanel.classList.remove("show");
    iwMetaChip.textContent = IW_UI_ZH ? "功率稳定" : "Power stable";
  }
}

function setIwMode(mode) {
  if (!iwModeGroup || !iwSummaryMode || !iwModeChip) return;
  iwState.mode = mode;
  iwSummaryMode.textContent = iwModeMap[mode] || (IW_UI_ZH ? "标准" : "Standard");
  iwModeChip.textContent = iwModeMap[mode] || (IW_UI_ZH ? "标准" : "Standard");
  iwModeGroup.querySelectorAll(".iw-mode-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));
  updateIwParamPanel();
}

function setIwEquipment(kind) {
  if (!iwEquipBarbell || !iwEquipOther) return;
  iwState.equipment = kind;
  iwEquipBarbell.classList.toggle("active", kind === "barbell");
  iwEquipOther.classList.toggle("active", kind === "other");
  if (kind === "barbell") {
    iwState.sideParticipation = "both";
    iwState.weightBalance = "match";
    const synced = getIwActiveWeight();
    iwState.weightLeft = synced;
    iwState.weightRight = synced;
    iwState.weight = synced;
  }
  syncIwSideSetupUI();
  syncIwWeightUI();
}

function drawIwChartFrame() {
  if (!iwChartCtx || !iwChartCanvas) return;
  const { width, height } = iwChartCanvas;
  iwChartCtx.clearRect(0, 0, width, height);
  iwChartCtx.strokeStyle = "rgba(148,163,184,0.28)";
  iwChartCtx.lineWidth = 1;
  const rowGap = height / 4;
  for (let i = 1; i <= 3; i += 1) {
    const y = i * rowGap;
    iwChartCtx.beginPath();
    iwChartCtx.moveTo(0, y);
    iwChartCtx.lineTo(width, y);
    iwChartCtx.stroke();
  }
  if (iwState.tab === "rom") {
    const baseY = height * 0.55;
    const amp = height * 0.26;
    const waveLen = width / 3.8;
    iwChartCtx.lineWidth = 6;
    const romGradient = iwChartCtx.createLinearGradient(0, 0, width, 0);
    romGradient.addColorStop(0, "rgba(94, 234, 255, 0.96)");
    romGradient.addColorStop(0.5, "rgba(170, 221, 255, 0.95)");
    romGradient.addColorStop(1, "rgba(104, 163, 255, 0.92)");
    iwChartCtx.strokeStyle = romGradient;
    iwChartCtx.shadowBlur = 26;
    iwChartCtx.shadowColor = "rgba(102, 220, 255, 0.78)";
    iwChartCtx.beginPath();
    for (let x = 0; x <= width; x += 8) {
      const y = baseY - Math.sin((x + iwState.chartTick * 12) / waveLen) * amp;
      if (x === 0) iwChartCtx.moveTo(x, y);
      else iwChartCtx.lineTo(x, y);
    }
    iwChartCtx.stroke();
    iwChartCtx.shadowBlur = 0;
    const powerGradient = iwChartCtx.createLinearGradient(0, 0, width, 0);
    powerGradient.addColorStop(0, "rgba(255, 188, 123, 0.94)");
    powerGradient.addColorStop(0.5, "rgba(255, 171, 99, 0.96)");
    powerGradient.addColorStop(1, "rgba(255, 124, 70, 0.92)");
    iwChartCtx.strokeStyle = powerGradient;
    iwChartCtx.shadowBlur = 22;
    iwChartCtx.shadowColor = "rgba(255, 156, 90, 0.76)";
    iwChartCtx.beginPath();
    for (let x = 0; x <= width; x += 8) {
      const y = baseY - Math.sin((x + iwState.chartTick * 12 + 60) / waveLen) * amp * 0.95;
      if (x === 0) iwChartCtx.moveTo(x, y);
      else iwChartCtx.lineTo(x, y);
    }
    iwChartCtx.stroke();
    iwChartCtx.shadowBlur = 0;
  } else {
    const bars = 36;
    const barGap = 10;
    const barW = (width - barGap * (bars + 1)) / bars;
    
    // Slow down the animation speed significantly
    const slowTick = iwState.chartTick * 0.15;
    
    for (let i = 0; i < bars; i += 1) {
      const x = barGap + i * (barW + barGap);
      // Smoother and slower wave generation
      const noise = Math.sin((i * 0.5 + slowTick)) * 0.24 + Math.cos((i * 0.3 + slowTick * 0.8)) * 0.2;
      const h = Math.max(24, height * 0.28 + (noise + 0.5) * height * 0.48);
      const y = height - h - 8;
      
      // Use colors matching the ROM chart legend (cyan and orange theme)
      const isCyan = (i % 2 === 0);
      
      if (isCyan) {
        const grad = iwChartCtx.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, "rgba(94, 234, 255, 0.96)");
        grad.addColorStop(1, "rgba(104, 163, 255, 0.4)");
        iwChartCtx.fillStyle = grad;
      } else {
        const grad = iwChartCtx.createLinearGradient(0, y, 0, y + h);
        grad.addColorStop(0, "rgba(255, 188, 123, 0.94)");
        grad.addColorStop(1, "rgba(255, 124, 70, 0.4)");
        iwChartCtx.fillStyle = grad;
      }
      
      // Add subtle glow
      iwChartCtx.shadowBlur = 8;
      iwChartCtx.shadowColor = isCyan ? "rgba(94, 234, 255, 0.5)" : "rgba(255, 188, 123, 0.5)";
      
      // Draw rounded bar
      const radius = Math.min(barW / 2, h / 2);
      iwChartCtx.beginPath();
      iwChartCtx.moveTo(x + radius, y);
      iwChartCtx.lineTo(x + barW - radius, y);
      iwChartCtx.quadraticCurveTo(x + barW, y, x + barW, y + radius);
      iwChartCtx.lineTo(x + barW, y + h - radius);
      iwChartCtx.quadraticCurveTo(x + barW, y + h, x + barW - radius, y + h);
      iwChartCtx.lineTo(x + radius, y + h);
      iwChartCtx.quadraticCurveTo(x, y + h, x, y + h - radius);
      iwChartCtx.lineTo(x, y + radius);
      iwChartCtx.quadraticCurveTo(x, y, x + radius, y);
      iwChartCtx.closePath();
      iwChartCtx.fill();
    }
    iwChartCtx.shadowBlur = 0;
  }
  iwState.chartTick += 1;
  iwState.rafId = requestAnimationFrame(drawIwChartFrame);
}

function openImmersiveWorkout() {
  if (PLAN_B_PAGE === "move-detail") {
    try {
      sessionStorage.setItem(STORAGE_AD_META, JSON.stringify(adMeta));
    } catch (e) {
      /* ignore */
    }
    window.location.href = "plan-b-immersive-workout.html";
    return;
  }
  if (!iwActionTitle || !iwVideo || !iwVideoSource || !iwPlayBtn || !immersiveWorkoutScreen) return;
  // Standalone immersive demo: preserve shared drawer, controls and report routing.
  // Other page modes retain the existing video/recognition lifecycle.
  if (PLAN_B_PAGE === "immersive" && window.PlanBImmersiveDemo) {
    iwVideo.poster = "assets/strength-training-frame.png";
    iwVideoSource.removeAttribute("src");
    iwActionTitle.textContent = "站姿拉力训练";
    if (shell) shell.classList.add("app-immersive-active");
    immersiveWorkoutScreen.classList.add("active");
    immersiveWorkoutScreen.setAttribute("aria-hidden", "false");
    resetIwAiCapture();
    resetIwTrainingCapture();
    iwAiState.ready = true;
    iwState.playing = true;
    iwPlayBtn.textContent = "Pause";
    applyIwPilatesContext();
    // Match the existing entry behavior: the drawer initially opens.
    setIwDrawerOpen(true);
    window.PlanBImmersiveDemo.start({
      onResult: state => applyIwAiStateAndStats(state.score, state.tier, state.text, {
        personVisible: !state.unknown, scoreDisplay: state.unknown ? "—" : String(state.score)
      }),
      onTick: seconds => sampleIwTraining(seconds),
      onPlaying: playing => { iwState.playing = playing; }
    });
    if (!iwState.rafId && iwChartCtx) drawIwChartFrame();
    return;
  }
  iwActionTitle.textContent = adMeta.name;
  iwVideo.poster = adMeta.thumb;
  iwVideoSource.src = adMeta.video;
  iwVideo.load();
  iwVideo.pause();
  iwPlayBtn.textContent = IW_UI_ZH ? "继续" : "Play";
  iwState.playing = false;
  if (shell) shell.classList.add("app-immersive-active");
  immersiveWorkoutScreen.classList.add("active");
  immersiveWorkoutScreen.setAttribute("aria-hidden", "false");
  iwTrainingState.active = false;
  iwTrainingState.startedAt = 0;
  iwTrainingState.lastSecond = -1;
  iwTrainingState.resistanceTimeline = [];
  resetIwAiCapture();
  applyIwPilatesContext();
  if (!iwState.rafId && iwChartCtx) drawIwChartFrame();
  
  // Default to drawer open
  const iwDrawer = document.getElementById("iwDrawer");
  if (iwDrawer) {
    iwDrawer.classList.add("open");
  }
  if (iwAiReadyOverlay) {
    iwAiReadyOverlay.classList.add("is-visible");
    iwAiReadyOverlay.setAttribute("aria-hidden", "false");
  }
  if (iwRecognitionTimerId) {
    clearTimeout(iwRecognitionTimerId);
    iwRecognitionTimerId = 0;
  }
  selectedTrainer = "";
  scheduleAutoRecognition();
}

function closeImmersiveWorkout() {
  if (immersiveWorkoutScreen) {
    immersiveWorkoutScreen.classList.remove("active");
    immersiveWorkoutScreen.setAttribute("aria-hidden", "true");
  }
  if (shell) shell.classList.remove("app-immersive-active");
  if (iwVideo) iwVideo.pause();
  if (iwState.rafId) {
    cancelAnimationFrame(iwState.rafId);
    iwState.rafId = 0;
  }
  iwTrainingState.active = false;
  resetIwAiCapture();
  if (iwAiReadyOverlay) {
    iwAiReadyOverlay.classList.remove("is-visible");
    iwAiReadyOverlay.setAttribute("aria-hidden", "true");
  }
  clearIwRecognitionFlow();
}

function clearIwRecognitionFlow() {
  if (iwRecognitionTimerId) {
    clearTimeout(iwRecognitionTimerId);
    iwRecognitionTimerId = 0;
  }
  if (iwAiReadyPanel) iwAiReadyPanel.classList.remove("is-scanning");
  iwRecogCycleIndex = 0;
}

function setRecogState(state) {
  if (!iwAiReadyPanel) return;
  iwAiReadyPanel.dataset.recogState = state;
  if (iwRecogHint) {
    iwRecogHint.hidden = state !== "scanning";
    iwRecogHint.textContent = IW_RECOG_HINT_MESSAGE;
  }
  if (iwRecogAlert) {
    iwRecogAlert.hidden = state !== "failure";
    if (state === "failure") iwRecogAlert.textContent = IW_RECOG_FAILURE_MESSAGE;
  }
  if (iwRecogZoneFrame) {
    iwRecogZoneFrame.classList.toggle("is-complete", state === "success");
    iwRecogZoneFrame.classList.toggle("is-error", state === "failure");
  }
  if (iwRecogCompleteBadge) {
    iwRecogCompleteBadge.hidden = state !== "success";
  }
  if (!iwRecogStatus) return;
  if (state === "scanning") {
    iwRecogStatus.textContent = "识别中…";
    iwRecogStatus.classList.remove("is-success", "is-failure");
    return;
  }
  if (state === "success") {
    iwRecogStatus.textContent = "识别成功";
    iwRecogStatus.classList.add("is-success");
    iwRecogStatus.classList.remove("is-failure");
    return;
  }
  iwRecogStatus.textContent = "识别失败";
  iwRecogStatus.classList.add("is-failure");
  iwRecogStatus.classList.remove("is-success");
}

function scheduleAutoRecognition() {
  clearIwRecognitionFlow();
  runRecogCycle();
}

function runRecogCycle() {
  if (!iwAiReadyPanel) return;
  const state = IW_RECOG_CYCLE[iwRecogCycleIndex % IW_RECOG_CYCLE.length];
  setRecogState(state);
  iwAiReadyPanel.classList.toggle("is-scanning", state === "scanning");
  const dwellMs =
    state === "scanning"
      ? IW_AI_GUIDANCE_DWELL_MS + IW_AI_SCAN_MS
      : state === "success"
        ? IW_AI_SUCCESS_DWELL_MS
        : IW_RECOG_FAILURE_DWELL_MS;
  iwRecognitionTimerId = window.setTimeout(() => {
    if (state === "success") {
      startIwTrainingAfterReady();
      return;
    }
    iwRecogCycleIndex += 1;
    runRecogCycle();
  }, dwellMs);
}

function startIwTrainingAfterReady() {
  if (!iwVideo || !iwPlayBtn) return;
  iwRecognitionTimerId = 0;
  if (iwAiReadyOverlay) {
    iwAiReadyOverlay.classList.remove("is-visible");
    iwAiReadyOverlay.setAttribute("aria-hidden", "true");
  }
  if (iwAiReadyPanel) iwAiReadyPanel.classList.remove("is-scanning");
  iwAiState.ready = true;
  iwAiState.cycleStep = 0;
  iwAiState.lastSecond = -1;
  resetIwTrainingCapture();
  const initialAiState = resolveIwAiClickState(0);
  updateIwAiPanel(initialAiState.score, initialAiState.tier, initialAiState.hint, initialAiState);
  iwVideo.play().catch(() => {});
  iwPlayBtn.textContent = IW_UI_ZH ? "暂停" : "Pause";
  iwState.playing = true;
}

function createCard(item, index) {
  const [name, desc, tag] = item;
  const card = document.createElement("article");
  card.className = "item";
  card.innerHTML = `
    <div class="thumb" style="background-image:url('${assetPaths[index % assetPaths.length]}')"></div>
    <div class="overlay"></div>
    <div class="meta">
      <h4>${name}</h4>
      <p>${desc}</p>
      <span class="tag">${tag}</span>
    </div>
  `;
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${name} detail`);
  card.addEventListener("click", () => openMoveDetail(item, index));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMoveDetail(item, index);
    }
  });
  return card;
}

function renderGrid() {
  if (!grid || !title) return;
  const items = exploreGridItems(currentCategory, currentFilter);
  title.textContent = exploreGridTitle(currentCategory, currentFilter);
  grid.dataset.view = exploreViewMode;
  grid.innerHTML = "";
  items.forEach((item, index) => grid.appendChild(createCard(item, index)));
}

function setExploreViewMode(mode) {
  if (mode !== "list" && mode !== "waterfall") return;
  exploreViewMode = mode;
  if (grid) grid.dataset.view = mode;
  exploreViewButtons.forEach((btn) => {
    const active = btn.dataset.view === mode;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

if (sideTabs.length) {
  sideTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentCategory = tab.dataset.category;
      currentFilter = "recommended";
      sideTabs.forEach((item) => item.classList.toggle("active", item === tab));
      renderGrid();
    });
  });
}

if (exploreViewButtons.length) {
  exploreViewButtons.forEach((tab) => {
    tab.addEventListener("click", () => {
      setExploreViewMode(tab.dataset.view);
    });
  });
}

function openTrainingTypeModal() {
  closeMoveDetailScreen();
  if (!modal) return;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function hideTrainingTypeModal() {
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

if (startTrainingModalBtn) startTrainingModalBtn.addEventListener("click", openTrainingTypeModal);
if (closeTrainingTypeModal) closeTrainingTypeModal.addEventListener("click", hideTrainingTypeModal);
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideTrainingTypeModal();
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && moveDetailScreen && moveDetailScreen.classList.contains("active")) {
    closeMoveDetailScreen();
  }
  if (event.key === "Escape" && modal && modal.classList.contains("active")) {
    hideTrainingTypeModal();
  }
  if (event.key === "Escape" && trainingReportScreen && trainingReportScreen.classList.contains("active")) {
    hideTrainingReport();
  }
});

if (exitMoveDetailBtn) exitMoveDetailBtn.addEventListener("click", closeMoveDetailScreen);
if (adStartTrainingBtn) adStartTrainingBtn.addEventListener("click", openImmersiveWorkout);

if (adActionHero && adVideoFallback) {
  adActionHero.addEventListener("error", () => {
    adVideoFallback.textContent = "Preview image unavailable.";
  });
}

if (iwEndBtn) iwEndBtn.addEventListener("click", openReportFromIwTraining);
if (iwAiRingCard) {
  iwAiRingCard.style.cursor = "pointer";
  iwAiRingCard.addEventListener("click", advanceIwAiCycleOnClick);
}
if (iwFlipBtn && iwVideo) {
  iwFlipBtn.addEventListener("click", () => {
    iwState.mirrored = !iwState.mirrored;
    iwVideo.style.transform = iwState.mirrored ? "scaleX(-1)" : "scaleX(1)";
    iwFlipBtn.classList.toggle("iw-btn--active", iwState.mirrored);
  });
}
if (iwPlayBtn && iwVideo) {
  iwPlayBtn.addEventListener("click", () => {
    if (PLAN_B_PAGE === "immersive" && window.PlanBImmersiveDemo?.active) {
      window.PlanBImmersiveDemo.togglePlaying();
      return;
    }
    if (!iwAiState.ready) {
      startIwTrainingAfterReady();
      return;
    }
    if (iwVideo.paused) {
      iwVideo.play().catch(() => {});
      iwState.playing = true;
      iwPlayBtn.textContent = IW_UI_ZH ? "暂停" : "Pause";
    } else {
      iwVideo.pause();
      iwState.playing = false;
      iwPlayBtn.textContent = IW_UI_ZH ? "继续" : "Play";
    }
  });
}
if (iwVideo) {
  iwVideo.addEventListener("timeupdate", updateIwTimeUI);
  iwVideo.addEventListener("loadedmetadata", updateIwTimeUI);
  iwVideo.addEventListener("error", updateIwTimeUI);
}
if (iwDecreaseBtn) {
  iwDecreaseBtn.addEventListener("click", () => {
    const bounds = getIwBounds();
    setIwActiveWeight(getIwActiveWeight() - bounds.step);
    syncIwWeightUI();
  });
}
if (iwIncreaseBtn) {
  iwIncreaseBtn.addEventListener("click", () => {
    const bounds = getIwBounds();
    setIwActiveWeight(getIwActiveWeight() + bounds.step);
    syncIwWeightUI();
  });
}
if (iwSideGroup) {
  iwSideGroup.addEventListener("click", (event) => {
    const btn = event.target.closest(".iw-seg-btn");
    if (!btn || btn.disabled) return;
    setIwSideParticipation(btn.dataset.side || "both");
  });
}
if (iwBalanceGroup) {
  iwBalanceGroup.addEventListener("click", (event) => {
    const btn = event.target.closest(".iw-seg-btn");
    if (!btn || btn.disabled) return;
    setIwWeightBalance(btn.dataset.balance || "match");
  });
}
if (iwSplitTargets) {
  iwSplitTargets.addEventListener("click", (event) => {
    const pill = event.target.closest(".iw-split-pill");
    if (!pill) return;
    setIwEditSide(pill.dataset.editSide || "left");
  });
}
if (iwModeGroup) {
  iwModeGroup.addEventListener("click", (event) => {
    const btn = event.target.closest(".iw-mode-btn");
    if (btn) setIwMode(btn.dataset.mode || "standard");
  });
}
if (iwParamSlider) {
  iwParamSlider.addEventListener("input", () => {
    const level = Number(iwParamSlider.value);
    if (iwState.mode === "spring") iwState.springLevel = level;
    if (iwState.mode === "isokinetic") iwState.isokineticLevel = level;
    updateIwParamPanel();
  });
}
if (iwChartTabs) {
  iwChartTabs.addEventListener("click", (event) => {
    const btn = event.target.closest(".iw-chart-tab");
    if (!btn) return;
    iwState.tab = btn.dataset.tab || "rom";
    iwChartTabs.querySelectorAll(".iw-chart-tab").forEach((item) => item.classList.toggle("active", item === btn));
  });
}
if (iwEquipBarbell) iwEquipBarbell.addEventListener("click", () => setIwEquipment("barbell"));
if (iwEquipOther) iwEquipOther.addEventListener("click", () => setIwEquipment("other"));
if (reportCloseBtn) {
  reportCloseBtn.addEventListener("click", () => {
    if (PLAN_B_PAGE === "report") {
      window.location.href = "index-plan-b-home.html";
      return;
    }
    hideTrainingReport();
  });
}
if (reportHomeBtn) {
  reportHomeBtn.addEventListener("click", () => {
    hideTrainingReport();
    if (PLAN_B_PAGE === "report") {
      window.location.href = "index-plan-b-home.html";
      return;
    }
    closeMoveDetailScreen();
    hidePilatesView();
  });
}
if (reportAgainBtn) {
  reportAgainBtn.addEventListener("click", () => {
    hideTrainingReport();
    if (PLAN_B_PAGE === "report") {
      if (reportFromScene === "immersive") window.location.href = "plan-b-immersive-workout.html";
      else if (reportFromScene === "pilates") window.location.href = "plan-b-free-training-pilates.html";
      else if (reportFromScene === "plan-training") window.location.href = "plan-b-plan-training.html";
      else window.location.href = "index-plan-b-home.html";
      return;
    }
    if (reportFromScene === "immersive") {
      openImmersiveWorkout();
    }
  });
}

let iwDragStartY = 0;
let iwDragging = false;
let iwHasMoved = false;
function setIwDrawerOpen(open) {
  if (!iwDrawer) return;
  if (PLAN_B_PAGE === "plan-training" && !open) return;
  iwDrawer.classList.toggle("open", open);
}

// Add close overlay capability
const iwMask = document.querySelector(".iw-mask");
const iwTop = document.querySelector(".iw-top");

function closeIwDrawer() {
  setIwDrawerOpen(false);
}

if (iwMask) {
  iwMask.addEventListener("click", closeIwDrawer);
}
if (iwTop) {
  iwTop.addEventListener("click", (e) => {
    // Prevent closing if clicking on buttons inside the top header
    if(e.target.closest('.iw-btn')) return;
    closeIwDrawer();
  });
}

function onIwDragStart(clientY) {
  iwDragStartY = clientY;
  iwDragging = true;
  iwHasMoved = false;
}
function onIwDragMove(clientY) {
  if (!iwDragging) return;
  const delta = clientY - iwDragStartY;
  if (Math.abs(delta) < 18) return;
  iwHasMoved = true;
  setIwDrawerOpen(delta < 0);
}
function onIwDragEnd() {
  iwDragging = false;
  iwDragStartY = 0;
  setTimeout(() => { iwHasMoved = false; }, 0);
}
if (iwDrawerHandle && iwDrawer) {
  iwDrawerHandle.addEventListener("click", (e) => {
    if (window.PlanBImmersiveDemo?.active && e.target.closest("button, input, select, a")) return;
    if (iwHasMoved) return;
    setIwDrawerOpen(!iwDrawer.classList.contains("open"));
  });
  if (typeof PointerEvent !== "undefined") {
    iwDrawerHandle.addEventListener("pointerdown", (e) => {
      if (window.PlanBImmersiveDemo?.active && e.target.closest("button, input, select, a")) return;
      onIwDragStart(e.clientY);
      iwDrawerHandle.setPointerCapture(e.pointerId);
    });
    iwDrawerHandle.addEventListener("pointermove", (e) => onIwDragMove(e.clientY));
    iwDrawerHandle.addEventListener("pointerup", (e) => {
      if (iwDrawerHandle.hasPointerCapture(e.pointerId)) iwDrawerHandle.releasePointerCapture(e.pointerId);
      onIwDragEnd();
    });
    iwDrawerHandle.addEventListener("pointercancel", (e) => {
      if (iwDrawerHandle.hasPointerCapture(e.pointerId)) iwDrawerHandle.releasePointerCapture(e.pointerId);
      onIwDragEnd();
    });
  } else {
    iwDrawerHandle.addEventListener("touchstart", (e) => { if (e.touches[0]) onIwDragStart(e.touches[0].clientY); }, { passive: true });
    iwDrawerHandle.addEventListener("touchmove", (e) => { if (e.touches[0]) onIwDragMove(e.touches[0].clientY); }, { passive: true });
    iwDrawerHandle.addEventListener("touchend", onIwDragEnd);
    iwDrawerHandle.addEventListener("mousedown", (e) => onIwDragStart(e.clientY));
    window.addEventListener("mousemove", (e) => onIwDragMove(e.clientY));
    window.addEventListener("mouseup", onIwDragEnd);
  }
}

if (iwWeightValue && iwSummaryWeight) syncIwWeightUI();
if (iwModeGroup && iwSummaryMode && iwModeChip) setIwMode(videoPlayParamConfig.defaultMode);
if (iwEquipBarbell && iwEquipOther) setIwEquipment(iwState.equipment);
else syncIwSideSetupUI();
syncActionDetail();

const strengthTrainingBtn = document.getElementById("strengthTrainingBtn");
if (strengthTrainingBtn) {
  strengthTrainingBtn.addEventListener("click", () => {
    hideTrainingTypeModal();
    window.location.href = "free-training-strength-temp.html";
  });
}
const resistanceCardioBtn = document.getElementById("resistanceCardioBtn");
if (resistanceCardioBtn) {
  resistanceCardioBtn.addEventListener("click", () => {
    hideTrainingTypeModal();
    window.location.href = "free-training-strength-temp.html?type=resistance_cardio";
  });
}

const pilatesView = document.getElementById("pilatesView");
const contentSection = document.querySelector(".content");
const bottomNav = document.querySelector(".bottom-nav");

function showPilatesView() {
  if (!pilatesView) return;
  hideTrainingTypeModal();
  if (contentSection) contentSection.style.display = "none";
  if (bottomNav) bottomNav.style.display = "none";
  pilatesView.classList.add("is-active");
  pilatesView.setAttribute("aria-hidden", "false");
  if (typeof initPilatesDashboard === "function") initPilatesDashboard();
}

function hidePilatesView() {
  if (!pilatesView) return;
  pilatesView.classList.remove("is-active");
  pilatesView.setAttribute("aria-hidden", "true");
  if (contentSection) contentSection.style.display = "";
  if (bottomNav) bottomNav.style.display = "";
}

const pilatesTrainingBtn = document.getElementById("pilatesTrainingBtn");
if (pilatesTrainingBtn) {
  pilatesTrainingBtn.addEventListener("click", () => {
    if (PLAN_B_PAGE === "home" || PLAN_B_PAGE === "profile") {
      hideTrainingTypeModal();
      window.location.href = "plan-b-free-training-pilates.html";
      return;
    }
    showPilatesView();
  });
}

let pilatesDashboardWired = false;

function initPilatesDashboard() {
  const root = document.getElementById("pilatesView");
  if (!root || !root.classList.contains("is-active")) return;
  if (pilatesDashboardWired) return;
  pilatesDashboardWired = true;

  const durationValue = document.getElementById("pilatesDurationValue");
  const resistanceValue = document.getElementById("pilatesResistanceValue");
  const energyValue = document.getElementById("pilatesEnergyValue");
  const calorieValue = document.getElementById("pilatesCalorieValue");
  const startBtn = document.getElementById("pilatesStartBtn");
  const endBtn = document.getElementById("pilatesEndBtn");
  const flipBtn = document.getElementById("pilatesFlipBtn");
  const screenWrap = document.getElementById("pilatesScreenWrap");
  const resistanceMinus = document.getElementById("pilatesResistanceMinus");
  const resistancePlus = document.getElementById("pilatesResistancePlus");
  const resistanceDisplayVal = document.getElementById("pilatesResistanceDisplayVal");
  const dialProgress = document.getElementById("pilatesDialProgress");
  const springCoil = document.getElementById("pilatesSpringCoil");
  const springMarker = document.getElementById("pilatesSpringMarker");
  const stepNote = document.getElementById("pilatesStepNote");
  const chartAvgValue = document.getElementById("pilatesChartAvgValue");
  const modeBtns = Array.from(root.querySelectorAll("#pilatesModeGroup .seg-btn"));
  const chartTabs = Array.from(root.querySelectorAll("#pilatesChartTabs .chart-tab"));
  const canvas = document.getElementById("romPowerCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const bounds = {
    min: PILATES_RESISTANCE.min,
    max: PILATES_RESISTANCE.max,
    step: PILATES_RESISTANCE.step,
    default: PILATES_RESISTANCE.default
  };
  const DASHARRAY = 213.63;

  let trainingMode = "spring";
  let resistanceKg = bounds.default;
  let chartTab = "rom";
  let elapsedSeconds = 0;
  let calories = 0;
  let isRunning = false;
  let timerId = null;
  let frameId = null;
  let chartTick = 0;
  let dpr = 1;
  let resistanceTimeline = [];

  function formatDuration(totalSeconds) {
    const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const sec = String(totalSeconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  }

  function renderResistance() {
    if (resistanceDisplayVal) resistanceDisplayVal.textContent = String(resistanceKg);
    if (dialProgress) {
      const span = bounds.max - bounds.min;
      const percent = span > 0 ? (resistanceKg - bounds.min) / span : 0;
      dialProgress.style.strokeDashoffset = DASHARRAY - (DASHARRAY * Math.max(0, Math.min(1, percent)));
    }
    if (resistanceValue) resistanceValue.textContent = String(resistanceKg);
    updatePilatesSpringBarVisual(springCoil, springMarker, resistanceKg, bounds.min, bounds.max);
    return resistanceKg;
  }

  function setTrainingMode(mode) {
    trainingMode = mode;
    modeBtns.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));
  }

  function setChartTab(tab) {
    chartTab = tab;
    chartTabs.forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => setTrainingMode(btn.dataset.mode || "standard"));
  });
  chartTabs.forEach((btn) => {
    btn.addEventListener("click", () => setChartTab(btn.dataset.tab || "rom"));
  });

  if (resistanceMinus) {
    resistanceMinus.addEventListener("click", () => {
      if (resistanceKg > bounds.min) {
        resistanceKg = Math.max(bounds.min, resistanceKg - bounds.step);
        renderResistance();
      }
    });
  }
  if (resistancePlus) {
    resistancePlus.addEventListener("click", () => {
      if (resistanceKg < bounds.max) {
        resistanceKg = Math.min(bounds.max, resistanceKg + bounds.step);
        renderResistance();
      }
    });
  }

  function drawWave(ctx2d, width, height, baseY, amp, waveLen, phaseOffset, gradient, shadowColor) {
    ctx2d.lineWidth = 4;
    ctx2d.strokeStyle = gradient;
    ctx2d.shadowBlur = 18;
    ctx2d.shadowColor = shadowColor;
    ctx2d.beginPath();
    for (let x = 0; x <= width; x += 6) {
      const y = baseY - Math.sin((x + chartTick * 10 + phaseOffset) / waveLen) * amp;
      if (x === 0) ctx2d.moveTo(x, y);
      else ctx2d.lineTo(x, y);
    }
    ctx2d.stroke();
    ctx2d.shadowBlur = 0;
  }

  function resizeCanvas() {
    if (!root.classList.contains("is-active")) return;
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width)) || 640;
    const h = Math.max(1, Math.floor(rect.height)) || 180;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reducedMotion) drawChart();
  }

  function drawChart() {
    if (!root.classList.contains("is-active")) return;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;
    if (width < 2 || height < 2) {
      if (!reducedMotion) frameId = requestAnimationFrame(drawChart);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(148,163,184,0.22)";
    ctx.lineWidth = 1;
    const rowGap = height / 4;
    for (let i = 1; i <= 3; i += 1) {
      ctx.beginPath();
      ctx.moveTo(0, i * rowGap);
      ctx.lineTo(width, i * rowGap);
      ctx.stroke();
    }

    const baseY = height * 0.55;
    const waveLen = width / 3.5;
    const amp = height * 0.22 * (resistanceKg / 20);
    const leftAmp = amp;
    const rightAmp = amp;

    const leftGrad = ctx.createLinearGradient(0, 0, width, 0);
    leftGrad.addColorStop(0, "rgba(94, 234, 255, 0.96)");
    leftGrad.addColorStop(1, "rgba(104, 163, 255, 0.92)");
    const rightGrad = ctx.createLinearGradient(0, 0, width, 0);
    rightGrad.addColorStop(0, "rgba(255, 188, 123, 0.94)");
    rightGrad.addColorStop(1, "rgba(255, 124, 70, 0.92)");

    if (chartTab === "rom") {
      drawWave(ctx, width, height, baseY, leftAmp, waveLen, 0, leftGrad, "rgba(102, 220, 255, 0.78)");
      drawWave(ctx, width, height, baseY, rightAmp, waveLen, 60, rightGrad, "rgba(255, 156, 90, 0.76)");
    } else {
      drawWave(ctx, width, height, baseY, leftAmp * 0.9, waveLen, 30, leftGrad, "rgba(102, 220, 255, 0.78)");
      drawWave(ctx, width, height, baseY, rightAmp * 0.9, waveLen, 90, rightGrad, "rgba(255, 156, 90, 0.76)");
    }

    if (chartAvgValue) {
      chartAvgValue.textContent = ((leftAmp + rightAmp) / (height * 0.22) * 10).toFixed(1);
    }

    chartTick += 1;
    if (!reducedMotion) frameId = requestAnimationFrame(drawChart);
  }

  function tickTraining() {
    if (!isRunning) return;
    elapsedSeconds += 1;
    const resistance = renderResistance();
    resistanceTimeline.push(resistance);
    if (resistanceTimeline.length > 7200) resistanceTimeline.shift();
    const energyStep = resistance * (0.42 + Math.random() * 0.3);
    calories += energyStep * 0.24;
    if (energyValue) energyValue.textContent = energyKjFromCalories(calories).toFixed(1);
    if (calorieValue) calorieValue.textContent = String(Math.round(calories));
    if (durationValue) durationValue.textContent = formatDuration(elapsedSeconds);
  }

  function startTraining() {
    if (isRunning) return;
    isRunning = true;
    resistanceTimeline = [];
    if (startBtn) startBtn.disabled = true;
    timerId = setInterval(tickTraining, 1000);
  }

  function endTraining() {
    isRunning = false;
    clearInterval(timerId);
    timerId = null;
    if (startBtn) startBtn.disabled = false;
    const timeline = resistanceTimeline.length
      ? resistanceTimeline.slice()
      : buildSyntheticTimeline(Math.max(12, elapsedSeconds), renderResistance(), trainingMode);
    const capacityKg = sumResistanceTimeline(timeline);
    const modeLabel = iwModeMapReport[trainingMode] || "Standard";
    const pilatesReportPayload = {
      reportFromScene: "pilates",
      userName: getReportUser().name,
      userAvatar: getReportUser().avatar,
      sceneLabel: "Free Training",
      durationSeconds: Math.max(1, elapsedSeconds || timeline.length),
      capacityKg,
      energyKj: energyKjFromCalories(calories),
      caloriesKcal: calories,
      modeLabel,
      equipmentLabel: "Handles",
      maxResistance: bounds.max,
      timeline
    };
    if (PLAN_B_PAGE === "pilates") {
      try {
        sessionStorage.setItem(STORAGE_REPORT_PAYLOAD, JSON.stringify(pilatesReportPayload));
      } catch (e) {
        /* ignore */
      }
      window.location.href = "plan-b-training-report.html";
      return;
    }
    reportFromScene = "pilates";
    showTrainingReport(pilatesReportPayload);
  }

  if (startBtn) startBtn.addEventListener("click", startTraining);
  if (endBtn) {
    endBtn.addEventListener("click", () => {
      endTraining();
      if (PLAN_B_PAGE !== "pilates") hidePilatesView();
    });
  }
  pilatesEndTrainingFn = endTraining;
  if (flipBtn && screenWrap) {
    flipBtn.addEventListener("click", () => {
      screenWrap.classList.toggle("flipped");
    });
  }

  const statusTime = document.getElementById("pilatesStatusTime");
  const statusDate = document.getElementById("pilatesStatusDate");
  const now = new Date();
  if (statusTime) {
    statusTime.textContent =
      String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
  }
  if (statusDate) {
    statusDate.textContent = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;
  }
  if (stepNote) stepNote.textContent = `Step: ${bounds.step} kg`;

  setTrainingMode("spring");
  setChartTab("rom");
  renderResistance();
  if (durationValue) durationValue.textContent = formatDuration(elapsedSeconds);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("beforeunload", () => {
    if (timerId) clearInterval(timerId);
    if (frameId) cancelAnimationFrame(frameId);
  });
  resizeCanvas();
  setTimeout(resizeCanvas, 80);
  if (reducedMotion) drawChart();
  else frameId = requestAnimationFrame(drawChart);
}

if (grid) {
  setExploreViewMode("list");
  renderGrid();
  if (PLAN_B_PAGE === "home") {
    const initView = new URLSearchParams(window.location.search).get("view");
    if (initView === "waterfall" || initView === "list") setExploreViewMode(initView);
  }
}

function initPlanDetailPage() {
  if (PLAN_B_PAGE !== "plan-detail") return;
  const allTraining = (libraryData && libraryData.allTraining) || {};
  const plans = Array.isArray(allTraining.plans) ? allTraining.plans : [];
  const planDetails = allTraining.planDetails && typeof allTraining.planDetails === "object" ? allTraining.planDetails : {};
  const movePool = Array.isArray(allTraining.moves) ? allTraining.moves : [];
  if (!plans.length) return;

  const backBtn = document.getElementById("planDetailBackBtn");
  const coverEl = document.getElementById("planDetailCover");
  const titleEl = document.getElementById("planDetailTitle");
  const introEl = document.getElementById("planDetailIntro");
  const sceneEl = document.getElementById("planDetailScene");
  const cycleEl = document.getElementById("planDetailCycle");
  const sessionsEl = document.getElementById("planDetailSessions");
  const difficultyEl = document.getElementById("planDetailDifficulty");
  const planTypeEl = document.getElementById("planDetailPlanType");
  const sceneChipEl = document.getElementById("planDetailSceneChip");
  const cycleChipEl = document.getElementById("planDetailCycleChip");
  const sessionsChipEl = document.getElementById("planDetailSessionsChip");
  const difficultyChipEl = document.getElementById("planDetailDifficultyChip");
  const planTypeChipEl = document.getElementById("planDetailPlanTypeChip");
  const hintEl = document.getElementById("planDetailScheduleHint");
  const weekTabsEl = document.getElementById("planDetailWeekTabs");
  const dayTabsEl = document.getElementById("planDetailDayTabs");
  const movesTitleEl = document.getElementById("planDetailMovesTitle");
  const movesListEl = document.getElementById("planDetailMovesList");
  const emptyEl = document.getElementById("planDetailMovesEmpty");
  const dayActionsEl = document.getElementById("planDetailDayActions");
  const daySkipBtn = document.getElementById("planDetailSkipDayBtn");
  const dayRescheduleBtn = document.getElementById("planDetailRescheduleDayBtn");
  const dayActionHintEl = document.getElementById("planDetailDayActionHint");
  const actionWrapEl = document.getElementById("planDetailActions");
  const primaryBtn = document.getElementById("planDetailPrimaryBtn");
  const moreBtn = document.getElementById("planDetailMoreBtn");
  const quitBtn = document.getElementById("planDetailQuitBtn");
  const resetBtn = document.getElementById("planDetailResetBtn");
  if (!coverEl || !titleEl || !introEl || !sceneEl || !cycleEl || !sessionsEl || !difficultyEl || !hintEl || !weekTabsEl || !dayTabsEl || !movesListEl || !emptyEl) return;

  const params = new URLSearchParams(window.location.search);
  const requestedPlanId = params.get("planId") || "";
  const fallbackPlan = plans[0];
  const overview = plans.find((item) => item && item.id === requestedPlanId) || fallbackPlan;
  if (!overview) return;
  const pickedDetail = planDetails[overview.id] || null;
  const showPersonalizedType = params.get("personalized") === "1" || Boolean(overview.isPersonalized);

  const parseLeadingInt = (value, fallbackValue) => {
    const matched = String(value || "").match(/\d+/);
    const numeric = matched ? parseInt(matched[0], 10) : NaN;
    return Number.isFinite(numeric) && numeric > 0 ? numeric : fallbackValue;
  };
  const cycleWeeksCount = parseLeadingInt(overview.cycleWeeks, 2);
  const sessionsPerWeekCount = parseLeadingInt(overview.sessionsPerWeek, 3);

  function buildFallbackSchedule() {
    const safePool = movePool.length ? movePool : [{ name: "Base Move", equipment: "Bodyweight", difficulty: "Beginner" }];
    const weeks = [];
    for (let w = 1; w <= cycleWeeksCount; w += 1) {
      const days = [];
      for (let d = 1; d <= sessionsPerWeekCount; d += 1) {
        const seed = (w - 1) * sessionsPerWeekCount + (d - 1);
        const first = safePool[seed % safePool.length];
        const second = safePool[(seed + 2) % safePool.length];
        const third = safePool[(seed + 5) % safePool.length];
        const makeMove = (item, idx) => {
          const reps = 8 + ((seed + idx) % 6);
          const sets = 3 + ((seed + idx) % 2);
          const rest = 30 + ((seed + idx) % 4) * 10;
          const hasWeight = !/bodyweight/i.test(String(item.equipment || ""));
          return {
            name: item.name || "Move",
            sets,
            repsOrDuration: `${reps} reps`,
            restSeconds: rest,
            weightKg: hasWeight ? 10 + ((seed + idx) % 8) * 2 : undefined
          };
        };
        days.push({
          day: d,
          moves: [makeMove(first, 0), makeMove(second, 1), makeMove(third, 2)]
        });
      }
      weeks.push({ week: w, days });
    }
    return weeks;
  }

  const mergedPlan = {
    id: overview.id,
    name: (pickedDetail && pickedDetail.name) || overview.name || "Plan Name",
    intro: (pickedDetail && pickedDetail.intro) || overview.summary || "Plan description is coming soon.",
    scene: (pickedDetail && pickedDetail.scene) || overview.scene || "Strength Training",
    cycleWeeks: (pickedDetail && pickedDetail.cycleWeeks) || overview.cycleWeeks || `${cycleWeeksCount} Weeks`,
    sessionsPerWeek: (pickedDetail && pickedDetail.sessionsPerWeek) || overview.sessionsPerWeek || `${sessionsPerWeekCount} Sessions`,
    difficulty: (pickedDetail && pickedDetail.difficulty) || overview.difficulty || "Beginner",
    cover: (pickedDetail && pickedDetail.cover) || overview.cover || assetPaths[(plans.indexOf(overview) + 1) % Math.max(1, assetPaths.length)],
    schedule: Array.isArray(pickedDetail && pickedDetail.schedule) && pickedDetail.schedule.length ? pickedDetail.schedule : buildFallbackSchedule()
  };

  titleEl.textContent = mergedPlan.name;
  introEl.textContent = mergedPlan.intro;
  sceneEl.textContent = mergedPlan.scene;
  cycleEl.textContent = mergedPlan.cycleWeeks;
  sessionsEl.textContent = mergedPlan.sessionsPerWeek;
  difficultyEl.textContent = mergedPlan.difficulty;
  coverEl.src = mergedPlan.cover || assetPaths[0] || "";
  coverEl.alt = `${mergedPlan.name} cover image`;

  const slugifyMetaValue = (value) => String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  function syncMetaChipClass(chipEl, category, value) {
    if (!chipEl) return;
    const valueSlug = slugifyMetaValue(value);
    chipEl.className = `plan-detail-meta-chip plan-detail-meta-chip--category-${category} plan-detail-meta-chip--value-${category}-${valueSlug}`;
  }

  syncMetaChipClass(sceneChipEl, "scene", mergedPlan.scene);
  syncMetaChipClass(cycleChipEl, "cycle", mergedPlan.cycleWeeks);
  syncMetaChipClass(sessionsChipEl, "sessions", mergedPlan.sessionsPerWeek);
  syncMetaChipClass(difficultyChipEl, "difficulty", mergedPlan.difficulty);
  if (planTypeChipEl && planTypeEl) {
    planTypeChipEl.hidden = !showPersonalizedType;
    if (showPersonalizedType) {
      planTypeEl.textContent = "Personalized";
      syncMetaChipClass(planTypeChipEl, "plan-type", "Personalized");
    }
  }

  const schedule = mergedPlan.schedule;
  const initialWeek = Math.max(1, parseInt(params.get("week") || "1", 10) || 1);
  const initialDay = Math.max(1, parseInt(params.get("day") || "1", 10) || 1);
  const state = {
    weekIndex: Math.min(schedule.length, initialWeek) - 1,
    dayIndex: 0
  };
  const initialDays = Array.isArray(schedule[state.weekIndex] && schedule[state.weekIndex].days)
    ? schedule[state.weekIndex].days
    : [];
  state.dayIndex = Math.min(initialDays.length || 1, initialDay) - 1;

  const readJoinedIds = () => {
    try {
      const raw = sessionStorage.getItem(STORAGE_JOINED_PLANS);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
    } catch (e) {
      return [];
    }
  };
  const writeJoinedIds = (ids) => {
    try {
      sessionStorage.setItem(STORAGE_JOINED_PLANS, JSON.stringify(ids));
    } catch (e) {
      /* ignore */
    }
  };
  const readPlanProgressMap = () => {
    try {
      const raw = sessionStorage.getItem(STORAGE_PLAN_PROGRESS);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch (e) {
      return {};
    }
  };
  const writePlanProgressMap = (mapValue) => {
    try {
      sessionStorage.setItem(STORAGE_PLAN_PROGRESS, JSON.stringify(mapValue));
    } catch (e) {
      /* ignore */
    }
  };
  const readPlanDayStatusMap = (planId) => {
    const mapValue = readPlanProgressMap();
    const rawValue = mapValue && mapValue[planId];
    if (Array.isArray(rawValue)) {
      // Backward compatibility with previous array-only finished status.
      return rawValue
        .filter((item) => typeof item === "string")
        .reduce((acc, key) => {
          acc[key] = "finished";
          return acc;
        }, {});
    }
    if (!rawValue || typeof rawValue !== "object") return {};
    const nextValue = {};
    Object.entries(rawValue).forEach(([dayKey, dayStatus]) => {
      if (dayStatus === "finished" || dayStatus === "skipped") {
        nextValue[String(dayKey)] = dayStatus;
      }
    });
    return nextValue;
  };
  const writePlanDayStatusMap = (planId, statusMap) => {
    const mapValue = readPlanProgressMap();
    const safeMap = {};
    Object.entries(statusMap || {}).forEach(([dayKey, dayStatus]) => {
      if (dayStatus === "finished" || dayStatus === "skipped") {
        safeMap[String(dayKey)] = dayStatus;
      }
    });
    mapValue[planId] = safeMap;
    writePlanProgressMap(mapValue);
  };
  const clearPlanProgress = (planId) => {
    const mapValue = readPlanProgressMap();
    delete mapValue[planId];
    writePlanProgressMap(mapValue);
  };
  const isJoinedPlan = () => readJoinedIds().includes(mergedPlan.id);
  const toDayKey = (weekValue, dayValue) => `${Number(weekValue)}-${Number(dayValue)}`;
  const getCurrentDayMeta = () => {
    const weekNode = schedule[state.weekIndex] || { week: state.weekIndex + 1, days: [] };
    const dayNode = Array.isArray(weekNode.days) ? weekNode.days[state.dayIndex] : null;
    const weekValue = Number(weekNode.week || state.weekIndex + 1);
    const dayValue = Number((dayNode && dayNode.day) || state.dayIndex + 1);
    return { weekValue, dayValue, dayKey: toDayKey(weekValue, dayValue) };
  };
  const readPlanDayRescheduleMap = (planId) => {
    try {
      const raw = sessionStorage.getItem(STORAGE_PLAN_DAY_RESCHEDULE);
      const parsed = raw ? JSON.parse(raw) : {};
      const planValue = parsed && typeof parsed === "object" ? parsed[planId] : null;
      if (!planValue || typeof planValue !== "object" || Array.isArray(planValue)) return {};
      const safeMap = {};
      Object.entries(planValue).forEach(([dayKey, dateKey]) => {
        if (typeof dateKey === "string") safeMap[String(dayKey)] = dateKey;
      });
      return safeMap;
    } catch (e) {
      return {};
    }
  };
  const writePlanDayReschedule = (planId, dayKey, dateKey) => {
    try {
      const raw = sessionStorage.getItem(STORAGE_PLAN_DAY_RESCHEDULE);
      const parsed = raw ? JSON.parse(raw) : {};
      const nextValue = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
      const planValue =
        nextValue[planId] && typeof nextValue[planId] === "object" && !Array.isArray(nextValue[planId])
          ? nextValue[planId]
          : {};
      planValue[dayKey] = dateKey;
      nextValue[planId] = planValue;
      sessionStorage.setItem(STORAGE_PLAN_DAY_RESCHEDULE, JSON.stringify(nextValue));
    } catch (e) {
      /* ignore */
    }
  };
  const orderedDayKeys = [];
  schedule.forEach((weekItem, weekIndex) => {
    const weekValue = Number(weekItem && weekItem.week) || weekIndex + 1;
    const days = Array.isArray(weekItem && weekItem.days) ? weekItem.days : [];
    days.forEach((dayItem, dayIndex) => {
      const dayValue = Number(dayItem && dayItem.day) || dayIndex + 1;
      orderedDayKeys.push(toDayKey(weekValue, dayValue));
    });
  });
  const dayOrderIndexMap = orderedDayKeys.reduce((acc, dayKey, idx) => {
    acc[dayKey] = idx;
    return acc;
  }, {});
  const dayMetaMap = {};
  schedule.forEach((weekItem, weekIndex) => {
    const weekValue = Number(weekItem && weekItem.week) || weekIndex + 1;
    const days = Array.isArray(weekItem && weekItem.days) ? weekItem.days : [];
    days.forEach((dayItem, dayIndex) => {
      const dayValue = Number(dayItem && dayItem.day) || dayIndex + 1;
      const dayKey = toDayKey(weekValue, dayValue);
      dayMetaMap[dayKey] = {
        weekValue,
        dayValue,
        moves: Array.isArray(dayItem && dayItem.moves) ? dayItem.moves : []
      };
    });
  });
  const requestedCurrentDay = Math.max(0, parseInt(params.get("currentDay") || "0", 10) || 0);
  const currentDayIndex = Math.max(0, requestedCurrentDay - 1);
  const isJoinedFromParams = params.get("joined") === "1";
  if (isJoinedFromParams) {
    const ids = new Set(readJoinedIds());
    ids.add(mergedPlan.id);
    writeJoinedIds(Array.from(ids));
    const currentStatusMap = readPlanDayStatusMap(mergedPlan.id);
    if (Object.keys(currentStatusMap).length === 0 && orderedDayKeys.length) {
      const finishedTarget = Math.max(1, Math.min(orderedDayKeys.length - 2, requestedCurrentDay - 1));
      const seedMap = {};
      orderedDayKeys.slice(0, Math.max(0, finishedTarget)).forEach((dayKey) => {
        seedMap[dayKey] = "finished";
      });
      const skippedIndex = Math.min(orderedDayKeys.length - 1, Math.max(1, finishedTarget));
      if (orderedDayKeys[skippedIndex]) {
        seedMap[orderedDayKeys[skippedIndex]] = "skipped";
      }
      writePlanDayStatusMap(mergedPlan.id, seedMap);
    }
  }

  const readTrainingDaysForRender = (planId) => {
    try {
      const raw = sessionStorage.getItem(STORAGE_PLAN_TRAINING_DAYS);
      const parsed = raw ? JSON.parse(raw) : {};
      const values = parsed && typeof parsed === "object" ? parsed[planId] : [];
      return Array.isArray(values)
        ? values.filter((item) => typeof item === "string" && /^\d{4}-\d{2}-\d{2}$/.test(item)).sort()
        : [];
    } catch (e) {
      return [];
    }
  };
  const addDaysToDateKey = (dateKey, addDays) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(dateKey || ""))) return "";
    const [yearText, monthText, dayText] = String(dateKey).split("-");
    const year = Number(yearText);
    const month = Number(monthText);
    const day = Number(dayText);
    if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return "";
    const date = new Date(year, month - 1, day);
    if (Number.isNaN(date.getTime())) return "";
    date.setDate(date.getDate() + addDays);
    const nextYear = date.getFullYear();
    const nextMonth = String(date.getMonth() + 1).padStart(2, "0");
    const nextDay = String(date.getDate()).padStart(2, "0");
    return `${nextYear}-${nextMonth}-${nextDay}`;
  };
  const buildBaseDateMap = () => {
    const selectedDateKeys = readTrainingDaysForRender(mergedPlan.id);
    if (!selectedDateKeys.length) return {};
    const baseDateMap = {};
    orderedDayKeys.forEach((dayKey, index) => {
      const selectedDate = selectedDateKeys[index % selectedDateKeys.length];
      const weekOffset = Math.floor(index / selectedDateKeys.length);
      baseDateMap[dayKey] = addDaysToDateKey(selectedDate, weekOffset * 7);
    });
    return baseDateMap;
  };
  const renderMoveCard = (move, parentEl) => {
    const card = document.createElement("article");
    card.className = "plan-detail-move-card";
    const top = document.createElement("div");
    top.className = "plan-detail-move-top";
    const name = document.createElement("h4");
    name.textContent = move.name || "Move";
    top.appendChild(name);
    card.appendChild(top);
    const tags = document.createElement("div");
    tags.className = "plan-detail-move-tags";
    const setsChip = document.createElement("span");
    setsChip.className = "plan-detail-tag";
    setsChip.textContent = `${Number(move.sets || 3)} sets`;
    const repsChip = document.createElement("span");
    repsChip.className = "plan-detail-tag";
    repsChip.textContent = move.repsOrDuration || "10 reps";
    const restChip = document.createElement("span");
    restChip.className = "plan-detail-tag";
    restChip.textContent = `${Number(move.restSeconds || 30)}s rest`;
    tags.append(setsChip, repsChip, restChip);
    if (Number.isFinite(Number(move.weightKg))) {
      const weightChip = document.createElement("span");
      weightChip.className = "plan-detail-tag plan-detail-tag--weight";
      weightChip.textContent = `${Number(move.weightKg)}kg`;
      tags.appendChild(weightChip);
    }
    card.appendChild(tags);
    parentEl.appendChild(card);
  };

  function renderMoves() {
    const weekNode = schedule[state.weekIndex] || { week: state.weekIndex + 1, days: [] };
    const dayNode = Array.isArray(weekNode.days) ? weekNode.days[state.dayIndex] : null;
    const weekLabel = String(weekNode.week || state.weekIndex + 1);
    const dayLabel = String((dayNode && dayNode.day) || state.dayIndex + 1).padStart(2, "0");
    hintEl.textContent = `Week ${weekLabel} · Day ${dayLabel}`;
    movesListEl.innerHTML = "";
    if (movesTitleEl) movesTitleEl.hidden = false;

    const { dayKey: currentDayKey } = getCurrentDayMeta();
    const currentMeta = dayMetaMap[currentDayKey] || { weekValue: Number(weekNode.week || 1), dayValue: Number((dayNode && dayNode.day) || 1), moves: [] };
    const currentMoves = Array.isArray(currentMeta.moves) ? currentMeta.moves : [];
    const joined = isJoinedPlan();
    const rescheduleMap = joined ? readPlanDayRescheduleMap(mergedPlan.id) : {};
    const baseDateMap = buildBaseDateMap();
    const resolveDateKey = (dayKey) => {
      const movedDate = rescheduleMap[dayKey];
      const baseDate = baseDateMap[dayKey];
      return movedDate || baseDate || "";
    };
    const currentDateKey = resolveDateKey(currentDayKey);
    const groupedDayKeys = currentDateKey
      ? orderedDayKeys.filter((dayKey) => resolveDateKey(dayKey) === currentDateKey)
      : [currentDayKey];
    const hasRescheduledAdds = joined && groupedDayKeys.some((dayKey) => dayKey !== currentDayKey && Boolean(rescheduleMap[dayKey]));

    if (!hasRescheduledAdds) {
      emptyEl.hidden = currentMoves.length > 0;
      currentMoves.forEach((move) => renderMoveCard(move, movesListEl));
      return;
    }

    if (movesTitleEl) movesTitleEl.hidden = true;
    let totalMoveCount = 0;
    groupedDayKeys.forEach((dayKey) => {
      const meta = dayMetaMap[dayKey];
      if (!meta) return;
      const moves = Array.isArray(meta.moves) ? meta.moves : [];
      totalMoveCount += moves.length;

      const group = document.createElement("section");
      group.className = "plan-detail-move-group";
      const groupHead = document.createElement("header");
      groupHead.className = "plan-detail-move-group-head";
      const title = document.createElement("h4");
      title.className = "plan-detail-group-title";
      const sourceDate = baseDateMap[dayKey] || resolveDateKey(dayKey) || currentDateKey;
      title.textContent = `${sourceDate} W${meta.weekValue} Day${meta.dayValue}`;
      const count = document.createElement("p");
      count.className = "plan-detail-group-count";
      count.textContent = `${moves.length} ${moves.length === 1 ? "move" : "moves"}`;
      groupHead.append(title, count);
      group.appendChild(groupHead);

      const list = document.createElement("div");
      list.className = "plan-detail-move-group-list";
      moves.forEach((move) => renderMoveCard(move, list));
      group.appendChild(list);
      movesListEl.appendChild(group);
    });
    emptyEl.hidden = totalMoveCount > 0;
  }

  let refreshDayActionControls = () => {};

  function renderDayTabs() {
    const weekNode = schedule[state.weekIndex] || { days: [] };
    const days = Array.isArray(weekNode.days) ? weekNode.days : [];
    const dayStatusMap = isJoinedPlan() ? readPlanDayStatusMap(mergedPlan.id) : {};
    if (!days.length) {
      dayTabsEl.innerHTML = "";
      renderMoves();
      return;
    }
    state.dayIndex = Math.min(state.dayIndex, days.length - 1);
    dayTabsEl.innerHTML = "";
    days.forEach((dayItem, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "plan-detail-tab-btn";
      if (idx === state.dayIndex) btn.classList.add("is-active");
      const weekValue = Number(weekNode.week || state.weekIndex + 1);
      const dayValue = Number(dayItem.day || idx + 1);
      const dayKey = toDayKey(weekValue, dayValue);
      const dayStatus = dayStatusMap[dayKey];
      const isFinished = dayStatus === "finished";
      const isSkipped = dayStatus === "skipped";
      btn.textContent = isFinished ? "Finished" : isSkipped ? "Skip" : `Day ${String(dayValue).padStart(2, "0")}`;
      btn.classList.toggle("is-finished", isFinished);
      btn.classList.toggle("is-skipped", isSkipped);
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(idx === state.dayIndex));
      btn.addEventListener("click", () => {
        state.dayIndex = idx;
        renderDayTabs();
      });
      dayTabsEl.appendChild(btn);
    });
    renderMoves();
    refreshDayActionControls();
  }

  function renderWeekTabs() {
    weekTabsEl.innerHTML = "";
    schedule.forEach((weekItem, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "plan-detail-tab-btn";
      if (idx === state.weekIndex) btn.classList.add("is-active");
      btn.textContent = `W${weekItem.week || idx + 1}`;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(idx === state.weekIndex));
      btn.addEventListener("click", () => {
        state.weekIndex = idx;
        state.dayIndex = 0;
        renderWeekTabs();
        renderDayTabs();
      });
      weekTabsEl.appendChild(btn);
    });
  }

  renderWeekTabs();
  renderDayTabs();

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const from = params.get("from");
      if (from === "all-training") {
        window.location.href = "plan-b-all-training.html?tab=plans";
      } else if (from === "my-training-plans") {
        const sourceTab = params.get("tab");
        const nextParams = new URLSearchParams();
        if (sourceTab === "ongoing" || sourceTab === "history") {
          nextParams.set("tab", sourceTab);
        }
        const queryString = nextParams.toString();
        const listUrl = queryString
          ? `plan-b-my-training-plans.html?${queryString}`
          : "plan-b-my-training-plans.html";
        window.location.replace(listUrl);
      } else {
        window.location.href = "index-plan-b-home.html";
      }
    });
  }

  if (primaryBtn) {
    const bottomSheetEl = document.getElementById("planJoinBottomSheet");
    const planJoinBackdrop = document.getElementById("planJoinBackdrop");
    const planJoinCloseBtn = document.getElementById("planJoinCloseBtn");
    const planJoinDaysList = document.getElementById("planJoinDaysList");
    const planJoinMaxDaysEl = document.getElementById("planJoinMaxDays");
    const planJoinConfirmBtn = document.getElementById("planJoinConfirmBtn");
    const confirmDialogEl = document.getElementById("planDetailConfirmDialog");
    const confirmBackdropEl = document.getElementById("planDetailConfirmBackdrop");
    const confirmTextEl = document.getElementById("planDetailConfirmText");
    const confirmCancelBtn = document.getElementById("planDetailConfirmCancel");
    const confirmOkBtn = document.getElementById("planDetailConfirmOk");
    const rescheduleDialogEl = document.getElementById("planDayRescheduleDialog");
    const rescheduleBackdropEl = document.getElementById("planDayRescheduleBackdrop");
    const rescheduleCloseBtn = document.getElementById("planDayRescheduleCloseBtn");
    const rescheduleCancelBtn = document.getElementById("planDayRescheduleCancel");
    const rescheduleConfirmBtn = document.getElementById("planDayRescheduleConfirm");
    const rescheduleWeekdaysEl = document.getElementById("planDayRescheduleWeekdays");
    const rescheduleGridEl = document.getElementById("planDayRescheduleGrid");
    const rescheduleHintEl = document.getElementById("planDayRescheduleHint");
    const moreSheetEl = document.getElementById("planDetailMoreSheet");
    const moreBackdropEl = document.getElementById("planDetailMoreBackdrop");
    const moreCloseBtn = document.getElementById("planDetailMoreCloseBtn");

    let pendingConfirmAction = null;
    /** @type {Element | null} */
    let confirmFocusReturn = null;
    let rescheduleSelectedDateKey = "";

    const maxSelectableDays = Math.min(7, Math.max(1, sessionsPerWeekCount));

    const formatLocalDateKey = (d) => {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    };

    const readTrainingDaysMap = () => {
      try {
        const raw = sessionStorage.getItem(STORAGE_PLAN_TRAINING_DAYS);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
      } catch (e) {
        return {};
      }
    };

    const writeTrainingDaysForPlan = (planId, dateKeys) => {
      try {
        const mapValue = readTrainingDaysMap();
        mapValue[planId] = Array.isArray(dateKeys) ? dateKeys.filter((k) => typeof k === "string") : [];
        sessionStorage.setItem(STORAGE_PLAN_TRAINING_DAYS, JSON.stringify(mapValue));
      } catch (e) {
        /* ignore */
      }
    };
    const readTrainingDaysForPlan = (planId) => {
      const mapValue = readTrainingDaysMap();
      const values = mapValue && mapValue[planId];
      return Array.isArray(values) ? values.filter((k) => typeof k === "string") : [];
    };

    /** @type {Set<string>} */
    let joinSheetSelectedKeys = new Set();
    /** @type {HTMLButtonElement[]} */
    let joinSheetDayButtons = [];

    const syncPlanActionButtons = () => {
      const joined = isJoinedPlan();
      primaryBtn.disabled = false;
      primaryBtn.textContent = joined ? "Start Training" : "Join Plan";
      primaryBtn.classList.toggle("is-joined", false);
      primaryBtn.setAttribute("aria-pressed", String(joined));
      if (moreBtn) moreBtn.hidden = !joined;
      if (actionWrapEl) actionWrapEl.classList.toggle("is-single-action", !joined);
      if (dayActionsEl) dayActionsEl.hidden = !joined;
      refreshDayActionControls();
    };

    const updateJoinConfirmButton = () => {
      if (!planJoinConfirmBtn) return;
      const ready = joinSheetSelectedKeys.size === maxSelectableDays;
      planJoinConfirmBtn.disabled = !ready;
    };

    const syncJoinDayItemsUI = () => {
      const atCap = joinSheetSelectedKeys.size >= maxSelectableDays;
      joinSheetDayButtons.forEach((btn) => {
        const key = btn.dataset.dateKey || "";
        const isSelected = joinSheetSelectedKeys.has(key);
        const shouldDisable = atCap && !isSelected;
        btn.classList.toggle("is-selected", isSelected);
        btn.classList.toggle("is-disabled", shouldDisable);
        btn.disabled = shouldDisable;
        btn.setAttribute("aria-pressed", String(isSelected));
        btn.setAttribute("aria-disabled", String(shouldDisable));
      });
      updateJoinConfirmButton();
    };

    const resolveTrainingWeekdaySet = () => {
      const dayKeys = readTrainingDaysForPlan(mergedPlan.id);
      const weekdaySet = new Set();
      dayKeys.forEach((dayKey) => {
        const date = new Date(dayKey);
        if (!Number.isNaN(date.getTime())) weekdaySet.add(date.getDay());
      });
      if (weekdaySet.size) return weekdaySet;
      for (let idx = 0; idx < sessionsPerWeekCount; idx += 1) {
        weekdaySet.add((idx + 1) % 7);
      }
      return weekdaySet;
    };

    const isDateWithTraining = (date, weekdaySet) => weekdaySet.has(date.getDay());

    const closeRescheduleDialog = () => {
      if (!rescheduleDialogEl) return;
      rescheduleDialogEl.setAttribute("aria-hidden", "true");
      if (
        (!confirmDialogEl || confirmDialogEl.getAttribute("aria-hidden") === "true") &&
        (!bottomSheetEl || bottomSheetEl.getAttribute("aria-hidden") === "true") &&
        (!moreSheetEl || moreSheetEl.getAttribute("aria-hidden") === "true")
      ) {
        document.body.style.overflow = "";
      }
    };

    const closeMoreSheet = () => {
      if (!moreSheetEl) return;
      moreSheetEl.setAttribute("aria-hidden", "true");
      if (
        (!confirmDialogEl || confirmDialogEl.getAttribute("aria-hidden") === "true") &&
        (!bottomSheetEl || bottomSheetEl.getAttribute("aria-hidden") === "true") &&
        (!rescheduleDialogEl || rescheduleDialogEl.getAttribute("aria-hidden") === "true")
      ) {
        document.body.style.overflow = "";
      }
    };

    const openMoreSheet = () => {
      if (!moreSheetEl) return;
      moreSheetEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const updateRescheduleHint = (selectedDate, weekdaySet) => {
      if (!rescheduleHintEl) return;
      const hasTraining = selectedDate ? isDateWithTraining(selectedDate, weekdaySet) : false;
      rescheduleHintEl.hidden = !hasTraining;
    };

    const renderRescheduleCalendar = () => {
      if (!rescheduleGridEl || !rescheduleWeekdaysEl || !rescheduleConfirmBtn) return;
      const weekdaySet = resolveTrainingWeekdaySet();
      const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      rescheduleWeekdaysEl.innerHTML = "";
      weekdayLabels.forEach((label) => {
        const node = document.createElement("span");
        node.className = "plan-detail-calendar-weekday";
        node.textContent = label;
        rescheduleWeekdaysEl.appendChild(node);
      });

      const startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      const spanDays = Math.min(28, Math.max(7, cycleWeeksCount * 7));
      const leadingGap = startDate.getDay();
      const selectedDate = rescheduleSelectedDateKey ? new Date(rescheduleSelectedDateKey) : null;

      rescheduleGridEl.innerHTML = "";
      for (let i = 0; i < leadingGap; i += 1) {
        const blankCell = document.createElement("span");
        blankCell.className = "plan-detail-calendar-day is-empty";
        blankCell.setAttribute("aria-hidden", "true");
        rescheduleGridEl.appendChild(blankCell);
      }

      for (let i = 0; i < spanDays; i += 1) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const dateKey = formatLocalDateKey(date);
        const hasTraining = isDateWithTraining(date, weekdaySet);
        const isSelected = dateKey === rescheduleSelectedDateKey;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "plan-detail-calendar-day";
        if (hasTraining) btn.classList.add("is-training");
        if (isSelected) btn.classList.add("is-selected");
        btn.textContent = String(date.getDate());
        btn.setAttribute("aria-pressed", String(isSelected));
        btn.setAttribute("aria-label", `${date.getMonth() + 1}/${date.getDate()}`);
        btn.addEventListener("click", () => {
          rescheduleSelectedDateKey = dateKey;
          renderRescheduleCalendar();
        });
        rescheduleGridEl.appendChild(btn);
      }

      rescheduleConfirmBtn.disabled = !rescheduleSelectedDateKey;
      updateRescheduleHint(selectedDate, weekdaySet);
    };

    refreshDayActionControls = () => {
      if (!dayActionsEl || !daySkipBtn || !dayRescheduleBtn || !dayActionHintEl) return;
      const joined = isJoinedPlan();
      if (!joined) {
        dayActionsEl.hidden = true;
        return;
      }
      const { dayKey } = getCurrentDayMeta();
      const statusMap = readPlanDayStatusMap(mergedPlan.id);
      const dayOrderIndex = Number.isFinite(dayOrderIndexMap[dayKey]) ? dayOrderIndexMap[dayKey] : 0;
      const isPastByProgress = dayOrderIndex < currentDayIndex;
      const isFinished = statusMap[dayKey] === "finished";
      if (isPastByProgress || isFinished) {
        dayActionsEl.hidden = true;
        return;
      }
      dayActionsEl.hidden = false;
      const isSkipped = statusMap[dayKey] === "skipped";
      daySkipBtn.disabled = isSkipped;
      daySkipBtn.textContent = isSkipped ? "Skipped" : "Skip";
      dayRescheduleBtn.disabled = false;
      const rescheduleMap = readPlanDayRescheduleMap(mergedPlan.id);
      if (rescheduleMap[dayKey]) {
        const date = new Date(rescheduleMap[dayKey]);
        if (!Number.isNaN(date.getTime())) {
          dayActionHintEl.hidden = false;
          dayActionHintEl.textContent = `Rescheduled to ${date.getMonth() + 1}/${date.getDate()}`;
        } else {
          dayActionHintEl.hidden = true;
          dayActionHintEl.textContent = "";
        }
      } else {
        dayActionHintEl.hidden = true;
        dayActionHintEl.textContent = "";
      }
    };

    const closePlanDetailConfirm = () => {
      if (!confirmDialogEl) return;
      confirmDialogEl.setAttribute("aria-hidden", "true");
      pendingConfirmAction = null;
      const ret = confirmFocusReturn;
      confirmFocusReturn = null;
      const joinSheetOpen = bottomSheetEl && bottomSheetEl.getAttribute("aria-hidden") === "false";
      const rescheduleOpen = rescheduleDialogEl && rescheduleDialogEl.getAttribute("aria-hidden") === "false";
      const moreSheetOpen = moreSheetEl && moreSheetEl.getAttribute("aria-hidden") === "false";
      if (!joinSheetOpen && !rescheduleOpen && !moreSheetOpen) {
        document.body.style.overflow = "";
      }
      if (joinSheetOpen) {
        if (planJoinCloseBtn) planJoinCloseBtn.focus();
      } else if (moreSheetOpen) {
        if (moreCloseBtn) moreCloseBtn.focus();
      } else if (ret && typeof ret.focus === "function") {
        ret.focus();
      }
    };

    const openPlanDetailConfirm = (message, onConfirm) => {
      if (!confirmDialogEl || !confirmTextEl) return;
      pendingConfirmAction = onConfirm;
      confirmTextEl.textContent = message;
      confirmFocusReturn = document.activeElement;
      confirmDialogEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (confirmOkBtn) confirmOkBtn.focus();
    };

    const openRescheduleDialog = () => {
      if (!rescheduleDialogEl) return;
      const { dayKey } = getCurrentDayMeta();
      const rescheduleMap = readPlanDayRescheduleMap(mergedPlan.id);
      rescheduleSelectedDateKey = rescheduleMap[dayKey] || "";
      renderRescheduleCalendar();
      rescheduleDialogEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (rescheduleConfirmBtn) rescheduleConfirmBtn.focus();
    };

    const closeJoinPlanBottomSheet = () => {
      if (!bottomSheetEl) return;
      bottomSheetEl.setAttribute("aria-hidden", "true");
      const confirmOpen = confirmDialogEl && confirmDialogEl.getAttribute("aria-hidden") === "false";
      const rescheduleOpen = rescheduleDialogEl && rescheduleDialogEl.getAttribute("aria-hidden") === "false";
      const moreOpen = moreSheetEl && moreSheetEl.getAttribute("aria-hidden") === "false";
      if (!confirmOpen && !rescheduleOpen && !moreOpen) {
        document.body.style.overflow = "";
      }
    };

    const openJoinPlanBottomSheet = () => {
      if (!bottomSheetEl || !planJoinDaysList) return;
      joinSheetSelectedKeys = new Set();
      if (planJoinMaxDaysEl) planJoinMaxDaysEl.textContent = String(maxSelectableDays);

      planJoinDaysList.innerHTML = "";
      joinSheetDayButtons = [];

      const start = new Date();
      start.setHours(0, 0, 0, 0);

      for (let i = 0; i < 7; i += 1) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const dateKey = formatLocalDateKey(d);
        const weekdayText = d.toLocaleDateString("en-US", { weekday: "short" });
        const month = d.getMonth() + 1;
        const dayNum = d.getDate();

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bottom-sheet-day-item";
        btn.dataset.dateKey = dateKey;
        btn.setAttribute("aria-pressed", "false");
        btn.setAttribute("aria-label", `${weekdayText} ${month}/${dayNum}`);

        const weekSpan = document.createElement("span");
        weekSpan.className = "day-week";
        weekSpan.textContent = weekdayText;
        const dateSpan = document.createElement("span");
        dateSpan.className = "day-date";
        dateSpan.textContent = `${month}/${dayNum}`;

        btn.append(weekSpan, dateSpan);
        btn.addEventListener("click", () => {
          if (joinSheetSelectedKeys.has(dateKey)) {
            joinSheetSelectedKeys.delete(dateKey);
          } else if (joinSheetSelectedKeys.size < maxSelectableDays) {
            joinSheetSelectedKeys.add(dateKey);
          }
          syncJoinDayItemsUI();
        });

        planJoinDaysList.appendChild(btn);
        joinSheetDayButtons.push(btn);
      }

      syncJoinDayItemsUI();
      bottomSheetEl.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const performJoinPlan = () => {
      const ids = new Set(readJoinedIds());
      ids.add(mergedPlan.id);
      writeJoinedIds(Array.from(ids));
      if (Object.keys(readPlanDayStatusMap(mergedPlan.id)).length === 0) {
        writePlanDayStatusMap(mergedPlan.id, {});
      }
      writeTrainingDaysForPlan(mergedPlan.id, Array.from(joinSheetSelectedKeys).sort());
      syncPlanActionButtons();
      renderDayTabs();
    };

    if (planJoinConfirmBtn) {
      planJoinConfirmBtn.addEventListener("click", () => {
        if (joinSheetSelectedKeys.size !== maxSelectableDays) return;
        performJoinPlan();
        closeJoinPlanBottomSheet();
      });
    }

    if (planJoinBackdrop) {
      planJoinBackdrop.addEventListener("click", closeJoinPlanBottomSheet);
    }
    if (planJoinCloseBtn) {
      planJoinCloseBtn.addEventListener("click", closeJoinPlanBottomSheet);
    }

    if (daySkipBtn) {
      daySkipBtn.addEventListener("click", () => {
        if (!isJoinedPlan()) return;
        const { dayKey } = getCurrentDayMeta();
        const statusMap = readPlanDayStatusMap(mergedPlan.id);
        if (statusMap[dayKey] === "skipped") return;
        openPlanDetailConfirm("Skip this training day? This will not affect the schedule of other training days.", () => {
          statusMap[dayKey] = "skipped";
          writePlanDayStatusMap(mergedPlan.id, statusMap);
          renderDayTabs();
        });
      });
    }

    if (dayRescheduleBtn) {
      dayRescheduleBtn.addEventListener("click", () => {
        if (!isJoinedPlan()) return;
        openRescheduleDialog();
      });
    }

    if (rescheduleConfirmBtn) {
      rescheduleConfirmBtn.addEventListener("click", () => {
        if (!rescheduleSelectedDateKey) return;
        const { dayKey } = getCurrentDayMeta();
        writePlanDayReschedule(mergedPlan.id, dayKey, rescheduleSelectedDateKey);
        closeRescheduleDialog();
        refreshDayActionControls();
      });
    }
    if (rescheduleCancelBtn) {
      rescheduleCancelBtn.addEventListener("click", closeRescheduleDialog);
    }
    if (rescheduleCloseBtn) {
      rescheduleCloseBtn.addEventListener("click", closeRescheduleDialog);
    }
    if (rescheduleBackdropEl) {
      rescheduleBackdropEl.addEventListener("click", closeRescheduleDialog);
    }
    if (moreBtn) {
      moreBtn.addEventListener("click", () => {
        if (!isJoinedPlan()) return;
        openMoreSheet();
      });
    }
    if (moreBackdropEl) {
      moreBackdropEl.addEventListener("click", closeMoreSheet);
    }
    if (moreCloseBtn) {
      moreCloseBtn.addEventListener("click", closeMoreSheet);
    }

    if (confirmOkBtn) {
      confirmOkBtn.addEventListener("click", () => {
        const fn = pendingConfirmAction;
        pendingConfirmAction = null;
        if (fn) fn();
        closePlanDetailConfirm();
      });
    }
    if (confirmCancelBtn) {
      confirmCancelBtn.addEventListener("click", () => {
        closePlanDetailConfirm();
      });
    }
    if (confirmBackdropEl) {
      confirmBackdropEl.addEventListener("click", () => {
        closePlanDetailConfirm();
      });
    }

    const onPlanDetailOverlayKeydown = (event) => {
      if (event.key !== "Escape") return;
      const moreOpen = moreSheetEl && moreSheetEl.getAttribute("aria-hidden") === "false";
      if (moreOpen) {
        event.preventDefault();
        closeMoreSheet();
        return;
      }
      const rescheduleOpen = rescheduleDialogEl && rescheduleDialogEl.getAttribute("aria-hidden") === "false";
      if (rescheduleOpen) {
        event.preventDefault();
        closeRescheduleDialog();
        return;
      }
      const confirmOpen = confirmDialogEl && confirmDialogEl.getAttribute("aria-hidden") === "false";
      if (confirmOpen) {
        event.preventDefault();
        closePlanDetailConfirm();
        return;
      }
      if (bottomSheetEl && bottomSheetEl.getAttribute("aria-hidden") === "false") {
        event.preventDefault();
        closeJoinPlanBottomSheet();
      }
    };
    document.addEventListener("keydown", onPlanDetailOverlayKeydown);

    primaryBtn.addEventListener("click", () => {
      if (!isJoinedPlan()) {
        openJoinPlanBottomSheet();
        return;
      }
      const weekNode = schedule[state.weekIndex] || { week: state.weekIndex + 1, days: [] };
      const dayNode = Array.isArray(weekNode.days) ? weekNode.days[state.dayIndex] : null;
      const dayMoves = Array.isArray(dayNode && dayNode.moves) ? dayNode.moves : [];
      const payload = {
        planId: mergedPlan.id,
        planName: mergedPlan.name,
        week: Number(weekNode.week || state.weekIndex + 1),
        day: Number((dayNode && dayNode.day) || state.dayIndex + 1),
        moves: dayMoves
      };
      try {
        sessionStorage.setItem(STORAGE_PLAN_TRAINING_SESSION, JSON.stringify(payload));
      } catch (e) {
        /* ignore */
      }
      window.location.href = "plan-b-plan-training.html";
    });

    if (quitBtn) {
      quitBtn.addEventListener("click", () => {
        closeMoreSheet();
        openPlanDetailConfirm("Are you sure you want to quit this plan? You will need to join again before training.", () => {
          const ids = readJoinedIds().filter((id) => id !== mergedPlan.id);
          writeJoinedIds(ids);
          clearPlanProgress(mergedPlan.id);
          try {
            const tdMap = readTrainingDaysMap();
            delete tdMap[mergedPlan.id];
            sessionStorage.setItem(STORAGE_PLAN_TRAINING_DAYS, JSON.stringify(tdMap));
          } catch (e) {
            /* ignore */
          }
          try {
            const raw = sessionStorage.getItem(STORAGE_PLAN_DAY_RESCHEDULE);
            const parsed = raw ? JSON.parse(raw) : {};
            if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
              delete parsed[mergedPlan.id];
              sessionStorage.setItem(STORAGE_PLAN_DAY_RESCHEDULE, JSON.stringify(parsed));
            }
          } catch (e) {
            /* ignore */
          }
          syncPlanActionButtons();
          renderDayTabs();
        });
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        closeMoreSheet();
        openPlanDetailConfirm("Are you sure you want to reset this plan? Your progress will be recalculated.", () => {
          writePlanDayStatusMap(mergedPlan.id, {});
          state.weekIndex = 0;
          state.dayIndex = 0;
          renderWeekTabs();
          renderDayTabs();
          writeTrainingDaysForPlan(mergedPlan.id, []);
          try {
            const raw = sessionStorage.getItem(STORAGE_PLAN_DAY_RESCHEDULE);
            const parsed = raw ? JSON.parse(raw) : {};
            if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
              delete parsed[mergedPlan.id];
              sessionStorage.setItem(STORAGE_PLAN_DAY_RESCHEDULE, JSON.stringify(parsed));
            }
          } catch (e) {
            /* ignore */
          }
          syncPlanActionButtons();
          openJoinPlanBottomSheet();
        });
      });
    }

    syncPlanActionButtons();
  }
}
initPlanDetailPage();

function initMoveDetailPage() {
  if (PLAN_B_PAGE !== "move-detail") return;
  const params = new URLSearchParams(location.search);
  if (params.get("from") === "all-training") {
    try {
      const raw = sessionStorage.getItem(STORAGE_AD_META);
      if (raw) {
        const selected = JSON.parse(raw);
        openMoveDetail(selected, parseInt(params.get("idx") || "0", 10) || 0);
        return;
      }
    } catch (e) {
      /* ignore */
    }
  }
  const idx = Math.max(0, parseInt(params.get("idx") || "0", 10) || 0);
  const cat = params.get("cat") || "plans";
  const filter = params.get("filter") || "recommended";
  const safeFilter = resolveExploreFilter(cat, filter);
  currentCategory = cat;
  currentFilter = safeFilter;
  const items = exploreGridItems(cat, safeFilter);
  if (items && items[idx] !== undefined) openMoveDetail(items[idx], idx);
}
initMoveDetailPage();

function initImmersivePage() {
  if (PLAN_B_PAGE !== "immersive") return;
  try {
    const raw = sessionStorage.getItem(STORAGE_AD_META);
    if (raw) Object.assign(adMeta, JSON.parse(raw));
  } catch (e) {
    /* ignore */
  }
  syncActionDetail();
  applyIwPilatesContext();
  if (iwModeGroup && iwSummaryMode && iwModeChip) setIwMode(videoPlayParamConfig.defaultMode);
  openImmersiveWorkout();
}
initImmersivePage();

function initPlanTrainingPage() {
  if (PLAN_B_PAGE !== "plan-training") return;
  if (
    !iwVideo ||
    !iwVideoSource ||
    !iwActionTitle ||
    !iwTimeText ||
    !ptProgressTrack ||
    !ptCurrentMoveName ||
    !ptCurrentMoveMeta ||
    !ptNextMovePreview ||
    !ptRunningControls ||
    !ptPauseTrainingBtn ||
    !ptEndTrainingBtn ||
    !ptRestOverlay ||
    !ptRestCountdown ||
    !ptRestNextMove
  ) return;

  const allTraining = (libraryData && libraryData.allTraining) || {};
  const planDetails = allTraining.planDetails && typeof allTraining.planDetails === "object" ? allTraining.planDetails : {};

  const parseLeadingInt = (value, fallbackValue) => {
    const matched = String(value || "").match(/\d+/);
    const numeric = matched ? parseInt(matched[0], 10) : NaN;
    return Number.isFinite(numeric) && numeric > 0 ? numeric : fallbackValue;
  };
  const normalizeMove = (move, idx) => {
    const targetReps = parseLeadingInt(move && move.repsOrDuration, 10);
    const sets = Math.max(1, Number(move && move.sets) || 3);
    const qualityTemplate = move && move.aiQualityTemplate && typeof move.aiQualityTemplate === "object"
      ? move.aiQualityTemplate
      : { errorTypes: ["Knee Valgus", "Short Range", "Core Instability"] };
    return {
      name: (move && move.name) || `Move ${idx + 1}`,
      targetReps,
      sets,
      restSeconds: Math.max(0, Number(move && move.restSeconds) || 30),
      aiSupported: move && Object.prototype.hasOwnProperty.call(move, "aiSupported") ? Boolean(move.aiSupported) : false,
      aiQualityTemplate: qualityTemplate
    };
  };
  const buildFallbackSession = () => {
    const detailKeys = Object.keys(planDetails);
    const firstPlan = detailKeys.length ? planDetails[detailKeys[0]] : null;
    const firstWeek = firstPlan && Array.isArray(firstPlan.schedule) ? firstPlan.schedule[0] : null;
    const firstDay = firstWeek && Array.isArray(firstWeek.days) ? firstWeek.days[0] : null;
    const moves = Array.isArray(firstDay && firstDay.moves) ? firstDay.moves : [];
    return {
      planName: (firstPlan && firstPlan.name) || "Plan Training",
      week: Number((firstWeek && firstWeek.week) || 1),
      day: Number((firstDay && firstDay.day) || 1),
      moves: moves.length ? moves : [{ name: "Kettlebell Squat", sets: 3, repsOrDuration: "10 reps", restSeconds: 30 }]
    };
  };
  const readSessionPayload = () => {
    try {
      const raw = sessionStorage.getItem(STORAGE_PLAN_TRAINING_SESSION);
      if (!raw) return buildFallbackSession();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return buildFallbackSession();
      if (!Array.isArray(parsed.moves) || !parsed.moves.length) return buildFallbackSession();
      return parsed;
    } catch (e) {
      return buildFallbackSession();
    }
  };

  const payload = readSessionPayload();
  const backToPlanDetail = () => {
    const params = new URLSearchParams();
    if (payload && payload.planId) params.set("planId", String(payload.planId));
    if (payload && Number.isFinite(Number(payload.week))) params.set("week", String(Number(payload.week)));
    if (payload && Number.isFinite(Number(payload.day))) params.set("day", String(Number(payload.day)));
    const query = params.toString();
    window.location.href = query ? `plan-b-plan-detail.html?${query}` : "plan-b-plan-detail.html";
  };
  ptState.sessionName = payload.planName || "Plan Training";
  ptState.sessionMoves = payload.moves.map(normalizeMove);
  ptState.moveProgress = ptState.sessionMoves.map(() => 0);
  ptState.moveIndex = 0;
  ptState.repsCompleted = 0;
  ptState.sessionElapsedSeconds = 0;
  ptState.moveResults = [];
  ptState.sessionTotalSeconds = ptState.sessionMoves.reduce((sum, move, idx) => {
    const moveSeconds = move.targetReps * 2;
    const restSeconds = idx < ptState.sessionMoves.length - 1 ? 30 : 0;
    return sum + moveSeconds + restSeconds;
  }, 0);

  if (shell) shell.classList.add("app-immersive-active");
  if (immersiveWorkoutScreen) {
    immersiveWorkoutScreen.classList.add("active");
    immersiveWorkoutScreen.setAttribute("aria-hidden", "false");
  }
  iwVideo.poster = adMeta.thumb;
  iwVideoSource.src = adMeta.video;
  iwVideo.load();
  iwVideo.pause();
  iwState.playing = false;
  setIwDrawerOpen(true);
  syncIwWeightUI();
  setIwMode("standard");
  if (!iwState.rafId && iwChartCtx) drawIwChartFrame();

  const clearRepTimer = () => {
    if (ptState.repTimerId) {
      clearInterval(ptState.repTimerId);
      ptState.repTimerId = 0;
    }
  };
  const clearRestTimer = () => {
    if (ptState.restTimerId) {
      clearInterval(ptState.restTimerId);
      ptState.restTimerId = 0;
    }
  };
  const stopAllTimers = () => {
    clearRepTimer();
    clearRestTimer();
  };

  const setControlState = (started) => {
    ptRunningControls.hidden = false;
    ptEndTrainingBtn.disabled = false;
    ptEndTrainingBtn.textContent = started ? "End Training" : "Back";
    if (!started) {
      ptPauseTrainingBtn.textContent = "Start Training";
      return;
    }
    ptPauseTrainingBtn.textContent = ptState.paused ? "Resume" : "Pause";
  };
  const updateTopTime = () => {
    const total = Math.max(1, ptState.sessionTotalSeconds);
    const elapsed = Math.min(total, Math.max(0, ptState.sessionElapsedSeconds));
    iwTimeText.textContent = `${formatTime(elapsed)} / ${formatTime(total)}`;
  };
  const renderProgressSegments = () => {
    ptProgressTrack.innerHTML = "";
    ptState.sessionMoves.forEach((_, idx) => {
      const seg = document.createElement("span");
      seg.className = "pt-progress-segment";
      const fill = document.createElement("i");
      fill.className = "pt-progress-segment-fill";
      const progress = Math.max(0, Math.min(1, Number(ptState.moveProgress[idx] || 0)));
      fill.style.width = `${(progress * 100).toFixed(2)}%`;
      seg.appendChild(fill);
      ptProgressTrack.appendChild(seg);
    });
  };
  const updateCurrentMoveUI = () => {
    const move = ptState.sessionMoves[ptState.moveIndex] || null;
    if (!move) return;
    const nextMove = ptState.sessionMoves[ptState.moveIndex + 1] || null;
    iwActionTitle.textContent = `${ptState.sessionName} · ${move.name}`;
    ptCurrentMoveName.textContent = move.name;
    ptCurrentMoveMeta.textContent = `${ptState.repsCompleted} / ${move.targetReps} reps · Set 1 / ${move.sets}`;
    ptNextMovePreview.textContent = nextMove ? `Next: ${nextMove.name}` : "Next: Last move";
    updateTopTime();
    renderProgressSegments();
  };
  const completePlanTraining = (forceReport) => {
    ptState.active = false;
    ptState.paused = false;
    ptState.inRest = false;
    ptRestOverlay.classList.remove("is-visible");
    ptRestOverlay.setAttribute("aria-hidden", "true");
    stopAllTimers();
    iwVideo.pause();
    if (forceReport) {
      const { durationSeconds: measuredDuration, timeline: measuredTimeline } = stopIwTrainingCapture();
      const timeline = measuredTimeline.length
        ? measuredTimeline
        : buildSyntheticTimeline(Math.max(18, measuredDuration || ptState.sessionElapsedSeconds || 30), iwState.weight, iwState.mode);
      const durationSeconds = Math.max(1, measuredDuration || ptState.sessionElapsedSeconds || timeline.length);
      const capacityKg = sumResistanceTimeline(timeline);
      const reportPayloadDraft = {
        reportFromScene: "plan-training",
        durationSeconds,
        capacityKg
      };
      const caloriesKcal = resolveSessionCaloriesKcal(reportPayloadDraft, durationSeconds, capacityKg);
      const energyKj = energyKjFromCalories(caloriesKcal);
      const weekNumber = Math.max(1, Number(payload && payload.week) || 1);
      const dayNumber = Math.max(1, Number(payload && payload.day) || 1);
      const moveResultMap = new Map(
        ptState.moveResults.map((item) => [item.moveIndex, item])
      );
      const planMovesData = ptState.sessionMoves.map((move, idx) => {
        const captured = moveResultMap.get(idx);
        if (captured) return captured;
        return {
          moveIndex: idx,
          name: move.name,
          targetSets: move.sets,
          targetReps: move.targetReps,
          actualSets: 0,
          actualReps: 0,
          durationSeconds: 0,
          aiSupported: Boolean(move.aiSupported),
          aiQuality: move.aiSupported ? buildAiQualitySnapshot(move, 0, 0) : null,
          powerSeries: []
        };
      });
      const aiPerfectRates = planMovesData
        .filter((item) => item && item.aiSupported && item.aiQuality && Number.isFinite(Number(item.aiQuality.perfectRate)))
        .map((item) => Math.max(0, Math.min(100, Number(item.aiQuality.perfectRate))));
      const finalAiScore = aiPerfectRates.length
        ? Math.round(aiPerfectRates.reduce((sum, value) => sum + value, 0) / aiPerfectRates.length)
        : null;
      const accuracyDistribution = aiPerfectRates.length
        ? aiPerfectRates.reduce((acc, score) => {
          if (score >= 90) acc.perfect += 1;
          else if (score >= 75) acc.good += 1;
          else acc.better += 1;
          return acc;
        }, { better: 0, good: 0, perfect: 0 })
        : null;
      const aiSummary = aiPerfectRates.length
        ? `AI reviewed ${aiPerfectRates.length} moves. Average form score ${finalAiScore}.`
        : "";
      const reportPayload = {
        reportFromScene: "plan-training",
        userName: getReportUser().name,
        userAvatar: getReportUser().avatar,
        sceneLabel: "Plan Training",
        planName: payload.planName || ptState.sessionName,
        planDayName: `Week ${weekNumber}, Day ${dayNumber}`,
        planMovesData,
        durationSeconds,
        capacityKg,
        energyKj,
        caloriesKcal,
        modeLabel: iwModeMapReport[iwState.mode] || "Standard",
        equipmentLabel: "Plan Flow",
        maxResistance: 120,
        timeline,
        finalAiScore,
        accuracyDistribution,
        aiSummary
      };
      try {
        sessionStorage.setItem(STORAGE_REPORT_PAYLOAD, JSON.stringify(reportPayload));
      } catch (e) {
        /* ignore */
      }
      window.location.href = "plan-b-training-report.html";
      return;
    }
    setControlState(false);
  };
  const openRestCountdown = () => {
    ptState.inRest = true;
    clearRepTimer();
    iwVideo.pause();
    const nextMove = ptState.sessionMoves[ptState.moveIndex + 1] || null;
    ptState.restRemaining = 30;
    ptRestCountdown.textContent = `${ptState.restRemaining}s`;
    ptRestNextMove.textContent = nextMove ? `Up next: ${nextMove.name}` : "Next move is preparing";
    ptRestOverlay.classList.add("is-visible");
    ptRestOverlay.setAttribute("aria-hidden", "false");
    clearRestTimer();
    ptState.restTimerId = window.setInterval(() => {
      if (!ptState.active || ptState.paused) return;
      ptState.sessionElapsedSeconds += 1;
      ptState.restRemaining -= 1;
      updateTopTime();
      ptRestCountdown.textContent = `${Math.max(0, ptState.restRemaining)}s`;
      if (ptState.restRemaining <= 0) {
        clearRestTimer();
        ptState.inRest = false;
        ptRestOverlay.classList.remove("is-visible");
        ptRestOverlay.setAttribute("aria-hidden", "true");
        ptState.moveIndex += 1;
        ptState.repsCompleted = 0;
        updateCurrentMoveUI();
        if (!ptState.paused) iwVideo.play().catch(() => {});
        startRepLoop();
      }
    }, 1000);
  };
  const finishCurrentMove = (skipped) => {
    const move = ptState.sessionMoves[ptState.moveIndex];
    if (!move) return;
    ptState.moveProgress[ptState.moveIndex] = 1;
    const actualReps = skipped ? Math.max(0, ptState.repsCompleted) : Math.max(move.targetReps, ptState.repsCompleted);
    const moveElapsedSeconds = Math.max(1, Math.round((performance.now() - ptState.moveStartAt) / 1000));
    const moveTimeline = iwTrainingState.resistanceTimeline.slice(ptState.moveStartTimelineIndex);
    const powerSeries = buildPowerSeries(moveTimeline);
    const actualSets = skipped ? 0 : Math.min(move.sets, 1);
    const moveResult = {
      moveIndex: ptState.moveIndex,
      name: move.name,
      targetSets: move.sets,
      targetReps: move.targetReps,
      actualSets,
      actualReps,
      durationSeconds: moveElapsedSeconds,
      aiSupported: Boolean(move.aiSupported),
      aiQuality: move.aiSupported ? buildAiQualitySnapshot(move, actualReps, actualSets) : null,
      powerSeries
    };
    const existingIdx = ptState.moveResults.findIndex((item) => item.moveIndex === ptState.moveIndex);
    if (existingIdx >= 0) ptState.moveResults[existingIdx] = moveResult;
    else ptState.moveResults.push(moveResult);
    ptState.repsCompleted = actualReps;
    updateCurrentMoveUI();
    if (ptState.moveIndex >= ptState.sessionMoves.length - 1) {
      completePlanTraining(true);
      return;
    }
    openRestCountdown();
  };
  function startRepLoop() {
    clearRepTimer();
    ptState.moveStartAt = performance.now();
    ptState.moveStartTimelineIndex = iwTrainingState.resistanceTimeline.length;
    ptState.repTimerId = window.setInterval(() => {
      if (!ptState.active || ptState.paused || ptState.inRest) return;
      const move = ptState.sessionMoves[ptState.moveIndex];
      if (!move) return;
      ptState.sessionElapsedSeconds += 1;
      sampleIwTraining(ptState.sessionElapsedSeconds);
      if (ptState.sessionElapsedSeconds % 2 === 0) {
        ptState.repsCompleted = Math.min(move.targetReps, ptState.repsCompleted + 1);
      }
      const progress = move.targetReps > 0 ? ptState.repsCompleted / move.targetReps : 1;
      ptState.moveProgress[ptState.moveIndex] = Math.max(0, Math.min(1, progress));
      updateCurrentMoveUI();
      if (ptState.repsCompleted >= move.targetReps) finishCurrentMove(false);
    }, 1000);
  }
  const startTraining = () => {
    if (ptState.active && !ptState.paused) return;
    if (!ptState.active) {
      ptState.active = true;
      ptState.paused = false;
      ptState.sessionElapsedSeconds = 0;
      ptState.repsCompleted = 0;
      ptState.moveIndex = 0;
      ptState.moveProgress = ptState.sessionMoves.map(() => 0);
      ptState.moveResults = [];
      resetIwTrainingCapture();
      updateCurrentMoveUI();
    } else {
      ptState.paused = false;
    }
    setControlState(true);
    if (!ptState.inRest) {
      iwVideo.play().catch(() => {});
      startRepLoop();
    }
  };
  const togglePause = () => {
    if (!ptState.active) {
      startTraining();
      return;
    }
    ptState.paused = !ptState.paused;
    if (ptState.paused) {
      iwVideo.pause();
      clearRepTimer();
    } else if (!ptState.inRest) {
      iwVideo.play().catch(() => {});
      startRepLoop();
    }
    setControlState(true);
  };
  const skipCurrentMove = () => {
    if (!ptState.active || ptState.inRest) return;
    finishCurrentMove(true);
  };
  const skipRest = () => {
    if (!ptState.active || !ptState.inRest) return;
    clearRestTimer();
    ptState.inRest = false;
    ptRestOverlay.classList.remove("is-visible");
    ptRestOverlay.setAttribute("aria-hidden", "true");
    ptState.moveIndex = Math.min(ptState.sessionMoves.length - 1, ptState.moveIndex + 1);
    ptState.repsCompleted = 0;
    updateCurrentMoveUI();
    if (!ptState.paused) {
      iwVideo.play().catch(() => {});
      startRepLoop();
    }
  };

  if (ptSkipMoveBtn) {
    ptSkipMoveBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      skipCurrentMove();
    });
  }
  ptPauseTrainingBtn.addEventListener("click", togglePause);
  ptEndTrainingBtn.addEventListener("click", () => {
    if (!ptState.active) {
      backToPlanDetail();
      return;
    }
    completePlanTraining(true);
  });
  if (ptSkipRestBtn) ptSkipRestBtn.addEventListener("click", skipRest);

  ptRestOverlay.classList.remove("is-visible");
  ptRestOverlay.setAttribute("aria-hidden", "true");
  setControlState(false);
  updateCurrentMoveUI();
}
initPlanTrainingPage();

function initReportPage() {
  if (PLAN_B_PAGE !== "report") return;
  try {
    const raw = sessionStorage.getItem(STORAGE_REPORT_PAYLOAD);
    if (raw) showTrainingReport(JSON.parse(raw));
  } catch (e) {
    /* ignore */
  }
}
initReportPage();

if (PLAN_B_PAGE === "pilates" && pilatesView) {
  pilatesView.classList.add("is-active");
  pilatesView.setAttribute("aria-hidden", "false");
  initPilatesDashboard();
}

// Accordion Interaction
function wireAccordions() {
  const headers = document.querySelectorAll(".ad-accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", (e) => {
      const accordion = header.closest(".ad-accordion");
      if (accordion) {
        const isOpen = accordion.classList.contains("is-open");
        if (isOpen) {
          accordion.classList.remove("is-open");
          header.setAttribute("aria-expanded", "false");
        } else {
          accordion.classList.add("is-open");
          header.setAttribute("aria-expanded", "true");
        }
      }
    });
  });
}
wireAccordions();

const homeTabBtn = document.getElementById("homeTabBtn");
const profileTabBtn = document.getElementById("profileTabBtn");
const homeScreen = document.getElementById("homeScreen");
const profileScreen = document.getElementById("profileScreen");

if (homeTabBtn && profileTabBtn && homeScreen && profileScreen) {
  homeTabBtn.addEventListener("click", () => {
    homeTabBtn.classList.add("active");
    profileTabBtn.classList.remove("active");
    if (allTrainingNavBtn) allTrainingNavBtn.classList.remove("active");
    homeScreen.style.display = "flex";
    profileScreen.classList.remove("active");
    profileScreen.setAttribute("aria-hidden", "true");
    profileScreen.scrollTop = 0;
  });

  profileTabBtn.addEventListener("click", () => {
    profileTabBtn.classList.add("active");
    homeTabBtn.classList.remove("active");
    if (allTrainingNavBtn) allTrainingNavBtn.classList.remove("active");
    homeScreen.style.display = "none";
    profileScreen.classList.add("active");
    profileScreen.setAttribute("aria-hidden", "false");
    profileScreen.scrollTop = 0;
  });
} else {
  if (PLAN_B_PAGE === "home" && profileTabBtn) {
    profileTabBtn.addEventListener("click", () => {
      window.location.href = "plan-b-profile.html";
    });
  }
  if (PLAN_B_PAGE === "profile" && homeTabBtn) {
    homeTabBtn.addEventListener("click", () => {
      window.location.href = "index-plan-b-home.html";
    });
  }
}

function wireAllTrainingNav() {
  if (!allTrainingNavBtn) return;
  allTrainingNavBtn.addEventListener("click", () => {
    window.location.href = "plan-b-all-training.html";
  });
}

if (PLAN_B_PAGE === "home" || PLAN_B_PAGE === "full" || PLAN_B_PAGE === "profile") {
  wireAllTrainingNav();
}

if (PLAN_B_PAGE === "all-training") {
  if (homeTabBtn) {
    homeTabBtn.addEventListener("click", () => {
      window.location.href = "index-plan-b-home.html";
    });
  }
  if (profileTabBtn) {
    profileTabBtn.addEventListener("click", () => {
      window.location.href = "plan-b-profile.html";
    });
  }
  wireAllTrainingNav();
}
