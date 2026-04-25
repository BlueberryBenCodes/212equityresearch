'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const previews = [
  {
    sector: 'TMT',
    type: 'Sector Initiation',
    title: 'Data Centers',
    subtitle: 'Powering the Next Compute Supercycle',
    date: 'April 2026',
    file: '/reports/data-centers-tmt-initiation.pdf',
  },
  {
    sector: 'Industrials',
    type: 'Sector Overview',
    title: 'Industrials',
    subtitle: 'A First-Principles Sector Overview',
    date: 'April 2026',
    file: '/reports/industrials-sector-initiation.pdf',
  },
]

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
              Coverage initiated.
              <br />
              <span className="text-white/30">Two sectors live.</span>
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

        {/* Reports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {previews.map((report, i) => (
            <motion.a
              key={report.title}
              href={report.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black p-7 md:p-9 flex flex-col justify-between min-h-[280px] overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-7">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-white/45 border border-white/[0.15] px-2.5 py-1">
                    {report.sector}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-white/30">
                    {report.type}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1] tracking-[-0.02em] text-white mb-1.5">
                  {report.title}
                </h3>
                <p className="text-[13px] text-white/45 leading-snug">{report.subtitle}</p>
              </div>

              <div className="relative z-10 flex items-end justify-between mt-8 pt-5 border-t border-white/[0.07]">
                <div className="text-[11px] text-white/45">{report.date}</div>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/55 group-hover:text-white transition-colors">
                  View PDF
                  <svg
                    className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px bg-white/35 w-0 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
