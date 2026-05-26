import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders a link when href is provided', () => {
    render(<Button href="/sign-up">Create account</Button>);
    const link = screen.getByRole('link', { name: 'Create account' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/sign-up');
  });

  it('renders a button element when no href', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies secondary variant class', () => {
    render(<Button variant="secondary" href="#">Secondary</Button>);
    expect(screen.getByRole('link')).toHaveClass('lambda-btn--secondary');
  });

  it('applies tertiary variant class', () => {
    render(<Button variant="tertiary" href="#">Tertiary</Button>);
    expect(screen.getByRole('link')).toHaveClass('lambda-btn--tertiary');
  });
});
