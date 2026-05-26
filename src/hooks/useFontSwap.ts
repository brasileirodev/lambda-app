import { useEffect } from 'react';

interface FontSwapTarget {
  id: string;
  delay: number;
  loopDuration: number;
}

const PIXEL_ON_DURATION = 300;

const TARGETS: FontSwapTarget[] = [
  { id: 'letter-u', delay: 1000,  loopDuration: 11000 },
  { id: 'letter-e', delay: 4000,  loopDuration: 11000 },
  { id: 'letter-o', delay: 7000,  loopDuration: 11000 },
];

export function useFontSwap(): void {
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    TARGETS.forEach(({ id, delay, loopDuration }) => {
      const el = document.getElementById(id);
      if (!el) return;

      function cycle() {
        const t = setTimeout(() => {
          el!.classList.add('pixel-active');
          const t2 = setTimeout(() => el!.classList.remove('pixel-active'), PIXEL_ON_DURATION);
          timers.push(t2);
        }, delay);
        timers.push(t);
      }

      cycle();
      const iv = setInterval(cycle, loopDuration);
      intervals.push(iv);
    });

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);
}
