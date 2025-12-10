'use client'

import { motion } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import CasinoCard from './CasinoCard'
import { Casino } from '@/types/casino'
import Link from 'next/link'
import SectionDivider from './SectionDivider'

// Casino data with real banners and links
export const placeholderCasinos: Casino[] = [
  {
    id: '1',
    name: 'Mega Dice',
    logo: '/casino/megadice_banner_1.svg',
    banner1: '/casino/megadice_banner_1.svg',
    banner2: '/casino/megadice_banner_2.svg',
    rating: 4.8,
    bonus: '200% Deposit Bonus up to 1 BTC',
    features: [
      '200% Deposit Bonus up to 1 BTC',
      'Fast Deposits & Withdrawals',
      '15% Weekly Cashback',
      '24/7 Live Support',
      'Casino, Live Casino & Sports Betting',
      'VIP Program',
      'Crypto Deposits & Withdrawals'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDv6lJYWmxbtZGNd7ZgqdRLk/1/',
    description: 'Mega Dice is a cutting-edge crypto casino offering an exceptional gaming experience with Bitcoin and cryptocurrency support. Features a comprehensive selection of casino games, slots, live casino, and sports betting with generous crypto bonuses.',
    welcomeOffer: '200% Deposit Bonus up to 1 BTC + 50 Free Spins',
    license: 'Licensed',
    borderColor: '#00E9A4', // Green/cyan from Mega Dice
    glowColor: 'rgba(0, 233, 164, 0.6)' // Green/cyan glow
  },
  {
    id: '2',
    name: 'TG Casino',
    logo: '/casino/tg_banner_1.png',
    banner1: '/casino/tg_banner_1.png',
    banner2: '/casino/tg_banner_2.png',
    rating: 4.7,
    bonus: '200% Rakeback Bonus up to 10 ETH + 50 Free Spins',
    features: [
      'Loyalty Rewards Program',
      'Automatic rakeback with no wagering requirements',
      'Play and earn points to raise loyalty levels',
      'Amazing rakeback rates on all promotions',
      'Fast withdrawals',
      '24/7 Customer support'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDuO--BLE9QE82Nd7ZgqdRLk/1/',
    description: 'TG Casino offers an exceptional loyalty rewards program where players can earn rakeback automatically with no wagering requirements. Join and get a generous welcome bonus, then play to raise your loyalty level and unlock amazing rakeback rates on top of all other promotions and bonuses.',
    welcomeOffer: '200% Rakeback Bonus up to 10 ETH + 50 Free Spins',
    license: 'Licensed',
    borderColor: '#F5802F', // Orange from TG Casino
    glowColor: 'rgba(245, 128, 47, 0.6)' // Orange glow
  },
  {
    id: '3',
    name: 'Instant Casino',
    logo: '/casino/instant_banner_1.svg',
    banner1: '/casino/instant_banner_1.svg',
    banner2: '/casino/instant_banner_2.svg',
    rating: 4.6,
    bonus: '200% Deposit Bonus up to €7,500',
    features: [
      '200% Deposit Bonus up to €7,500',
      'Fast Deposits & Withdrawals',
      '10% Weekly Cashback',
      '24/7 Live Support',
      'Casino, Live Casino & Sports Betting',
      'VIP Program',
      'Crypto Deposits & Withdrawals'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDtpSEhoIGdNkmNd7ZgqdRLk/1/',
    description: 'Instant Casino delivers premium gaming with an impressive 200% welcome bonus and generous cashback rewards. Get 10% of your losses back each week, making every gaming session more rewarding. Experience seamless gaming across casino, live casino, sports betting, and in-play options with lightning-fast transactions.',
    welcomeOffer: '200% Deposit Bonus up to €7,500',
    license: 'Licensed',
    borderColor: '#FFE700', // Yellow from Instant Casino
    glowColor: 'rgba(255, 231, 0, 0.6)' // Yellow glow
  },
  {
    id: '4',
    name: 'Winningz',
    logo: '/casino/winningz_banner_1.svg',
    banner1: '/casino/winningz_banner_1.svg',
    banner2: '/casino/winningz_banner_2.svg',
    rating: 4.5,
    bonus: '100% up to 1000 Euro + 100 Free Spins',
    features: [
      '100% up to 1000 Euro + 100 Free Spins',
      '24/7 Live Support',
      'Fast Deposits & Withdrawals',
      'Crypto Deposits & Withdrawals',
      'Casino, Live Casino & Sports Betting',
      'VIP Program'
    ],
    url: 'https://record.ultimate.partners/_NlAELMvHxALKto_EPcZApGNd7ZgqdRLk/1/?pg=2',
    description: 'Winningz Casino delivers an exceptional gaming experience with secure and fast deposits, non-stop bonuses, and massive winning opportunities. Join now for an unbeatable combination of entertainment and rewards with their premium gaming platform.',
    welcomeOffer: '100% up to 1000 Euro + 100 Free Spins',
    license: 'Licensed',
    borderColor: '#71FF79', // Green from Winningz
    glowColor: 'rgba(113, 255, 121, 0.6)' // Green glow
  },
  {
    id: '5',
    name: 'Golden Panda',
    logo: '/casino/golden_banner_1.svg',
    banner1: '/casino/golden_banner_1.svg',
    banner2: '/casino/Golden_banner_2.png',
    rating: 4.6,
    bonus: '200% up to €5,000 welcome bonus',
    features: [
      '200% up to €5,000 welcome bonus',
      'One of the best cashback deals available',
      'Highest betting limits in the industry',
      'Fast sign up process',
      '50 Free Spins on sign up',
      'Instant processing of withdrawal requests',
      'Fully licensed and regulated',
      'Wide selection of casino games'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDt8YAuMxhPI-WNd7ZgqdRLk/1/',
    description: 'We offer one of the best cashback deals available, with instant processing of withdrawal requests. Additionally, our players benefit from some of the highest betting limits in the industry. Fully licensed, fast sign up, fast withdrawals, no worries.',
    welcomeOffer: '200% up to €5,000 + 50 Free Spins',
    license: 'Licensed',
    borderColor: '#FBDFA3', // Beige/light gold from Golden Panda
    glowColor: 'rgba(251, 223, 163, 0.6)' // Beige/light gold glow
  },
  {
    id: '6',
    name: 'Samba Slots',
    logo: '/casino/samba_banner_1.svg',
    banner1: '/casino/samba_banner_1.svg',
    banner2: '/casino/samba_banner_2.svg',
    rating: 4.6,
    bonus: '10% Weekly Cashback + Welcome Bonus',
    features: [
      '10% Weekly Cashback with no wagering requirements',
      'Cashback paid every Monday at 6:00 UTC',
      'Get 10% of net losses back in cash',
      'Up to €10,000 cashback per week',
      'Brazilian-themed casino experience',
      'Large selection of slot games',
      'Fast withdrawals',
      '24/7 Customer support'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDv6sFz1maRvBWNd7ZgqdRLk/1/',
    description: 'Samba Slots brings the vibrant energy of Brazilian carnival to online gaming. Enjoy 10% weekly cashback with no wagering requirements - get cash straight into your account every Monday. Experience a festive casino with exciting games, generous bonuses, and the fastest withdrawals.',
    welcomeOffer: '10% Weekly Cashback + Welcome Bonus',
    license: 'Licensed',
    borderColor: '#FFEF42', // Yellow from Samba Slots
    glowColor: 'rgba(255, 239, 66, 0.6)' // Yellow glow
  },
  {
    id: '7',
    name: 'Fast Slots',
    logo: '/casino/fast_banner_1.svg',
    banner1: '/casino/fast_banner_1.svg',
    banner2: '/casino/fast_banner_2.svg',
    rating: 4.5,
    bonus: '200% up to €5,000 welcome bonus',
    features: [
      '200% up to €5,000 welcome bonus',
      '10% Weekly Cashback (no wagering requirements)',
      'Instant cashback rewards',
      'Tailored gaming experiences',
      '50 Free Spins on sign up',
      'Maximum cashback payout: €10,000 per week',
      'Fast withdrawals',
      'VIP team assistance for high cashback amounts'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDt100sW4cRaTmNd7ZgqdRLk/1/',
    description: 'Get rewarded even when luck isn\'t on your side. With instant cashback, fast withdrawals, and tailored experiences, Fast Slots ensures every spin keeps you in the game.',
    welcomeOffer: '200% up to €5,000 + 50 Free Spins + 10% Weekly Cashback',
    license: 'Licensed',
    borderColor: '#E421DC', // Magenta/pink for Fast Slots
    glowColor: 'rgba(228, 33, 220, 0.6)' // Magenta/pink glow
  },
  {
    id: '8',
    name: 'Nokyc Casino',
    logo: '/casino/nokyc_banner_1.svg',
    banner1: '/casino/nokyc_banner_1.svg',
    banner2: '/casino/nokyc_banner_2.svg',
    rating: 4.6,
    bonus: '200% up to 25,000 USDT welcome bonus',
    features: [
      '200% up to 25,000 USDT welcome bonus',
      '10% weekly cashback on net losses',
      'No KYC requirements - instant access',
      'Over 5,000 games available',
      '50 Free Spins on sign up',
      'Up to 10,000 USDT cashback every Monday at 06:00 UTC',
      'Hassle-free gaming experience',
      'Privacy-focused platform'
    ],
    url: 'https://record.discasinoaffiliates.com/_rLFec7n-XDtp4_7XfVIhO2Nd7ZgqdRLk/1/',
    description: 'No KYC crypto casino with instant access and hassle-free gaming. Over 5,000 games, weekly cashback rewards, and instant withdrawals. Privacy-focused platform.',
    welcomeOffer: '200% up to 25,000 USDT + 50 Free Spins + 10% Weekly Cashback',
    license: 'Licensed',
    borderColor: '#7E56E9', // Purple from Nokyc
    glowColor: 'rgba(126, 86, 233, 0.6)' // Purple glow
  },
  {
    id: '9',
    name: 'Twin',
    logo: '/casino/twin_banner_1.png',
    banner1: '/casino/twin_banner_1.png',
    banner2: '/casino/twin_banner_2.png',
    rating: 4.6,
    bonus: '100% Welcome Bonus up to 500 € + 100 Free Spins',
    features: [
      '100% Welcome Bonus up to 500 € + 100 Free Spins',
      '150% Crypto Kickstart Bonus up to 1.000 € + 150 FS',
      'Loyalty Rewards Program - earn points on every bet',
      'Cashback on wagers',
      'Casino, Sports Betting & Esports',
      'Regular tournaments and promotions'
    ],
    url: 'https://bit.ly/house_twin',
    description: 'Twin Casino offers a comprehensive gaming experience with generous welcome bonuses, loyalty rewards, and cashback. Earn points on every bet and trade them for amazing rewards. Enjoy casino games, sports betting, and esports with regular tournaments and exclusive promotions.',
    welcomeOffer: '100% Welcome Bonus up to 500 € + 100 Free Spins',
    license: 'Licensed',
    borderColor: '#3498FE', // Blue from Twin
    glowColor: 'rgba(52, 152, 254, 0.6)' // Blue glow
  },
]

interface CasinoGridProps {
  onCasinoClick: (casino: Casino) => void
  variant?: 'simple' | 'full'
  showSearch?: boolean
  title?: string
}

export default function CasinoGrid({ onCasinoClick, variant = 'full', showSearch = true, title = 'All Bonuses' }: CasinoGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredCasinos = useMemo(() => {
    if (!searchQuery.trim()) {
      return placeholderCasinos
    }

    const query = searchQuery.toLowerCase()
    return placeholderCasinos.filter((casino) => {
      const nameMatch = casino.name.toLowerCase().includes(query)
      const bonusMatch = casino.bonus.toLowerCase().includes(query)
      const featuresMatch = casino.features.some((feature) =>
        feature.toLowerCase().includes(query)
      )
      const welcomeOfferMatch = casino.welcomeOffer?.toLowerCase().includes(query)

      return nameMatch || bonusMatch || featuresMatch || welcomeOfferMatch
    })
  }, [searchQuery])

  return (
    <section 
      id="bonuses" 
      className={variant === 'full' ? 'px-3 md:px-0 pt-0 pb-8 md:pt-0 md:pb-16' : 'container mx-auto px-4 pt-6 md:pt-6 pb-8 md:pb-16'}
    >
      <div 
        className={variant === 'full' ? 'container mx-auto px-3 py-4 md:p-8' : ''}
        style={variant === 'full' ? { 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          borderRadius: '1rem', 
          marginTop: '1.5rem'
        } : {}}
      >
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={variant === 'full' ? "mb-6 md:mb-12" : "text-center mb-6 md:mb-12"}
        style={{ marginTop: '0' }}
      >
        {variant === 'full' ? (
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-white uppercase tracking-wide">
                {title}
              </h2>
              {/* Yellow line under title */}
              <div className="flex justify-start mb-2">
                <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
              </div>
              <p className="text-white/90 text-sm md:text-xl">Click on any casino to view details and claim your bonus</p>
            </div>
            
            {/* Search Bar */}
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-auto md:min-w-[400px] md:max-w-lg lg:max-w-xl"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search casinos, bonuses, features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl glass-effect border-2 border-white/30 focus:border-yellow-500 focus:outline-none text-white placeholder-white/60 transition-all shadow-lg focus:shadow-xl bg-white/5"
                  />
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white uppercase tracking-wide">
              {title}
            </h2>
            {/* Yellow line under title */}
            <div className="flex justify-center mb-4">
              <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
            </div>
            
            {/* Search Bar */}
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search casinos, bonuses, features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl glass-effect border-2 border-white/30 focus:border-yellow-500 focus:outline-none text-white placeholder-white/60 transition-all shadow-lg focus:shadow-xl bg-white/5"
                  />
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </>
        )}
      </motion.div>

      {filteredCasinos.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-white/80 text-xl">No casinos found matching your search.</p>
        </motion.div>
      ) : (
        <div className={variant === 'full' ? 'space-y-8' : ''}>
          <div 
            className={`grid ${variant === 'full' ? 'grid-cols-2' : 'grid-cols-2'} md:grid-cols-2 ${variant === 'simple' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} ${variant === 'full' ? 'gap-y-4 gap-x-3 md:gap-y-10 md:gap-x-6' : 'gap-y-3 gap-x-2.5 md:gap-y-6 md:gap-x-4'}`}
            style={variant === 'simple' ? { 
              backgroundColor: 'rgba(0, 0, 0, 0.3)', 
              borderRadius: '1rem', 
              padding: isMobile ? '1rem' : '2rem',
              marginTop: '1.5rem'
            } : {}}
          >
            {filteredCasinos.flatMap((casino, index) => {
              // For full variant: 2 cols on mobile, 2 cols on md, 3 cols on lg
              // For simple variant: 2 cols on mobile, 2 cols on md, 4 cols on lg
              // For other variants: 2 cols on mobile, 2 cols on md+
              const cardsPerRow = variant === 'full' ? (isMobile ? 2 : 3) : (variant === 'simple' ? (isMobile ? 2 : 4) : 2)
              const cardsPerTwoRows = cardsPerRow * 2
              // Add dividers for full variant always, or for simple variant on mobile
              const shouldAddDivider = index > 0 && index % cardsPerTwoRows === 0 && 
                (variant === 'full' || (variant === 'simple' && isMobile))
              
              const elements = []
              
              if (shouldAddDivider) {
                elements.push(
                  <div key={`divider-${index}`} className="col-span-full w-full">
                    <SectionDivider simple />
                  </div>
                )
              }
              
              elements.push(
                <motion.div
                  key={casino.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={variant === 'full' ? 'scale-100 md:scale-95' : ''}
                >
                  <CasinoCard casino={casino} onClick={() => onCasinoClick(casino)} variant={variant} />
                </motion.div>
              )
              
              return elements
            })}
            {variant === 'simple' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: filteredCasinos.length * 0.1 }}
                className="w-full"
              >
                <Link href="/bonuses" className="block w-full h-full">
                  <div 
                    className="rounded-2xl flex flex-col w-full cursor-pointer hover:scale-[1.02] transition-transform duration-200 h-full" 
                  >
                    <div 
                      className="flex flex-col h-full rounded-2xl overflow-hidden shadow-[0_0_8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_16px_rgba(252,184,59,0.9)] transition-shadow relative" 
                      style={{ 
                        background: 'linear-gradient(135deg, #FFED56 0%, #FCB83B 25%, #F9BF45 50%, #FCB83B 75%, #F9AB18 100%)',
                        border: '1.5px solid rgba(252,184,59,0.8)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 0 20px rgba(252,184,59,0.4)'
                      }}
                    >
                      {/* Shiny overlay effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                          mixBlendMode: 'overlay'
                        }}
                      />
                      {/* Banner area with same 2:1 ratio */}
                      <div className="w-full relative rounded-2xl overflow-hidden flex items-center justify-center z-10" style={{ aspectRatio: '2 / 1', minHeight: '80px' }}>
                        <div className="flex flex-col items-center justify-center text-center p-3 md:p-6">
                          <svg 
                            className="w-8 h-8 md:w-16 md:h-16 text-white mb-2 md:mb-3 drop-shadow-lg" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="text-white font-bold text-sm md:text-xl uppercase drop-shadow-lg">View More</span>
                          <span className="text-white/90 text-xs md:text-base mt-0.5 md:mt-1 drop-shadow">See All Bonuses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      )}
      </div>
    </section>
  )
}

