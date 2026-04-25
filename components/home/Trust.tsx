'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const standards = [
  {
    label: 'First-Principles Analysis',
    description: 'We do not rely on consensus. Our process begins with the business itself—understanding unit economics, competitive dynamics, and capital allocation before forming a view.',
  },
  {
    label: 'No Sponsored Research',
    description: 'Our work is fully independent. No external parties influence our coverage decisions, ratings, or conclusions. Our only obligation is to intellectual honesty.',
  },
  {
    label: 'Structured Coverage Framework',
    description: 'Each initiation follows a consistent methodology—ensuring comparability across coverage and a disciplined approach to investment thesis construction.',
  },
  {
    label: 'High Editorial Bar',
    description: 'Every report is reviewed for clarity, accuracy, and logical consistency before release. We do not publish work we are not prepared to defend.',
  },
]

const stats = [
  { value: '6', label: 'Team Members', sub: 'Across 4 universities' },
  { value: '2', label: 'Sectors', sub: 'TMT · Industrials' },
  { value: '100%', label: 'Independent', sub: 'No external influence' },
  { value: '1°', label: 'The Standard', sub: 'Where it matters most' },
]

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative bg-black py-10 md:py-14 border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">Our Standards</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,3.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-white">
              We hold the work
              <br />
              <span className="text-white/30">to a higher standard.</span>
            </h2>
          </motion.div>
          <motion.div
            className="flex lg:items-end"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
          >
            <p className="text-[15px] text-white/50 leading-relaxed max-w-md">
              Research quality is non-negotiable. Every standard below is a commitment we keep with every piece of analysis we publish.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-black px-7 py-9 text-center">
              <div className="font-display font-extrabold text-4xl tracking-[-0.03em] text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] tracking-wider uppercase text-white/45 mb-1">{stat.label}</div>
              <div className="text-[10px] text-white/25">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Standards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
          {standards.map((standard, i) => (
            <motion.div
              key={i}
              className="bg-black p-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 + i * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-4 h-4 border border-white/25 flex-shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white/60" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[15px] text-white mb-2">{standard.label}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{standard.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
