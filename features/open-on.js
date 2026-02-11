const ENV_DOMAINS = {
  'btn-local': 'http://localhost:4200',
  'btn-chip-dev': 'https://chip-dev.seatankterminal.com',
  'btn-stip-dev': 'https://stip-dev.seatankterminal.com',
};

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  if (!tab) return;
  const currentHost = new URL(tab.url).host;

  document.querySelectorAll('.env-btn').forEach((btn) => {
    const target = ENV_DOMAINS[btn.id];
    if (!target) return;
    const targetHost = new URL(target).host;

    if (currentHost === targetHost) {
      btn.disabled = true;
    }

    btn.addEventListener('click', () => {
      const url = new URL(tab.url);
      const targetUrl = new URL(target);
      targetUrl.pathname = url.pathname;
      targetUrl.search = url.search;
      chrome.tabs.create({ url: targetUrl.href });
    });
  });
});
