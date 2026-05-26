import { useEffect } from 'react';

declare global {
  interface Window {
    UnicornStudio?: {
      addScene: (config: Record<string, unknown>) => Promise<unknown>;
    };
  }
}

const SCENE_CONFIG = {
  elementId: 'unicorn-scene',
  fps: 60,
  scale: 1,
  dpi: 1.5,
  filePath: 'https://lambda.ai/hubfs/web-static/motion/superintelligence-II-1.json',
  interactivity: { mouse: { disableMobile: true } },
} as const;

export function useUnicornStudio(): void {
  useEffect(() => {
    function init() {
      if (typeof window.UnicornStudio === 'undefined') return;
      window.UnicornStudio.addScene(SCENE_CONFIG).catch(() => {});
    }

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init);
      return () => window.removeEventListener('load', init);
    }
  }, []);
}
