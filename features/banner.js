const ENV_LABEL_ID = 'stip-env-label';
const CHIP_ENVS = ['chip-dev', 'chip-test'];

function buildBannerBackground(envKey, color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  if (CHIP_ENVS.includes(envKey)) {
    return `repeating-linear-gradient(55deg, ${color}, rgba(${r},${g},${b},0.5) 7.5%, ${color} 15%)`;
  }
  return color;
}

function applyEnvHeader() {
  whenAvailable('core-header', (header) => {
    header.classList.add(`${env}-color`);

    chrome.storage.local.get(['bannerThemes'], (data) => {
      const themes = data.bannerThemes || {};
      const customColor = themes[env];
      if (customColor) {
        const bg = buildBannerBackground(env, customColor);
        if (CHIP_ENVS.includes(env)) {
          header.style.setProperty('background', bg, 'important');
        } else {
          header.style.setProperty('background-color', customColor, 'important');
        }
      }
    });

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
  header?.style.removeProperty('background');
  header?.style.removeProperty('background-color');

  document.getElementById(ENV_LABEL_ID)?.remove();
}
