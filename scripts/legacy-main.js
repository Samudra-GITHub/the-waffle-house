/*
  LEGACY — the original vanilla HTML/CSS/JS interaction layer, kept for
  reference after the React + Framer Motion migration. Not loaded by the
  current app (see src/main.tsx instead). Reconstructed from the last
  working version prior to archiving, since the live file was deleted in
  an earlier pass of the same migration.
*/

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero load sequence
  const hero = document.querySelector('.hero');
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-loaded')));

  // Pause the hero's looping decorative animations (steam, float) once
  // it's scrolled out of view — they'd otherwise composite forever.
  new IntersectionObserver((entries) => {
    entries.forEach(e => hero.classList.toggle('is-in-view', e.isIntersecting));
  }).observe(hero);

  // ---- One combined, rAF-throttled scroll handler ------------------------
  // Nav blur, hero parallax, and the syrup progress bar all read the same
  // scroll event — one listener, one rAF tick, instead of competing ones.
  const nav = document.querySelector('.site-nav');
  const heroVisual = document.querySelector('.hero__visual');
  const scrollProgressHost = document.querySelector('.scroll-progress');
  const isDesktop = () => window.innerWidth > 768;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);

    if (scrollProgressHost) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      scrollProgressHost.style.setProperty('--scroll-progress', pct.toFixed(4));
    }

    if (heroVisual && !reduceMotion && isDesktop()) {
      const offset = Math.min(window.scrollY * 0.08, 40);
      heroVisual.style.transform = `translateY(${offset}px)`;
    }

    if (hero) {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      hero.style.setProperty('--hero-parallax', `${Math.min(progress * 30, 30)}px`);
    }
  };

  let scrollTicking = false;
  const requestScrollUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => { onScroll(); scrollTicking = false; });
  };
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  requestScrollUpdate();

  // Scroll reveal (stand-in for whileInView + variants)
  const revealables = document.querySelectorAll(
    '.reveal-fade-up, .reveal-scale, .reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-pop'
  );
  if (reduceMotion) {
    revealables.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealables.forEach(el => io.observe(el));
  }

  // Review stars — reveal left-to-right once the card scrolls into view
  document.querySelectorAll('.stars').forEach(group => {
    group.querySelectorAll('span').forEach((s, i) => { s.style.animationDelay = `${i * 90}ms`; });
  });
  if (reduceMotion) {
    document.querySelectorAll('.stars').forEach(el => el.classList.add('is-visible'));
  } else {
    const starsIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); starsIo.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.stars').forEach(el => starsIo.observe(el));
  }

  // Staggered children (menu grid, feature grid, reviews, masonry)
  document.querySelectorAll('[data-stagger]').forEach(group => {
    group.querySelectorAll(':scope > *').forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });

  // Sticky nav active-section tracking
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav__links a, .mobile-menu a');
  const navIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (!entry.isIntersecting) return;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(s => navIo.observe(s));

  // Mobile menu toggle
  const toggle = document.querySelector('.site-nav__toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));
  }

  // Open/closed status — café hours 11:00–23:00 local time
  const statusEl = document.querySelector('[data-open-status]');
  if (statusEl) {
    const hour = new Date().getHours();
    const isOpen = hour >= 11 && hour < 23;
    statusEl.textContent = isOpen ? 'Open now' : 'Opens at 11:00 AM';
    statusEl.previousElementSibling?.classList.toggle('open', isOpen);
  }

  // Button ripple
  document.querySelectorAll('.btn--primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--x', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--y', `${e.clientY - rect.top}px`);
      btn.classList.remove('is-rippling');
      void btn.offsetWidth;
      btn.classList.add('is-rippling');
    });
  });

  // Signature Menu 3D coverflow carousel
  initMenuCarousel(reduceMotion);

  // Cursor glow — desktop pointer devices only
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches && isDesktop()) {
    document.querySelectorAll('.cursor-glow').forEach(el => {
      el.addEventListener('pointerenter', () => el.classList.add('is-glowing'));
      el.addEventListener('pointerleave', () => el.classList.remove('is-glowing'));
      el.addEventListener('pointermove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });
  }
});

/*
  Vanilla state machine for the coverflow carousel. JS only ever writes a
  `data-pos` attribute per slide and toggles classes; every actual
  transform/opacity/filter value lives in homepage.css's
  `.menu-slide[data-pos="…"]` rules. Infinite loop via index wraparound,
  no DOM cloning.
*/
function initMenuCarousel(reduceMotion) {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;

  const track = root.querySelector('[data-carousel-track]');
  const slides = Array.from(track.querySelectorAll('.menu-slide'));
  const total = slides.length;
  const prevBtn = root.querySelector('[data-carousel-prev]');
  const nextBtn = root.querySelector('[data-carousel-next]');
  const dotsHost = root.querySelector('[data-carousel-dots]');
  let current = 0;
  let autoplayTimer = null;

  slides.forEach((slide, i) => {
    const name = slide.querySelector('h3')?.textContent || `waffle ${i + 1}`;
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Show ${name}`);
    dot.addEventListener('click', () => goTo(i));
    dotsHost.appendChild(dot);
  });
  const dots = Array.from(dotsHost.children);

  function render() {
    const half = Math.floor(total / 2);
    slides.forEach((slide, i) => {
      let offset = i - current;
      if (offset > half) offset -= total;
      if (offset < -half) offset += total;

      let pos = 'hidden';
      if (offset === 0) pos = 'center';
      else if (offset === 1) pos = 'right1';
      else if (offset === -1) pos = 'left1';
      else if (offset === 2) pos = 'right2';
      else if (offset === -2) pos = 'left2';

      slide.dataset.pos = pos;
      slide.setAttribute('aria-hidden', pos === 'center' ? 'false' : 'true');
      slide.querySelectorAll('a, button').forEach(el => {
        el.tabIndex = pos === 'center' ? 0 : -1;
      });
    });
    dots.forEach((dot, i) => dot.setAttribute('aria-selected', String(i === current)));
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    render();
    restartAutoplay();
  }
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  function startAutoplay() {
    if (reduceMotion) return;
    stopAutoplay();
    autoplayTimer = setInterval(next, 5000);
  }
  function stopAutoplay() { clearInterval(autoplayTimer); autoplayTimer = null; }
  function restartAutoplay() { if (autoplayTimer) startAutoplay(); }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', startAutoplay);
  root.addEventListener('focusin', stopAutoplay);
  root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) startAutoplay(); });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
  });

  let dragStartX = null;
  const stage = root.querySelector('.menu-carousel__stage');
  stage.addEventListener('pointerdown', (e) => { dragStartX = e.clientX; });
  stage.addEventListener('pointerup', (e) => {
    if (dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 40) { delta > 0 ? prev() : next(); }
    dragStartX = null;
  });

  render();

  const startIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      root.classList.add('is-dripped');
      startAutoplay();
      startIo.disconnect();
    });
  }, { threshold: 0.4 });
  startIo.observe(root);
}
