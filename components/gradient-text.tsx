"use client"

import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: string
  animate?: boolean
}

export function GradientText({
  children,
  className = "",
  gradient = "from-sky-400 via-sky-300 to-emerald-400",
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${
        animate ? "animate-gradient-x" : ""
      } ${className}`}
      style={{
        backgroundSize: animate ? "200% 200%" : "100% 100%",
      }}
    >
      {children}
    </span>
  )
}
