import { SiteHeader } from '@/components/molecules/SiteHeader/SiteHeader';
import { HeroSection } from '@/components/organisms/HeroSection/HeroSection';
import { FeaturesSection } from '@/components/organisms/FeaturesSection/FeaturesSection';
import { HardwareSection } from '@/components/organisms/HardwareSection/HardwareSection';

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HardwareSection />
      </main>
    </>
  );
}
