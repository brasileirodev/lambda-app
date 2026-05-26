import { DotLottie } from 'https://esm.sh/@lottiefiles/dotlottie-web';

/* ============================================================
   HEADER — scroll behaviour
   ============================================================ */

const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ============================================================
   UNICORN STUDIO — background animation
   ============================================================ */

function initUnicorn() {
  if (typeof UnicornStudio === 'undefined') return;
  UnicornStudio.addScene({
    elementId: 'unicorn-scene',
    fps: 60,
    scale: 1,
    dpi: 1.5,
    filePath: 'https://lambda.ai/hubfs/web-static/motion/superintelligence-II-1.json',
    interactivity: { mouse: { disableMobile: true } }
  }).catch(() => {});
}

if (document.readyState === 'complete') {
  initUnicorn();
} else {
  window.addEventListener('load', initUnicorn);
}

/* ============================================================
   FONT SWAP — glitch animation on hero heading letters
   ============================================================ */

const PIXEL_ON_DURATION = 300;
const swaps = [
  { id: 'letter-u', delay: 1000,  loopDuration: 11000 },
  { id: 'letter-e', delay: 4000,  loopDuration: 11000 },
  { id: 'letter-o', delay: 7000,  loopDuration: 11000 },
];

swaps.forEach(({ id, delay, loopDuration }) => {
  const el = document.getElementById(id);
  if (!el) return;
  function cycle() {
    setTimeout(() => {
      el.classList.add('pixel-active');
      setTimeout(() => el.classList.remove('pixel-active'), PIXEL_ON_DURATION);
    }, delay);
  }
  cycle();
  setInterval(cycle, loopDuration);
});

/* ============================================================
   ACCORDION — Section 2 features
   ============================================================ */

const accordion = document.getElementById('featuresAccordion');

if (accordion) {
  const items = Array.from(accordion.querySelectorAll('.accordionItem'));

  /* Animation segments — index 0 = first accordion item */
  const ANIMATION_SRC = 'https://lambda.ai/hubfs/web-static/motion/new_layers-all-steps.json';
  const SEGMENTS = [
    { start: 180, mid: 209, end: 239 },
    { start: 120, mid: 149, end: 179 },
    { start: 60,  mid: 89,  end: 119 },
    { start: 0,   mid: 29,  end: 59  },
  ];

  let activeIndex  = 0;
  let dotLottie    = null;
  let isPending    = false;
  let pendingIndex = null;
  let prevLottieIndex = 0;

  /* ---- helpers ---- */

  function getNumberSpan(item) {
    return item.querySelector('._accordionActiveItemNumber_1wr90_1');
  }

  function openItem(item) {
    const button  = item.querySelector('.accordionItemHeaderButton');
    const content = item.querySelector('.accordionItemContent');
    const toggle  = item.querySelector('.accordionToggle');
    content.removeAttribute('inert');
    content.classList.add('accordionItemContentOpen');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('data-locked', 'true');
    if (toggle) toggle.textContent = '−';
    getNumberSpan(item)?.classList.add('_active_1wr90_5');
  }

  function closeItem(item) {
    const button  = item.querySelector('.accordionItemHeaderButton');
    const content = item.querySelector('.accordionItemContent');
    const toggle  = item.querySelector('.accordionToggle');
    content.classList.remove('accordionItemContentOpen');
    button.setAttribute('aria-expanded', 'false');
    button.removeAttribute('data-locked');
    if (toggle) toggle.textContent = '+';
    getNumberSpan(item)?.classList.remove('_active_1wr90_5');
    content.addEventListener('transitionend', function onEnd() {
      if (!content.classList.contains('accordionItemContentOpen')) {
        content.setAttribute('inert', '');
      }
      content.removeEventListener('transitionend', onEnd);
    });
  }

  /* ---- click handler — keep-one-open ---- */

  items.forEach((item, index) => {
    item.querySelector('.accordionItemHeaderButton').addEventListener('click', () => {
      if (index === activeIndex) return; /* already open — do nothing */

      const fromIndex = activeIndex;
      closeItem(items[fromIndex]);
      openItem(item);
      activeIndex = index;

      /* trigger lottie exit → entry */
      if (dotLottie) {
        const oldSeg = SEGMENTS[fromIndex];
        if (oldSeg) {
          isPending    = true;
          pendingIndex = index;
          prevLottieIndex = fromIndex;
          dotLottie.setSegment(oldSeg.mid, oldSeg.end);
          dotLottie.setFrame(oldSeg.mid);
          dotLottie.play();
        }
      }
    });
  });

  /* ---- DotLottie animation ---- */

  const lottieCanvas = document.getElementById('accordion-lottie');

  if (lottieCanvas) {
    dotLottie = new DotLottie({
      autoplay: false,
      loop: false,
      canvas: lottieCanvas,
      src: ANIMATION_SRC,
    });

    dotLottie.addEventListener('load', () => {
      const seg = SEGMENTS[0];
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) {
        dotLottie.setSegment(seg.start, seg.end);
        dotLottie.setFrame(seg.mid);
        return;
      }
      dotLottie.setSpeed(2);
      dotLottie.setSegment(seg.start, seg.mid);
      dotLottie.setFrame(seg.start);
      dotLottie.play();
    });

    dotLottie.addEventListener('complete', () => {
      if (!isPending || pendingIndex === null) return;
      const newSeg = SEGMENTS[pendingIndex];
      if (!newSeg) return;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      isPending    = false;
      pendingIndex = null;
      if (reducedMotion) {
        dotLottie.setSegment(newSeg.start, newSeg.end);
        dotLottie.setFrame(newSeg.mid);
        return;
      }
      dotLottie.setSpeed(2);
      dotLottie.setSegment(newSeg.start, newSeg.mid);
      dotLottie.setFrame(newSeg.start);
      dotLottie.play();
    });
  }
}

/* ============================================================
   HARDWARE ACCORDION — Section 3 horizontal cards
   ============================================================ */

const hardwareAccordion = document.getElementById('hardwareAccordion');

if (hardwareAccordion) {
  const hardwareItems = hardwareAccordion.querySelectorAll('.hardwareAccordionItem');

  function activateHardwareItem(target) {
    hardwareItems.forEach(item => {
      const active = item === target;
      item.classList.toggle('hardwareActive', active);
      item.setAttribute('aria-expanded', active ? 'true' : 'false');
      item.querySelector('.hardwareAccordionImage')
          ?.classList.toggle('hardwareActiveImage', active);
      item.querySelector('.hardwareAccordionTextContent')
          ?.classList.toggle('hardwareActiveTextContent', active);
      item.querySelector('.hardwareAccordionItemRichText')
          ?.classList.toggle('hardwareActiveRichText', active);
      item.querySelector('.hardwareAccordionItemIndicator')
          ?.classList.toggle('hardwareActiveIndicator', active);
    });
  }

  hardwareItems.forEach(item => {
    item.addEventListener('click', () => activateHardwareItem(item));
  });
}
