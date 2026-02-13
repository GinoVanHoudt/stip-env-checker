const DARK_MODE_STYLE_ID = 'stip-dark-mode-style';

function applyDarkMode() {
  if (document.getElementById(DARK_MODE_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = DARK_MODE_STYLE_ID;
  style.textContent = [
    // Global inversion
    'html { filter: invert(1) hue-rotate(180deg) !important; }',
    'body { background-color: #d1d1e5 !important; }',
    // Restore buttons (already dark, so double inversion), except mat unthemed buttons
    `button:not(.mat-unthemed):not(.menu-btn):not(.mat-mdc-menu-item) { filter: invert(1) hue-rotate(180deg) !important; }`,
    // core-home and core-header exemption (already dark)
    '.core-header{ background-color: #dcdcf0 !important; }',
    '.core-home { background-color: #d1d1e5 !important; }',
    '.core-home__title-inner-container { h2 { color: white !important; } }',
  ].join(' ');
  document.head.appendChild(style);
}

function removeDarkMode() {
  document.getElementById(DARK_MODE_STYLE_ID)?.remove();
}
