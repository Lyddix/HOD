'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import SectionDivider from '@/components/SectionDivider'

export default function AboutPage() {
  const streamers = [
    {
      name: 'YK1NQ',
      age: 34,
      favoriteFood: 'Thinly sliced beef steak with avocado salad',
      favoriteSlot: 'Slayers INC',
      slotReason: 'Love everything about it. Have 2 maxwins on it already',
      image: '/YK1NQ.png'
    },
    {
      name: 'Juju',
      age: 22,
      favoriteFood: 'Beef Tenderloin Pasta',
      favoriteSlot: 'Duck Hunters',
      slotReason: 'Because it has insane multies',
      image: '/juju.png'
    }
  ]

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
          title="ABOUT US" 
          icon="about"
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
              <span className="text-yellow-500 font-medium">About Us</span>
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
              House of Degens is a vibrant community founded by streamers Rekoj and X4tar, dedicated to bringing together passionate gamblers who thrive on high-stakes gameplay and big wins
            </p>
          </motion.div>

          {/* Streamers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-0"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Streamers</h2>
              <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
              {streamers.map((streamer, index) => (
                <motion.div
                  key={streamer.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-primary-800 rounded-2xl p-2 md:p-8 border-2 border-[#FCB83B] hover:border-[#FCB83B] transition-all"
                >
                  <div className="flex flex-col items-center mb-2 md:mb-6">
                    <div className="relative w-12 h-12 md:w-32 md:h-32 mb-1.5 md:mb-4 rounded-full overflow-hidden border-2 md:border-4 border-[#FCB83B]">
                      <Image
                        src={streamer.image}
                        alt={streamer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm md:text-3xl font-bold text-white mb-0.5 md:mb-2">{streamer.name}</h3>
                  </div>
                  
                  <div className="space-y-1.5 md:space-y-4">
                    <div>
                      <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Age</p>
                      <p className="text-white text-xs md:text-lg font-medium">{streamer.age} years old</p>
                    </div>
                    
                    <div>
                      <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Favorite Food</p>
                      <p className="text-white text-[10px] md:text-lg font-medium leading-tight">{streamer.favoriteFood}</p>
                    </div>
                    
                    <div>
                      <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1">Favorite Slot</p>
                      <p className="text-yellow-500 text-xs md:text-lg font-semibold mb-0.5 md:mb-1">{streamer.favoriteSlot}</p>
                      <p className="text-white/80 text-[10px] md:text-sm leading-tight">{streamer.slotReason}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <SectionDivider simple />

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-primary-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border-2 border-white/20"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Community</h2>
              <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                House of Degens represents more than just a streaming channel—it's a thriving community built for serious gamblers who appreciate the excitement of high-stakes gameplay and the pursuit of significant wins.
              </p>
              <p>
                Founded by Rekoj and X4tar, our platform brings together like-minded individuals who share a passion for casino gaming, strategic play, and the thrill of big payouts. We're committed to creating an engaging environment where members can connect, learn, and celebrate victories together.
              </p>
              <p>
                Currently hosted by two dedicated streamers on our Kick channel, House of Degens offers exclusive content, community events, and a shared space for those who understand that gambling is not just about luck—it's about skill, strategy, and the camaraderie of a dedicated community.
              </p>
            </div>
          </motion.div>

          <SectionDivider simple />

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase">CONTACT US</h2>
              <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
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
                    <a
                      href="/faq"
                      className="w-full bg-[#FCB83B] hover:bg-[#FCB83B]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Browse FAQ
                    </a>
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
          </motion.div>
        </div>

        <SectionDivider />
        <Footer />
      </div>
    </main>
  )
}


