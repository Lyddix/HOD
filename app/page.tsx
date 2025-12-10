'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import HeaderBanner from '@/components/HeaderBanner'
import CasinoGrid from '@/components/CasinoGrid'
import Footer from '@/components/Footer'
import CasinoModal from '@/components/CasinoModal'
import SectionDivider from '@/components/SectionDivider'
import WebBanner from '@/components/WebBanner'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Casino } from '@/types/casino'
import { placeholderCasinos } from '@/components/CasinoGrid'
import KickLivePopupHome from '@/components/KickLivePopupHome'
import { useKickLivePopup } from '@/components/KickLivePopup'

function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCasino, setSelectedCasino] = useState<Casino | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [savedScrollY, setSavedScrollY] = useState(0)
  const { isLive } = useKickLivePopup()

  const handleCasinoClick = (casino: Casino) => {
    setSavedScrollY(window.scrollY)
    setSelectedCasino(casino)
    setIsModalOpen(true)
    
    // Convert casino name to URL-friendly format
    const urlFriendlyName = casino.name.toLowerCase().replace(/\s+/g, '-')
    router.replace(`?casino=${urlFriendlyName}`, { scroll: false })
  }

  const handleCloseModal = () => {
    router.replace('/', { scroll: false })
    setIsModalOpen(false)
    setSelectedCasino(null)
    window.scrollTo(0, savedScrollY)
  }

  // Handle URL parameter on page load/mount
  useEffect(() => {
    const casinoParam = searchParams.get('casino')
    if (casinoParam) {
      const casino = placeholderCasinos.find(c => {
        const urlFriendly = c.name.toLowerCase().replace(/\s+/g, '-')
        return urlFriendly === casinoParam.toLowerCase()
      })
      
      if (casino) {
        setSelectedCasino(casino)
        setIsModalOpen(true)
        setSavedScrollY(window.scrollY)
      }
    }
  }, [searchParams])

  return (
    <main className="min-h-screen bg-complex relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-600/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-primary-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <div className="relative h-[200px] md:h-[450px]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full overflow-hidden">
              <WebBanner />
              {/* Content - centered within visible banner area (below header) */}
              <div className="absolute top-12 md:top-24 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <HeaderBanner />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4" style={{ paddingTop: '1.5rem' }}>
          <KickLivePopupHome />
        </div>
        {isLive && <SectionDivider />}
        <CasinoGrid onCasinoClick={handleCasinoClick} variant="simple" showSearch={false} title="Partner Casinos" />
        <SectionDivider />

        {/* Leaderboards Section */}
        <div id="leaderboards" className="container mx-auto px-4 py-6 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">LEADERBOARDS</h2>
                <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
              </div>
              <Link 
                href="/leaderboards"
                className="text-yellow-500 hover:text-yellow-400 font-semibold"
              >
                View All →
              </Link>
            </div>
            <p className="text-lg md:text-xl text-white/80">
              Track the top participants and prize pools across partner casinos.
            </p>
          </motion.div>

          {/* Top 3 Podium with Coming Soon Overlay */}
          <div className="relative">
            {/* Cards with individual blur/tint */}
            <div className="relative z-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mb-8"
              >
            {/* 1st Place */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative z-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-yellow-500/40">
                <div className="flex items-center justify-center mb-1 md:mb-4">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-base md:text-3xl font-bold text-primary-900">
                    👑
                  </div>
                </div>
                <div className="text-center mb-1 md:mb-4">
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-2">WAGERED</p>
                  <p className="text-white text-sm md:text-2xl font-bold mb-0.5 md:mb-2">—</p>
                  <p className="text-white text-lg md:text-4xl font-bold mb-1 md:mb-4">—</p>
                  <p className="text-white/80 text-[10px] md:text-lg">—</p>
                </div>
                <div className="w-full bg-yellow-500 rounded-lg py-1 md:py-2 text-center">
                  <span className="text-primary-900 font-bold text-[10px] md:text-base">1st</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-10 pointer-events-none"></div>
            </div>

            {/* 2nd Place */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative z-0 bg-gradient-to-br from-gray-500/20 to-gray-600/20 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-gray-500/40">
                <div className="flex items-center justify-center mb-1 md:mb-4">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-gray-400 rounded-full flex items-center justify-center text-base md:text-3xl font-bold text-white">
                    2
                  </div>
                </div>
                <div className="text-center mb-1 md:mb-4">
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-2">WAGERED</p>
                  <p className="text-white text-sm md:text-2xl font-bold mb-0.5 md:mb-2">—</p>
                  <p className="text-white text-lg md:text-4xl font-bold mb-1 md:mb-4">—</p>
                  <p className="text-white/80 text-[10px] md:text-lg">—</p>
                </div>
                <div className="w-full bg-gray-500 rounded-lg py-1 md:py-2 text-center">
                  <span className="text-white font-bold text-[10px] md:text-base">2nd</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-10 pointer-events-none"></div>
            </div>

            {/* 3rd Place */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative z-0 bg-gradient-to-br from-orange-800/20 to-orange-900/20 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-orange-700/40">
                <div className="flex items-center justify-center mb-1 md:mb-4">
                  <div className="w-8 h-8 md:w-16 md:h-16 bg-orange-700 rounded-full flex items-center justify-center text-base md:text-3xl font-bold text-white">
                    3
                  </div>
                </div>
                <div className="text-center mb-1 md:mb-4">
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-2">WAGERED</p>
                  <p className="text-white text-sm md:text-2xl font-bold mb-0.5 md:mb-2">—</p>
                  <p className="text-white text-lg md:text-4xl font-bold mb-1 md:mb-4">—</p>
                  <p className="text-white/80 text-[10px] md:text-lg">—</p>
                </div>
                <div className="w-full bg-orange-700 rounded-lg py-1 md:py-2 text-center">
                  <span className="text-white font-bold text-[10px] md:text-base">3rd</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/20 backdrop-blur-md z-10 pointer-events-none"></div>
            </div>
          </motion.div>
            </div>
            
            {/* Ribbon behind Coming Soon box - over cards, under box */}
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15] h-20 md:h-24" 
              style={{
                background: 'linear-gradient(135deg, rgba(1, 38, 60, 0.95) 0%, rgba(0, 20, 30, 0.95) 50%, rgba(1, 38, 60, 0.95) 100%)',
                borderTop: '2px solid #FCB83B',
                borderBottom: '2px solid #FCB83B'
              }}
            ></motion.div>
            
            {/* Coming Soon Box - centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl shadow-2xl backdrop-blur-xl border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(1, 38, 60, 0.95) 0%, rgba(0, 20, 30, 0.95) 50%, rgba(1, 38, 60, 0.95) 100%)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  borderColor: '#FCB83B',
                  padding: '1.5rem 2rem',
                  transform: 'scale(0.7)'
                }}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm mb-2">
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-[#FCB83B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">
                    Coming Soon
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* About Us Section */}
        <div id="about" className="container mx-auto px-4 py-6 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-12"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">ABOUT US</h2>
                <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
              </div>
              <Link 
                href="/about"
                className="text-yellow-500 hover:text-yellow-400 font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <p className="text-lg md:text-xl text-white/80">
              House of Degens is a vibrant community founded by streamers Rekoj and X4tar, dedicated to bringing together passionate gamblers who thrive on high-stakes gameplay and big wins.
            </p>
          </motion.div>

          {/* Streamers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8"
          >
            {/* YK1NQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-800 rounded-2xl p-2 md:p-8 border-2 border-[#FCB83B] hover:border-[#FCB83B] transition-all"
            >
              <div className="flex flex-col items-center mb-2 md:mb-6">
                <div className="relative w-12 h-12 md:w-32 md:h-32 mb-1.5 md:mb-4 rounded-full overflow-hidden border-2 md:border-4 border-[#FCB83B]">
                  <Image
                    src="/YK1NQ.png"
                    alt="YK1NQ"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-3xl font-bold text-white mb-0.5 md:mb-2">YK1NQ</h3>
              </div>
              
              <div className="space-y-1.5 md:space-y-4">
                <div>
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Age</p>
                  <p className="text-white text-xs md:text-lg font-medium">34 years old</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Favorite Food</p>
                  <p className="text-white text-[10px] md:text-lg font-medium leading-tight">Thinly sliced beef steak with avocado salad</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Favorite Slot</p>
                  <p className="text-yellow-500 text-xs md:text-lg font-semibold mb-0.5 md:mb-1">Slayers INC</p>
                  <p className="text-white/80 text-[10px] md:text-sm leading-tight">Love everything about it. Have 2 maxwins on it already</p>
                </div>
              </div>
            </motion.div>

            {/* Juju */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-800 rounded-2xl p-2 md:p-8 border-2 border-[#FCB83B] hover:border-[#FCB83B] transition-all"
            >
              <div className="flex flex-col items-center mb-2 md:mb-6">
                <div className="relative w-12 h-12 md:w-32 md:h-32 mb-1.5 md:mb-4 rounded-full overflow-hidden border-2 md:border-4 border-[#FCB83B]">
                  <Image
                    src="/juju.png"
                    alt="Juju"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-3xl font-bold text-white mb-0.5 md:mb-2">Juju</h3>
              </div>
              
              <div className="space-y-1.5 md:space-y-4">
                <div>
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Age</p>
                  <p className="text-white text-xs md:text-lg font-medium">22 years old</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Favorite Food</p>
                  <p className="text-white text-[10px] md:text-lg font-medium leading-tight">Beef Tenderloin Pasta</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Favorite Slot</p>
                  <p className="text-yellow-500 text-xs md:text-lg font-semibold mb-0.5 md:mb-1">Duck Hunters</p>
                  <p className="text-white/80 text-[10px] md:text-sm leading-tight">Because it has insane multies</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <SectionDivider />
        
        {/* Preview Sections for Responsible Gambling and FAQ */}
        <div className="container mx-auto px-4 py-6 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">INFO</h2>
            <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
            {/* Responsible Gambling Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-white/20 hover:border-yellow-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-1.5 md:mb-4">
                <div>
                  <h2 className="text-sm md:text-3xl font-bold text-white mb-0.5 md:mb-2">Responsible Gambling</h2>
                  <div className="h-0.5 md:h-1 bg-[#FCB83B] w-12 md:w-24"></div>
                </div>
                <Link 
                  href="/responsible-gambling"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-[10px] md:text-sm"
                >
                  Read More →
                </Link>
              </div>
              <p className="text-white/80 mb-1.5 md:mb-4 text-[10px] md:text-base leading-tight">
                Learn about responsible gambling practices and resources for safe gaming. We're committed to promoting healthy gaming habits.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-1.5 md:p-3">
                <p className="text-white/90 text-[10px] md:text-sm leading-tight">
                  <strong className="text-yellow-500">Remember:</strong> Gambling should be fun and entertaining. Never gamble more than you can afford to lose.
                </p>
              </div>
            </motion.div>

            {/* FAQ Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-white/20 hover:border-yellow-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-1.5 md:mb-4">
                <div>
                  <h2 className="text-sm md:text-3xl font-bold text-white mb-0.5 md:mb-2">FAQ</h2>
                  <div className="h-0.5 md:h-1 bg-[#FCB83B] w-12 md:w-24"></div>
                </div>
                <Link 
                  href="/faq"
                  className="text-yellow-500 hover:text-yellow-400 font-semibold text-[10px] md:text-sm"
                >
                  View All →
                </Link>
              </div>
              <p className="text-white/80 mb-1.5 md:mb-4 text-[10px] md:text-base leading-tight">
                Find answers to common questions about House of Degens, streaming, and our community.
              </p>
              <div className="space-y-1 md:space-y-2">
                <div className="bg-primary-700/30 rounded-lg p-1.5 md:p-3 border border-white/10">
                  <p className="text-yellow-500 text-[10px] md:text-sm font-semibold mb-0.5 md:mb-1">When are you streaming?</p>
                  <p className="text-white/70 text-[10px] md:text-xs leading-tight">Check our schedule and follow us on Kick...</p>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-1.5 md:p-3 border border-white/10">
                  <p className="text-yellow-500 text-[10px] md:text-sm font-semibold mb-0.5 md:mb-1">How do I win giveaways?</p>
                  <p className="text-white/70 text-[10px] md:text-xs leading-tight">Giveaways are announced during our live streams...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <SectionDivider />

        {/* Contact Us Section */}
        <div className="container mx-auto px-4 py-6 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase">CONTACT US</h2>
            <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border-2 border-[#FCB83B]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Section - Help & Community */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FCB83B] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  Need help with casinos, bonuses, or gaming questions? Check our resources or join the community!
                </p>
                <div className="space-y-4">
                  <Link
                    href="/faq"
                    className="w-full bg-[#FCB83B] hover:bg-[#FCB83B]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Browse FAQ
                  </Link>
                  <a
                    href="https://discord.gg/houseofdegens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join Discord
                  </a>
                </div>
              </div>

              {/* Right Section - Partnerships & Business */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FCB83B] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  For partnerships, collaborations, sponsorships, or business matters, reach out directly.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:x4@rkagency.net"
                    className="w-full bg-[#FCB83B] hover:bg-[#FCB83B]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Send Email
                  </a>
                  <p className="text-white/80 text-sm text-center">
                    x4@rkagency.net
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <SectionDivider />
        <Footer />
      </div>

      {isModalOpen && selectedCasino && (
        <CasinoModal casino={selectedCasino} onClose={handleCloseModal} />
      )}
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-complex relative overflow-hidden">
        <div className="relative z-10">
          <Header />
          <div className="relative h-[200px] md:h-[450px]">
            <div className="absolute inset-0">
              <div className="relative w-full h-full overflow-hidden">
                <WebBanner />
                <div className="absolute top-12 md:top-24 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <HeaderBanner />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    }>
      <HomeContent />
    </Suspense>
  )
}

