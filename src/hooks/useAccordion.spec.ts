import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useAccordion } from './useAccordion';

describe('useAccordion', () => {
  it('initialises with the given index', () => {
    const { result } = renderHook(() => useAccordion(0));
    expect(result.current.activeIndex).toBe(0);
  });

  it('opens a different item', () => {
    const { result } = renderHook(() => useAccordion(0));
    act(() => result.current.open(2));
    expect(result.current.activeIndex).toBe(2);
  });

  it('defaults to index 0', () => {
    const { result } = renderHook(() => useAccordion());
    expect(result.current.activeIndex).toBe(0);
  });
});
