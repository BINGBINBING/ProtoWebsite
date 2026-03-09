import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import BlogPreview from '@/components/home/BlogPreview'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: '智云咨询 - 专业企业管理咨询服务',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      <BlogPreview />
      <CtaSection />
    </>
  )
}
