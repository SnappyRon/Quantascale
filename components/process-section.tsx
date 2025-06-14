import { Phone, Settings, Rocket, BarChart } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ProcessSection() {
  const steps = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Discovery",
      description: "Deep dive into your business goals and current challenges",
      gradient: "from-sky-400 to-sky-600",
      iconBg: "from-sky-500 to-sky-600",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Design",
      description: "Custom AI strategy tailored to your specific needs",
      gradient: "from-teal-400 to-teal-600",
      iconBg: "from-teal-500 to-teal-600",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Deploy",
      description: "Launch and optimize your automated systems",
      gradient: "from-emerald-400 to-emerald-600",
      iconBg: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Scale",
      description: "Continuous optimization and growth acceleration",
      gradient: "from-yellow-400 to-yellow-600",
      iconBg: "from-yellow-500 to-yellow-600",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      <div
        className="absolute bottom-0 right-1/3 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              How We{" "}
              <span className="font-normal bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Our proven methodology ensures rapid results and sustainable growth
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Elegant Connection Line */}
          <ScrollReveal delay={400}>
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-600/30 to-transparent"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={600 + index * 200}>
                <div className="relative group text-center">
                  {/* Step Number Circle */}
                  <div
                    className={`relative mx-auto w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 cursor-pointer`}
                  >
                    <span className="text-white font-medium text-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${step.iconBg} text-white mb-6 rounded-2xl shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 cursor-pointer`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-sky-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
