"use client"

import { Linkedin, Mail, MapPin, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IkDYMxm28mn09mrwSGme52QaxuR45R.png"
                alt="QuantaScale Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-light text-white">QuantaScale</h3>
                <p className="text-gray-400 font-light">Precision Systems. Scalable Growth.</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md font-light">
              We build AI systems that help high-ticket coaches scale faster, close more clients, and reclaim their time.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="font-light">Davao City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-light text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "Services", id: "services" },
                { label: "Process", id: "how-it-works" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-light text-white mb-8">Connect</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-light">hello@quantascale.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="font-light">Ron Ancheta</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-light tracking-wide transition-all duration-300 rounded-full shadow-lg"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-light">© 2024 QuantaScale. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
