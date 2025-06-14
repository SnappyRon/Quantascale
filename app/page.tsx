import Header from "@/components/header"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { TrustSection } from "@/components/trust-section"
import { OptimizedServicesSection } from "@/components/optimized-services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import Footer from "@/components/footer"
import { PerformanceOptimizedBackground } from "@/components/performance-optimized-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative">
      <PerformanceOptimizedBackground />
      <Header />
      <main>
        <EnhancedHeroSection />
        <TrustSection />
        <OptimizedServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
