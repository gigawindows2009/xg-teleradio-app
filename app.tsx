import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SponsorshipBanner } from './components/SponsorshipBanner';
import { ToolsGrid } from './components/ToolsGrid';
import { FeaturesList } from './components/FeaturesList';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <HeroSection />
      <SponsorshipBanner />
      <ToolsGrid />
      <FeaturesList />
      <FooterSection />
    </div>
  );
}
