// app/page.tsx
import Hero from '@/components/ui/Hero';
import SelectedWork from '@/components/ui/SelectedWork';
import Labs from '@/components/ui/Labs';
import TechStack from '@/components/ui/TechStack';
import Contact from '@/components/ui/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Labs />
      <TechStack />
      <Contact />
    </>
  );
}