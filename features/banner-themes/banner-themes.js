const DEFAULT_THEMES = {
  'stip-dev': '#b8860b',
  'stip-test': '#8fbc8f',
  'chip-dev': '#b8860b',
  'chip-test': '#8fbc8f',
  'prod': '#8b0000',
};

const CHIP_ENVS = ['chip-dev', 'chip-test'];

const mainScreen = document.getElementById('main-screen');

function buildPreviewStyle(envKey, color) {
  if (CHIP_ENVS.includes(envKey)) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `repeating-linear-gradient(55deg, ${color}, rgba(${r},${g},${b},0.5) 7.5%, ${color} 15%)`;
  }
  return color;
}

function applyPreview(envKey, color) {
  const preview = document.querySelector(`.${envKey}-preview`);
  if (!preview) return;
  const style = buildPreviewStyle(envKey, color);
  if (CHIP_ENVS.includes(envKey)) {
    preview.style.background = style;
    preview.style.backgroundColor = '';
  } else {
    preview.style.backgroundColor = style;
    preview.style.background = '';
  }
}

fetch('../features/banner-themes/banner-themes.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    const bannerThemesScreen = document.getElementById('banner-themes-screen');

    document.getElementById('open-banner-themes').addEventListener('click', () => {
      mainScreen.classList.add('screen-hidden');
      bannerThemesScreen.classList.remove('screen-hidden');
    });

    document.getElementById('back-to-main').addEventListener('click', () => {
      bannerThemesScreen.classList.add('screen-hidden');
      mainScreen.classList.remove('screen-hidden');
    });

    // Load saved themes and initialize pickers
    chrome.storage.local.get(['bannerThemes'], (data) => {
      const saved = data.bannerThemes || {};

      document.querySelectorAll('.theme-row').forEach(row => {
        const envKey = row.dataset.env;
        const picker = row.querySelector('.color-picker');
        const color = saved[envKey] || DEFAULT_THEMES[envKey];

        picker.value = color;
        applyPreview(envKey, color);

        picker.addEventListener('input', () => {
          applyPreview(envKey, picker.value);
        });

        picker.addEventListener('change', () => {
          chrome.storage.local.get(['bannerThemes'], (current) => {
            const themes = current.bannerThemes || {};
            themes[envKey] = picker.value;
            chrome.storage.local.set({ bannerThemes: themes });
          });
        });
      });
    });

    // Reset button
    document.getElementById('reset-themes').addEventListener('click', () => {
      chrome.storage.local.set({ bannerThemes: { ...DEFAULT_THEMES } });
      document.querySelectorAll('.theme-row').forEach(row => {
        const envKey = row.dataset.env;
        const picker = row.querySelector('.color-picker');
        picker.value = DEFAULT_THEMES[envKey];
        applyPreview(envKey, DEFAULT_THEMES[envKey]);
      });
    });
  });
