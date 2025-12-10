'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Casino } from '@/types/casino'

interface CasinoCardProps {
  casino: Casino
  onClick: () => void
  variant?: 'simple' | 'full'
}

export default function CasinoCard({ casino, onClick, variant = 'full' }: CasinoCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.play-now-btn')) return
    onClick()
  }

  const casinoColor = casino.borderColor || '#FCB83B'
  const casinoGlowColor = casino.glowColor || 'rgba(252,184,59,0.6)'
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    
    return (
      <span className="flex items-center text-sm font-semibold">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="text-sm"
            style={{
              color: i < fullStars
                ? casinoColor
                : i === fullStars && hasHalfStar
                ? `${casinoColor}80`
                : 'rgba(255,255,255,0.3)'
            }}
          >
            ★
          </span>
        ))}
        <span className="ml-1 text-white">{rating.toFixed(1)}</span>
      </span>
    )
  }

  // Simple variant: only image
  if (variant === 'simple') {
    return (
      <div 
        className="rounded-2xl flex flex-col w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200 overflow-hidden border-2 md:border-[3px]" 
        onClick={handleCardClick}
        style={{ 
          borderColor: casinoColor,
          boxShadow: `0 0 8px rgba(0,0,0,0.4), 0 0 0 0 ${casinoGlowColor}`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 12px ${casinoGlowColor}, 0 0 20px ${casinoGlowColor}`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 8px rgba(0,0,0,0.4), 0 0 0 0 ${casinoGlowColor}`
        }}
      >
        <div 
          className="flex flex-col h-full w-full transition-shadow" 
          style={{ 
            background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #1a1a1a 40%, #0f0f0f 80%, #050505 100%)'
          }}
        >
          {/* Banner 1 - 2:1 ratio (width:height) */}
          <div className="w-full relative overflow-hidden" style={{ aspectRatio: '2 / 1' }}>
            <Image 
              src={casino.banner1} 
              alt={casino.name + ' banner'} 
              fill 
              className="object-contain w-full h-full" 
            />
          </div>
        </div>
      </div>
    )
  }

  // Full variant: complete card with all details
  return (
    <div 
      className="rounded-2xl flex flex-col w-full p-0 md:h-[620px] cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
      onClick={handleCardClick}
    >
      <div 
          className="flex flex-col h-full rounded-2xl overflow-hidden transition-shadow" 
          style={{ 
            background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #1a1a1a 40%, #0f0f0f 80%, #050505 100%)', 
            border: `1.5px solid ${casino.borderColor || '#FCB83B'}`,
            boxShadow: `0 0 8px rgba(0,0,0,0.4), 0 0 0 0 ${casino.glowColor || 'rgba(252,184,59,0.6)'}`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 12px ${casino.glowColor || 'rgba(252,184,59,0.6)'}, 0 0 20px ${casino.glowColor || 'rgba(252,184,59,0.6)'}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 8px rgba(0,0,0,0.4), 0 0 0 0 ${casino.glowColor || 'rgba(252,184,59,0.6)'}`
          }}
      >
        {/* Banner 1 - 2:1 ratio (width:height) */}
        <div className="w-full relative rounded-t-2xl overflow-hidden flex-shrink-0" style={{ aspectRatio: '2 / 1' }}>
          <Image 
            src={casino.banner1} 
            alt={casino.name + ' banner'} 
            fill 
            className="object-contain w-full h-full" 
          />
        </div>
        
        {/* Divider Line - Hidden on mobile */}
        <div 
          className="hidden md:block w-full h-[2px] flex-shrink-0" 
          style={{ backgroundColor: `${casinoColor}99` }}
        />
        
        {/* Content Section - Fixed height with flex */}
        <div className="p-3 md:p-6 flex-1 flex flex-col min-h-0">
          {/* Title */}
          <span className="text-base md:text-xl font-bold text-white mb-0.5 md:mb-1 drop-shadow flex-shrink-0">{casino.name.toUpperCase()}</span>
          
          {/* Rating */}
          {casino.rating && (
            <div className="mb-1.5 md:mb-2 flex-shrink-0 flex items-center justify-between">
              <div>{renderStars(casino.rating)}</div>
              {/* License checkmark - Only on mobile */}
              {casino.license && (
                <div 
                  className="md:hidden px-1.5 py-0.5 rounded text-xs font-semibold flex items-center justify-center flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: `${casinoColor}33`,
                    color: casinoColor,
                    borderColor: `${casinoColor}66`
                  }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: casinoColor }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Features - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block mb-3 flex-shrink-0" style={{ minHeight: '70px', maxHeight: '70px' }}>
            {casino.features && casino.features.length > 0 && (
              <div className="space-y-1 h-full overflow-hidden">
                <div className="grid grid-cols-1 gap-1">
                    {casino.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start text-sm text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0" style={{ backgroundColor: casinoColor }}></div>
                        <span className="line-clamp-2 leading-tight">{feature}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Section - Fixed at bottom */}
          <div className="mt-auto flex flex-col flex-shrink-0">
            {/* View More and License - Hidden on mobile, shown on desktop */}
            <div className="hidden md:flex mb-3 justify-between items-center">
              <span className="text-sm font-semibold" style={{ color: casinoColor }}>View More</span>
              {casino.license && (
                <div 
                  className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 flex-shrink-0 border-2"
                  style={{ 
                    backgroundColor: `${casinoColor}33`,
                    color: casinoColor,
                    borderColor: `${casinoColor}66`
                  }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: casinoColor }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed
                </div>
              )}
            </div>
            
            {/* Welcome Offer - Fixed height */}
            {casino.welcomeOffer && (
              <div 
                className="rounded-lg px-2.5 md:px-3 py-1.5 md:py-2 text-sm mb-1.5 md:mb-3 border-2" 
                style={{ 
                  minHeight: isMobile ? '48px' : '55px',
                  backgroundColor: `${casinoColor}1A`,
                  borderColor: `${casinoColor}4D`
                }}
              >
                <div className="font-bold mb-0.5 md:mb-1 text-xs" style={{ color: casinoColor }}>
                  {isMobile ? 'Welcome Offer:' : 'Exclusive Welcome Offer:'}
                </div>
                <div className="text-white font-normal line-clamp-2 leading-tight text-xs md:text-sm">
                  {isMobile 
                    ? casino.welcomeOffer.replace('Welcome Bonus', 'Bonus').replace('Free Spins', 'FS') 
                    : casino.welcomeOffer.replace('Welcome Bonus', 'Deposit Bonus')
                  }
                </div>
              </div>
            )}
            
            {/* Play Now Button */}
            <a 
              href={casino.url} 
              className="play-now-btn font-semibold rounded-lg py-2 md:py-3 text-center text-sm md:text-base transition-all duration-200 focus:outline-none shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] border-2 flex-shrink-0" 
              style={{
                background: `linear-gradient(to bottom, ${casinoColor}, ${casinoColor}DD)`,
                color: '#0f0f1a',
                borderColor: `${casinoColor}66`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to bottom, ${casinoColor}DD, ${casinoColor}BB)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to bottom, ${casinoColor}, ${casinoColor}DD)`
              }}
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={e => e.stopPropagation()}
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

