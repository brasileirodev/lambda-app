import { useState, useCallback } from 'react';

export interface HardwareAccordionState {
  activeIndex: number;
  activate: (index: number) => void;
}

export function useHardwareAccordion(initialIndex = 0): HardwareAccordionState {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const activate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return { activeIndex, activate };
}
