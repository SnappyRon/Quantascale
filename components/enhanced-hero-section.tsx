"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { OptimizedScrollReveal } from "./optimized-scroll-reveal"
import { AnimatedSparkles } from "./animated-sparkles"
import { GradientText } from "./gradient-text"
import { usePerformance } from "@/hooks/use-performance"

export function EnhancedHeroSection() {
  const { prefersReducedMotion, isLowEndDevice } = usePerformance()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Enhanced Background with Sparkles */}
      <div className="absolute inset-0">
        {/* Animated Sparkles */}
        {!prefersReducedMotion && !isLowEndDevice && <AnimatedSparkles />}

        {/* Gradient Orbs */}
        <div
          className={`absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl ${
            !prefersReducedMotion && !isLowEndDevice ? "animate-pulse" : ""
          }`}
          style={{
            animationDuration: "4s",
            contain: "layout style paint",
          }}
        />
        <div
          className={`absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl ${
            !prefersReducedMotion && !isLowEndDevice ? "animate-pulse" : ""
          }`}
          style={{
            animationDelay: "1s",
            animationDuration: "6s",
            contain: "layout style paint",
          }}
        />

        {/* Additional Glitter Effects */}
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 bg-sky-300/4 rounded-full blur-2xl ${
            !prefersReducedMotion && !isLowEndDevice ? "animate-pulse" : ""
          }`}
          style={{
            animationDelay: "2s",
            animationDuration: "5s",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <OptimizedScrollReveal delay={prefersReducedMotion ? 0 : 200}>
              <div className="inline-flex items-center px-6 py-3 bg-sky-600/10 border border-sky-600/20 rounded-full text-sky-300 text-sm font-light mb-12 backdrop-blur-sm hover:bg-sky-600/15 hover:border-sky-600/30 transition-all duration-300 group">
                <div
                  className={`w-2 h-2 bg-sky-400 rounded-full mr-3 ${
                    !prefersReducedMotion ? "animate-pulse group-hover:animate-ping" : ""
                  }`}
                />
                AI-Powered Marketing & Automation
              </div>
            </OptimizedScrollReveal>

            <OptimizedScrollReveal delay={prefersReducedMotion ? 0 : 400}>
              <div className="relative">
                {/* Main Heading with Enhanced Animation */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
                  Transform{" "}
                  <span className="relative inline-block">
                    <GradientText
                      gradient="from-sky-400 via-sky-300 to-sky-500"
                      animate={!prefersReducedMotion}
                      className="font-normal hover:scale-105 transition-transform duration-500"
                    >
                      Clicks
                    </GradientText>
                    {/* Subtle glow effect */}
                    {!prefersReducedMotion && (
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-500/20 blur-xl -z-10 animate-pulse" />
                    )}
                  </span>
                  <br />
                  Into{" "}
                  <span className="relative inline-block">
                    <GradientText
                      gradient="from-emerald-400 via-sky-400 to-emerald-500"
                      animate={!prefersReducedMotion}
                      className="font-normal hover:scale-105 transition-transform duration-500"
                    >
                      Clients
                    </GradientText>
                    {/* Subtle glow effect */}
                    {!prefersReducedMotion && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 blur-xl -z-10 animate-pulse" />
                    )}
                  </span>
                </h1>

                {/* Floating Elements around the text */}
                {!prefersReducedMotion && !isLowEndDevice && (
                  <>
                    <div className="absolute -top-8 -left-8 w-4 h-4 bg-sky-400/40 rounded-full animate-bounce" />
                    <div
                      className="absolute -top-4 -right-12 w-3 h-3 bg-emerald-400/40 rounded-full animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="absolute -bottom-6 left-12 w-2 h-2 bg-sky-300/40 rounded-full animate-bounce"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute -bottom-8 -right-8 w-3 h-3 bg-emerald-300/40 rounded-full animate-bounce"
                      style={{ animationDelay: "1.5s" }}
                    />
                  </>
                )}
              </div>
            </OptimizedScrollReveal>

            <OptimizedScrollReveal delay={prefersReducedMotion ? 0 : 600}>
              <p className="text-xl lg:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                We engineer sophisticated AI systems that{" "}
                <span className="text-sky-300 font-medium">automate your sales process</span>, scale your business, and
                deliver <span className="text-emerald-300 font-medium">measurable results</span>.
              </p>
            </OptimizedScrollReveal>

            <OptimizedScrollReveal delay={prefersReducedMotion ? 0 : 800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className={`group relative overflow-hidden bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white px-10 py-4 text-lg rounded-full font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl ${
                    !prefersReducedMotion ? "hover:scale-105 transform" : ""
                  }`}
                >
                  {/* Button shimmer effect */}
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  <span className="relative z-10">Start Your Transformation</span>
                  <ArrowRight
                    className={`ml-3 h-5 w-5 relative z-10 ${
                      !prefersReducedMotion ? "group-hover:translate-x-1" : ""
                    } transition-transform duration-300`}
                  />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className={`group border border-gray-600 hover:border-sky-600 text-gray-300 hover:text-white px-10 py-4 text-lg rounded-full font-light tracking-wide transition-all duration-300 hover:bg-sky-600/10 ${
                    !prefersReducedMotion ? "hover:scale-105 transform" : ""
                  }`}
                >
                  <Play
                    className={`mr-3 h-5 w-5 ${!prefersReducedMotion ? "group-hover:scale-110" : ""} transition-transform duration-300`}
                  />
                  Watch Demo
                </Button>
              </div>
            </OptimizedScrollReveal>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "500+", label: "Leads Generated", gradient: "from-sky-400 to-sky-600" },
              { number: "95%", label: "Client Satisfaction", gradient: "from-emerald-400 to-emerald-600" },
              { number: "15+", label: "Hours Saved Weekly", gradient: "from-sky-300 to-emerald-400" },
            ].map((stat, index) => (
              <OptimizedScrollReveal key={index} delay={prefersReducedMotion ? 0 : 1000 + index * 100}>
                <div
                  className={`group relative text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-900/70 transition-all duration-300 rounded-2xl cursor-pointer overflow-hidden ${
                    !prefersReducedMotion && !isLowEndDevice ? "hover:scale-105 transform" : ""
                  }`}
                >
                  {/* Card shimmer effect */}
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}

                  <div className="relative z-10">
                    <div
                      className={`text-4xl font-light mb-3 transition-colors duration-300 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-light tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </OptimizedScrollReveal>
            ))}
          </div>

          {/* Enhanced Dashboard Preview */}
          <OptimizedScrollReveal delay={prefersReducedMotion ? 0 : 1600}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 via-emerald-600/10 to-sky-600/10 blur-xl rounded-2xl group-hover:from-sky-600/15 group-hover:via-emerald-600/15 group-hover:to-sky-600/15 transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl group-hover:border-gray-700/50 transition-all duration-500 overflow-hidden">
                {/* Dashboard shimmer effect */}
                {!prefersReducedMotion && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" />
                )}

                <img
                  src="/placeholder.svg?height=500&width=1000"
                  alt="QuantaScale AI Dashboard"
                  className={`relative z-10 w-full h-auto rounded-xl shadow-2xl ${
                    !prefersReducedMotion && !isLowEndDevice ? "group-hover:scale-[1.02]" : ""
                  } transition-transform duration-700`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </OptimizedScrollReveal>
        </div>
      </div>
    </section>
  )
}
