'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import SectionDivider from '@/components/SectionDivider'

export default function ResponsibleGamblingPage() {
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
          title="RESPONSIBLE GAMBLING" 
          icon="responsible-gambling"
        />

        <div className="container mx-auto px-4" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
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
              <span className="text-yellow-500 font-medium">Responsible Gambling</span>
            </nav>
          </motion.div>

          {/* Breadtext */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-lg md:text-xl text-white/80 max-w-3xl">
              Learn about responsible gambling practices and resources for safe gaming
            </p>
          </motion.div>

          {/* Understanding Gambling Addiction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-0"
          >
            <div className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">UNDERSTANDING GAMBLING ADDICTION</h2>
                <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  House of Degens is a community for viewers and followers to engage with casino streams, earn points, and redeem rewards. We emphasize community connection and provide a reward system for activity and support.
                </p>
                <p>
                  However, we recognize that gambling can become problematic for some individuals. It's important to understand the signs of gambling addiction and know where to seek help if needed.
                </p>
                <p>
                  Gambling should always be viewed as entertainment, not as a way to make money or solve financial problems. If you find yourself gambling more than you can afford to lose, or if gambling is negatively affecting your life, relationships, or finances, it may be time to seek help.
                </p>
              </div>
            </div>
          </motion.section>

          <SectionDivider simple />

          {/* Helplines and Resources */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-0"
          >
            <div className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">HELPLINES AND RESOURCES</h2>
                <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
              </div>
              <p className="text-white/80 mb-6">These resources are available 24/7 for support:</p>
              <div className="space-y-4">
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">National Gambling Helpline</h3>
                  <p className="text-white/80 text-sm">Available for support and guidance</p>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">Gamblers Anonymous</h3>
                  <p className="text-white/80 text-sm">Support groups and resources for problem gamblers</p>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">National Council on Problem Gambling</h3>
                  <p className="text-white/80 text-sm">Information and resources for problem gambling</p>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">BeGambleAware</h3>
                  <p className="text-white/80 text-sm mb-2">UK-based support and information</p>
                  <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                    Visit BeGambleAware.org
                  </a>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">Spelpaus (Sweden)</h3>
                  <p className="text-white/80 text-sm mb-2">Swedish self-exclusion service</p>
                  <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                    Visit Spelpaus.se
                  </a>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">Stödlinjen (Sweden)</h3>
                  <p className="text-white/80 text-sm mb-2">Swedish support line for problem gambling</p>
                  <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                    Visit Stodlinjen.se
                  </a>
                </div>
                <div className="bg-primary-700/30 rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold mb-2">Spelberoendes Riksförbund (Sweden)</h3>
                  <p className="text-white/80 text-sm mb-2">Swedish national association for gambling addiction</p>
                  <a href="https://www.spelberoende.se" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">
                    Visit Spelberoende.se
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <SectionDivider simple />

          {/* Self-Exclusion Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">SELF-EXCLUSION SERVICES</h2>
                <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Self-exclusion is a voluntary program that allows you to ban yourself from gambling activities for a specified period. This can be an effective tool if you feel you need to take a break from gambling.
                </p>
                <p>
                  How self-exclusion works:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                  <li>You can exclude yourself from individual casinos or use multi-operator schemes</li>
                  <li>Exclusion periods can vary (typically from 6 months to permanent)</li>
                  <li>Once excluded, you will not be able to access gambling services during the exclusion period</li>
                  <li>Self-exclusion is a serious commitment and should be considered carefully</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">For UK players:</strong> <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">GAMSTOP.co.uk</a> provides a free self-exclusion service that covers all UK-licensed gambling operators.
                </p>
                <p>
                  <strong className="text-white">For players in Sweden:</strong> <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">Spelpaus.se</a> offers a self-exclusion service for Swedish players.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Important Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-yellow-500/20 border-2 border-yellow-500/40 rounded-2xl p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Remember</h3>
            <p className="text-white/90 leading-relaxed">
              Gambling should be fun and entertaining. Never gamble more than you can afford to lose, and always set limits for yourself. If you feel that gambling is becoming a problem, don't hesitate to seek help. There are many resources available, and support is always available.
            </p>
          </motion.div>
        </div>

        <SectionDivider />
        <Footer />
      </div>
    </main>
  )
}


