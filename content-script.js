const STIP_TEST_URL = 'stip-test.seatankterminal.com';
const STIP_PROD_URL = 'stip.seatankterminal.com';

// html EL is not immeadiately available, so we need to wait for it
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

if (currentUrl.includes(STIP_TEST_URL)) {
  onElementAvailable('core-header',(el) => {
    el.classList.add('stip-test-color');
  })
} else if (currentUrl.includes(STIP_PROD_URL)) {
  onElementAvailable('core-header',(el) => {
    el.classList.add('stip-prod-color');
  })
}
