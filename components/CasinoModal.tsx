'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Casino } from '@/types/casino'

interface CasinoModalProps {
  casino: Casino
  onClose: () => void
}

// Loading Spinner Component
const LoadingSpinner = ({ color = '#FCB83B' }: { color?: string }) => (
  <div className="flex justify-center items-center">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: color }}></div>
    </div>
  </div>
)

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => { setIsMobile(window.innerWidth < 768) }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return { isMobile, isClient }
}

export default function CasinoModal({ casino, onClose }: CasinoModalProps) {
  const { isMobile, isClient } = useIsMobile()
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imageRendered, setImageRendered] = useState(false)
  const [loadingError, setLoadingError] = useState(false)
  const casinoColor = casino.borderColor || '#FCB83B'
  const casinoGlowColor = casino.glowColor || 'rgba(252,184,59,0.6)'

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  // Reset loading state when casino changes
  useEffect(() => {
    setImagesLoaded(false)
    setImageRendered(false)
    setLoadingError(false)
  }, [casino])

  // Preload images - preload both banners to ensure they're ready (especially important for PNGs)
  useEffect(() => {
    if (!casino) return

    // Preload both banners to ensure they're cached, especially important for slower-loading PNGs
    const imagesToLoad: string[] = []
    if (casino.banner1) imagesToLoad.push(casino.banner1)
    if (casino.banner2) imagesToLoad.push(casino.banner2)
    
    // If no banners, still allow modal to show
    if (imagesToLoad.length === 0) {
      setImagesLoaded(true)
      return
    }

    let loadedCount = 0
    let errorCount = 0
    const totalImages = imagesToLoad.length

    const checkAllLoaded = () => {
      // Only proceed if at least one image loaded successfully, or all failed
      if (loadedCount > 0 || errorCount === totalImages) {
        // Small delay to ensure image is fully decoded (especially for PNGs)
        setTimeout(() => {
          setImagesLoaded(true)
        }, 50)
      }
    }

    imagesToLoad.forEach((src) => {
      const img = new window.Image()
      img.onload = () => {
        loadedCount++
        checkAllLoaded()
      }
      img.onerror = () => {
        errorCount++
        // If this was the only image and it failed, still show modal
        if (errorCount === totalImages && loadedCount === 0) {
          setLoadingError(true)
          setImagesLoaded(true)
        } else {
          checkAllLoaded()
        }
      }
      img.src = src
    })
  }, [casino])

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
        <span className="ml-2 text-white font-semibold">{rating.toFixed(1)}</span>
      </span>
    )
  }

  // Show loading state until preload is complete AND image is rendered
  if (!imagesLoaded || !imageRendered) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70" onClick={onClose}>
        <div className="bg-transparent rounded-3xl relative z-50 flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
          <LoadingSpinner color={casinoColor} />
        </div>
      </div>
    )
  }

  // Mobile Modal
  if (isClient && isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70" onClick={onClose}>
        <div 
          className="bg-transparent rounded-3xl overflow-hidden relative z-50 flex flex-col w-11/12 max-w-md max-h-[90vh] transition-all duration-300 border-2" 
          onClick={(e) => e.stopPropagation()}
          style={{ 
            background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #1a1a1a 40%, #0f0f0f 80%, #050505 100%)',
            borderColor: `${casinoColor}99`,
            boxShadow: `0 0 50px ${casinoGlowColor}`
          }}
        >
          <div className="absolute top-3 right-3 flex items-center gap-3 z-50">
            {casino.license && (
              <div 
                className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 border-2"
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
            <button 
              className="text-white hover:text-white transition bg-red-600 hover:bg-red-700 rounded-full p-1 shadow-[0_4px_8px_rgba(0,0,0,0.3)]" 
              onClick={onClose} 
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
            {loadingError ? (
              <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">{casino.name}</div>
                  <div className="text-sm opacity-75">Image unavailable</div>
                </div>
              </div>
            ) : (
              <Image 
                src={casino.banner1} 
                alt={`${casino.name} banner`} 
                fill 
                className="w-full h-full object-contain"
                onLoad={() => setImageRendered(true)}
                onError={() => {
                  setLoadingError(true)
                  setImageRendered(true)
                }}
                priority
              />
            )}
          </div>
          <div className="p-4 flex flex-col flex-1" style={{ background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #1a1a1a 40%, #0f0f0f 80%, #050505 100%)' }}>
            <div className="flex flex-col space-y-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow mb-1">{casino.name.toUpperCase()}</h3>
                {casino.rating && renderStars(casino.rating)}
              </div>
              {casino.description && (
                <p className="text-white/90 text-sm leading-relaxed">{casino.description}</p>
              )}
              {casino.features && casino.features.length > 0 && (
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {casino.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: casinoColor }}></div>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-auto space-y-3">
              {casino.welcomeOffer && (
                <div 
                  className="rounded-lg px-3 py-2 text-sm border-2"
                  style={{
                    backgroundColor: `${casinoColor}1A`,
                    borderColor: `${casinoColor}4D`
                  }}
                >
                  <span className="font-bold" style={{ color: casinoColor }}>Exclusive Welcome Offer:</span> 
                  <span className="text-white font-normal"> {casino.welcomeOffer.replace('Welcome Bonus', 'Deposit Bonus')}</span>
                </div>
              )}
              <a 
                href={casino.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => e.stopPropagation()}
                className="font-semibold rounded-lg py-3 text-center text-base w-full block transition-all duration-200 focus:outline-none shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] border-2"
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
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop Modal
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70" onClick={onClose}>
      <div 
        className="bg-transparent rounded-3xl overflow-hidden relative z-50 flex flex-col md:flex-row w-11/12 max-w-5xl max-h-[90vh] transition-all duration-300 border-2" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #2a2a2a 40%, #1a1a1a 80%, #0f0f0f 100%)',
          borderColor: `${casinoColor}99`,
          boxShadow: `0 0 50px ${casinoGlowColor}`
        }}
      >
        <div className="absolute top-3 right-3 z-50">
          <button 
            className="text-white hover:text-white transition bg-red-600 hover:bg-red-700 rounded-full p-1 shadow-[0_4px_8px_rgba(0,0,0,0.3)]" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative flex-shrink-0 w-full md:w-auto overflow-hidden">
          <div className="relative w-full h-full rounded-t-3xl md:rounded-l-3xl md:rounded-t-none overflow-hidden" style={{ width: '500px', height: '500px' }}>
            {loadingError ? (
              <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">{casino.name}</div>
                  <div className="text-lg opacity-75">Image unavailable</div>
                </div>
              </div>
            ) : (
              <Image 
                src={casino.banner2 || casino.banner1} 
                alt={`${casino.name} banner`} 
                fill 
                className="w-full h-full object-contain"
                onLoad={() => setImageRendered(true)}
                onError={() => {
                  setLoadingError(true)
                  setImageRendered(true)
                }}
                priority
              />
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col justify-between rounded-r-3xl rounded-b-3xl md:rounded-r-3xl md:rounded-b-none w-full md:w-auto min-w-[500px]" style={{ height: '500px', background: 'radial-gradient(ellipse at center, #0f0f0f 0%, #1a1a1a 40%, #0f0f0f 80%, #050505 100%)' }}>
          <div className="flex flex-col space-y-3">
            <div>
              <h3 className="text-2xl font-bold text-white drop-shadow mb-1">{casino.name.toUpperCase()}</h3>
              {casino.rating && (
                <div className="flex items-center justify-between">
                  {renderStars(casino.rating)}
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
              )}
            </div>
            {casino.description && (
              <p className="text-white/90 text-sm leading-relaxed">{casino.description}</p>
            )}
            {casino.features && casino.features.length > 0 && (
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Key Features:</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {casino.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: casinoColor }}></div>
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="space-y-3">
            {casino.welcomeOffer && (
              <div 
                className="rounded-lg px-3 py-2 text-sm border-2"
                style={{
                  backgroundColor: `${casinoColor}1A`,
                  borderColor: `${casinoColor}4D`
                }}
              >
                <span className="font-bold" style={{ color: casinoColor }}>Exclusive Welcome Offer:</span> 
                <span className="text-white font-normal"> {casino.welcomeOffer.replace('Welcome Bonus', 'Deposit Bonus')}</span>
              </div>
            )}
            <a 
              href={casino.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="font-semibold rounded-lg py-3 text-center text-base w-full block transition-all duration-200 focus:outline-none shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] border-2"
              style={{
                background: `linear-gradient(to bottom, ${casinoColor}, ${casinoColor}DD)`,
                color: '#0f0f0f',
                borderColor: `${casinoColor}66`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to bottom, ${casinoColor}DD, ${casinoColor}BB)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to bottom, ${casinoColor}, ${casinoColor}DD)`
              }}
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

