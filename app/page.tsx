import HeroSection from '@/components/HomeSection/HeroSection'
import TechMarquee from '@/components/UI/TechMarquee'
import IntroSection from '@/components/HomeSection/IntroSection'
import ServicesSection from '@/components/HomeSection/ServicesSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechMarquee />
      <IntroSection />
      <ServicesSection />
    </main>
  )
}
