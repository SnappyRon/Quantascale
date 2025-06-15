"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <ScrollReveal delay={200}>
              <div className="inline-flex items-center px-6 py-3 bg-sky-600/10 border border-sky-600/20 rounded-full text-sky-300 text-sm font-light mb-12 backdrop-blur-sm hover:bg-sky-600/15 hover:border-sky-600/30 transition-all duration-300">
                <div className="w-2 h-2 bg-sky-400 rounded-full mr-3 animate-pulse"></div>
                AI-Powered Marketing & Automation
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
                Transform{" "}
                <span className="font-normal text-sky-400 hover:text-sky-300 transition-colors duration-500">
                  Clicks
                </span>
                <br />
                Into{" "}
                <span className="font-normal text-sky-400 hover:text-sky-300 transition-colors duration-500">
                  Clients
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl lg:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                We build intelligent, done-for-you AI systems that attract qualified leads, automate your client acquisition, and help you scale your coaching business — without manual hustle.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-10 py-4 text-lg rounded-full font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group border border-gray-600 hover:border-sky-600 text-gray-300 hover:text-white px-10 py-4 text-lg rounded-full font-light tracking-wide transition-all duration-300 hover:bg-sky-600/10 hover:scale-105 transform"
                >
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Elegant Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { number: "500+", label: "Leads Generated" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "15+", label: "Hours Saved Weekly" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={1000 + index * 200}>
                <div className="group text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-900/70 transition-all duration-500 rounded-2xl hover:scale-105 transform cursor-pointer">
                  <div className="text-4xl font-light text-sky-400 mb-3 group-hover:text-sky-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-light tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Dashboard Preview */}
          <ScrollReveal delay={1600}>
            <div className="relative group">
              <div className="absolute inset-0 bg-sky-600/10 blur-xl rounded-2xl group-hover:bg-sky-600/15 transition-all duration-500"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl group-hover:border-gray-700/50 transition-all duration-500">
                <img
                  src="/placeholder.svg?height=500&width=1000"
                  alt="QuantaScale AI Dashboard"
                  className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
