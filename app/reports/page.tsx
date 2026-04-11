'use client'

import { motion } from 'framer-motion'

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">Research Library</span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(44px,6.5vw,88px)] leading-[0.96] tracking-[-0.035em] text-white mb-6">
            Research
            <br />
            <span className="text-white/25">Coverage.</span>
          </h1>
          <p className="text-[15px] text-white/50 max-w-lg leading-relaxed">
            Independent equity research across Macro Trends, Energy, and Aerospace & Defense. Coverage is initiated based on analytical conviction—not noise.
          </p>
        </motion.div>

        {/* Sector tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-16 pb-10 border-b border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['Macro Trends', 'Energy', 'Aerospace & Defense'].map((sector) => (
            <span
              key={sector}
              className="text-[10px] tracking-wider uppercase border border-white/[0.12] text-white/50 px-3 py-1.5"
            >
              {sector}
            </span>
          ))}
        </motion.div>

        {/* Coming soon */}
        <motion.div
          className="flex flex-col items-center justify-center text-center py-24 border border-white/[0.07]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-8">
            <div className="w-4 h-4 border border-white/30" />
          </div>
          <h2 className="font-display font-semibold text-2xl text-white/70 mb-3 tracking-tight">Coming Soon</h2>
          <p className="text-[14px] text-white/35 max-w-sm leading-relaxed">
            Research is published as coverage is initiated. All reports are original, independently produced analysis.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
