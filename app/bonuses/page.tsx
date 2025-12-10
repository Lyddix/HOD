'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import CasinoGrid from '@/components/CasinoGrid'
import Footer from '@/components/Footer'
import CasinoModal from '@/components/CasinoModal'
import PageBanner from '@/components/PageBanner'
import { Casino } from '@/types/casino'
import { placeholderCasinos } from '@/components/CasinoGrid'

function BonusesPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCasino, setSelectedCasino] = useState<Casino | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [savedScrollY, setSavedScrollY] = useState(0)

  const handleCasinoClick = (casino: Casino) => {
    setSavedScrollY(window.scrollY)
    setSelectedCasino(casino)
    setIsModalOpen(true)
    
    // Convert casino name to URL-friendly format
    const urlFriendlyName = casino.name.toLowerCase().replace(/\s+/g, '-')
    router.replace(`/bonuses?casino=${urlFriendlyName}`, { scroll: false })
  }

  const handleCloseModal = () => {
    router.replace('/bonuses', { scroll: false })
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
        <PageBanner 
          title="CASINO BONUSES" 
          subtitle="Explore the best casino bonuses, exclusive offers, and promo codes handpicked for you."
          icon="bonuses"
        />
        <div className="container mx-auto px-4" style={{ paddingTop: '1.5rem' }}>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <nav className="text-sm">
              <span className="text-white/60">House of Degens</span>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-yellow-500 font-medium">Bonuses</span>
            </nav>
          </motion.div>
        </div>
        <CasinoGrid onCasinoClick={handleCasinoClick} />
        <Footer />
      </div>

      {isModalOpen && selectedCasino && (
        <CasinoModal casino={selectedCasino} onClose={handleCloseModal} />
      )}
    </main>
  )
}

export default function BonusesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-complex relative overflow-hidden">
        <div className="relative z-10">
          <Header />
          <PageBanner 
            title="CASINO BONUSES" 
            subtitle="Explore the best casino bonuses, exclusive offers, and promo codes handpicked for you."
            icon="bonuses"
          />
        </div>
      </main>
    }>
      <BonusesPageContent />
    </Suspense>
  )
}

