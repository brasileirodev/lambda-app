import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'lambda-btn',
  secondary: 'lambda-btn lambda-btn--secondary',
  tertiary: 'lambda-btn lambda-btn--tertiary',
};

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  ariaLabel,
  className,
}: ButtonProps) {
  const classes = cn(variantClass[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
