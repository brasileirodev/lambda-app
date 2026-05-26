import { cn } from '@/lib/cn';
import { LambdaLogo } from '@/components/atoms/LambdaLogo/LambdaLogo';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

export function SiteHeader() {
  const scrolled = useHeaderScroll();

  return (
    <header id="siteHeader" className={cn('siteHeader', scrolled && 'scrolled')}>
      <div className="lambda-container">
        <div className="headerContentWrapper">
          <div className="headerLogoWrapper">
            <a href="/" className="headerLogo" aria-label="Lambda homepage">
              <LambdaLogo />
            </a>
          </div>

          <nav aria-label="Primary" className="mainNav">
            <ul>
              <li><a href="/ai-infrastructure">AI factories</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="#">Company</a></li>
            </ul>
          </nav>

          <div className="utilityNav">
            <ul>
              <li><a href="/login">Log in</a></li>
              <li>
                <a href="/sign-up" className="lambda-btn lambda-btn--header">
                  Create account
                </a>
              </li>
            </ul>
          </div>

          <button className="mobileMenuToggle" aria-label="Toggle mobile menu" type="button">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
