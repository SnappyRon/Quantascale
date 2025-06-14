"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  className?: string
}

export function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransformClasses = () => {
    const base = "transition-all duration-1000 ease-out"

    if (isVisible) {
      return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`
    }

    switch (direction) {
      case "up":
        return `${base} opacity-0 translate-y-8 scale-95`
      case "down":
        return `${base} opacity-0 -translate-y-8 scale-95`
      case "left":
        return `${base} opacity-0 translate-x-8 scale-95`
      case "right":
        return `${base} opacity-0 -translate-x-8 scale-95`
      case "fade":
        return `${base} opacity-0 scale-95`
      default:
        return `${base} opacity-0 translate-y-8 scale-95`
    }
  }

  return (
    <div ref={ref} className={`${getTransformClasses()} ${className}`}>
      {children}
    </div>
  )
}
