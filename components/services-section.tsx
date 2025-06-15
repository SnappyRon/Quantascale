import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Search, Zap, Bot, ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ServicesSection() {
  const services = [
    {
      icon: <Linkedin className="h-8 w-8" />,
      title: "AI-Powered LinkedIn Outreach for Coaches",
      description:
        "Connect with qualified prospects using automated, intelligent messaging, and book sales calls while you focus on coaching.",
      features: ["Automated connection requests", "Personalized messaging sequences", "Lead qualification & scoring"],
      gradient: "from-sky-500 to-sky-600",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "AI SEO That Attracts Coaching Clients",
      description:
        "Publish high-ranking, optimized content that brings ideal clients to your site without paid ads or endless social posts.",
      features: ["AI-generated content", "Technical SEO optimization", "Local search domination"],
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "GoHighLevel Automation",
      description: "Use AI to guide leads from opt-in to booked call through done-for-you funnels and follow-up sequences.",
      features: ["Custom funnel design", "Automated follow-up sequences", "Performance tracking & analytics"],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Smart Business Automation for Coaches",
      description: "From AI chatbots to workflow automations — we help you reclaim your time and scale smarter.",
      features: ["AI chatbot integration", "Workflow automation", "Custom AI assistants"],
      gradient: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute top-0 left-1/3 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Our <span className="font-normal text-sky-400">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive AI solutions designed to transform your business operations and accelerate growth
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={200 + index * 150}>
              <Card className="group bg-gray-900/50 border-gray-800/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-500 hover:border-gray-700/50 rounded-2xl hover:scale-[1.02] transform cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-4 bg-gradient-to-br ${service.gradient} text-white mb-6 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      {service.icon}
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-light text-white group-hover:text-white transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-400 group-hover:text-gray-300 mb-8 text-lg leading-relaxed font-light transition-colors">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300 group-hover:text-white transition-colors font-light group-hover:translate-x-2 duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
