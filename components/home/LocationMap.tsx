'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// PNG map: 3600×3600 square. Black bg, light state fills.
// US pixel bounds in image: x [340,3300], y [245,3050]
// objectPosition: 70% 45% on a 16:9 container crops to y=[710,2735] visible.
// SVG viewBox matches exactly: "0 710 3600 2025"
const mapW = 3600
const lonMin = -124.8, lonMax = -66.9
const xMin = 340, xMax = 3300
const latMax = 49.4, latMin = 24.5
const yMin = 245, yMax = 3050

function toXY(lat: number, lon: number) {
  const x = xMin + ((lon - lonMin) / (lonMax - lonMin)) * (xMax - xMin)
  const y = yMin + ((latMax - lat) / (latMax - latMin)) * (yMax - yMin)
  return { x, y }
}

const locations = [
  { name: 'Michael Cochran',              school: 'Ohio State · Fisher',    city: 'Columbus, OH',   ...toXY(39.96, -83.00) },
  { name: 'Benjamin Getter',              school: 'UNC Kenan-Flagler',      city: 'Chapel Hill, NC',...toXY(35.91, -79.05) },
  { name: 'Daniel Rudin',                 school: 'Emory University',       city: 'Atlanta, GA',    ...toXY(33.79, -84.32) },
  { name: 'Samuel Angel & Sawyer Targosz',school: 'Florida State',          city: 'Tallahassee, FL',...toXY(30.44, -84.28) },
  { name: 'Charles Alliots',              school: 'UCF Burnett Honors',     city: 'Orlando, FL',    ...toXY(28.54, -81.38) },
]

export default function LocationMap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative bg-black py-10 md:py-14 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">Distribution</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(32px,3.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-white">
            Across four states.
            <br />
            <span className="text-white/30">One research platform.</span>
          </h2>
        </motion.div>

        {/* Map — 16:9 crop centered on eastern US */}
        <motion.div
          className="relative border border-white/[0.07] overflow-hidden"
          style={{ aspectRatio: '16/9' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/us-map.png"
            alt="United States map"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: '70% 45%',
              filter: 'grayscale(1) brightness(0.45)',
            }}
          />

          {/* SVG overlay — viewBox matches exactly what object-cover shows */}
          <svg
            viewBox="0 710 3600 2025"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {locations.map((loc, i) => {
              const labelLeft = loc.x > mapW * 0.58
              const labelAbove = loc.y > 2300
              const lx = labelLeft ? loc.x - 40 : loc.x + 40
              const ly = labelAbove ? loc.y - 40 : loc.y + 24
              const anchor = labelLeft ? 'end' : 'start'

              return (
                <motion.g
                  key={loc.city}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.6 + i * 0.12 }}
                  style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                >
                  <circle cx={loc.x} cy={loc.y} r="16" fill="white" />
                  <text
                    x={lx} y={ly}
                    textAnchor={anchor}
                    fill="rgba(255,255,255,0.9)"
                    fontSize="34"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="4"
                  >
                    {loc.city.toUpperCase()}
                  </text>
                  <text
                    x={lx} y={ly + 42}
                    textAnchor={anchor}
                    fill="rgba(255,255,255,0.38)"
                    fontSize="26"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="2"
                  >
                    {loc.school}
                  </text>
                </motion.g>
              )
            })}
          </svg>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-5 flex flex-wrap gap-x-8 gap-y-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          {locations.map((loc) => (
            <div key={loc.city} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
              <span className="text-[11px] text-white/50">{loc.city}</span>
              <span className="text-[10px] text-white/20">·</span>
              <span className="text-[11px] text-white/25">{loc.school}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
