"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: ["CNN", "Deep Learning", "Neural Networks", "Predictive Systems", "Model Training"],
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-100/80 to-violet-100/60",
  },
  {
    title: "LLMs & NLP",
    skills: ["LLM APIs", "RAG Systems", "NLP", "Generative AI", "Text Analysis"],
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-100/80 to-rose-100/60",
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "MediaPipe", "Emotion Recognition", "Posture Detection", "Image Classification"],
    gradient: "from-orange-400 to-amber-500",
    bgGradient: "from-orange-100/80 to-amber-100/60",
  },
  {
    title: "Frameworks",
    skills: ["Django", "Qt", "PyTorch", "TensorFlow", "FlutterFlow"],
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-100/80 to-purple-100/60",
  },
  {
    title: "Programming",
    skills: ["Python", "C++", "PHP", "JavaScript", "HTML/CSS"],
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-100/80 to-pink-100/60",
  },
  {
    title: "Databases",
    skills: ["Oracle", "MySQL", "PostgreSQL", "SQL", "Data Warehousing"],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-100/80 to-orange-100/60",
  },
  {
    title: "Tools & Methods",
    skills: ["Git", "Figma", "API Integration", "Scrum/Agile", "Power BI"],
    gradient: "from-purple-400 to-violet-500",
    bgGradient: "from-purple-100/80 to-violet-100/60",
  },
  {
    title: "Other Skills",
    skills: ["Arduino", "IPv4 & OSI", "ETL Pipelines", "Multi-Modal Systems", "Adobe Design"],
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-100/80 to-rose-100/60",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/40 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-purple-500 font-mono text-sm font-semibold">03</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-purple-100/30 border border-purple-50 hover:shadow-xl hover:shadow-purple-200/40 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Title with gradient bar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${category.gradient}`} />
                    <h3 className="text-base font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                          i % 2 === 0 
                            ? "bg-purple-50 text-purple-600 group-hover:bg-purple-100" 
                            : "bg-orange-50 text-orange-600 group-hover:bg-orange-100"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
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
