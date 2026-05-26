import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroCard } from './HeroCard';

describe('HeroCard', () => {
  const props = {
    number: '01',
    title: 'You bring models. We bring compute.',
    description: 'Complete AI factories.',
    href: '/ai-infrastructure',
  };

  it('renders card number', () => {
    render(<HeroCard {...props} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<HeroCard {...props} />);
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<HeroCard {...props} />);
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('renders learn more link pointing to href', () => {
    render(<HeroCard {...props} />);
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute(
      'href',
      props.href,
    );
  });
});
