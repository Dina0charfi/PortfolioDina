"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Code, Globe, Medal, Rocket, Users } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "NVIDIA Deep Learning",
    issuer: "NVIDIA",
    year: "2025",
    short: "Fundamentals of Deep Learning & Multimodal AI",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Medal,
    title: "AI Product Builder",
    issuer: "Startup Program",
    year: "2025",
    short: "Applied AI for product development",
    gradient: "from-orange-400 to-amber-500",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="relative py-24 px-6">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-purple-500 font-mono text-sm font-semibold">05</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          {/* Certifications grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c, index) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 + index * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-transparent hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white shadow-sm`}> 
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                    <div className="text-xs text-muted-foreground">{c.issuer} • {c.year}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{c.short}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
