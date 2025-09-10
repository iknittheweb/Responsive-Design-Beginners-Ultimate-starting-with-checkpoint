const main = document.querySelector('#main');
const footer = document.querySelector('#footer');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const menuTopNav = document.querySelector('#menuTopNav');
const overlay = document.querySelector('#overlay');
const breakpoint = window.matchMedia('(width < 43.75em)');
const body = document.querySelector('body');

function openMobileMenu() {
  console.log('run openMobileMenu');
  btnOpen.setAttribute('aria-expanded', 'true');
  // body.setAttribute('inert', '');
  main.setAttribute('inert', '');
  // footer.setAttribute('inert', '');
  menuTopNav.removeAttribute('inert');
  menuTopNav.style.transitionDuration = '400ms';
  overlay.style.transitionDuration = '400ms';
  bodyScrollLock.disableBodyScroll(menuTopNav);
  btnClose.focus();
}

function closeMobileMenu() {
  // console.log('run closeMobileMenu');
  btnOpen.setAttribute('aria-expanded', 'false');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');
  menuTopNav.setAttribute('inert', '');
  bodyScrollLock.enableBodyScroll(menuTopNav);
  btnOpen.focus();

  setTimeout(() => {
    menuTopNav.removeAttribute('style');
    overlay.removeAttribute('style');
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    menuTopNav.setAttribute('inert', '');
    menuTopNav.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is tablet/desktop');
    closeMobileMenu();
    menuTopNav.removeAttribute('inert');
  }
}

setupTopNav(breakpoint);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

breakpoint.addEventListener('change', (e) => {
  console.log('breakpoint crossed');
  setupTopNav(e);
});
