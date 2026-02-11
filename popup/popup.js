const toggle = document.getElementById('enabled-toggle');

chrome.storage.local.get('enabled', (data) => {
  toggle.checked = data.enabled !== false;
});

toggle.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: toggle.checked });
});
