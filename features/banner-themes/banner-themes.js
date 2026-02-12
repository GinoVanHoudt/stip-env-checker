const mainScreen = document.getElementById('main-screen');

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
  });
