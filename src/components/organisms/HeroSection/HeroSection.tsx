import { Button } from '@/components/atoms/Button/Button';
import { FontSwapLetter } from '@/components/atoms/FontSwapLetter/FontSwapLetter';
import { HeroCard } from '@/components/molecules/HeroCard/HeroCard';
import { useUnicornStudio } from '@/hooks/useUnicornStudio';
import { useFontSwap } from '@/hooks/useFontSwap';

const HERO_CARDS = [
  {
    number: '01',
    title: 'You bring models. We bring compute.',
    description:
      'Complete AI factories with high-density power, liquid cooling, and NVIDIA GPUs in one system.',
    href: '/ai-infrastructure',
  },
  {
    number: '02',
    title: 'Your supercomputer. Your rules.',
    description:
      'Train foundation models and serve billions of tokens on dedicated, single-tenant infrastructure.',
    href: '/superintelligence',
  },
  {
    number: '03',
    title: 'Experts and orchestration included.',
    description:
      'Managed clusters and co-engineering from the team building infrastructure for the largest AI labs.',
    href: '/superclusters',
  },
] as const;

export function HeroSection() {
  useUnicornStudio();
  useFontSwap();

  return (
    <section className="heroSection module-comp" id="section-home-hero">
      <div aria-hidden="true" className="backgroundAnimation">
        <div className="animationContainer" id="unicornContainer">
          <div
            id="unicorn-scene"
            data-us-project="id-xh9di953zoiok925b692ln"
            style={{ width: '1800px', height: '1125px' }}
          />
        </div>
      </div>

      <p className="eyebrow">Supercomputers for training and inference</p>

      <h1 className="reducedMotionTitle">
        <span>The Superintelligence Cloud</span>
      </h1>

      <h1 className="heroTitle" aria-label="The Superintelligence Cloud">
        <span aria-hidden="true">
          <span className="no-wrap">
            The S<FontSwapLetter id="letter-u" letter="u" />perintellig
            <FontSwapLetter id="letter-e" letter="e" />nce
          </span>{' '}
          <span className="no-wrap">
            Cl<FontSwapLetter id="letter-o" letter="o" />ud
          </span>
        </span>
      </h1>

      <div className="titleContainer">
        <div className="buttonGroup">
          <Button variant="primary" href="/sign-up" ariaLabel="Launch GPU instance">
            Launch GPU instance
          </Button>
          <Button variant="secondary" href="/talk-to-our-team" ariaLabel="Talk to our team">
            Talk to our team
          </Button>
        </div>
      </div>

      <div className="heroCardsWrapper">
        <div className="heroCards">
          {HERO_CARDS.map((card) => (
            <HeroCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
