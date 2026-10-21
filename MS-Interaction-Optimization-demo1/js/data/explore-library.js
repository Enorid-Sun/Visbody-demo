/**
 * Demo explore grid data — replace with API in production.
 * Loaded before plan-b-verify.js; exposed for static file:// demos without a bundler.
 */
window.PlanBDemo = window.PlanBDemo || {};
window.PlanBDemo.assetPaths = [
  "assets/Snipaste_2026-03-12_21-07-16.jpg",
  "assets/card2.jpg",
  "assets/card3.jpg",
  "assets/card4.jpg"
];
window.PlanBDemo.libraryData = {
  moves: {
    title: "Recommended Moves",
    recommended: [
      ["Kettlebell Squat", "Lower body power &amp; stability", "Intermediate"],
      ["Power Row", "Back &amp; core chain", "Beginner–Intermediate"],
      ["Shoulder Press", "Upper body push control", "Intermediate–Advanced"],
      ["Pilates Core Flow", "Core stability &amp; breathing", "Beginner"],
      ["Battle Rope Burn", "Endurance &amp; power cycle", "Intermediate–Advanced"],
      ["Deadlift Basics", "Posterior chain focus", "Intermediate"]
    ],
    latest: [
      ["Single Arm Row", "Unilateral stability &amp; drive", "Latest"],
      ["Glute Bridge", "Glute activation &amp; control", "Beginner"],
      ["Chest Press", "Upper push &amp; tempo", "Intermediate"],
      ["Side Plank Lift", "Lateral chain stability", "Beginner–Intermediate"],
      ["Goblet Lunge", "Gait &amp; balance control", "Intermediate"],
      ["Breath Reset", "Breathing &amp; recovery", "Beginner"]
    ]
  },
  courses: {
    title: "Recommended Courses",
    recommended: [
      ["Strength Starter", "Full-body strength intro", "6 sessions"],
      ["Pilates Reset", "Core &amp; breath reset", "8 sessions"],
      ["Upper Power Block", "Upper body focus", "5 sessions"],
      ["Leg Focus Camp", "Lower body camp", "7 sessions"],
      ["Cardio Sculpt", "Cardio &amp; sculpt", "9 sessions"],
      ["Core Stability Lab", "Core stability lab", "6 sessions"]
    ],
    latest: [
      ["Hybrid Burn", "Strength &amp; cardio blend", "10 sessions"],
      ["Athletic Posture", "Posture &amp; control", "6 sessions"],
      ["Explosive Lower", "Lower body power", "5 sessions"],
      ["Core Breath Sync", "Core &amp; breath sync", "4 sessions"],
      ["Tempo Strength", "Tempo strength", "7 sessions"],
      ["Weekend Reset", "Weekend recovery", "3 sessions"]
    ]
  },
  plans: {
    title: "Recommended Plans",
    recommended: [
      ["Week 1 Build", "7-day beginner build", "7 days"],
      ["Core First Plan", "Core-first cycle", "14 days"],
      ["Lean Strength 21", "21-day lean strength", "21 days"],
      ["Pilates Habit", "Pilates habit", "14 days"],
      ["Power Progression", "Power progression", "28 days"],
      ["Desk Reset", "Desk reset plan", "7 days"]
    ],
    personalized: [
      ["Spring Cut Plan", "Spring cut plan", "30 days"],
      ["Starter Week", "One-week starter", "7 days"],
      ["Core Rehab Lite", "Light core rehab", "10 days"],
      ["Push Pull Split", "Push-pull cycle", "21 days"],
      ["Pilates Daily", "Daily Pilates", "14 days"],
      ["Weekend Athlete", "Weekend athlete", "8 days"]
    ],
    latest: [
      ["Spring Cut Plan", "Spring cut plan", "30 days"],
      ["Starter Week", "One-week starter", "7 days"],
      ["Core Rehab Lite", "Light core rehab", "10 days"],
      ["Push Pull Split", "Push-pull cycle", "21 days"],
      ["Pilates Daily", "Daily Pilates", "14 days"],
      ["Weekend Athlete", "Weekend athlete", "8 days"]
    ]
  },
  allTraining: {
    moves: [
      {
        id: "move-kettlebell-squat",
        name: "Kettlebell Squat",
        summary: "Lower-body strength and bracing control.",
        scene: "Strength Training",
        equipment: "Handle",
        targetArea: "Legs",
        difficulty: "Intermediate",
        supportsAi: true
      },
      {
        id: "move-power-row",
        name: "Power Row",
        summary: "Back chain drive with stable core.",
        scene: "Strength Training",
        equipment: "Dual Cable",
        targetArea: "Back",
        difficulty: "Beginner",
        supportsAi: true
      },
      {
        id: "move-shoulder-press",
        name: "Shoulder Press",
        summary: "Overhead pressing for upper-body power.",
        scene: "Strength Training",
        equipment: "Barbell",
        targetArea: "Shoulders",
        difficulty: "Advanced",
        supportsAi: false
      },
      {
        id: "move-pilates-core-flow",
        name: "Pilates Core Flow",
        summary: "Breath-led flow for deep core engagement.",
        scene: "Pilates",
        equipment: "Bodyweight",
        targetArea: "Full Body",
        difficulty: "Beginner",
        supportsAi: true
      },
      {
        id: "move-battle-rope-burn",
        name: "Battle Rope Burn",
        summary: "Fast intervals for cardio endurance.",
        scene: "Cardio Fat Burn",
        equipment: "Dual Cable",
        targetArea: "Upper Limbs",
        difficulty: "Advanced",
        supportsAi: false
      },
      {
        id: "move-deadlift-basics",
        name: "Deadlift Basics",
        summary: "Posterior chain mechanics and tempo control.",
        scene: "Strength Training",
        equipment: "Barbell",
        targetArea: "Back",
        difficulty: "Intermediate",
        supportsAi: true
      },
      {
        id: "move-glute-bridge",
        name: "Glute Bridge",
        summary: "Hip extension and glute activation practice.",
        scene: "Stretch Recovery",
        equipment: "Bodyweight",
        targetArea: "Glutes",
        difficulty: "Beginner",
        supportsAi: false
      },
      {
        id: "move-side-plank-lift",
        name: "Side Plank Lift",
        summary: "Lateral chain stability for shoulder and core.",
        scene: "Pilates",
        equipment: "Bodyweight",
        targetArea: "Shoulders",
        difficulty: "Intermediate",
        supportsAi: true
      },
      {
        id: "move-goblet-lunge",
        name: "Goblet Lunge",
        summary: "Single-leg control and posture training.",
        scene: "Strength Training",
        equipment: "Handle",
        targetArea: "Legs",
        difficulty: "Intermediate",
        supportsAi: true
      },
      {
        id: "move-breath-reset",
        name: "Breath Reset",
        summary: "Gentle breathing sequence for recovery.",
        scene: "Stretch Recovery",
        equipment: "Bodyweight",
        targetArea: "Full Body",
        difficulty: "Beginner",
        supportsAi: false
      }
    ],
    aiMoves: [
      {
        id: "ai-smart-squat-coach",
        name: "Smart Squat Coach",
        summary: "AI feedback for depth, hip shift, and rhythm.",
        scene: "Strength Training",
        equipment: "Barbell",
        targetArea: "Legs",
        difficulty: "Intermediate"
      },
      {
        id: "ai-form-row-guide",
        name: "Form Row Guide",
        summary: "AI-guided pull path and shoulder alignment.",
        scene: "Strength Training",
        equipment: "Dual Cable",
        targetArea: "Back",
        difficulty: "Beginner"
      },
      {
        id: "ai-pilates-breath-sync",
        name: "Pilates Breath Sync",
        summary: "Breathing cadence coaching with core cues.",
        scene: "Pilates",
        equipment: "Bodyweight",
        targetArea: "Full Body",
        difficulty: "Beginner"
      },
      {
        id: "ai-lunge-balance-assist",
        name: "Lunge Balance Assist",
        summary: "AI helps keep stable pelvis and knee track.",
        scene: "Strength Training",
        equipment: "Handle",
        targetArea: "Legs",
        difficulty: "Intermediate"
      },
      {
        id: "ai-cardio-pulse-trainer",
        name: "Cardio Pulse Trainer",
        summary: "Pace and effort cues for fat-burn intervals.",
        scene: "Cardio Fat Burn",
        equipment: "Dual Cable",
        targetArea: "Full Body",
        difficulty: "Advanced"
      },
      {
        id: "ai-posture-reset",
        name: "Posture Reset Coach",
        summary: "Real-time corrections for neck and upper back.",
        scene: "Stretch Recovery",
        equipment: "Bodyweight",
        targetArea: "Upper Limbs",
        difficulty: "Beginner"
      },
      {
        id: "ai-shoulder-control-lab",
        name: "Shoulder Control Lab",
        summary: "Scapular timing analysis for safer pressing.",
        scene: "Strength Training",
        equipment: "Handle",
        targetArea: "Shoulders",
        difficulty: "Advanced"
      },
      {
        id: "ai-glute-drive-monitor",
        name: "Glute Drive Monitor",
        summary: "Hip drive quality scoring for bridge patterns.",
        scene: "Stretch Recovery",
        equipment: "Bodyweight",
        targetArea: "Glutes",
        difficulty: "Intermediate"
      }
    ],
    plans: [
      {
        id: "plan-strength-2w-3x",
        name: "Strength Primer 2W",
        summary: "Build foundational strength in two weeks.",
        scene: "Strength Training",
        cycleWeeks: "2 Weeks",
        sessionsPerWeek: "3 Sessions",
        targetArea: "Full Body",
        difficulty: "Beginner"
      },
      {
        id: "plan-lean-lower-3w-4x",
        name: "Lean Lower Builder",
        summary: "Focused lower-body progression cycle.",
        scene: "Strength Training",
        cycleWeeks: "3 Weeks",
        sessionsPerWeek: "4 Sessions",
        targetArea: "Legs",
        difficulty: "Intermediate",
        isPersonalized: true
      },
      {
        id: "plan-pilates-core-4w-5x",
        name: "Pilates Core Habit",
        summary: "Daily core stability and breath practice.",
        scene: "Pilates",
        cycleWeeks: "4 Weeks",
        sessionsPerWeek: "5 Sessions",
        targetArea: "Full Body",
        difficulty: "Beginner"
      },
      {
        id: "plan-back-posture-2w-4x",
        name: "Back Posture Reset",
        summary: "Restore upper-back posture and endurance.",
        scene: "Stretch Recovery",
        cycleWeeks: "2 Weeks",
        sessionsPerWeek: "4 Sessions",
        targetArea: "Back",
        difficulty: "Beginner"
      },
      {
        id: "plan-shoulder-power-3w-5x",
        name: "Shoulder Power Block",
        summary: "Increase overhead capacity and control.",
        scene: "Strength Training",
        cycleWeeks: "3 Weeks",
        sessionsPerWeek: "5 Sessions",
        targetArea: "Shoulders",
        difficulty: "Advanced"
      },
      {
        id: "plan-cardio-burn-4w-4x",
        name: "Cardio Burn Builder",
        summary: "Progressive cardio sessions for fat burn.",
        scene: "Cardio Fat Burn",
        cycleWeeks: "4 Weeks",
        sessionsPerWeek: "4 Sessions",
        targetArea: "Full Body",
        difficulty: "Intermediate",
        isPersonalized: true
      },
      {
        id: "plan-upper-control-2w-3x",
        name: "Upper Control Basics",
        summary: "Upper-limb patterning and posture rhythm.",
        scene: "Pilates",
        cycleWeeks: "2 Weeks",
        sessionsPerWeek: "3 Sessions",
        targetArea: "Upper Limbs",
        difficulty: "Beginner",
        isPersonalized: true
      },
      {
        id: "plan-glute-activation-3w-3x",
        name: "Glute Activation Cycle",
        summary: "Hip stability and glute endurance focus.",
        scene: "Stretch Recovery",
        cycleWeeks: "3 Weeks",
        sessionsPerWeek: "3 Sessions",
        targetArea: "Glutes",
        difficulty: "Intermediate"
      }
    ],
    planDetails: {
      "plan-strength-2w-3x": {
        id: "plan-strength-2w-3x",
        name: "Strength Primer 2W",
        intro: "A two-week starter plan to build full-body training habits with clean movement patterns and stable volume.",
        scene: "Strength Training",
        cycleWeeks: "2 Weeks",
        sessionsPerWeek: "3 Sessions",
        difficulty: "Beginner",
        cover: "assets/card3.jpg",
        schedule: [
          {
            week: 1,
            days: [
              {
                day: 1,
                moves: [
                  { name: "Kettlebell Squat", sets: 3, repsOrDuration: "12 reps", restSeconds: 45, weightKg: 16 },
                  { name: "Power Row", sets: 3, repsOrDuration: "10 reps", restSeconds: 45, weightKg: 18 },
                  { name: "Breath Reset", sets: 2, repsOrDuration: "40 sec", restSeconds: 20 }
                ]
              },
              {
                day: 2,
                moves: [
                  { name: "Goblet Lunge", sets: 3, repsOrDuration: "10 reps / side", restSeconds: 50, weightKg: 14 },
                  { name: "Shoulder Press", sets: 3, repsOrDuration: "8 reps", restSeconds: 60, weightKg: 12 },
                  { name: "Glute Bridge", sets: 3, repsOrDuration: "14 reps", restSeconds: 40 }
                ]
              },
              {
                day: 3,
                moves: [
                  { name: "Deadlift Basics", sets: 4, repsOrDuration: "8 reps", restSeconds: 65, weightKg: 20 },
                  { name: "Power Row", sets: 3, repsOrDuration: "12 reps", restSeconds: 45, weightKg: 16 },
                  { name: "Side Plank Lift", sets: 2, repsOrDuration: "35 sec / side", restSeconds: 25 }
                ]
              }
            ]
          },
          {
            week: 2,
            days: [
              {
                day: 1,
                moves: [
                  { name: "Kettlebell Squat", sets: 4, repsOrDuration: "10 reps", restSeconds: 50, weightKg: 18 },
                  { name: "Shoulder Press", sets: 3, repsOrDuration: "10 reps", restSeconds: 55, weightKg: 14 },
                  { name: "Breath Reset", sets: 2, repsOrDuration: "45 sec", restSeconds: 20 }
                ]
              },
              {
                day: 2,
                moves: [
                  { name: "Deadlift Basics", sets: 4, repsOrDuration: "8 reps", restSeconds: 70, weightKg: 24 },
                  { name: "Goblet Lunge", sets: 3, repsOrDuration: "12 reps / side", restSeconds: 55, weightKg: 16 },
                  { name: "Glute Bridge", sets: 3, repsOrDuration: "16 reps", restSeconds: 40 }
                ]
              },
              {
                day: 3,
                moves: [
                  { name: "Power Row", sets: 4, repsOrDuration: "10 reps", restSeconds: 55, weightKg: 20 },
                  { name: "Side Plank Lift", sets: 3, repsOrDuration: "40 sec / side", restSeconds: 25 },
                  { name: "Breath Reset", sets: 2, repsOrDuration: "50 sec", restSeconds: 20 }
                ]
              }
            ]
          }
        ]
      },
      "plan-lean-lower-3w-4x": {
        id: "plan-lean-lower-3w-4x",
        name: "Lean Lower Builder",
        intro: "A lower-body progression cycle with glute and leg emphasis, balancing strength sets and unilateral control work.",
        scene: "Strength Training",
        cycleWeeks: "3 Weeks",
        sessionsPerWeek: "4 Sessions",
        difficulty: "Intermediate",
        cover: "assets/card2.jpg",
        schedule: [
          {
            week: 1,
            days: [
              { day: 1, moves: [{ name: "Kettlebell Squat", sets: 4, repsOrDuration: "10 reps", restSeconds: 60, weightKg: 20 }, { name: "Goblet Lunge", sets: 3, repsOrDuration: "10 reps / side", restSeconds: 55, weightKg: 16 }] },
              { day: 2, moves: [{ name: "Glute Bridge", sets: 4, repsOrDuration: "15 reps", restSeconds: 45 }, { name: "Deadlift Basics", sets: 3, repsOrDuration: "8 reps", restSeconds: 70, weightKg: 24 }] },
              { day: 3, moves: [{ name: "Kettlebell Squat", sets: 3, repsOrDuration: "12 reps", restSeconds: 55, weightKg: 18 }, { name: "Side Plank Lift", sets: 3, repsOrDuration: "35 sec / side", restSeconds: 30 }] },
              { day: 4, moves: [{ name: "Goblet Lunge", sets: 4, repsOrDuration: "12 reps / side", restSeconds: 60, weightKg: 18 }, { name: "Breath Reset", sets: 2, repsOrDuration: "50 sec", restSeconds: 20 }] }
            ]
          },
          {
            week: 2,
            days: [
              { day: 1, moves: [{ name: "Deadlift Basics", sets: 4, repsOrDuration: "8 reps", restSeconds: 75, weightKg: 28 }, { name: "Glute Bridge", sets: 4, repsOrDuration: "16 reps", restSeconds: 45 }] },
              { day: 2, moves: [{ name: "Kettlebell Squat", sets: 4, repsOrDuration: "11 reps", restSeconds: 60, weightKg: 22 }, { name: "Goblet Lunge", sets: 3, repsOrDuration: "10 reps / side", restSeconds: 55, weightKg: 18 }] },
              { day: 3, moves: [{ name: "Power Row", sets: 3, repsOrDuration: "10 reps", restSeconds: 55, weightKg: 20 }, { name: "Side Plank Lift", sets: 3, repsOrDuration: "40 sec / side", restSeconds: 30 }] },
              { day: 4, moves: [{ name: "Deadlift Basics", sets: 4, repsOrDuration: "9 reps", restSeconds: 75, weightKg: 30 }, { name: "Breath Reset", sets: 2, repsOrDuration: "45 sec", restSeconds: 20 }] }
            ]
          },
          {
            week: 3,
            days: [
              { day: 1, moves: [{ name: "Kettlebell Squat", sets: 5, repsOrDuration: "8 reps", restSeconds: 70, weightKg: 24 }, { name: "Glute Bridge", sets: 4, repsOrDuration: "18 reps", restSeconds: 45 }] },
              { day: 2, moves: [{ name: "Goblet Lunge", sets: 4, repsOrDuration: "12 reps / side", restSeconds: 60, weightKg: 20 }, { name: "Power Row", sets: 3, repsOrDuration: "12 reps", restSeconds: 55, weightKg: 22 }] },
              { day: 3, moves: [{ name: "Deadlift Basics", sets: 5, repsOrDuration: "6 reps", restSeconds: 80, weightKg: 34 }, { name: "Side Plank Lift", sets: 3, repsOrDuration: "45 sec / side", restSeconds: 30 }] },
              { day: 4, moves: [{ name: "Kettlebell Squat", sets: 4, repsOrDuration: "10 reps", restSeconds: 65, weightKg: 22 }, { name: "Breath Reset", sets: 2, repsOrDuration: "60 sec", restSeconds: 20 }] }
            ]
          }
        ]
      },
      "plan-pilates-core-4w-5x": {
        id: "plan-pilates-core-4w-5x",
        name: "Pilates Core Habit",
        intro: "A high-frequency Pilates rhythm focused on breath, trunk stability, and postural control through short daily sessions.",
        scene: "Pilates",
        cycleWeeks: "4 Weeks",
        sessionsPerWeek: "5 Sessions",
        difficulty: "Beginner",
        cover: "assets/card4.jpg",
        schedule: [
          {
            week: 1,
            days: [
              { day: 1, moves: [{ name: "Pilates Core Flow", sets: 3, repsOrDuration: "45 sec", restSeconds: 20 }, { name: "Breath Reset", sets: 2, repsOrDuration: "50 sec", restSeconds: 20 }] },
              { day: 2, moves: [{ name: "Side Plank Lift", sets: 3, repsOrDuration: "30 sec / side", restSeconds: 25 }, { name: "Glute Bridge", sets: 3, repsOrDuration: "14 reps", restSeconds: 35 }] },
              { day: 3, moves: [{ name: "Pilates Core Flow", sets: 3, repsOrDuration: "50 sec", restSeconds: 20 }, { name: "Breath Reset", sets: 2, repsOrDuration: "55 sec", restSeconds: 20 }] },
              { day: 4, moves: [{ name: "Side Plank Lift", sets: 3, repsOrDuration: "35 sec / side", restSeconds: 25 }, { name: "Glute Bridge", sets: 3, repsOrDuration: "16 reps", restSeconds: 35 }] },
              { day: 5, moves: [{ name: "Pilates Core Flow", sets: 4, repsOrDuration: "45 sec", restSeconds: 20 }, { name: "Breath Reset", sets: 2, repsOrDuration: "60 sec", restSeconds: 20 }] }
            ]
          },
          {
            week: 2,
            days: [
              { day: 1, moves: [{ name: "Pilates Core Flow", sets: 4, repsOrDuration: "50 sec", restSeconds: 20 }, { name: "Side Plank Lift", sets: 3, repsOrDuration: "35 sec / side", restSeconds: 25 }] },
              { day: 2, moves: [{ name: "Glute Bridge", sets: 4, repsOrDuration: "16 reps", restSeconds: 35 }, { name: "Breath Reset", sets: 2, repsOrDuration: "60 sec", restSeconds: 20 }] },
              { day: 3, moves: [{ name: "Pilates Core Flow", sets: 4, repsOrDuration: "55 sec", restSeconds: 20 }, { name: "Side Plank Lift", sets: 3, repsOrDuration: "40 sec / side", restSeconds: 25 }] },
              { day: 4, moves: [{ name: "Glute Bridge", sets: 4, repsOrDuration: "18 reps", restSeconds: 35 }, { name: "Breath Reset", sets: 2, repsOrDuration: "65 sec", restSeconds: 20 }] },
              { day: 5, moves: [{ name: "Pilates Core Flow", sets: 4, repsOrDuration: "60 sec", restSeconds: 20 }, { name: "Breath Reset", sets: 2, repsOrDuration: "60 sec", restSeconds: 20 }] }
            ]
          },
          {
            week: 3,
            days: [
              { day: 1, moves: [{ name: "Pilates Core Flow", sets: 4, repsOrDuration: "60 sec", restSeconds: 20 }, { name: "Side Plank Lift", sets: 4, repsOrDuration: "35 sec / side", restSeconds: 25 }] },
              { day: 2, moves: [{ name: "Glute Bridge", sets: 4, repsOrDuration: "18 reps", restSeconds: 35 }, { name: "Breath Reset", sets: 2, repsOrDuration: "65 sec", restSeconds: 20 }] },
              { day: 3, moves: [{ name: "Pilates Core Flow", sets: 4, repsOrDuration: "60 sec", restSeconds: 20 }, { name: "Side Plank Lift", sets: 4, repsOrDuration: "40 sec / side", restSeconds: 25 }] },
              { day: 4, moves: [{ name: "Glute Bridge", sets: 4, repsOrDuration: "20 reps", restSeconds: 35 }, { name: "Breath Reset", sets: 2, repsOrDuration: "70 sec", restSeconds: 20 }] },
              { day: 5, moves: [{ name: "Pilates Core Flow", sets: 5, repsOrDuration: "50 sec", restSeconds: 20 }, { name: "Breath Reset", sets: 2, repsOrDuration: "70 sec", restSeconds: 20 }] }
            ]
          },
          {
            week: 4,
            days: [
              { day: 1, moves: [{ name: "Pilates Core Flow", sets: 5, repsOrDuration: "55 sec", restSeconds: 20 }, { name: "Side Plank Lift", sets: 4, repsOrDuration: "40 sec / side", restSeconds: 25 }] },
              { day: 2, moves: [{ name: "Glute Bridge", sets: 4, repsOrDuration: "20 reps", restSeconds: 35 }, { name: "Breath Reset", sets: 3, repsOrDuration: "60 sec", restSeconds: 20 }] },
              { day: 3, moves: [{ name: "Pilates Core Flow", sets: 5, repsOrDuration: "60 sec", restSeconds: 20 }, { name: "Side Plank Lift", sets: 4, repsOrDuration: "45 sec / side", restSeconds: 25 }] },
              { day: 4, moves: [{ name: "Glute Bridge", sets: 5, repsOrDuration: "16 reps", restSeconds: 35 }, { name: "Breath Reset", sets: 3, repsOrDuration: "65 sec", restSeconds: 20 }] },
              { day: 5, moves: [{ name: "Pilates Core Flow", sets: 5, repsOrDuration: "60 sec", restSeconds: 20 }, { name: "Breath Reset", sets: 3, repsOrDuration: "70 sec", restSeconds: 20 }] }
            ]
          }
        ]
      }
    }
  }
};

(() => {
  const lib = window.PlanBDemo && window.PlanBDemo.libraryData;
  const details = lib && lib.allTraining && lib.allTraining.planDetails;
  if (!details || typeof details !== "object") return;
  const defaultErrorTypes = ["Knee Valgus", "Short Range", "Core Instability"];
  Object.values(details).forEach((plan) => {
    const weeks = Array.isArray(plan && plan.schedule) ? plan.schedule : [];
    weeks.forEach((week) => {
      const days = Array.isArray(week && week.days) ? week.days : [];
      days.forEach((day) => {
        const moves = Array.isArray(day && day.moves) ? day.moves : [];
        moves.forEach((move) => {
          if (!move || typeof move !== "object") return;
          move.aiSupported = true;
          if (!move.aiQualityTemplate || typeof move.aiQualityTemplate !== "object") {
            move.aiQualityTemplate = {
              errorTypes: defaultErrorTypes
            };
          }
        });
      });
    });
  });
})();
