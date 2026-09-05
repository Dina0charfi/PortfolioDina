"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Cpu, Smartphone } from "lucide-react"

const skills = [
  { icon: Code, label: "Python", description: "Core language for ML & backend", color: "from-purple-500 to-violet-500" },
  { icon: Cpu, label: "TensorFlow/PyTorch", description: "Deep learning model development", color: "from-indigo-500 to-blue-500" },
  { icon: Code, label: "React", description: "Modern frontend interfaces", color: "from-pink-500 to-rose-500" },
  { icon: Code, label: "FastAPI/Django", description: "Scalable backend APIs", color: "from-emerald-400 to-green-500" },
  { icon: Brain, label: "LLMs / RAG", description: "Generative AI & retrieval systems", color: "from-yellow-400 to-amber-500" },
  { icon: Cpu, label: "Computer Vision", description: "Image & video intelligence", color: "from-orange-400 to-amber-500" },
  { icon: Brain, label: "ML", description: "Predictive models & data science", color: "from-violet-500 to-purple-600" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-20 px-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-purple-500 font-mono text-sm font-semibold">01</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Concise bio + highlights */}
            <div>
              <motion.h3 initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-lg font-semibold mb-3">About</motion.h3>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.05 }} className="text-base text-muted-foreground mb-4">
                AI Engineering student focused on Machine Learning, Computer Vision, Generative AI, and Full-Stack Development. Building innovative AI solutions for startups and real-world applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="flex flex-wrap gap-3 mb-4"
              >
                {['AI Agents','RAG Systems','Computer Vision','GenAI Products','Full-Stack AI Engineering'].map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/75 backdrop-blur-md border border-white/70 shadow-sm text-foreground/90 hover:shadow-md transition-shadow"
                  >
                    {s}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-sm text-muted-foreground"
              >
                <span className="font-semibold text-foreground/80">Languages:</span> Arabic (Native) &bull; French &bull; English
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm text-muted-foreground mt-2"
              >
                <span className="font-semibold text-foreground/80">Soft Skills:</span> Teamwork &amp; Collaboration &bull; Project Management &bull; Time Management &bull; Networking
              </motion.div>
            </div>

                        {/* Compact skill cards */}
                        <div className="grid grid-cols-3 gap-3">
                          {skills.map((skill, index) => (
                            <motion.div key={skill.label} initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.06 + index * 0.04 }} className="group bg-white rounded-xl p-3 shadow-sm border border-transparent hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-2 text-white`}> 
                                <skill.icon className="w-5 h-5" />
                              </div>
                              <h4 className="text-sm font-semibold">{skill.label}</h4>
                              <div className="text-xs text-muted-foreground">{skill.description}</div>
                            </motion.div>
                          ))}
                        </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
