import HeroSection from '@/components/home/HeroSection'
import StatsCounter from '@/components/home/StatsCounter'
import WelcomeSection from '@/components/home/WelcomeSection'
import ProgramsGrid from '@/components/home/ProgramsGrid'
import NewsSection from '@/components/home/NewsSection'
import GalleryPreview from '@/components/home/GalleryPreview'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import Partners from '@/components/home/Partners'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <WelcomeSection />
      <ProgramsGrid />
      <NewsSection />
      <GalleryPreview />
      <TestimonialSlider />
      <Partners />
      <CTABanner />
    </>
  )
}
