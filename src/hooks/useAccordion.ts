import { useState, useCallback } from 'react';

export interface AccordionState {
  activeIndex: number;
  open: (index: number) => void;
}

export function useAccordion(initialIndex = 0): AccordionState {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const open = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return { activeIndex, open };
}
