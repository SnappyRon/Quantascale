"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  fps: number
  memoryUsage: number
  isLowEndDevice: boolean
  prefersReducedMotion: boolean
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    isLowEndDevice: false,
    prefersReducedMotion: false,
  })

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Detect low-end devices
    const isLowEndDevice =
      navigator.hardwareConcurrency <= 2 ||
      navigator.deviceMemory <= 2 ||
      /Android.*Chrome\/[.0-9]*\s/.test(navigator.userAgent)

    // Monitor FPS
    let frameCount = 0
    let lastTime = performance.now()
    let fps = 60

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        frameCount = 0
        lastTime = currentTime

        setMetrics((prev) => ({ ...prev, fps }))
      }

      if (!prefersReducedMotion) {
        requestAnimationFrame(measureFPS)
      }
    }

    // Get memory usage if available
    const getMemoryUsage = () => {
      if ("memory" in performance) {
        const memory = (performance as any).memory
        return Math.round(memory.usedJSHeapSize / 1048576) // Convert to MB
      }
      return 0
    }

    setMetrics({
      fps,
      memoryUsage: getMemoryUsage(),
      isLowEndDevice,
      prefersReducedMotion,
    })

    if (!prefersReducedMotion) {
      requestAnimationFrame(measureFPS)
    }

    // Monitor memory usage periodically
    const memoryInterval = setInterval(() => {
      setMetrics((prev) => ({ ...prev, memoryUsage: getMemoryUsage() }))
    }, 5000)

    return () => {
      clearInterval(memoryInterval)
    }
  }, [])

  return metrics
}
