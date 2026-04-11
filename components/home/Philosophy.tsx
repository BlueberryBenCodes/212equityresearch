'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-black py-10 md:py-14 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left — logo mark, full height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-16 px-10"
          >
            {/* Logo mark */}
            <div className="border-2 border-white/80 flex items-center justify-center w-44 h-44 mb-6">
              <span className="font-display font-bold text-6xl tracking-tighter text-white leading-none select-none">
                212°
              </span>
            </div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/35 text-center">
              Equity Research
            </p>
          </motion.div>

          {/* Right — philosophy copy */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-white/30" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">The Philosophy</span>
              </div>
              <h2 className="font-display font-bold text-[clamp(32px,3.5vw,50px)] leading-[1.08] tracking-[-0.025em] text-white mb-5">
                211° is effort.
                <br />
                <span className="text-white/35">212° is the standard.</span>
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed">
                The difference between ordinary and exceptional is one degree. That is the standard we hold ourselves to—in every analysis, every model, every conclusion we put our name on.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  label: 'Marginal edge is everything.',
                  body: 'In research, the difference between a good call and a great one is not luck. It is the willingness to go further when others stop.',
                },
                {
                  label: 'Standards are non-negotiable.',
                  body: 'We do not produce work to fill pages. Every piece we release represents our conviction—nothing less.',
                },
                {
                  label: 'Independence is a prerequisite.',
                  body: 'Our analysis belongs to no one but the truth. No bias. No external agenda. Just rigorous, first-principles thinking.',
                },
              ].map((item, i) => (
                <div key={i} className="border-t border-white/[0.08] pt-5">
                  <div className="text-sm font-medium text-white/75 mb-1.5">{item.label}</div>
                  <p className="text-[13px] text-white/50 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
