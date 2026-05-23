"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Dina's ability to integrate complex AI systems into practical applications is impressive. Her work on the startup platform demonstrated exceptional technical skills.",
    author: "Project Mentor",
    role: "AI/ML Technical Lead",
    avatar: "PM",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    quote: "A dedicated team player who brings both technical expertise and creative problem-solving to every project. Her contributions to our Django applications were outstanding.",
    author: "Team Lead",
    role: "France Associations Project",
    avatar: "TL",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    quote: "Dina showed remarkable initiative during her internship. Her eagerness to learn and apply new technologies made her a valuable addition to our team.",
    author: "Supervisor",
    role: "STB Bank Internship",
    avatar: "SV",
    gradient: "from-orange-400 to-amber-500",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative py-24 px-6">
      {/* Background accents */}
      <div className="absolute left-1/4 top-1/3 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute right-1/4 bottom-1/3 w-96 h-96 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-purple-500 font-mono text-sm font-semibold">06</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Collaborations</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-purple-100/30 border border-purple-50 hover:shadow-xl hover:shadow-purple-200/40 hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
