'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16" style={{ 
      borderTop: '1.5px solid #FCB83B',
      background: 'linear-gradient(to top, rgba(1, 38, 60, 0.9), rgba(0, 20, 30, 0.9))'
    }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-[#FCB83B] mb-4">
              House of Degens
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Your ultimate resource for the best casino bonuses, exciting giveaways, and engaging streams. Stay updated with the latest offers and events!
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://kick.com/houseofdegens"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#FCB83B] text-white/80"
                aria-label="Kick"
              >
                <svg className="w-16 h-5" viewBox="0 0 78 26" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0307312H8.34073V5.79423H11.1163V2.91248H13.8919V0.0307312H22.2326V8.69274H19.457V11.5745H16.6815V14.4562H19.457V17.338H22.2326V26H13.8919V23.1182H11.1163V20.2365H8.34073V26H0V0.0307312ZM55.6444 0.0307312H63.9852V5.79423H66.7608V2.91248H69.5363V0.0307312H77.8771V8.69274H75.1015V11.5745H72.3259V14.4562H75.1015V17.338H77.8771V26H69.5363V23.1182H66.7608V20.2365H63.9852V26H55.6444V0.0307312ZM25.039 0.0307312H33.3797V26H25.039V0.0307312ZM38.9462 0.0307312V2.91248H36.1706V23.1029H38.9462V25.9846H52.8535V17.3226H44.5128V8.66061H52.8535V0H38.9462V0.0307312Z"/>
                </svg>
              </a>
              <a
                href="https://discord.gg/houseofdegens"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#FCB83B] text-white/80"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
          >
            <h4 className="text-lg font-bold text-[#FCB83B] mb-4 text-center">Quick Links</h4>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 justify-items-start">
                <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-[#FCB83B] transition-colors group">
                <svg className="w-4 h-4 text-[#FCB83B] group-hover:text-[#FCB83B]" fill="currentColor" viewBox="0 0 576 512">
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                </svg>
                <span className="text-sm">Home</span>
              </Link>
              <Link href="/bonuses" className="flex items-center gap-2 text-white/90 hover:text-[#FCB83B] transition-colors group">
                <svg className="w-4 h-4 text-[#FCB83B] group-hover:text-[#FCB83B]" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/>
                </svg>
                <span className="text-sm">Bonuses</span>
              </Link>
              <Link href="/leaderboards" className="flex items-center gap-2 text-white/90 hover:text-[#FCB83B] transition-colors group">
                <svg className="w-4 h-4 text-[#FCB83B] group-hover:text-[#FCB83B]" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"/>
                </svg>
                <span className="text-sm">Leaderboards</span>
              </Link>
              <Link href="/about" className="flex items-center gap-2 text-white/90 hover:text-[#FCB83B] transition-colors group">
                <svg className="w-4 h-4 text-[#FCB83B] group-hover:text-[#FCB83B]" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                </svg>
                <span className="text-sm">About Us</span>
              </Link>
              <Link href="/responsible-gambling" className="flex items-center gap-2 text-white/90 hover:text-[#FCB83B] transition-colors group">
                <svg className="w-4 h-4 text-[#FCB83B] group-hover:text-[#FCB83B]" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/>
                </svg>
                <span className="text-sm">Responsible</span>
              </Link>
              <Link href="/faq" className="flex items-center gap-2 text-white/90 hover:text-[#FCB83B] transition-colors group">
                <svg className="w-4 h-4 text-[#FCB83B] group-hover:text-[#FCB83B]" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"/>
                </svg>
                <span className="text-sm">FAQ</span>
              </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-bold text-[#FCB83B] mb-4">Contact Us</h4>
            <div className="text-white/90">
              <p className="text-sm flex items-center gap-2 justify-center md:justify-end">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                x4@rkagency.net
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/60 text-sm text-center md:text-left">© {new Date().getFullYear()} House of Degens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

