document.addEventListener('DOMContentLoaded', () => {
  const wifiSettingsBtn = document.getElementById('wifiSettingsBtn');
  const wifiBottomSheet = document.getElementById('wifiBottomSheet');
  const wifiOverlay = document.getElementById('wifiOverlay');
  const wifiCloseBtn = document.getElementById('wifiCloseBtn');
  const wifiRefreshBtn = document.getElementById('wifiRefreshBtn');
  const wifiList = document.getElementById('wifiList');
  const wifiStatusChip = document.getElementById('wifiStatusChip');

  const wifiPasswordModal = document.getElementById('wifiPasswordModal');
  const closeWifiModalBtn = document.getElementById('closeWifiModalBtn');
  const wifiConnectBtn = document.getElementById('wifiConnectBtn');
  const wifiPasswordInput = document.getElementById('wifiPasswordInput');
  const wifiModalTitle = document.getElementById('wifiModalTitle');

  const languageBtn = document.getElementById('languageBtn');
  const languageModal = document.getElementById('languageModal');
  const closeLanguageModalBtn = document.getElementById('closeLanguageModalBtn');
  const languageConfirmBtn = document.getElementById('languageConfirmBtn');
  const ambientLightBtn = document.getElementById('ambientLightBtn');

  const privacyBtn = document.getElementById('privacyBtn');
  const privacyModal = document.getElementById('privacyModal');
  const closePrivacyModalBtn = document.getElementById('closePrivacyModalBtn');

  let currentSelectedNetwork = null;

  // i18n Data and Logic
  const i18n = {
    en: {
      title: 'DEVICE SETTINGS',
      wifi: 'WI-FI SETTINGS',
      ambient: 'AMBIENT LIGHT',
      lang: 'LANGUAGE',
      privacy: 'PRIVACY & AGREEMENT',
      langTitle: 'Language',
      confirm: 'Confirm'
    },
    zh: {
      title: '设备设置',
      wifi: '无线网络设置',
      ambient: '氛围灯设置',
      lang: '语言',
      privacy: '隐私与协议',
      langTitle: '语言',
      confirm: '确定'
    }
  };

  function updateLanguage(lang) {
    const texts = i18n[lang];
    if (!texts) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (texts[key]) {
        el.textContent = texts[key];
      }
    });
  }

  // Mock Data
  let networks = [
    { id: 1, name: 'Alyona_Home_5G', signal: 4, connected: false },
    { id: 2, name: 'Guest_Network', signal: 3, connected: false },
    { id: 3, name: 'CoffeeShop_Free_WiFi_Very_Long_Name_Exceeding_Thirty_Two_Characters', signal: 2, connected: false },
    { id: 4, name: 'Office_WLAN_1', signal: 1, connected: false },
    { id: 5, name: 'Hidden_Network_Secure', signal: 3, connected: false }
  ];

  function sortNetworks() {
    networks.sort((a, b) => {
      if (a.connected && !b.connected) return -1;
      if (!a.connected && b.connected) return 1;
      return b.signal - a.signal;
    });
  }

  function renderWifiList() {
    wifiList.innerHTML = '';
    sortNetworks();
    
    networks.forEach(network => {
      const item = document.createElement('div');
      item.className = `wifi-item ${network.connected ? 'connected' : ''}`;
      item.id = `wifi-item-${network.id}`;
      
      const info = document.createElement('div');
      info.className = 'wifi-info';
      
      // Signal bars
      const signalDiv = document.createElement('div');
      signalDiv.className = `wifi-signal level-${network.signal}`;
      signalDiv.innerHTML = `
        <span style="height: 25%"></span>
        <span style="height: 50%"></span>
        <span style="height: 75%"></span>
        <span style="height: 100%"></span>
      `;
      
      const textDiv = document.createElement('div');
      textDiv.style.flex = '1';
      textDiv.style.minWidth = '0';
      
      const nameDiv = document.createElement('div');
      nameDiv.className = 'wifi-name';
      nameDiv.textContent = network.name;
      
      const statusText = document.createElement('span');
      statusText.className = 'wifi-status-text';
      statusText.id = `status-text-${network.id}`;
      if (network.connected) {
        statusText.textContent = 'Connected';
      }
      
      textDiv.appendChild(nameDiv);
      textDiv.appendChild(statusText);
      info.appendChild(signalDiv);
      info.appendChild(textDiv);
      
      item.appendChild(info);
      
      if (!network.connected) {
        const connectBtn = document.createElement('button');
        connectBtn.className = 'wifi-connect-btn';
        connectBtn.textContent = 'Connect';
        connectBtn.onclick = () => openPasswordModal(network);
        item.appendChild(connectBtn);
      }
      
      wifiList.appendChild(item);
    });
  }

  // Bottom Sheet Actions
  function openBottomSheet() {
    wifiOverlay.classList.add('active');
    wifiBottomSheet.classList.add('active');
    renderWifiList();
  }

  function closeBottomSheet() {
    wifiOverlay.classList.remove('active');
    wifiBottomSheet.classList.remove('active');
  }

  // Event Listeners for Bottom Sheet
  if (wifiSettingsBtn) wifiSettingsBtn.addEventListener('click', openBottomSheet);
  if (wifiCloseBtn) wifiCloseBtn.addEventListener('click', closeBottomSheet);
  if (wifiOverlay) wifiOverlay.addEventListener('click', closeBottomSheet);
  
  // Refresh Button
  if (wifiRefreshBtn) wifiRefreshBtn.addEventListener('click', () => {
    // Spin icon briefly
    const svg = wifiRefreshBtn.querySelector('svg');
    if (svg) {
        svg.style.transition = 'transform 0.5s ease';
        svg.style.transform = 'rotate(360deg)';
    }
    
    // Simulate refresh delay
    wifiList.innerHTML = '<div style="text-align:center; padding: 20px; color: var(--muted); font-size: 14px;">Scanning for networks...</div>';
    
    setTimeout(() => {
      if (svg) {
          svg.style.transition = 'none';
          svg.style.transform = 'rotate(0deg)';
      }
      
      // Shuffle signal strengths a bit to simulate refresh
      networks.forEach(n => {
        if (!n.connected) {
          n.signal = Math.max(1, Math.min(4, n.signal + (Math.random() > 0.5 ? 1 : -1)));
        }
      });
      renderWifiList();
    }, 800);
  });

  // Password Modal Actions
  function openPasswordModal(network) {
    currentSelectedNetwork = network;
    if (wifiModalTitle) wifiModalTitle.textContent = network.name;
    if (wifiPasswordInput) wifiPasswordInput.value = '';
    if (wifiPasswordModal) wifiPasswordModal.classList.add('active');
  }

  function closePasswordModal() {
    if (wifiPasswordModal) wifiPasswordModal.classList.remove('active');
    currentSelectedNetwork = null;
  }

  if (closeWifiModalBtn) closeWifiModalBtn.addEventListener('click', closePasswordModal);

  // Language Modal Actions
  function openLanguageModal() {
    if (languageModal) languageModal.classList.add('active');
  }

  function closeLanguageModal() {
    if (languageModal) languageModal.classList.remove('active');
  }

  if (languageBtn) languageBtn.addEventListener('click', openLanguageModal);
  if (closeLanguageModalBtn) closeLanguageModalBtn.addEventListener('click', closeLanguageModal);
  if (ambientLightBtn) {
    ambientLightBtn.addEventListener('click', () => {
      window.location.href = 'plan-b-ambient-light-settings.html';
    });
  }

  if (languageConfirmBtn) {
    languageConfirmBtn.addEventListener('click', () => {
      const selectedLang = document.querySelector('input[name="lang"]:checked');
      if (selectedLang) {
        updateLanguage(selectedLang.value);
      }
      closeLanguageModal();
    });
  }

  // Privacy Modal Actions
  function openPrivacyModal() {
    if (privacyModal) privacyModal.classList.add('active');
  }

  function closePrivacyModal() {
    if (privacyModal) privacyModal.classList.remove('active');
  }

  if (privacyBtn) privacyBtn.addEventListener('click', openPrivacyModal);
  if (closePrivacyModalBtn) closePrivacyModalBtn.addEventListener('click', closePrivacyModal);

  // Device Self-Check
  const selfCheckBtn = document.getElementById('selfCheckBtn');
  const selfCheckIssuePage = document.getElementById('selfCheckIssuePage');
  const selfCheckIssueList = document.getElementById('selfCheckIssueList');
  const selfCheckIssueBackBtn = document.getElementById('selfCheckIssueBackBtn');

  const SELF_CHECK_LABELS = {
    back: 'Back',
    codeLabel: 'Error Code',
    fixLabel: 'Troubleshooting',
    qrLabel: 'Error QR Code',
    qrHint: 'Scan for support details',
    qrSupportHint: 'If the issue persists, please contact our support engineer. Hotline: 400-161-7020 (China)',
    emptyHint: 'No abnormal items found.'
  };

  const SELF_CHECK_ITEMS = [
    { id: 'camera', name: 'Camera', ok: true, code: '', reason: '', fix: '' },
    { id: 'motor', name: 'Motor', ok: true, code: '', reason: '', fix: '' },
    {
      id: 'controlBoard',
      name: 'Control Board',
      ok: false,
      code: 'E-1203',
      reason: 'Control board communication timeout',
      fix: 'Restart the device. If it persists, reseat the control board cable and contact support.'
    },
    { id: 'deviceVersion', name: 'Device Version', ok: true, code: '', reason: '', fix: '' }
  ];

  function buildSelfCheckIssueQrUrl(item) {
    const payload = JSON.stringify({
      type: 'device-self-check',
      code: item.code,
      item: item.id,
      reason: item.reason,
      fix: item.fix
    });
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=12&data=${encodeURIComponent(payload)}`;
  }

  function renderSelfCheckIssues() {
    if (!selfCheckIssueList) return;
    selfCheckIssueList.innerHTML = '';

    const abnormalItems = SELF_CHECK_ITEMS.filter((item) => !item.ok);
    if (abnormalItems.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'self-check-issue-empty';
      empty.textContent = SELF_CHECK_LABELS.emptyHint;
      selfCheckIssueList.appendChild(empty);
      return;
    }

    abnormalItems.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'self-check-issue-card';

      const title = document.createElement('h3');
      title.className = 'self-check-issue-card-title';
      title.textContent = item.name;

      const codeRow = document.createElement('div');
      codeRow.className = 'self-check-issue-row';
      codeRow.innerHTML = `
        <span class="self-check-issue-label">${SELF_CHECK_LABELS.codeLabel}</span>
        <p class="self-check-issue-code">${item.code || '—'}</p>
      `;

      const fixRow = document.createElement('div');
      fixRow.className = 'self-check-issue-row';
      const fixLabel = document.createElement('span');
      fixLabel.className = 'self-check-issue-label';
      fixLabel.textContent = SELF_CHECK_LABELS.fixLabel;
      const fixValue = document.createElement('p');
      fixValue.className = 'self-check-issue-value';
      fixValue.textContent = item.fix || item.reason || '—';
      fixRow.appendChild(fixLabel);
      fixRow.appendChild(fixValue);

      const qrWrap = document.createElement('div');
      qrWrap.className = 'self-check-issue-qr-wrap';
      const qrLabel = document.createElement('span');
      qrLabel.className = 'self-check-issue-label';
      qrLabel.textContent = SELF_CHECK_LABELS.qrLabel;
      const qrImg = document.createElement('img');
      qrImg.className = 'self-check-issue-qr';
      qrImg.src = buildSelfCheckIssueQrUrl(item);
      qrImg.alt = `Error QR code for ${item.code || item.name}`;
      qrImg.width = 168;
      qrImg.height = 168;
      const qrHint = document.createElement('p');
      qrHint.className = 'self-check-issue-qr-hint';
      qrHint.textContent = SELF_CHECK_LABELS.qrHint;
      const qrSupportHint = document.createElement('p');
      qrSupportHint.className = 'self-check-issue-qr-support';
      qrSupportHint.textContent = SELF_CHECK_LABELS.qrSupportHint;
      qrWrap.appendChild(qrLabel);
      qrWrap.appendChild(qrImg);
      qrWrap.appendChild(qrHint);
      qrWrap.appendChild(qrSupportHint);

      card.appendChild(title);
      card.appendChild(codeRow);
      card.appendChild(fixRow);
      card.appendChild(qrWrap);
      selfCheckIssueList.appendChild(card);
    });
  }

  function openSelfCheckIssuePage() {
    renderSelfCheckIssues();
    if (selfCheckIssuePage) {
      selfCheckIssuePage.classList.add('active');
      selfCheckIssuePage.setAttribute('aria-hidden', 'false');
    }
  }

  function closeSelfCheckIssuePage() {
    if (selfCheckIssuePage) {
      selfCheckIssuePage.classList.remove('active');
      selfCheckIssuePage.setAttribute('aria-hidden', 'true');
    }
  }

  if (selfCheckBtn) selfCheckBtn.addEventListener('click', openSelfCheckIssuePage);
  if (selfCheckIssueBackBtn) selfCheckIssueBackBtn.addEventListener('click', closeSelfCheckIssuePage);

  // Connect Logic
  if (wifiConnectBtn) wifiConnectBtn.addEventListener('click', () => {
    if (!currentSelectedNetwork) return;
    
    const networkId = currentSelectedNetwork.id;
    
    // Close modal
    closePasswordModal();
    
    // Update UI to show connecting state
    const statusText = document.getElementById(`status-text-${networkId}`);
    const connectBtn = document.querySelector(`#wifi-item-${networkId} .wifi-connect-btn`);
    
    if (statusText) statusText.textContent = 'Connecting...';
    if (connectBtn) {
        connectBtn.textContent = 'Connecting';
        connectBtn.disabled = true;
        connectBtn.style.opacity = '0.5';
        connectBtn.style.pointerEvents = 'none';
    }
    
    // Simulate connection delay
    setTimeout(() => {
      // Disconnect others
      networks.forEach(n => n.connected = false);
      
      // Connect selected
      const network = networks.find(n => n.id === networkId);
      if (network) {
        network.connected = true;
      }
      
      // Show top status chip
      if (wifiStatusChip) {
        wifiStatusChip.style.display = 'inline-flex';
        wifiStatusChip.textContent = 'Wi-Fi';
      }
      
      // Re-render list
      renderWifiList();
    }, 1500);
  });
});
