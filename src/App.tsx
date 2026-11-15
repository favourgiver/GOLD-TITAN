import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TechnologySection } from './components/TechnologySection';
import { PricingSection, type PlanTermMonths } from './components/PricingSection';
import { LaunchSlotsSection } from './components/LaunchSlotsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';
import { SubscriptionModal } from './components/SubscriptionModal';
import { Reveal } from './components/Reveal';
import { CursorRing } from './components/CursorRing';
import { useLaunchAllocation } from './lib/launchAllocation';

export function App() {
  const allocation = useLaunchAllocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanTerm, setSelectedPlanTerm] = useState<PlanTermMonths>(1);

  const handleOpenSubscribeModal = (termMonths: PlanTermMonths) => {
    setSelectedPlanTerm(termMonths);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F2EA]">
      {/* Subtle noise grain (moving golden gradient backdrop lives inside each section, under its content) */}
      <div aria-hidden="true" className="titan-noise" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[#FFD000] focus:px-5 focus:py-2.5 focus:text-xs focus:font-bold focus:text-[#070707]"
      >
        Skip to main content
      </a>

      <AnnouncementBar />
      <HeaderNav />

      <main id="main-content">
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <ProblemSection />
        </Reveal>
        <Reveal>
          <SolutionSection />
        </Reveal>
        <Reveal>
          <HowItWorksSection />
        </Reveal>
        <Reveal>
          <TechnologySection />
        </Reveal>
        <Reveal>
          <PricingSection
            allocation={allocation}
            onOpenSubscribeModal={handleOpenSubscribeModal}
          />
        </Reveal>
        <Reveal>
          <LaunchSlotsSection
            allocation={allocation}
            onOpenSubscribeModal={handleOpenSubscribeModal}
          />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <FinalCtaAndFooter />
        </Reveal>
      </main>

      <CursorRing />

      <SubscriptionModal
        isOpen={modalOpen}
        initialTermMonths={selectedPlanTerm}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
