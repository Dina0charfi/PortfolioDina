"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Rocket, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import profileImg from "../../Gemini_Generated_Image_eg9v14eg9v14eg9v.png"
import scaleupImg from "../../scaleup project.png"

const projects = [
  {
    title: "ScaleUp — Startup Intelligence",
    description: "AI startup intelligence platform: pitch-deck generation, startup evaluation, emotion & speech intelligence, posture analysis, RAG systems, LLM workflows and predictive scoring.",
    image: scaleupImg,
    technologies: ["FastAPI","Python","TensorFlow","PyTorch","RAG","LLM APIs"],
    github: "https://github.com/Dina0charfi/scaleup",
    demo: "#",
    metrics: "Currently Building",
    featured: true,
    color: "from-purple-600 to-violet-600",
  },
  {
    title: "Animal Social Network",
    description: "Full-stack social network platform with ML/DL APIs for recommendations. Built MobileNet model to classify animal breeds (cats and dogs). Applied Scrum/Agile methodologies.",
    image: "/projects/animal-social.jpg",
    technologies: ["Django", "MobileNet", "Deep Learning", "ML APIs", "PostgreSQL"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Full-Stack + AI",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "AI for French Associations",
    description: "ML models integrated into Django apps for intelligent prediction and automation. SQL data warehousing, ETL pipelines, and Power BI dashboards for business analytics.",
    image: "/projects/associations-ai.jpg",
    technologies: ["Python", "Django", "ML", "SQL", "Power BI", "ETL"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Business Intelligence",
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "FlutterFlow Mobile App",
    description: "Mobile application with custom UI screens, backend service integration, authentication, navigation, and API connections.",
    image: "/projects/flutterflow.jpg",
    technologies: ["FlutterFlow", "Firebase", "REST APIs", "UI/UX"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Mobile Development",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Smart Football",
    description: "Desktop application for football management using C++ and Qt. Integrated Oracle database and Arduino sensors for interactive motion features.",
    image: "/projects/smart-football.jpg",
    technologies: ["C++", "Qt", "Oracle", "Arduino", "IoT"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "IoT Integration",
    color: "from-rose-400 to-pink-500",
  },
  {
    title: "Accessibility App",
    description: "Mobile app for people with hearing impairments, built during ESPRIT Workshop. Focus on accessibility and inclusive design.",
    image: "/projects/accessibility.jpg",
    technologies: ["Mobile Dev", "Accessibility", "UI/UX", "Figma"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Social Impact",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "SDL Game Project",
    description: "Classic games developed using SDL on Linux with C++ programming. Designed game graphics and interfaces using Adobe Design tools.",
    image: "/projects/sdl-game.jpg",
    technologies: ["C++", "SDL", "Linux", "Adobe Design", "Game Dev"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Game Development",
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Web Agriculture Project",
    description: "Interactive website with database integration for dynamic content and data management. Built using HTML, CSS, JavaScript, PHP.",
    image: "/projects/agriculture.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Full Stack Web",
    color: "from-pink-400 to-rose-500",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 px-6">
      {/* Background accents */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-gradient-to-bl from-orange-200/40 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-purple-500 font-mono text-sm font-semibold">02</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          {/* Featured project - large premium card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mb-10"
          >
            <div className="relative bg-white rounded-4xl overflow-hidden shadow-2xl glow-md border border-transparent group">
              {/* left - dashboard preview */}
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                <div className="relative min-h-[520px] bg-gradient-to-br from-purple-50 to-transparent p-4 lg:p-6 overflow-hidden">
                  <div className="absolute -inset-6 gradient-accent opacity-20 blur-3xl mix-blend-screen" />
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image src={projects[0].image} alt="ScaleUp preview" fill className="object-cover shadow-inner opacity-95" />
                  </div>
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/95 text-[0.75rem] font-semibold border">Currently Building</div>
                </div>

                {/* right - details */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-50 text-purple-700">Featured</span>
                      <span className="text-sm text-muted-foreground">{projects[0].metrics}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{projects[0].title}</h3>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">{projects[0].description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[0].technologies.map((t) => (
                        <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/90 text-foreground border">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button size="default" className="rounded-full gradient-accent text-white px-4 py-2" asChild>
                      <a href={projects[0].demo} target="_blank" rel="noreferrer">View Project</a>
                    </Button>
                    <Button size="default" variant="outline" className="rounded-full px-4 py-2" asChild>
                      <a href={projects[0].github} target="_blank" rel="noreferrer">GitHub</a>
                    </Button>
                    <Button size="default" variant="ghost" className="rounded-full px-4 py-2" asChild>
                      <a href="/case-study/scaleup">Case Study</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-purple-100/30 border border-purple-50 hover:shadow-xl hover:shadow-purple-200/40 hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`relative aspect-video bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-purple-50" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-orange-50" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          i % 2 === 0 ? "bg-purple-50 text-purple-600" : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-purple-600 font-semibold">{project.metrics}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Code({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
