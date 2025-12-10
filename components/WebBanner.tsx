'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Particle from './Particle'

export default function WebBanner() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary-500/40 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 bg-primary-600/40 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-600/35 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Floating particles */}
      {[...Array(25)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomSize = 2 + Math.random() * 4;
        const randomDuration = 8 + Math.random() * 12;
        const randomDelay = Math.random() * 5;
        const randomOpacity = 0.8 + Math.random() * 0.2;
        
        // Create smooth, continuous curves using multiple sine waves
        const radius1 = 25 + Math.random() * 45;
        const radius2 = 15 + Math.random() * 35;
        const radius3 = 10 + Math.random() * 25;
        const freq1 = 0.5 + Math.random() * 1.5;
        const freq2 = 0.3 + Math.random() * 1.2;
        const freq3 = 0.2 + Math.random() * 0.8;
        const phase1 = Math.random() * Math.PI * 2;
        const phase2 = Math.random() * Math.PI * 2;
        const phase3 = Math.random() * Math.PI * 2;
        
        return (
          <Particle
          key={i}
            left={randomLeft}
            top={randomTop}
            size={randomSize}
            opacity={randomOpacity}
            delay={randomDelay}
            duration={randomDuration}
            radius1={radius1}
            radius2={radius2}
            radius3={radius3}
            freq1={freq1}
            freq2={freq2}
            freq3={freq3}
            phase1={phase1}
            phase2={phase2}
            phase3={phase3}
        />
        );
      })}

      {/* Logo overlay with blend mode and animation */}
      <div className="absolute inset-0 overflow-hidden" style={{ mixBlendMode: 'overlay', opacity: 0.6 }}>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            width: '250%',
            height: '250%',
            left: '-75%',
            top: '-75%'
          }}
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full relative">
            <Image
              src="/logo stor.png"
              alt="House of Degens Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

    </div>
  )
}

