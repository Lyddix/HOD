'use client'

import { useEffect, useRef } from 'react'

interface ParticleProps {
  left: number
  top: number
  size: number
  opacity: number
  delay: number
  duration: number
  radius1: number
  radius2: number
  radius3: number
  freq1: number
  freq2: number
  freq3: number
  phase1: number
  phase2: number
  phase3: number
}

export default function Particle({
  left,
  top,
  size,
  opacity,
  delay,
  duration,
  radius1,
  radius2,
  radius3,
  freq1,
  freq2,
  freq3,
  phase1,
  phase2,
  phase3
}: ParticleProps) {
  const particleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particleRef.current) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime - delay * 1000
      }

      const elapsed = (currentTime - startTime) / 1000
      const progress = (elapsed % duration) / duration
      const time = progress * Math.PI * 2

      // Continuous motion using sine waves
      const x = radius1 * Math.cos(freq1 * time + phase1) + 
               radius2 * Math.cos(freq2 * time + phase2) + 
               radius3 * Math.cos(freq3 * time + phase3)
      const y = radius1 * Math.sin(freq1 * time + phase1) + 
               radius2 * Math.sin(freq2 * time + phase2) + 
               radius3 * Math.sin(freq3 * time + phase3)

      if (particleRef.current) {
        particleRef.current.style.transform = `translate(${x}px, ${y}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [delay, duration, radius1, radius2, radius3, freq1, freq2, freq3, phase1, phase2, phase3])

  return (
    <div
      ref={particleRef}
      className="absolute bg-yellow-500 rounded-full"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: '0 0 6px rgba(252, 184, 59, 1)',
        opacity: opacity,
      }}
    />
  )
}

