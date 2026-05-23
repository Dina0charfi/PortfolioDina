"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Briefcase, GraduationCap, Laptop, Wrench, Smartphone, Globe } from "lucide-react"

const timelineItems = [
  { year: "2026–Present", title: "ScaleUp — Startup Intelligence (Current)", description: "Leading product and ML engineering for an AI startup: pitch-deck gen, RAG, CV & speech intelligence.", type: "startup", icon: Briefcase, current: true },
  { year: "2025", title: "AI Project for French Associations", description: "ML systems, ETL, SQL warehousing and Power BI for analytics.", type: "work", icon: Briefcase },
  { year: "2025", title: "Animal Social AI Platform", description: "Django full-stack with deep learning breed classification and AI assistant.", type: "work", icon: Laptop },
  { year: "2025", title: "Colocation Mobile App", description: "Roommate/shared housing mobile product (FlutterFlow).", type: "work", icon: Smartphone },
  { year: "2024", title: "Bigeek Internship", description: "Production training center website and tooling.", type: "internship", icon: Briefcase },
  { year: "2024", title: "Smart Agriculture Marketplace", description: "Marketplace platform for agri-products.", type: "work", icon: Globe },
  { year: "2024", title: "Smart Football IoT", description: "IoT & Arduino sensors for sports analytics.", type: "work", icon: Wrench },
  { year: "2023", title: "SDL Game Project", description: "Game development project using SDL and C++.", type: "work", icon: Laptop },
]

const typeColors = {
  startup: "bg-purple-100 text-purple-600 border-purple-200",
  work: "bg-orange-100 text-orange-600 border-orange-200",
  achievement: "bg-amber-100 text-amber-600 border-amber-200",
  certification: "bg-pink-100 text-pink-600 border-pink-200",
  education: "bg-violet-100 text-violet-600 border-violet-200",
  internship: "bg-rose-100 text-rose-600 border-rose-200",
}

export function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className="relative py-24 px-6">
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-to-bl from-purple-200/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-purple-500 font-mono text-sm font-semibold">04</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">My Journey</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          {/* Timeline (compact) */}
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-orange-200 md:-translate-x-px opacity-60" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 + index * 0.06 }}
                className={`relative flex items-start gap-6 mb-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <div className={`bg-white rounded-xl p-4 shadow-sm border ${item.current ? 'border-purple-100 glow-sm' : 'border-transparent'}`}>
                    <div className="flex items-center gap-3 mb-2 justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[var(--brand-purple)] font-semibold">{item.year}</span>
                        {item.current && <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--brand-purple)] text-white">Current</span>}
                      </div>
                      <span className="text-xs text-muted-foreground">{item.type}</span>
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-sm" />
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
