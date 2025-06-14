"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-96 h-96 bg-sky-500/3 rounded-full blur-3xl transition-transform duration-[3000ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          top: "20%",
          right: "20%",
        }}
      />
      <div
        className="absolute w-80 h-80 bg-white/2 rounded-full blur-3xl transition-transform duration-[4000ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          bottom: "20%",
          left: "20%",
        }}
      />
      <div
        className="absolute w-64 h-64 bg-emerald-500/2 rounded-full blur-3xl transition-transform duration-[5000ms] ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          top: "60%",
          left: "60%",
        }}
      />
    </div>
  )
}
