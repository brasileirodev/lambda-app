import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { AccordionItem } from './AccordionItem';

const baseProps = {
  number: '01',
  title: 'You bring models.',
  description: 'Get complete AI factories.',
  isActive: false,
  onOpen: vi.fn(),
};

describe('AccordionItem', () => {
  it('renders item number', () => {
    render(<AccordionItem {...baseProps} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('shows + toggle when inactive', () => {
    render(<AccordionItem {...baseProps} />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('shows − toggle when active', () => {
    render(<AccordionItem {...baseProps} isActive />);
    expect(screen.getByText('−')).toBeInTheDocument();
  });

  it('calls onOpen when inactive item is clicked', async () => {
    const onOpen = vi.fn();
    render(<AccordionItem {...baseProps} onOpen={onOpen} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onOpen).toHaveBeenCalledOnce();
  });

  it('does not call onOpen when already active', async () => {
    const onOpen = vi.fn();
    render(<AccordionItem {...baseProps} isActive onOpen={onOpen} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onOpen).not.toHaveBeenCalled();
  });

  it('has aria-expanded=true when active', () => {
    render(<AccordionItem {...baseProps} isActive />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });
});
