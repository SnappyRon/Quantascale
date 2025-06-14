"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { usePerformance } from "@/hooks/use-performance"

interface OptimizedScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  className?: string
  threshold?: number
  rootMargin?: string
}

// Shared IntersectionObserver instance for better performance
let sharedObserver: IntersectionObserver | null = null
const observedElements = new Map<Element, (isVisible: boolean) => void>()

const getSharedObserver = (threshold: number, rootMargin: string) => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target)
          if (callback) {
            callback(entry.isIntersecting)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )
  }
  return sharedObserver
}

export function OptimizedScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: OptimizedScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const { prefersReducedMotion, isLowEndDevice } = usePerformance()

  const handleVisibilityChange = useCallback(
    (visible: boolean) => {
      if (visible && !hasAnimated) {
        if (prefersReducedMotion || delay === 0) {
          setIsVisible(true)
          setHasAnimated(true)
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      }
    },
    [delay, hasAnimated, prefersReducedMotion],
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip animations for reduced motion or low-end devices
    if (prefersReducedMotion) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }

    const observer = getSharedObserver(threshold, rootMargin)
    observedElements.set(element, handleVisibilityChange)
    observer.observe(element)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (element && sharedObserver) {
        observedElements.delete(element)
        sharedObserver.unobserve(element)
      }
    }
  }, [handleVisibilityChange, threshold, rootMargin, prefersReducedMotion])

  const getTransformClasses = () => {
    // Simplified animations for low-end devices
    const duration = isLowEndDevice ? "duration-500" : "duration-1000"
    const base = `transition-all ${duration} ease-out will-change-transform`

    if (isVisible || prefersReducedMotion) {
      return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`
    }

    switch (direction) {
      case "up":
        return `${base} opacity-0 translate-y-4 scale-98`
      case "down":
        return `${base} opacity-0 -translate-y-4 scale-98`
      case "left":
        return `${base} opacity-0 translate-x-4 scale-98`
      case "right":
        return `${base} opacity-0 -translate-x-4 scale-98`
      case "fade":
        return `${base} opacity-0 scale-98`
      default:
        return `${base} opacity-0 translate-y-4 scale-98`
    }
  }

  return (
    <div
      ref={ref}
      className={`${getTransformClasses()} ${className}`}
      style={{
        // Use CSS containment for better performance
        contain: "layout style paint",
      }}
    >
      {children}
    </div>
  )
}
