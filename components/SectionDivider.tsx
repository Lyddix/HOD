'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  simple?: boolean
}

export default function SectionDivider({ simple = false }: SectionDividerProps) {
  if (simple) {
    return (
      <div className="relative overflow-hidden w-full my-3 md:my-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center w-full"
        >
          {/* Connected gradient line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="relative py-4 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-4"
      >
        {/* Left decorative line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-yellow-500/40"></div>
        
        {/* Center decorative element */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-1 h-1 bg-yellow-500/60 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        </div>
        
        {/* Right decorative line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-yellow-500/40"></div>
      </motion.div>
    </div>
  )
}

