"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/30 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IkDYMxm28mn09mrwSGme52QaxuR45R.png"
              alt="QuantaScale Logo"
              className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-light text-white tracking-wide group-hover:text-sky-300 transition-colors duration-300">
                QuantaScale
              </h1>
              <p className="text-xs text-sky-400 font-light group-hover:text-sky-300 transition-colors duration-300">
                Precision Systems. Scalable Growth.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["services", "how-it-works", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-white transition-all duration-300 font-light capitalize tracking-wide hover:scale-105 transform relative group"
              >
                {section.replace("-", " ")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span className="group-hover:scale-105 transition-transform duration-300">Get Started</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-all duration-300 hover:scale-110 transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 rotate-0 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 rotate-0 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-6 border-t border-gray-800/30">
            <nav className="flex flex-col space-y-4">
              {["services", "how-it-works", "testimonials"].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded transition-all capitalize font-light hover:translate-x-2 transform duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {section.replace("-", " ")}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full font-light hover:scale-105 transform transition-all duration-300 bg-sky-300"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
