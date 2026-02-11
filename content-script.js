const ENV_MAP = {
  'stip-dev.seatankterminal.com': 'stip-dev',
  'stip-test.seatankterminal.com': 'stip-test',
  'stip.seatankterminal.com': 'prod',
  'chip-dev.seatankterminal.com': 'chip-dev',
  'chip-test.seatankterminal.com': 'chip-test',
};

const env = detectEnv();
function detectEnv() {
  const url = document.location.href;
  for (const [host, name] of Object.entries(ENV_MAP)) {
    if (url.includes(host)) return name;
  }
  return null;
}

chrome.storage.local.get(['banner', 'darkmode'], (data) => {
  if (data.banner !== false && env) applyEnvHeader();
  if (data.darkmode === true) applyDarkMode();
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.banner && env) {
    changes.banner.newValue === false ? removeEnvHeader() : applyEnvHeader();
  }
  if (changes.darkmode) {
    changes.darkmode.newValue === true ? applyDarkMode() : removeDarkMode();
  }
});
