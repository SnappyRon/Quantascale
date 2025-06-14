import { Badge } from "@/components/ui/badge"

export function TrustSection() {
  const platforms = [
    { name: "LinkedIn", logo: "/placeholder.svg?height=40&width=120" },
    { name: "GoHighLevel", logo: "/placeholder.svg?height=40&width=120" },
    { name: "ChatGPT", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Zapier", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Google", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-20 bg-gray-950/50 border-y border-gray-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-2 text-sm bg-sky-600/10 text-sky-300 border-sky-600/20 font-light"
          >
            Powered by Industry Leaders
          </Badge>
          <h2 className="text-2xl font-light text-white mb-8">Trusted by Growth-Driven Entrepreneurs</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-60 transition-opacity">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={platform.logo || "/placeholder.svg"}
                alt={`${platform.name} logo`}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
