const DARK_MODE_STYLE_ID = 'stip-dark-mode-style';

function applyDarkMode() {
  if (document.getElementById(DARK_MODE_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = DARK_MODE_STYLE_ID;
  style.textContent = `
    /* Base backgrounds */
    html, body {
      background-color: #1a1a2e !important;
      color: #d0d0d8 !important;
    }
    /* Header / banner */
    .core-header, header.core-header {
      background-color: #12122a !important;
      color: #e0e0e8 !important;
    }
    /* Sidebar */
    mat-drawer, .mat-drawer, mat-sidenav, .mat-sidenav {
      background-color: #1e1e36 !important;
      color: #c8c8d8 !important;
    }
    /* Main content area */
    mat-drawer-content, .mat-drawer-content,
    mat-sidenav-content, .mat-sidenav-content,
    mat-drawer-container, .mat-drawer-container {
      background-color: #1a1a2e !important;
      color: #d0d0d8 !important;
    }
    /* Angular Material toolbar */
    .mat-toolbar, mat-toolbar {
      background-color: #12122a !important;
      color: #e0e0e8 !important;
    }
    /* Cards */
    .mat-card, mat-card, .mat-mdc-card {
      background-color: #242444 !important;
      color: #d0d0d8 !important;
    }
    /* Tables */
    .mat-table, table, .mat-mdc-table {
      background-color: #1e1e36 !important;
      color: #d0d0d8 !important;
    }
    .mat-header-row, .mat-mdc-header-row, thead tr {
      background-color: #161630 !important;
    }
    .mat-header-cell, .mat-mdc-header-cell, th {
      color: #a0a0b8 !important;
      border-bottom-color: rgba(255,255,255,0.1) !important;
    }
    .mat-row, .mat-mdc-row, tbody tr {
      background-color: #1e1e36 !important;
    }
    .mat-row:hover, .mat-mdc-row:hover, tbody tr:hover {
      background-color: #2a2a4a !important;
    }
    .mat-cell, .mat-mdc-cell, td {
      color: #c8c8d8 !important;
      border-bottom-color: rgba(255,255,255,0.06) !important;
    }
    /* Dialogs and overlays */
    .mat-dialog-container, .mat-mdc-dialog-container,
    .cdk-overlay-pane {
      background-color: #242444 !important;
      color: #d0d0d8 !important;
    }
    /* Menus and dropdowns */
    .mat-menu-panel, .mat-mdc-menu-panel,
    .mat-select-panel, .mat-mdc-select-panel,
    .mat-autocomplete-panel, .mat-mdc-autocomplete-panel {
      background-color: #242444 !important;
      color: #d0d0d8 !important;
    }
    .mat-menu-item, .mat-mdc-menu-item {
      color: #d0d0d8 !important;
    }
    .mat-menu-item:hover, .mat-mdc-menu-item:hover {
      background-color: #2a2a4a !important;
    }
    /* Expansion panels */
    .mat-expansion-panel, .mat-mdc-expansion-panel {
      background-color: #242444 !important;
      color: #d0d0d8 !important;
    }
    /* Tabs */
    .mat-tab-header, .mat-mdc-tab-header {
      background-color: #1e1e36 !important;
    }
    .mat-tab-label, .mat-mdc-tab {
      color: #a0a0b8 !important;
    }
    .mat-tab-label-active, .mat-mdc-tab.mdc-tab--active {
      color: #e0e0f0 !important;
    }
    /* Form fields */
    .mat-form-field, .mat-mdc-form-field {
      color: #d0d0d8 !important;
    }
    .mat-input-element, .mat-mdc-input-element, input, textarea, select {
      color: #d0d0d8 !important;
      background-color: transparent !important;
    }
    .mat-form-field-outline, .mdc-notched-outline__leading,
    .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
      border-color: rgba(255,255,255,0.2) !important;
    }
    .mat-form-field-label, .mat-mdc-floating-label, .mat-label {
      color: #a0a0b8 !important;
    }
    /* Buttons - keep them visible */
    .mat-raised-button, .mat-flat-button, .mat-mdc-raised-button, .mat-mdc-unelevated-button {
      color: #fff !important;
    }
    .mat-stroked-button, .mat-mdc-outlined-button {
      color: #d0d0d8 !important;
      border-color: rgba(255,255,255,0.2) !important;
    }
    /* Icons - font icons */
    .mat-icon, mat-icon {
      color: #b0b0c8 !important;
    }
    /* Icons - SVG stroke-based icons in sidebar */
    mat-drawer svg path,
    mat-drawer svg circle,
    mat-drawer svg line,
    mat-drawer svg rect,
    mat-drawer svg polygon,
    .mat-drawer svg path,
    .mat-drawer svg circle,
    .mat-drawer svg line,
    .mat-drawer svg rect,
    .mat-drawer svg polygon {
      stroke: #b0b0c8 !important;
    }
    /* Paginator */
    .mat-paginator, .mat-mdc-paginator {
      background-color: #1e1e36 !important;
      color: #d0d0d8 !important;
    }
    /* Chips */
    .mat-chip, .mat-mdc-chip {
      background-color: #2a2a4a !important;
      color: #d0d0d8 !important;
    }
    /* Tooltip */
    .mat-tooltip, .mat-mdc-tooltip {
      background-color: #333366 !important;
      color: #e0e0f0 !important;
    }
    /* Snackbar */
    .mat-snack-bar-container, .mat-mdc-snack-bar-container {
      background-color: #333366 !important;
      color: #e0e0f0 !important;
    }
    /* General text overrides */
    h1, h2, h3, h4, h5, h6 {
      color: #e0e0f0 !important;
    }
    p, span, label, a, li, div {
      color: inherit !important;
    }
    /* Links */
    a {
      color: #8888cc !important;
    }
    a:hover {
      color: #aaaaee !important;
    }
    /* Sidebar menu section headers */
    .nav-item-btn.expandable, .mat-mdc-list-item.expandable {
      color: #e0e0f0 !important;
    }
    /* Sidebar submenu items */
    .nav-item-btn, .mat-mdc-list-item,
    .mat-list-item, .mat-nav-list .mat-list-item,
    menuitem, [role="menuitem"] {
      color: #c0c0d4 !important;
    }
    .nav-item-btn:hover, .mat-mdc-list-item:hover,
    .mat-list-item:hover, menuitem:hover, [role="menuitem"]:hover {
      background-color: #2a2a4a !important;
      color: #e8e8f4 !important;
    }
    /* Active sidebar item */
    .nav-item-btn.active, .mat-mdc-list-item.active,
    .mat-mdc-list-item-active {
      background-color: #2a2a50 !important;
      color: #ffffff !important;
      border-left: 3px solid #6c6cc8 !important;
    }
    /* Scrollbars */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #1a1a2e !important; }
    ::-webkit-scrollbar-thumb { background: #444466 !important; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #555588 !important; }
    /* Keep images normal */
    img, video, canvas, svg {
      filter: none !important;
    }
  `;
  document.head.appendChild(style);
}

function removeDarkMode() {
  document.getElementById(DARK_MODE_STYLE_ID)?.remove();
}
