import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyGoldTitanSection } from './components/WhyGoldTitanSection';
import { TechnologySection } from './components/TechnologySection';
import { PricingSection, type PlanTermMonths } from './components/PricingSection';
import { LaunchSlotsSection } from './components/LaunchSlotsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';
import { SubscriptionModal } from './components/SubscriptionModal';
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[#FFD000] focus:px-5 focus:py-2.5 focus:text-xs focus:font-bold focus:text-[#070707]"
      >
        Skip to main content
      </a>

      <AnnouncementBar />
      <HeaderNav />

      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <WhyGoldTitanSection />
        <TechnologySection />
        <PricingSection
          allocation={allocation}
          onOpenSubscribeModal={handleOpenSubscribeModal}
        />
        <LaunchSlotsSection
          allocation={allocation}
          onOpenSubscribeModal={handleOpenSubscribeModal}
        />
        <FaqSection />
        <FinalCtaAndFooter />
      </main>

      <SubscriptionModal
        isOpen={modalOpen}
        initialTermMonths={selectedPlanTerm}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
