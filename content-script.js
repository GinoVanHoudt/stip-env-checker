const ENV_LABEL_ID = 'stip-env-label';
const ENV_MAP = {
  'stip-dev.seatankterminal.com': 'stip-dev',
  'stip-test.seatankterminal.com': 'stip-test',
  'stip.seatankterminal.com': 'prod',
  'chip-dev.seatankterminal.com': 'chip-dev',
  'chip-test.seatankterminal.com': 'chip-test',
};

// --- Environment detection ---
const env = detectEnv();
function detectEnv() {
  const url = document.location.href;
  for (const [host, name] of Object.entries(ENV_MAP)) {
    if (url.includes(host)) return name;
  }
  return null;
}

// --- Initialization ---
chrome.storage.local.get('enabled', (data) => {
  if (data.enabled !== false) applyStyles();
});

chrome.storage.onChanged.addListener((changes) => {
  if (!changes.enabled) return;
  changes.enabled.newValue === false ? removeStyles() : applyStyles();
});


// --- Apply / Remove styles ---
function applyStyles() {
  if (env) {
    applyEnvHeader();
  } else {
    applyDarkMode();
  }
}
function removeStyles() {
  if (env) {
    removeEnvHeader();
  } else {
    removeDarkMode();
  }
}

function applyEnvHeader() {
  whenAvailable('core-header', (header) => {
    header.classList.add(`${env}-color`);

    if (!document.getElementById(ENV_LABEL_ID)) {
      const label = document.createElement('div');
      label.id = ENV_LABEL_ID;
      label.textContent = `${env.toUpperCase()} ENVIRONMENT`;
      label.classList.add('white-text');
      header.children?.[0].appendChild(label);
    }
  });
}
function removeEnvHeader() {
  const header = document.getElementsByClassName('core-header')?.[0];
  header?.classList.remove(`${env}-color`);

  document.getElementById(ENV_LABEL_ID)?.remove();
}

function applyDarkMode() {
  whenAvailable('mat-typography', (el) => el.classList.add('dark-mode'));
}
function removeDarkMode() {
  document.getElementsByClassName('mat-typography')?.[0]
    ?.classList.remove('dark-mode');
}

// --- DOM helpers ---
function whenAvailable(className, callback) {
  const el = document.getElementsByClassName(className)?.[0];
  if (el) {
    callback(el);
    return;
  }

  const observer = new MutationObserver(() => {
    const el = document.getElementsByClassName(className)?.[0];
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
