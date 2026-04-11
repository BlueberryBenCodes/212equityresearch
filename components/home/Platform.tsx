'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'Rigorous Process',
    body: 'Every coverage initiation begins with a structured research framework. Financial modeling, competitive analysis, and channel checks—before a single conclusion is drawn.',
    detail: 'DCF · Comparable Companies · Scenario Analysis',
  },
  {
    number: '02',
    title: 'Sector Focus',
    body: 'We concentrate on three key areas where we have the deepest analytical edge: Macro Trends, Energy, and Aerospace & Defense.',
    detail: 'Macro Trends · Energy · Aerospace & Defense',
  },
  {
    number: '03',
    title: 'Conviction-Driven',
    body: 'We do not publish research to publish research. Each note or initiation reflects a view we are willing to defend—with evidence and logic behind every claim.',
    detail: 'Initiations · Sector Notes · Macro One-Pagers',
  },
  {
    number: '04',
    title: 'Clarity Under Pressure',
    body: 'Complex ideas presented simply. Our writing respects the reader\'s intelligence and time—delivering insight in the fewest words possible.',
    detail: 'Editorial Standard · Clear Thesis · Actionable Views',
  },
]

export default function Platform() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-28 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">The Platform</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,3.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-white">
              Research built on
              <br />
              <span className="text-white/30">four pillars.</span>
            </h2>
          </motion.div>
          <motion.div
            className="flex lg:items-end"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[15px] text-white/50 leading-relaxed max-w-md">
              A systematic, disciplined research process that ensures every piece of work meets the same uncompromising standard.
            </p>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="relative bg-black p-7 group cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div
                className="absolute inset-0 bg-white/[0.02] transition-opacity duration-200"
                style={{ opacity: active === i ? 1 : 0 }}
              />
              <div className="relative z-10">
                <div className="text-[11px] tracking-[0.18em] text-white/30 font-mono mb-5">{pillar.number}</div>
                <h3 className="font-display font-semibold text-[18px] text-white mb-3 leading-snug">{pillar.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed mb-6">{pillar.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.detail.split(' · ').map((tag) => (
                    <span key={tag} className="text-[9px] tracking-wider uppercase text-white/30 border border-white/[0.1] px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 h-px bg-white/35 transition-all duration-300"
                style={{ width: active === i ? '100%' : '0%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
