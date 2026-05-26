import { Button } from '@/components/atoms/Button/Button';

interface HeroCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export function HeroCard({ number, title, description, href }: HeroCardProps) {
  return (
    <div className="heroCard">
      <div className="cardNumber" aria-hidden="true">{number}</div>
      <h2>{title}</h2>
      <p className="cardCopy">{description}</p>
      <Button variant="tertiary" href={href} ariaLabel="Learn more">
        Learn more
      </Button>
    </div>
  );
}
