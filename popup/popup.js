const bannerToggle = document.getElementById('banner-toggle');
const darkmodeToggle = document.getElementById('darkmode-toggle');

chrome.storage.local.get(['banner', 'darkmode'], (data) => {
  bannerToggle.checked = data.banner !== false;
  darkmodeToggle.checked = data.darkmode === true;
});

bannerToggle.addEventListener('change', () => {
  chrome.storage.local.set({ banner: bannerToggle.checked });
});

darkmodeToggle.addEventListener('change', () => {
  chrome.storage.local.set({ darkmode: darkmodeToggle.checked });
});
