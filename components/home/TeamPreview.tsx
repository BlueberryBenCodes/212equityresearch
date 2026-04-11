'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const team = [
  { name: 'Samuel Angel', school: 'Florida State University', image: '/images/team/samuel.png' },
  { name: 'Sawyer Targosz', school: 'Florida State University', image: '/images/team/sawyer.jpeg' },
  { name: 'Benjamin Getter', school: 'UNC Kenan-Flagler', image: '/images/team/ben.jpeg' },
  { name: 'Michael Cochran', school: 'Ohio State · Fisher', image: '/images/team/michael.jpeg' },
  { name: 'Daniel Rudin', school: 'Emory University', image: '/images/team/daniel.jpeg' },
  { name: 'Charles Alliots', school: 'UCF Burnett Honors', image: '/images/team/charles.jpeg' },
]

export default function TeamPreview() {
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
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">The Team</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(32px,3.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-white">
              Six analysts.
              <br />
              <span className="text-white/30">One standard.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/45 hover:text-white transition-colors border-b border-white/15 hover:border-white/40 pb-px"
            >
              Meet the Team
              <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Team grid — natural aspect ratio photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i + 0.15 }}
            >
              <Link href="/team" className="block">
                {/* Photo — w-full with auto height to preserve natural ratio */}
                <div className="relative w-full overflow-hidden mb-3 bg-white/[0.04]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-400"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <div className="text-[13px] font-display font-semibold text-white leading-snug mb-0.5">{member.name}</div>
                <div className="text-[11px] text-white/40">{member.school}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
