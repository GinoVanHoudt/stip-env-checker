const STIP_DEV_URL = 'stip-dev.seatankterminal.com';
const STIP_TEST_URL = 'stip-test.seatankterminal.com';

const CHIP_DEV_URL = 'chip-dev.seatankterminal.com';
const CHIP_TEST_URL = 'chip-test.seatankterminal.com';

const STIP_PROD_URL = 'stip.seatankterminal.com';

// html EL is not immediately available, so we need to wait for it
function onElementAvailable(className, callback) {
  const observer = new MutationObserver(mutations => {
    const el = document.getElementsByClassName(className)?.[0];
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });
  observer.observe(document.body, {childList: true, subtree: true});
}

let currentUrl = document.location.href;

let env;
if (currentUrl.includes(STIP_DEV_URL)) {
  env = 'stip-dev';
} else if (currentUrl.includes(STIP_TEST_URL)) {
  env = 'stip-test';
} else if (currentUrl.includes(STIP_PROD_URL)) {
  env = 'prod';
} else if (currentUrl.includes(CHIP_DEV_URL)) {
  env = 'chip-dev';
} else if (currentUrl.includes(CHIP_TEST_URL)) {
  env = 'chip-test';
}

chrome.storage.local.get('enabled', (data) => {
  if (data.enabled === false) return;

  if (env) {
    onElementAvailable('core-header', (el) => {
      el.classList.add(`${env}-color`);

      const divElement = document.createElement("div");
      const textNode = document.createTextNode(`${env.toUpperCase()} ENVIRONMENT`);
      divElement.appendChild(textNode);
      divElement.classList.add('white-text');
      el.children?.[0].appendChild(divElement);
    });
  }

  // add dark mode
  if (env == null) {
    onElementAvailable('mat-typography', (el) => {
      el.classList.add('dark-mode');
    });
  }
});
