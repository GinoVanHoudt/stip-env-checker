function whenAvailable(className, callback) {
  const el = document.getElementsByClassName(className)?.[0];
  if (el) {
    callback(el);
    return;
  }

  const observer = new MutationObserver(() => {
    const el = document.getElementsByClassName(className)?.[0];
    if (el) {
      observer.disconnect();
      callback(el);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
