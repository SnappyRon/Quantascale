"use client"

import { useEffect, useState } from "react"
import { usePerformance } from "@/hooks/use-performance"

export function PerformanceMonitor() {
  const { fps, memoryUsage, isLowEndDevice, prefersReducedMotion } = usePerformance()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show performance monitor in development or when performance is poor
    const isDev = process.env.NODE_ENV === "development"
    const isPoorPerformance = fps < 30 || memoryUsage > 100

    setIsVisible(isDev || isPoorPerformance)
  }, [fps, memoryUsage])

  if (!isVisible) return null

  return (
