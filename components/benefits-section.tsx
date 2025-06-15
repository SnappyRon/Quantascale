import { Target, Clock, TrendingUp, Zap, Shield, CheckCircle } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Qualified Leads on Autopilot",
      description: "AI systems that attract and qualify prospects 24/7 while you sleep.",
      gradient: "from-sky-500 to-sky-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intelligent Automation",
      description: "Smart workflows that nurture prospects into paying clients automatically.",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Explosive Growth",
      description: "Dominate search results and scale your reach with AI-optimized strategies.",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Freedom",
      description: "Reclaim 15+ hours weekly with systems that handle repetitive tasks.",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Predictable Revenue",
      description: "Build consistent, scalable income streams that grow month over month.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Proven Results",
      description: "Join 50+ businesses already transforming their growth with our systems.",
      gradient: "from-red-500 to-red-600",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-sky-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Why High-Ticket Coaches Choose{" "}
              <span className="font-normal bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                QuantaScale
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Experience measurable improvements in lead quality, conversion rates, and time savings within 30 days
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <div className="group p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:bg-gray-900/70 transition-all duration-500 rounded-2xl hover:border-gray-700/50 hover:scale-105 transform cursor-pointer">
                <div
                  className={`p-4 bg-gradient-to-br ${benefit.gradient} text-white mb-6 inline-flex rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-light text-white mb-4 group-hover:text-white transition-colors group-hover:translate-x-2 duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed font-light transition-all duration-300 group-hover:translate-x-1">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
