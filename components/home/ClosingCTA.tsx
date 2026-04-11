'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative bg-black border-t border-white/[0.05] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px w-12 bg-white/20" />
          <div className="text-[11px] tracking-[0.22em] uppercase text-white/30">212 Equity Research</div>
          <div className="h-px w-12 bg-white/20" />
        </motion.div>

        <motion.h2
          className="font-display font-extrabold text-[clamp(44px,6.5vw,88px)] leading-[0.96] tracking-[-0.035em] text-white mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          One degree
          <br />
          <span className="text-white/25">above the rest.</span>
        </motion.h2>

        <motion.p
          className="text-[15px] text-white/45 max-w-sm mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Independent. Disciplined. Built to a standard that makes a difference.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/reports"
            className="inline-flex items-center gap-3 bg-white text-black text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-white/90 transition-colors duration-150 group"
          >
            Explore Research
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link
            href="/team"
            className="text-xs tracking-widest uppercase text-white/40 hover:text-white/65 transition-colors duration-150"
          >
            Meet the Analysts
          </Link>
        </motion.div>
      </div>

      <footer className="border-t border-white/[0.05] px-6 md:px-10 py-7">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-white/25 flex items-center justify-center">
              <span className="text-[9px] font-display font-bold text-white/50">212°</span>
            </div>
            <span className="text-[10px] text-white/30 tracking-wider uppercase">Equity Research</span>
          </div>
          <div className="text-[10px] text-white/25 tracking-wider">
            212equity.com · Where One Degree Changes Everything
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/212-equity-res%D0%B5arch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/50 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <span className="text-[10px] text-white/15">© 2026 212 Equity Research</span>
          </div>
        </div>
      </footer>
    </section>
  )
}
