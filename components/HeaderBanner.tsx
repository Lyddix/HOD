'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeaderBanner() {
  return (
    <div id="home" className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full flex flex-row items-center justify-center gap-3 md:gap-12 lg:gap-16"
      >
        {/* Left side - Text Content */}
        <div className="hidden md:flex flex-col items-start w-full md:w-auto md:max-w-lg lg:max-w-xl">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full mb-3"
            >
              <Image
                src="/HOD3.png"
                alt="House of Degens"
                width={800}
                height={200}
                className="w-full h-auto max-h-[120px] md:max-h-[150px] object-contain object-left"
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5)) drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))',
                  WebkitFilter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5)) drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))',
                  display: 'block'
                }}
                priority
                quality={100}
              />
            </motion.div>
            
            {/* Text directly under HOD3.png */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col w-full mb-3"
            >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-2 font-medium"
            >
              Exclusive Casino Bonuses & Offers
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm md:text-base text-white/80 mb-3"
            >
              Leaderboards, giveaways and bonuses, linked to my Kick stream
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <motion.a
                href="https://kick.com/houseofdegens"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border-2 border-gray-800 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center h-[48px]"
              >
                <svg className="w-24 h-6" viewBox="0 0 78 26" fill="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0307312H8.34073V5.79423H11.1163V2.91248H13.8919V0.0307312H22.2326V8.69274H19.457V11.5745H16.6815V14.4562H19.457V17.338H22.2326V26H13.8919V23.1182H11.1163V20.2365H8.34073V26H0V0.0307312ZM55.6444 0.0307312H63.9852V5.79423H66.7608V2.91248H69.5363V0.0307312H77.8771V8.69274H75.1015V11.5745H72.3259V14.4562H75.1015V17.338H77.8771V26H69.5363V23.1182H66.7608V20.2365H63.9852V26H55.6444V0.0307312ZM25.039 0.0307312H33.3797V26H25.039V0.0307312ZM38.9462 0.0307312V2.91248H36.1706V23.1029H38.9462V25.9846H52.8535V17.3226H44.5128V8.66061H52.8535V0H38.9462V0.0307312Z" fill="#53FC18"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://discord.gg/houseofdegens"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] border-2 border-[#5865F2] text-white rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-[#5865F2]/50 text-base flex items-center gap-2 h-[48px]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </motion.a>
            </motion.div>
          </motion.div>
          </div>
        </div>

        {/* Mobile - Only show HOD3.png */}
        <div className="md:hidden flex items-center justify-center flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-auto"
          >
            <Image
              src="/HOD3.png"
              alt="House of Degens"
              width={800}
              height={200}
              className="h-auto max-h-[70px] w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5)) drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))',
                WebkitFilter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5)) drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))',
                display: 'block'
              }}
              priority
              quality={100}
            />
          </motion.div>
        </div>

        {/* Right side - House Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative w-24 h-24 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex-shrink-0"
          style={{ imageRendering: 'auto', marginTop: '0' }}
        >
          <Image
            src="/Logo.png"
            alt="House of Degens Logo"
            fill
            className="object-contain"
            style={{ 
              imageRendering: 'auto',
              filter: 'blur(0.2px)',
              WebkitFilter: 'blur(0.2px)'
            }}
            priority
            quality={100}
            unoptimized={false}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

