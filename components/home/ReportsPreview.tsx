'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export default function ReportsPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative bg-black py-10 md:py-14 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">Research Library</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,3.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-white">
              Coverage in progress.
              <br />
              <span className="text-white/30">More coming.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/45 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-px"
            >
              View All Reports
              <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Coming Soon state */}
        <motion.div
          className="border border-white/[0.08] p-14 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-6">
            <div className="w-3 h-3 border border-white/30" />
          </div>
          <div className="font-display font-semibold text-xl text-white/70 mb-2 tracking-tight">Coming Soon</div>
          <p className="text-[13px] text-white/35 max-w-xs">
            Research is published as coverage is initiated. Check back soon.
          </p>
          <div className="mt-8">
            <Link
              href="/reports"
              className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors border-b border-white/10 hover:border-white/30 pb-px"
            >
              View Research Page
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
