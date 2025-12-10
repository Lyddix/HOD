'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import SectionDivider from '@/components/SectionDivider'

export default function LeaderboardsPage() {
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
          title="LEADERBOARDS" 
          subtitle="Track the top participants and prize pools across partner casinos"
          icon="leaderboards"
        />

        {/* Blurred Overlay - covers entire viewport except header/footer */}
        {/* Overlay starts right after header */}
        <div 
          className="fixed bg-black/20 backdrop-blur-md z-20 left-0 right-0 bottom-0 top-16 md:top-20" 
        ></div>
        
        {/* Coming Soon Box - fixed and centered */}
        <div 
          className="fixed z-30 pointer-events-auto" 
          style={{ 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'fixed'
          }}
        >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-6 md:p-16 shadow-2xl backdrop-blur-xl border-2"
              style={{
                background: 'linear-gradient(135deg, rgba(1, 38, 60, 0.95) 0%, rgba(0, 20, 30, 0.95) 50%, rgba(1, 38, 60, 0.95) 100%)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                borderColor: '#FCB83B'
              }}
            >
              <div className="text-center space-y-3 md:space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm mb-2 md:mb-4">
                  <svg className="w-6 h-6 md:w-12 md:h-12 text-[#FCB83B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-5xl font-bold text-white tracking-tight uppercase">
                  Coming Soon
                </h2>
                <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
                <p className="text-white/70 text-xs md:text-lg font-medium max-w-md mx-auto">
                  Leaderboards will be available soon. Stay tuned for exciting competitions and prizes!
                </p>
              </div>
            </motion.div>
          </div>
        
        {/* Blurred content behind overlay */}
        <div className="container mx-auto px-4 opacity-30 pointer-events-none" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
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
              <span className="text-yellow-500 font-medium">Leaderboards</span>
            </nav>
          </motion.div>

          {/* Competition Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border-2 border-white/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Current Competition</h2>
                  <div className="h-1 bg-[#FCB83B] w-24 md:w-32 mb-2"></div>
                  <p className="text-white/80">
                    Leaderboard competitions will be displayed here when active.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold border-2 border-yellow-500/40 hover:bg-primary-700 transition-all">
                    Current
                  </button>
                  <button className="px-6 py-3 bg-primary-800/50 text-white rounded-xl font-semibold border-2 border-white/20 hover:bg-primary-700/50 transition-all">
                    Previous
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span>No active competitions at this time</span>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 mb-12"
          >
            {/* 1st Place */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-yellow-500/40">
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

            {/* 2nd Place */}
            <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-gray-500/40">
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

            {/* 3rd Place */}
            <div className="bg-gradient-to-br from-orange-800/20 to-orange-900/20 backdrop-blur-lg rounded-2xl p-2 md:p-6 border-2 border-orange-700/40">
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
          </motion.div>

          {/* Time Remaining Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-primary-700/50 rounded-xl p-6 border-2 border-primary-600/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">Time Remaining</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary-800/50 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">—</p>
                  <p className="text-white/60 text-sm">DAYS</p>
                </div>
                <div className="bg-primary-800/50 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">—</p>
                  <p className="text-white/60 text-sm">HOURS</p>
                </div>
                <div className="bg-primary-800/50 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">—</p>
                  <p className="text-white/60 text-sm">MINUTES</p>
                </div>
                <div className="bg-primary-800/50 rounded-lg p-4 text-center border border-white/10">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">—</p>
                  <p className="text-white/60 text-sm">SECONDS</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 overflow-x-auto"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">CURRENT LEADERBOARD</h3>
              <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
            </div>
            <div className="text-white/60 mb-4">Date Range: —</div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-semibold">Place</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">User</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Wagered</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {[4, 5, 6, 7, 8, 9, 10].map((place) => (
                    <tr key={place} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">{place}</td>
                      <td className="py-4 px-4 text-white/80">—</td>
                      <td className="py-4 px-4 text-white/80">—</td>
                      <td className="py-4 px-4">
                        {place <= 6 ? (
                          <span className="text-yellow-500 font-semibold">—</span>
                        ) : (
                          <span className="text-white/40">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        <SectionDivider />
        <div className="relative z-40">
          <Footer />
        </div>
      </div>
    </main>
  )
}


