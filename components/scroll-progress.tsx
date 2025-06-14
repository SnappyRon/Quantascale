"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "benefits", label: "Benefits" },
    { id: "how-it-works", label: "Process" },
    { id: "testimonials", label: "Success" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(Math.min(currentProgress, 100))

      // Determine active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id === "hero" ? "hero-section" : section.id),
      }))

      let current = ""
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id
            break
          }
        }
      }

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === "hero" ? "hero-section" : sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Main Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-dark-900/20 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
        {sections.map((section, index) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary-500 border-primary-500 scale-125"
                  : "bg-transparent border-primary-400/50 hover:border-primary-400 hover:scale-110"
              }`}
              aria-label={`Go to ${section.label} section`}
            />

            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-dark-900/90 backdrop-blur-sm text-light-50 px-3 py-2 rounded text-sm font-light whitespace-nowrap border border-primary-500/20">
                {section.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Progress Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="bg-dark-900/90 backdrop-blur-sm border border-primary-500/20 rounded-full px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="text-primary-300 text-sm font-light">
              {sections.find((s) => s.id === activeSection)?.label || "Home"}
            </div>
            <div className="w-16 h-1 bg-primary-500/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary-500 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <div className="text-primary-300 text-xs font-light">{Math.round(progress)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}
