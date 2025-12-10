'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Particle from './Particle'
import { usePathname } from 'next/navigation'

interface PageBannerProps {
  title: string
  titleDesktop?: string
  subtitle?: string
  icon?: 'bonuses' | 'leaderboards' | 'about' | 'faq' | 'responsible-gambling'
}

export default function PageBanner({ title, titleDesktop, subtitle, icon }: PageBannerProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isResponsibleGambling = pathname === '/responsible-gambling'
  
  // Icon SVG paths for each page - matching header icons
  const iconPaths: Record<string, string> = {
    'bonuses': "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z",
    'leaderboards': "M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z",
    'about': "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
    'faq': "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z",
    'responsible-gambling': "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
  }
  return (
    <div className={`relative ${isHomePage ? 'h-[250px]' : 'h-[200px]'} md:h-[450px]`}>
      <div className="absolute inset-0">
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

          {/* Logo overlay with blend mode and animation - transparent behind title */}
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
          
          {/* Content - centered within visible banner area (below header) */}
          <div className="absolute top-12 md:top-24 bottom-0 left-0 right-0 z-10 flex items-center justify-center overflow-visible">
            <div className="container mx-auto px-4 md:px-12 lg:px-16 w-full overflow-visible">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center relative flex items-center justify-center gap-2 md:gap-4 w-fit mx-auto overflow-visible"
              >
                {/* Left icon */}
                {icon && iconPaths[icon] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 overflow-visible self-center"
                  >
                    <svg 
                      className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-500"
                      fill="currentColor" 
                      viewBox="0 0 512 512"
                      style={{ overflow: 'visible' }}
                    >
                      <path d={iconPaths[icon]} />
                    </svg>
                  </motion.div>
                )}
                <div className="flex-shrink-0">
                  <h1 className={`${isResponsibleGambling ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-6xl lg:text-7xl'} font-bold text-white ${subtitle ? 'md:mb-4' : ''}`} style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                    <span className="md:hidden">{title}</span>
                    {titleDesktop ? <span className="hidden md:inline">{titleDesktop}</span> : <span className="hidden md:inline">{title}</span>}
                  </h1>
                  {subtitle && (
                    <p className="hidden md:block text-sm md:text-xl text-white/80 max-w-2xl mx-auto">
                      {subtitle}
                    </p>
                  )}
                </div>
                {/* Right icon */}
                {icon && iconPaths[icon] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0 overflow-visible self-center"
                  >
                    <svg 
                      className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-500"
                      fill="currentColor" 
                      viewBox="0 0 512 512"
                      style={{ overflow: 'visible' }}
                    >
                      <path d={iconPaths[icon]} />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

