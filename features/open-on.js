const ENV_DOMAINS = {
  'btn-local': 'http://localhost:4200',
  'btn-chip-dev': 'https://chip-dev.seatankterminal.com',
  'btn-stip-dev': 'https://stip-dev.seatankterminal.com',
};

document.querySelectorAll('.env-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = ENV_DOMAINS[btn.id];
    if (!target) return;
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (!tab) return;
      const url = new URL(tab.url);
      const targetUrl = new URL(target);
      targetUrl.pathname = url.pathname;
      targetUrl.search = url.search;
      chrome.tabs.create({ url: targetUrl.href });
    });
  });
});
