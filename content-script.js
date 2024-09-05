const STIP_DEV_URL = 'stip-dev.seatankterminal.com';
const STIP_TEST_URL = 'stip-test.seatankterminal.com';
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
  observer.observe(document.body, { childList: true, subtree: true });
}

let currentUrl = document.location.href;

let env;
if (currentUrl.includes(STIP_DEV_URL)) {
  env = 'dev';
} else if (currentUrl.includes(STIP_TEST_URL)) {
  env = 'test';
} else if (currentUrl.includes(STIP_PROD_URL)) {
  env = 'prod';
}

if (env) {
  onElementAvailable('core-header', (el) => {
    el.classList.add(`stip-${env}-color`);

    const divElement = document.createElement("div");
    const textNode = document.createTextNode(`${env.toUpperCase()} ENVIRONMENT`);
    divElement.appendChild(textNode);
    divElement.classList.add('white-text');
    el.children?.[0].appendChild(divElement);
  });
}
