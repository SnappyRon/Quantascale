"use client"

import { useEffect } from "react"

interface CalendlyWidgetProps {
  url: string
  height?: number
  className?: string
}

export function CalendlyWidget({ url, height = 700, className = "" }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    ></div>
  )
}
