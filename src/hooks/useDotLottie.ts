import { useEffect, useRef } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';

interface Segment {
  start: number;
  mid: number;
  end: number;
}

const ANIMATION_SRC =
  'https://lambda.ai/hubfs/web-static/motion/new_layers-all-steps.json';

const SEGMENTS: Segment[] = [
  { start: 180, mid: 209, end: 239 },
  { start: 120, mid: 149, end: 179 },
  { start: 60,  mid: 89,  end: 119 },
  { start: 0,   mid: 29,  end: 59  },
];

export function useDotLottie(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  activeIndex: number,
): void {
  const dotLottieRef = useRef<DotLottie | null>(null);
  const isPendingRef = useRef(false);
  const pendingIndexRef = useRef<number | null>(null);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dl = new DotLottie({
      autoplay: false,
      loop: false,
      canvas,
      src: ANIMATION_SRC,
    });

    dotLottieRef.current = dl;

    dl.addEventListener('load', () => {
      const seg = SEGMENTS[0];
      if (reducedMotion) {
        dl.setSegment(seg.start, seg.end);
        dl.setFrame(seg.mid);
        return;
      }
      dl.setSpeed(2);
      dl.setSegment(seg.start, seg.mid);
      dl.setFrame(seg.start);
      dl.play();
    });

    dl.addEventListener('complete', () => {
      if (!isPendingRef.current || pendingIndexRef.current === null) return;
      const newSeg = SEGMENTS[pendingIndexRef.current];
      if (!newSeg) return;
      isPendingRef.current = false;
      pendingIndexRef.current = null;
      if (reducedMotion) {
        dl.setSegment(newSeg.start, newSeg.end);
        dl.setFrame(newSeg.mid);
        return;
      }
      dl.setSpeed(2);
      dl.setSegment(newSeg.start, newSeg.mid);
      dl.setFrame(newSeg.start);
      dl.play();
    });

    return () => {
      dl.destroy();
      dotLottieRef.current = null;
    };
  }, [canvasRef]);

  useEffect(() => {
    const dl = dotLottieRef.current;
    if (!dl) return;
    if (activeIndex === prevIndexRef.current) return;

    const oldSeg = SEGMENTS[prevIndexRef.current];
    if (oldSeg) {
      isPendingRef.current = true;
      pendingIndexRef.current = activeIndex;
      dl.setSegment(oldSeg.mid, oldSeg.end);
      dl.setFrame(oldSeg.mid);
      dl.play();
    }

    prevIndexRef.current = activeIndex;
  }, [activeIndex]);
}
