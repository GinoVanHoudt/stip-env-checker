const ENV_LABEL_ID = 'stip-env-label';

function applyEnvHeader() {
  whenAvailable('core-header', (header) => {
    header.classList.add(`${env}-color`);

    if (!document.getElementById(ENV_LABEL_ID)) {
      const label = document.createElement('div');
      label.id = ENV_LABEL_ID;
      label.textContent = `${env.toUpperCase()} ENVIRONMENT`;
      label.classList.add('white-text');
      header.children?.[0].appendChild(label);
    }
  });
}

function removeEnvHeader() {
  const header = document.getElementsByClassName('core-header')?.[0];
  header?.classList.remove(`${env}-color`);

  document.getElementById(ENV_LABEL_ID)?.remove();
}
