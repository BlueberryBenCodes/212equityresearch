'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const team = [
  {
    name: 'Samuel Angel',
    role: 'Analyst',
    school: 'Florida State University',
    degree: 'B.S. Industrial Engineering',
    image: '/images/team/samuel.png',
    bio: 'Samuel is a freshman at Florida State University pursuing a B.S. in Industrial Engineering. His analytical background in systems thinking and quantitative methods translates directly to the structured, process-driven approach 212 brings to equity research.',
    focus: 'Industrials · Engineering Sector',
  },
  {
    name: 'Sawyer Targosz',
    role: 'Analyst',
    school: 'Florida State University',
    degree: 'Finance',
    image: '/images/team/sawyer.jpeg',
    bio: 'Sawyer is a finance student at Florida State University. With a focus on financial markets and investment analysis, Sawyer brings rigorous thinking and a passion for understanding business fundamentals to the research team.',
    focus: 'Finance · Capital Markets',
  },
  {
    name: 'Benjamin Getter',
    role: 'Analyst',
    school: 'UNC Kenan-Flagler Business School',
    degree: 'Business & Data Science',
    image: '/images/team/ben.jpeg',
    bio: 'Benjamin is a student at UNC Kenan-Flagler Business School pursuing a dual focus in Business and Data Science. He applies quantitative frameworks to investment analysis, combining financial modeling with data-driven insights.',
    focus: 'Data-Driven Analysis · Technology',
  },
  {
    name: 'Michael Cochran',
    role: 'Analyst',
    school: 'The Ohio State University',
    degree: 'Fisher College of Business',
    image: '/images/team/michael.jpeg',
    bio: 'Michael is a student at The Ohio State University\'s Fisher College of Business. His business education combined with a strong interest in equity markets drives a structured, rigorous approach to company and sector analysis.',
    focus: 'Consumer · Technology',
  },
  {
    name: 'Daniel Rudin',
    role: 'Analyst',
    school: 'Emory University',
    degree: 'BBA & Data Science',
    image: '/images/team/daniel.jpeg',
    bio: 'Daniel is pursuing a BBA and Data Science degree at Emory University. His dual focus on business fundamentals and quantitative methods gives him a unique lens for analyzing companies at the intersection of technology and traditional industries.',
    focus: 'Technology · Quantitative Methods',
  },
  {
    name: 'Charles Alliots',
    role: 'Analyst',
    school: 'UCF Burnett Honors College',
    degree: 'Mathematics, Finance & Engineering',
    image: '/images/team/charles.jpeg',
    bio: 'Charles is a freshman at UCF\'s Burnett Honors College with interests spanning mathematics, finance, and engineering. His multidisciplinary curiosity makes him a sharp thinker capable of connecting quantitative rigor with real-world market dynamics.',
    focus: 'Mathematics · Macro · Engineering',
  },
]

export default function TeamPage() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black pt-28 pb-32">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">The Analysts</span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(44px,6.5vw,88px)] leading-[0.96] tracking-[-0.035em] text-white mb-5">
            The Team
            <br />
            <span className="text-white/25">Behind 212.</span>
          </h1>
          <p className="text-[15px] text-white/50 max-w-lg leading-relaxed">
            Six analysts from four universities. Each brings a distinct perspective—united by the same commitment to intellectual rigor and research quality.
          </p>
        </motion.div>
      </div>

      {/* Team grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setSelected(selected === i ? null : i)}
            >
              {/* Photo — natural aspect ratio */}
              <div className="relative w-full overflow-hidden mb-4 bg-white/[0.04]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/8 transition-colors duration-300" />

                {/* Expand indicator */}
                <div className="absolute top-4 right-4 w-7 h-7 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
                  <motion.svg
                    className="w-3 h-3 text-white/70"
                    fill="none" viewBox="0 0 12 12"
                    stroke="currentColor" strokeWidth={1.5}
                    animate={{ rotate: selected === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 2v8M2 6h8" />
                  </motion.svg>
                </div>
              </div>

              {/* Name & school */}
              <div className="mb-1">
                <div className="font-display font-semibold text-[16px] text-white leading-snug">{member.name}</div>
                <div className="text-[12px] text-white/45 mt-0.5">{member.school}</div>
              </div>

              {/* Expandable bio */}
              <AnimatePresence>
                {selected === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/[0.08] mt-3">
                      <div className="text-[9px] tracking-[0.18em] uppercase text-white/30 mb-2">{member.degree}</div>
                      <p className="text-[13px] text-white/55 leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex items-center gap-2">
                        <div className="text-[9px] tracking-wider uppercase text-white/25">Focus</div>
                        <div className="h-px w-3 bg-white/10" />
                        <div className="text-[11px] text-white/40">{member.focus}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom info */}
        <motion.div
          className="mt-20 border-t border-white/[0.06] pt-10 grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">About 212 Equity Research</div>
            <p className="text-[13px] text-white/45 leading-relaxed">
              212 Equity Research is a student-led organization producing high-quality equity research across key sectors of the market. Founded on the belief that one extra degree of effort and rigor separates ordinary from exceptional work.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">Universities Represented</div>
            <div className="space-y-2">
              {[
                'Florida State University',
                'UNC Kenan-Flagler Business School',
                'The Ohio State University · Fisher College',
                'Emory University',
                'UCF Burnett Honors College',
              ].map((uni) => (
                <div key={uni} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-white/25 rounded-full flex-shrink-0" />
                  <span className="text-[12px] text-white/45">{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
