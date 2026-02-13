const DARK_MODE_STYLE_ID = 'stip-dark-mode-style';

function applyDarkMode() {
  if (document.getElementById(DARK_MODE_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = DARK_MODE_STYLE_ID;
  style.textContent = [
    'html { filter: invert(1) hue-rotate(180deg) !important; }',
    'body { background-color: #d1d1e5 !important; }',
    'button { filter: invert(1) hue-rotate(180deg) !important; }',
    '.core-home { background-color: #d1d1e5 !important;  }',
    '.core-home__title-inner-container { h2 { color: white !important; } }',
  ].join(' ');
  document.head.appendChild(style);
}

function removeDarkMode() {
  document.getElementById(DARK_MODE_STYLE_ID)?.remove();
}
