(function initMyPlansPage() {
  const root = document.getElementById("myPlansScreen");
  if (!root || document.body.dataset.planBPage !== "my-training-plans") return;

  const tabButtons = Array.from(document.querySelectorAll(".my-plans-tab"));
  const listEl = document.getElementById("myPlansList");
  const emptyEl = document.getElementById("myPlansEmpty");

  // Mock data for user's training plans
  const myPlansData = {
    ongoing: [
      {
        id: "plan-lean-lower-3w-4x",
        title: "Spring Cut Plan",
        duration: "30 days",
        progress: 40, // percentage
        currentDay: 12,
        totalDays: 30,
        status: "Active",
        isPersonalized: true
      },
      {
        id: "plan-strength-2w-3x",
        title: "Core First Plan",
        duration: "14 days",
        progress: 14,
        currentDay: 2,
        totalDays: 14,
        status: "Active"
      }
    ],
    history: [
      {
        id: "plan-pilates-core-4w-5x",
        title: "Starter Week",
        duration: "7 days",
        progress: 100,
        currentDay: 7,
        totalDays: 7,
        status: "Completed",
        date: "Mar 15, 2026"
      },
      {
        id: "plan-cardio-burn-4w-4x",
        title: "Lean Strength 21",
        duration: "21 days",
        progress: 30,
        currentDay: 6,
        totalDays: 21,
        status: "Quit",
        date: "Feb 20, 2026",
        isPersonalized: true
      },
      {
        id: "plan-upper-control-2w-3x",
        title: "Weekend Athlete",
        duration: "8 days",
        progress: 0,
        currentDay: 0,
        totalDays: 8,
        status: "Ended",
        date: "Jan 10, 2026",
        isPersonalized: true
      }
    ]
  };

  let activeTab = "ongoing";

  function renderList() {
    const items = myPlansData[activeTab] || [];
    
    if (items.length === 0) {
      listEl.innerHTML = "";
      emptyEl.hidden = false;
      return;
    }

    emptyEl.hidden = true;
    listEl.innerHTML = items.map(item => {
      let statusBadge = "";
      if (item.status === "Completed") {
        statusBadge = `<span class="plan-status status-completed">Completed</span>`;
      } else if (item.status === "Quit") {
        statusBadge = `<span class="plan-status status-quit">Quit</span>`;
      } else if (item.status === "Ended") {
        statusBadge = `<span class="plan-status status-ended">Ended</span>`;
      }

      const progressBar = activeTab === "ongoing" 
        ? `<div class="plan-progress-container">
             <div class="plan-progress-info">
               <span>Day ${item.currentDay} of ${item.totalDays}</span>
               <span>${item.progress}%</span>
             </div>
             <div class="plan-progress-track">
               <div class="plan-progress-fill" style="width: ${item.progress}%"></div>
             </div>
           </div>`
        : `<div class="plan-date">${item.date || ""}</div>`;

      const cardClass = activeTab === "history" ? "my-plan-card is-history-card" : "my-plan-card";
      const titleTag = item.isPersonalized ? `<span class="plan-personalized-tag">Personalized</span>` : "";

      return `
        <div
          class="${cardClass}"
          role="button"
          tabindex="0"
          aria-label="View plan details"
          data-tab="${activeTab}"
          data-plan-id="${item.id}"
          data-current-day="${Number(item.currentDay || 0)}"
          data-personalized="${item.isPersonalized ? "1" : "0"}"
        >
          <div class="plan-card-main">
            <div class="plan-header">
              <h3 class="plan-title">${item.title}${titleTag}</h3>
              ${statusBadge}
            </div>
            <p class="plan-duration">${item.duration}</p>
            ${progressBar}
          </div>
          <button
            class="plan-action-btn"
            type="button"
            aria-label="View plan details"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      `;
    }).join("");
  }

  function handleTabClick(e) {
    const btn = e.currentTarget;
    const tab = btn.dataset.tab;
    if (!tab || tab === activeTab) return;

    activeTab = tab;
    tabButtons.forEach(b => {
      const isActive = b === btn;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-selected", String(isActive));
    });

    renderList();
  }

  tabButtons.forEach(btn => btn.addEventListener("click", handleTabClick));

  const openPlanDetail = (sourceTab, planId, currentDay, isPersonalized) => {
    if (sourceTab === "ongoing") {
      const query = new URLSearchParams({
        from: "my-training-plans",
        joined: "1",
        tab: sourceTab,
        currentDay: String(Math.max(0, Number(currentDay || 0)))
      });
      const safePlanId = String(planId || "").trim();
      if (safePlanId) query.set("planId", safePlanId);
      if (isPersonalized) query.set("personalized", "1");
      window.location.href = `plan-b-plan-detail.html?${query.toString()}`;
      return;
    }

    const query = new URLSearchParams({ from: "my-training-plans", tab: sourceTab || "history" });
    const safePlanId = String(planId || "").trim();
    if (safePlanId) query.set("planId", safePlanId);
    if (isPersonalized) query.set("personalized", "1");
    window.location.href = `plan-b-plan-detail.html?${query.toString()}`;
  };

  listEl.addEventListener("click", (event) => {
    const cardEl = event.target.closest(".my-plan-card");
    if (!cardEl) return;
    const sourceTab = String(cardEl.dataset.tab || "");
    const planId = String(cardEl.dataset.planId || "");
    const currentDay = Number(cardEl.dataset.currentDay || 0);
    const isPersonalized = String(cardEl.dataset.personalized || "0") === "1";
    openPlanDetail(sourceTab, planId, currentDay, isPersonalized);
  });

  listEl.addEventListener("keydown", (event) => {
    const cardEl = event.target.closest(".my-plan-card");
    if (!cardEl) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const sourceTab = String(cardEl.dataset.tab || "");
    const planId = String(cardEl.dataset.planId || "");
    const currentDay = Number(cardEl.dataset.currentDay || 0);
    const isPersonalized = String(cardEl.dataset.personalized || "0") === "1";
    openPlanDetail(sourceTab, planId, currentDay, isPersonalized);
  });

  // Initial render
  renderList();
})();
