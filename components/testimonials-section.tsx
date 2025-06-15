import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Business Coach",
      company: "Growth Mindset Coaching",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "QuantaScale transformed our lead generation completely. The AI automation is like having a full sales team working 24/7.",
      rating: 5,
      result: "300% increase in qualified leads",
      gradient: "from-sky-500 to-sky-600",
    },
    {
      name: "Mike Chen",
      title: "Marketing Consultant",
      company: "Digital Growth Agency",
      image: "/placeholder.svg?height=80&width=80",
      quote: "The ROI was immediate. Our organic traffic exploded and we're closing deals we never thought possible.",
      rating: 5,
      result: "500% ROI in first quarter",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Lisa Rodriguez",
      title: "Sales Coach",
      company: "Revenue Accelerators",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I've reclaimed my time while doubling my revenue. The automation handles everything while I focus on strategy.",
      rating: 5,
      result: "20+ hours saved weekly",
      gradient: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-950 relative overflow-hidden">
      <div
        className="absolute top-1/4 left-0 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "5s" }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Success{" "}
              <span className="font-normal bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Real results from real businesses who transformed their growth with AI
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={200 + index * 150}>
              <Card className="group bg-gray-900/50 border-gray-800/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 rounded-2xl hover:border-gray-700/50 hover:scale-105 transform cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-gray-600 mb-6 group-hover:text-gray-500 group-hover:scale-110 transition-all duration-300" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 italic font-light group-hover:text-gray-200 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center space-x-4 mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-700 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-light text-white text-lg group-hover:text-sky-300 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-500 text-sm font-light group-hover:text-gray-400 transition-colors duration-300">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-4 bg-gradient-to-r ${testimonial.gradient} rounded-xl shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <p className="text-sm font-light text-white">Result: {testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Elegant Stats */}
        <ScrollReveal delay={800}>
          <div className="text-center">
            <div className="inline-flex items-center space-x-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl hover:bg-gray-900/70 hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-light bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                  4.9/5
                </div>
                <div className="text-gray-400 text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                  Average Rating
                </div>
              </div>
              <div
                className="text-center group-hover:scale-110 transition-transform duration-300"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="text-3xl font-light bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-400 text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                  Happy Clients
                </div>
              </div>
              <div
                className="text-center group-hover:scale-110 transition-transform duration-300"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="text-3xl font-light bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  2M+
                </div>
                <div className="text-gray-400 text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                  Leads Generated
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
