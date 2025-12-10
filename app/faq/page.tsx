'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageBanner from '@/components/PageBanner'
import SectionDivider from '@/components/SectionDivider'

export default function FAQPage() {
  const faqSections = [
    {
      title: 'STREAMING',
      questions: [
        {
          q: 'When are you streaming?',
          a: 'Our streamers host regular sessions on our Kick channel. Check our schedule and follow us on Kick to get notified when we go live!'
        }
      ]
    },
    {
      title: 'GIVEAWAYS',
      questions: [
        {
          q: 'How do I win giveaways?',
          a: 'Giveaways are announced during our live streams and on our community platforms. Before you can win a giveaway, you must verify your accounts in the Discord server. Follow us on Kick and join our Discord to stay updated on all giveaway opportunities.'
        },
        {
          q: 'How do I claim prizes?',
          a: 'To claim giveaways, you need to make a ticket in the Discord server. Winners will only be contacted in the Discord server. Make sure to check your messages and follow the instructions provided to claim your prize.'
        }
      ]
    },
    {
      title: 'CASINOS & BONUSES',
      questions: [
        {
          q: 'Are the casinos you recommend safe?',
          a: 'Yes, we only partner with licensed and regulated casinos that meet our strict safety and security standards. All recommended casinos are thoroughly vetted for player protection and fair gaming practices.'
        },
        {
          q: 'How do I get a casino bonus?',
          a: (
            <>
              Visit our <Link href="/bonuses" className="text-yellow-500 hover:text-yellow-400 underline">Casino Bonuses page</Link> to view all available exclusive offers from our partner casinos. Each bonus includes terms and conditions, so make sure to read them carefully before claiming.
            </>
          )
        }
      ]
    },
    {
      title: 'COMMUNITY & SUPPORT',
      questions: [
        {
          q: 'How do I join the Discord server?',
          a: 'Join our Discord community by clicking the Discord link in our header or footer. Our Discord is a great place to connect with other community members, participate in discussions, and stay updated on all House of Degens activities.'
        },
        {
          q: 'What is responsible gambling?',
          a: (
            <>
              Responsible gambling means enjoying casino games in a safe and controlled manner. Learn more about responsible gambling practices and resources on our <Link href="/responsible-gambling" className="text-yellow-500 hover:text-yellow-400 underline">Responsible Gambling page</Link>.
            </>
          )
        }
      ]
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
          title="FAQ" 
          titleDesktop="FREQUENTLY ASKED QUESTIONS"
          icon="faq"
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
              <span className="text-yellow-500 font-medium">FAQ</span>
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
              Find answers to common questions about House of Degens, streaming, and our community
            </p>
          </motion.div>

          {/* FAQ Sections */}
          <div>
            {faqSections.map((section, sectionIndex) => {
              const hasDividerAfter = sectionIndex < faqSections.length - 1 && (sectionIndex + 1) % 2 === 0
              return (
              <div key={section.title}>
                {sectionIndex > 0 && sectionIndex % 2 === 0 && <SectionDivider simple />}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
                  className={`bg-primary-800/50 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 ${hasDividerAfter ? 'mb-0' : 'mb-12'}`}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {section.title}
                    </h2>
                    <div className="h-1 bg-[#FCB83B] w-24 md:w-32"></div>
                  </div>
                  <div className="space-y-6">
                    {section.questions.map((item, qIndex) => (
                      <div key={qIndex} className="space-y-2">
                        <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                          {item.q}
                        </h3>
                        <div className="text-white/90 leading-relaxed">
                          {typeof item.a === 'string' ? item.a : item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              </div>
            )
            })}
          </div>
        </div>

        <SectionDivider />
        <Footer />
      </div>
    </main>
  )
}

