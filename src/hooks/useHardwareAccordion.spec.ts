import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useHardwareAccordion } from './useHardwareAccordion';

describe('useHardwareAccordion', () => {
  it('initialises with the given index', () => {
    const { result } = renderHook(() => useHardwareAccordion(0));
    expect(result.current.activeIndex).toBe(0);
  });

  it('activates a different card', () => {
    const { result } = renderHook(() => useHardwareAccordion(0));
    act(() => result.current.activate(3));
    expect(result.current.activeIndex).toBe(3);
  });
});
