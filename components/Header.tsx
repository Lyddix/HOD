'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-2xl" style={{ 
      borderBottom: '1.5px solid #FCB83B',
      background: 'linear-gradient(to bottom, rgba(1, 38, 60, 0.9), rgba(0, 20, 30, 0.9))'
    }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link href="/">
              <img 
                src="/Logo.png" 
                alt="House of Degens Logo" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <Link href="/" className="hidden md:block">
              <img 
                src="/HOD2.png" 
                alt="House of Degens" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`transition-all font-medium relative group flex items-center gap-2 ${
                pathname === '/' ? 'text-yellow-500' : 'text-white/90 hover:text-white'
              }`}
            >
              <svg className={`w-5 h-5 transition-colors ${pathname === '/' ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'}`} fill="currentColor" viewBox="0 0 576 512">
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
              </svg>
              <span>Home</span>
              <span className={`absolute bottom-[-6px] left-0 h-0.5 bg-yellow-500 transition-all ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="/bonuses" 
              className={`transition-all font-medium relative group flex items-center gap-2 ${
                pathname === '/bonuses' ? 'text-yellow-500' : 'text-white/90 hover:text-white'
              }`}
            >
              <svg className={`w-5 h-5 transition-colors ${pathname === '/bonuses' ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'}`} fill="currentColor" viewBox="0 0 512 512">
                <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/>
              </svg>
              <span>Bonuses</span>
              <span className={`absolute bottom-[-6px] left-0 h-0.5 bg-yellow-500 transition-all ${pathname === '/bonuses' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              href="/leaderboards" 
              className={`transition-all font-medium relative group flex items-center gap-2 ${
                pathname === '/leaderboards' ? 'text-yellow-500' : 'text-white/90 hover:text-white'
              }`}
            >
              <svg className={`w-5 h-5 transition-colors ${pathname === '/leaderboards' ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'}`} fill="currentColor" viewBox="0 0 512 512">
                <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"/>
              </svg>
              <span>Leaderboards</span>
              <span className={`absolute bottom-[-6px] left-0 h-0.5 bg-yellow-500 transition-all ${pathname === '/leaderboards' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            {/* Info Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsInfoOpen(true)}
              onMouseLeave={() => setIsInfoOpen(false)}
            >
              <button className={`transition-all font-medium relative group flex items-center gap-2 ${
                pathname === '/about' || pathname === '/responsible-gambling' || pathname === '/faq' 
                  ? 'text-yellow-500' 
                  : 'text-white/90 hover:text-white'
              }`}>
                <svg className={`w-5 h-5 transition-colors ${
                  pathname === '/about' || pathname === '/responsible-gambling' || pathname === '/faq'
                    ? 'text-yellow-500'
                    : 'text-white group-hover:text-yellow-500'
                }`} fill="currentColor" viewBox="0 0 512 512">
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/>
                </svg>
                <span>Info</span>
                <span className={`absolute bottom-[-6px] left-0 h-0.5 bg-yellow-500 transition-all ${
                  pathname === '/about' || pathname === '/responsible-gambling' || pathname === '/faq'
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              <AnimatePresence>
                {isInfoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-primary-800 rounded-lg shadow-2xl border-2 border-white/20 overflow-hidden"
                  >
                    <Link 
                      href="/about"
                      className={`block px-4 py-3 transition-all border-b border-white/10 flex items-center gap-2 group ${
                        pathname === '/about'
                          ? 'text-yellow-500 bg-primary-700'
                          : 'text-white/90 hover:text-white hover:bg-primary-700'
                      }`}
                    >
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/about' ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'
                      }`} fill="currentColor" viewBox="0 0 640 512">
                        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                      </svg>
                      <span>About Us</span>
                    </Link>
                    <Link 
                      href="/responsible-gambling"
                      className={`block px-4 py-3 transition-all border-b border-white/10 flex items-center gap-2 group ${
                        pathname === '/responsible-gambling'
                          ? 'text-yellow-500 bg-primary-700'
                          : 'text-white/90 hover:text-white hover:bg-primary-700'
                      }`}
                    >
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/responsible-gambling' ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'
                      }`} fill="currentColor" viewBox="0 0 512 512">
                        <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/>
                      </svg>
                      <span>Responsible Gambling</span>
                    </Link>
                    <Link 
                      href="/faq"
                      className={`block px-4 py-3 transition-all flex items-center gap-2 group ${
                        pathname === '/faq'
                          ? 'text-yellow-500 bg-primary-700'
                          : 'text-white/90 hover:text-white hover:bg-primary-700'
                      }`}
                    >
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/faq' ? 'text-yellow-500' : 'text-white group-hover:text-yellow-500'
                      }`} fill="currentColor" viewBox="0 0 512 512">
                        <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"/>
                      </svg>
                      <span>FAQ</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/20"
            >
              <div className="px-4 py-4 space-y-2">
                <Link 
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === '/' 
                      ? 'text-yellow-500 bg-primary-700' 
                      : 'text-white/90 hover:text-white hover:bg-primary-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                  </svg>
                  <span className="font-medium">Home</span>
                </Link>
                <Link 
                  href="/bonuses"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === '/bonuses' 
                      ? 'text-yellow-500 bg-primary-700' 
                      : 'text-white/90 hover:text-white hover:bg-primary-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/>
                  </svg>
                  <span className="font-medium">Bonuses</span>
                </Link>
                <Link 
                  href="/leaderboards"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === '/leaderboards' 
                      ? 'text-yellow-500 bg-primary-700' 
                      : 'text-white/90 hover:text-white hover:bg-primary-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"/>
                  </svg>
                  <span className="font-medium">Leaderboards</span>
                </Link>
                <Link 
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === '/about' 
                      ? 'text-yellow-500 bg-primary-700' 
                      : 'text-white/90 hover:text-white hover:bg-primary-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                  </svg>
                  <span className="font-medium">About Us</span>
                </Link>
                <Link 
                  href="/responsible-gambling"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === '/responsible-gambling' 
                      ? 'text-yellow-500 bg-primary-700' 
                      : 'text-white/90 hover:text-white hover:bg-primary-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/>
                  </svg>
                  <span className="font-medium">Responsible Gambling</span>
                </Link>
                <Link 
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === '/faq' 
                      ? 'text-yellow-500 bg-primary-700' 
                      : 'text-white/90 hover:text-white hover:bg-primary-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"/>
                  </svg>
                  <span className="font-medium">FAQ</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

