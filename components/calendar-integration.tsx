"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Video, Phone, ExternalLink } from "lucide-react"

interface CalendarOption {
  id: string
  title: string
  description: string
  duration: string
  type: "video" | "phone" | "in-person"
  url: string
  icon: React.ReactNode
}

export function CalendarIntegration() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Replace these URLs with your actual calendar booking links
  const calendarOptions: CalendarOption[] = [
    {
      id: "strategy-call",
      title: "Strategy Call",
      description: "30-minute consultation to discuss your business goals and AI automation needs",
      duration: "30 min",
      type: "video",
      url: "https://calendly.com/your-username/strategy-call", // Replace with your Calendly link
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: "discovery-session",
      title: "Discovery Session",
      description: "60-minute deep dive into your current processes and growth opportunities",
      duration: "60 min",
      type: "video",
      url: "https://calendly.com/your-username/discovery-session", // Replace with your Calendly link
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: "quick-chat",
      title: "Quick Chat",
      description: "15-minute introductory call to see if we're a good fit",
      duration: "15 min",
      type: "phone",
      url: "https://calendly.com/your-username/quick-chat", // Replace with your Calendly link
      icon: <Phone className="h-5 w-5" />,
    },
  ]

  const handleBooking = (url: string) => {
    // Open calendar link in new tab
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-light text-white mb-4">Choose Your Meeting Type</h3>
        <p className="text-gray-400 font-light">Select the option that best fits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {calendarOptions.map((option) => (
          <Card
            key={option.id}
            className={`group bg-gray-900/50 border-gray-800/50 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 rounded-2xl cursor-pointer hover:scale-105 transform ${
              selectedOption === option.id ? "border-sky-500/50 bg-sky-500/10" : "hover:border-gray-700/50"
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <CardHeader className="text-center">
              <div className="mx-auto p-4 bg-gradient-to-br from-sky-500 to-sky-600 text-white mb-4 rounded-2xl shadow-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <CardTitle className="text-xl font-light text-white">{option.title}</CardTitle>
              <div className="flex items-center justify-center space-x-2 text-sky-400">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-light">{option.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{option.description}</p>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  handleBooking(option.url)
                }}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-full font-light transition-all duration-300 hover:scale-105"
              >
                Book Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alternative: Embedded Calendar Widget */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-light text-white mb-4">Or Schedule Directly</h3>
          <p className="text-gray-400 font-light">Pick a time that works best for you</p>
        </div>

        {/* Calendly Embed - Replace with your actual Calendly embed code */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
          <div className="aspect-video bg-gray-800/50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 font-light">
                Replace this with your Calendly embed code
                <br />
                <span className="text-sm text-gray-500">Copy the embed code from your Calendly dashboard</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
