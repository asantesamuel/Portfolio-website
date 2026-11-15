/* A floating dock: quiet while reading, available to pointer, touch and keyboard. */
(() => {
  const header = document.querySelector('.site-header');
  const navigation = document.querySelector('#site-navigation');
  const toggle = document.querySelector('.menu-toggle');
  const reveal = document.querySelector('.nav-reveal');
  if (!header || !navigation || !toggle || !reveal) return;

  const desktop = window.matchMedia('(min-width: 961px)');
  let idleTimer;
  let pointerInside = false;
  let previousScroll = window.scrollY;
  header.dataset.resting = 'false';

  const menuOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  // Includes assistive-technology and programmatic focus, not only Tab presses.
  const focused = () => header.contains(document.activeElement);
  function rest() {
    if (pointerInside || focused() || menuOpen()) return;
    header.dataset.resting = 'true';
    reveal.hidden = false;
  }
  function scheduleRest(delay = 3500) {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(rest, delay);
  }
  function wake() {
    header.dataset.resting = 'false';
    reveal.hidden = true;
    scheduleRest();
  }
  function closeMenu({ returnFocus = false } = {}) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.querySelector('.menu-toggle-label').textContent = 'Menu';
    navigation.dataset.open = 'false';
    if (returnFocus) toggle.focus();
    scheduleRest();
  }
  function openMenu() {
    wake();
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    toggle.querySelector('.menu-toggle-label').textContent = 'Close';
    navigation.dataset.open = 'true';
  }

  toggle.addEventListener('click', () => menuOpen() ? closeMenu() : openMenu());
  reveal.addEventListener('click', (event) => {
    if (desktop.matches) wake();
    else openMenu();
    if (event.detail === 0) navigation.querySelector('a')?.focus();
  });
  header.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'mouse') return;
    pointerInside = true;
    wake();
  });
  header.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'mouse') return;
    pointerInside = false;
    scheduleRest();
  });
  header.addEventListener('pointerdown', (event) => {
    // Let the visible reveal button handle a tap; never activate an invisible link.
    if (!event.target.closest('.nav-reveal')) wake();
  });
  header.addEventListener('focusin', (event) => {
    // Touch focus precedes click; keep the reveal button present until it activates.
    if (event.target !== reveal) wake();
  });
  header.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) closeMenu();
    scheduleRest();
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('pointerdown', (event) => {
    if (!header.contains(event.target)) closeMenu();
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      wake();
    }
    if (event.key === 'Escape' && menuOpen()) closeMenu({ returnFocus: true });
  });
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (previousScroll - current > 8) wake();
    else if (current - previousScroll > 8) scheduleRest(900);
    previousScroll = current;
  }, { passive: true });
  const resize = () => { closeMenu(); pointerInside = false; wake(); };
  if (desktop.addEventListener) desktop.addEventListener('change', resize);
  else desktop.addListener(resize);
  window.addEventListener('pageshow', wake);
  scheduleRest();
})();
