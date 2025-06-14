import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Play } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-sky-600/10 border border-sky-600/20 rounded-full text-sky-300 text-sm font-light mb-12 backdrop-blur-sm">
            <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
            Limited Availability
          </div>

          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Ready to <span className="font-normal text-sky-400">Transform</span> Your Business?
          </h2>

          <p className="text-xl lg:text-2xl text-gray-400 mb-16 leading-relaxed font-light">
            Schedule a consultation and discover how AI can revolutionize your growth in the next 30 days
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-12 py-4 text-xl rounded-full font-light tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Strategy Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-gray-600 hover:border-sky-600 text-gray-300 hover:text-white px-12 py-4 text-xl rounded-full font-light tracking-wide transition-all duration-300 hover:bg-sky-600/10"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Free Consultation", desc: "30-minute strategy session with no obligations" },
              { title: "Custom Strategy", desc: "Tailored growth plan for your specific business" },
              { title: "Immediate Value", desc: "Actionable insights you can implement today" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-900/70 transition-all duration-300 rounded-2xl"
              >
                <h3 className="font-light text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-sky-600/10 border border-sky-600/20 backdrop-blur-sm rounded-2xl">
            <p className="text-sky-300 font-light">
              <strong className="font-normal">Exclusive Offer:</strong> Book this week and receive a complimentary AI
              automation audit (valued at $500)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
