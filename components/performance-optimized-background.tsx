"use client"

import { useEffect, useState, useCallback } from "react"
import { usePerformance } from "@/hooks/use-performance"

export function PerformanceOptimizedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const { prefersReducedMotion, isLowEndDevice } = usePerformance()

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle mouse movement updates for better performance
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    })
  }, [])

  useEffect(() => {
    // Skip mouse tracking for reduced motion or low-end devices
    if (prefersReducedMotion || isLowEndDevice) return

    // Throttle mouse events
    let ticking = false
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleMouseMove(e)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("mousemove", throttledMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", throttledMouseMove)
  }, [handleMouseMove, prefersReducedMotion, isLowEndDevice])

  // Skip rendering animated background for low-end devices
  if (prefersReducedMotion || isLowEndDevice) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-sky-500/2 rounded-full blur-3xl top-1/4 right-1/4" />
        <div className="absolute w-80 h-80 bg-white/1 rounded-full blur-3xl bottom-1/4 left-1/4" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Optimized animated gradient orbs with CSS transforms */}
      <div
        className="absolute w-96 h-96 bg-sky-500/3 rounded-full blur-3xl will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
          transition: "transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          top: "20%",
          right: "20%",
        }}
      />
      <div
        className="absolute w-80 h-80 bg-white/2 rounded-full blur-3xl will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px, 0)`,
          transition: "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          bottom: "20%",
          left: "20%",
        }}
      />
      <div
        className="absolute w-64 h-64 bg-emerald-500/2 rounded-full blur-3xl will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
          transition: "transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          top: "60%",
          left: "60%",
        }}
      />
    </div>
  )
}
