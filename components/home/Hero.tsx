'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function AbstractGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Subtle orb */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl" />

      {/* Abstract data panel */}
      <motion.div
        className="absolute top-[50%] right-[5%] -translate-y-1/2 w-[340px] hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
      >
        <div className="glass border border-white/[0.08] p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <span className="text-[10px] tracking-widest uppercase text-white/40">Research Intelligence</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/25" />
              ))}
            </div>
          </div>

          <div className="relative h-24">
            <svg viewBox="0 0 340 100" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 70 C 40 70, 60 30, 100 40 C 140 50, 150 20, 200 25 C 250 30, 280 50, 340 20"
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1.5"
                strokeDasharray="500"
                initial={{ strokeDashoffset: 500 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.8, delay: 1.3 }}
              />
              <motion.path
                d="M 0 70 C 40 70, 60 30, 100 40 C 140 50, 150 20, 200 25 C 250 30, 280 50, 340 20 L 340 100 L 0 100 Z"
                fill="url(#chart-gradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              />
            </svg>
          </div>

          {[
            { label: 'Sectors', value: '2', sub: 'TMT · Industrials' },
            { label: 'Research Status', value: 'Active', sub: 'Initiations in Progress' },
            { label: 'Coverage Model', value: 'Independent', sub: 'No external influence' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-t border-white/[0.06]">
              <span className="text-[10px] text-white/40 tracking-wider uppercase">{stat.label}</span>
              <div className="text-right">
                <div className="text-xs text-white/80 font-medium">{stat.value}</div>
                <div className="text-[9px] text-white/30">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 glass border border-white/[0.06] p-4 flex items-center gap-3">
          <div className="w-7 h-7 border border-white/15 flex items-center justify-center flex-shrink-0">
            <span className="text-[9px] font-display font-bold text-white/50">212°</span>
          </div>
          <div>
            <div className="text-[9px] text-white/40 tracking-wider uppercase mb-0.5">Standard</div>
            <div className="text-[11px] text-white/70">One degree above the rest</div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-start overflow-hidden bg-black">
      <AbstractGrid />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-white/50 font-sans">
              Independent Equity Research
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-extrabold text-[clamp(52px,7.5vw,100px)] leading-[0.95] tracking-[-0.03em] text-white mb-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Where One
            <br />
            Degree Changes
            <br />
            <span className="text-white/30">Everything.</span>
          </motion.h1>

          <motion.p
            className="text-[15px] text-white/50 max-w-md leading-relaxed mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            212 Equity Research produces institutional-quality equity research across key sectors of the market. Student-led. Rigorously independent.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link
              href="/reports"
              className="inline-flex items-center gap-3 bg-white text-black text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-white/90 transition-colors duration-150 group"
            >
              View Research
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/team"
              className="text-xs tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors duration-150"
            >
              Meet the Team
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
