'use client'

import { motion } from 'framer-motion'

type Report = {
  title: string
  subtitle: string
  sector: 'TMT' | 'Industrials'
  type: string
  date: string
  pages?: string
  description: string
  file: string
}

const reports: Report[] = [
  {
    title: 'Data Centers',
    subtitle: 'Powering the Next Compute Supercycle',
    sector: 'TMT',
    type: 'Sector Initiation',
    date: 'April 2026',
    description:
      'An initiation of coverage on the data center industry — examining hyperscale demand, the AI-driven capacity buildout, power and cooling constraints, and the operators best positioned for the decade ahead.',
    file: '/reports/data-centers-tmt-initiation.pdf',
  },
  {
    title: 'Industrials',
    subtitle: 'A First-Principles Sector Overview',
    sector: 'Industrials',
    type: 'Sector Overview',
    date: 'April 2026',
    description:
      'A structured introduction to the U.S. industrial economy — mapping the sub-sectors that move the market, the macro forces shaping capital allocation, and where rigorous research can find an analytical edge.',
    file: '/reports/industrials-sector-initiation.pdf',
  },
]

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
            Independent equity research across TMT and Industrials. Coverage is initiated based on analytical conviction—not noise.
          </p>
        </motion.div>

        {/* Sector tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-14 pb-10 border-b border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['TMT', 'Industrials'].map((sector) => (
            <span
              key={sector}
              className="text-[10px] tracking-wider uppercase border border-white/[0.12] text-white/50 px-3 py-1.5"
            >
              {sector}
            </span>
          ))}
        </motion.div>

        {/* Reports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {reports.map((report, i) => (
            <motion.a
              key={report.title}
              href={report.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black p-8 md:p-10 flex flex-col justify-between min-h-[420px] overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              {/* Hover wash */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top: meta */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-white/45 border border-white/[0.15] px-2.5 py-1">
                    {report.sector}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-white/30">
                    {report.type}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display font-bold text-[clamp(28px,3vw,40px)] leading-[1.05] tracking-[-0.02em] text-white mb-2">
                  {report.title}
                </h2>
                <h3 className="font-display text-[clamp(15px,1.4vw,18px)] text-white/40 leading-snug mb-6">
                  {report.subtitle}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-white/50 leading-relaxed max-w-md">
                  {report.description}
                </p>
              </div>

              {/* Bottom: date + view link */}
              <div className="relative z-10 flex items-end justify-between mt-10 pt-6 border-t border-white/[0.07]">
                <div>
                  <div className="text-[9px] tracking-[0.22em] uppercase text-white/30 mb-1">Published</div>
                  <div className="text-[12px] text-white/55">{report.date}</div>
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/55 group-hover:text-white transition-colors">
                  View PDF
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 h-px bg-white/35 w-0 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">Editorial Standard</div>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Every report is original analysis, produced independently by the 212 research team. Reports are released as coverage is initiated—never to fill a calendar.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">More Coming</div>
            <p className="text-[13px] text-white/45 leading-relaxed">
              Additional initiations across TMT and Industrials are in progress. Each will be published once it meets the editorial bar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
