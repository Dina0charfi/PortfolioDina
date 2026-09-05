"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Gamepad2, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"
import profileImg from "../../Gemini_Generated_Image_eg9v14eg9v14eg9v.png"
import scaleupImg from "../../scaleup project.png"
import napolienassoImg from "../../napolienasso.png"
import animalappImg from "../../animalapp.png"
import hydatisImg from "../../hydatis.png"
import colocataireImg from "../../colocataire.png"
import maratechImg from "../../maratech.png"
import takwiraImg from "../../takwira.png"
import greenandgoImg from "../../greenandgo.png"
import departImg from "../../depart.jpg"

const projects = [
  {
    title: "ScaleUp: Startup Intelligence",
    description: "AI startup intelligence platform: pitch-deck generation, startup evaluation, emotion & speech intelligence, posture analysis, RAG systems, LLM workflows and predictive scoring.",
    details: "Role: AI & Software Developer. I built Computer Vision and ML/DL models for intelligent predictive systems, including pitch evaluation, pitch-deck generation, emotion/stress detection, posture analysis and speech assessment. I integrated RAG systems and LLM APIs for generative AI and startup-support features, and contributed to the platform's finance, legal, marketing and business-analysis modules, delivering end-to-end solutions across desktop, web and mobile.",
    image: scaleupImg,
    technologies: ["FastAPI","Python","TensorFlow","PyTorch","RAG","LLM APIs"],
    github: "https://github.com/Dina0charfi/scaleup",
    demo: "#",
    metrics: "University Project",
    featured: true,
    color: "from-purple-600 to-violet-600",
  },
  {
    title: "Animal Social Network",
    description: "Full-stack social network platform with ML/DL APIs for recommendations. Built MobileNet model to classify animal breeds (cats and dogs). Applied Scrum/Agile methodologies.",
    details: "Role: Full-Stack Developer within a Scrum team. I built a social network platform for animals using Django and full-stack web technologies, integrating Machine Learning and Deep Learning APIs for recommendations and content analysis, and trained a MobileNet-based Deep Learning model to classify animal breeds (cats and dogs). I also managed backend functionality, database integration and API connections.",
    image: animalappImg,
    technologies: ["Django", "MobileNet", "Deep Learning", "ML APIs", "PostgreSQL"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Full-Stack + AI",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "FlutterFlow Mobile App",
    description: "Mobile application with custom UI screens, backend service integration, authentication, navigation, and API connections.",
    details: "Role: Mobile App Developer. I developed a mobile application using FlutterFlow, designing custom UI screens and integrating backend services, with authentication, navigation and API connections fully implemented.",
    image: colocataireImg,
    technologies: ["FlutterFlow", "Firebase", "REST APIs", "UI/UX"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Mobile Development",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "CyberAware: Cybersecurity AI Agents",
    description: "Portfolio of 5 interconnected cybersecurity AI agents built during my internship at Hydatis: DarkWatch (data-leak monitoring), NetScope (DNS threat detection), PhishHunter (agentic phishing detection), Sentinel (insider-threat detection) and CrisisBot (automated incident response), plus a Serious Game for security awareness training.",
    details: "Role: AI & Software Developer, Hydatis Internship (2026). I designed and integrated intelligent modules using Python and Machine Learning / Deep Learning techniques, contributed to data processing, model integration and backend development, and integrated AI components into web-based applications and APIs, collaborating with the development team following Agile/Scrum practices.",
    image: hydatisImg,
    technologies: ["FastAPI", "LightGBM", "Word2Vec", "Isolation Forest", "SHAP", "Groq LLM"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Cybersecurity + AI",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI for French Associations",
    description: "ML models integrated into Django apps for intelligent prediction and automation. SQL data warehousing, ETL pipelines, and Power BI dashboards for business analytics.",
    details: "Role: AI & Software Developer. I designed and deployed ML models integrated into Django applications for intelligent prediction and automation, built SQL-based data warehousing and ETL pipelines for data processing, created interactive Power BI dashboards for business analytics and decision support, and developed scalable backend solutions for the AI-driven web application.",
    image: napolienassoImg,
    technologies: ["Python", "Django", "ML", "SQL", "Power BI", "ETL"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Business Intelligence",
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "Takwira: Smart Football",
    description: "Desktop application (\"Takwira\") for football management using C++ and Qt: ticketing with QR codes, matches, teams, players and referees. Integrated Oracle database and Arduino sensors for interactive motion features.",
    details: "Role: Software Developer. I built a desktop application for football management using C++ and Qt, integrating an Oracle database for data storage and management, and connecting Arduino sensors to capture motion for interactive features, covering ticketing (with QR codes), matches, teams, players and referees.",
    image: takwiraImg,
    technologies: ["C++", "Qt", "Oracle", "Arduino", "IoT"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "IoT Integration",
    color: "from-rose-400 to-pink-500",
  },
  {
    title: "Accessibility App",
    description: "Mobile app for people with hearing impairments, built during the MaraTech accessibility hackathon at ESPRIT. Focus on a sign-language learning mode and inclusive design.",
    details: "Built in 42 hours during the MaraTech accessibility hackathon at ESPRIT (Feb 2026), in partnership with local associations: a mobile app for people with hearing impairments, centered on a sign-language learning mode, with close attention to inclusive UI/UX design.",
    image: maratechImg,
    technologies: ["Mobile Dev", "Accessibility", "UI/UX", "Figma"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Social Impact",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "SDL Game Project",
    description: "Classic games developed using SDL on Linux with C++ programming. Designed game graphics and interfaces using Adobe Design tools.",
    details: "Role: Game Developer. I developed classic games using SDL on Linux with C++ programming, and designed the game graphics and interfaces myself using Adobe Design tools.",
    image: "/projects/sdl-game.jpg",
    icon: Gamepad2,
    technologies: ["C++", "SDL", "Linux", "Adobe Design", "Game Dev"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Game Development",
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Web Agriculture Project",
    description: "Interactive website with database integration for dynamic content and data management. Built using HTML, CSS, JavaScript, PHP.",
    details: "Role: Web Developer & Designer. I built an interactive website using HTML, CSS, JavaScript and PHP, and managed the database integration for dynamic content and data management.",
    image: greenandgoImg,
    icon: Sprout,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Dina0charfi",
    demo: "#",
    metrics: "Full Stack Web",
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Dep'Art: Creative Community Platform",
    description: "A bilingual (FR/EN) community platform for artistic creation, organized into 7 \"Creative Worlds\" spanning 19 disciplines: painting, crochet, photography, music, podcast, writing, digital art, jewelry, fashion and more. Built with Django, with real community features (likes, comments, saves), live API integrations (Open Library, Apple Podcasts), Machine Learning and Deep Learning-powered features (AI style analysis for paintings, an AI recipe recommendation engine, generative digital-art tools), and a strict no-fake-data honesty principle throughout.",
    goal: "To build a home for every form of creative expression, painting, crochet, photography, music, writing, digital art and more, where discovery and publishing stay honest and community-driven.",
    cause: "Born out of my own lifelong relationship with art: I wanted one space where creations and inspirations live together, instead of being scattered across different apps and profiles.",
    advantage: "Unlike typical portfolio or social platforms, Dep'Art commits to a strict \"no fake data\" principle (no invented users, reviews, or simulated AI results), with real likes, comments, live API-backed content (Open Library, Apple Podcasts charts), and genuine Machine Learning / Deep Learning / AI integrations (image style analysis, recipe recommendations, generative art tools) across 19 disciplines organized into 7 \"Creative Worlds,\" fully bilingual in French and English.",
    whyNotPublished: "It's still a personal project in active development: the Django backend, community features and several flagship pages (Painting, Crochet, Chant, Écriture) are built, but it isn't deployed or open-sourced yet while I keep refining and testing features before making it public.",
    image: departImg,
    technologies: ["Django", "Python", "HTML/CSS/JS", "REST APIs", "Machine Learning", "Deep Learning", "AI Integration"],
    github: "#",
    demo: "#",
    metrics: "In Development",
    color: "from-fuchsia-500 to-purple-500",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const activeProject = openIndex !== null ? projects[openIndex] : null

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
            <div
              className="relative bg-white rounded-4xl overflow-hidden shadow-2xl glow-md border border-transparent group cursor-pointer"
              onClick={() => setOpenIndex(0)}
            >
              {/* left - dashboard preview */}
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                <div className="relative min-h-[520px] bg-gradient-to-br from-purple-50 to-transparent p-4 lg:p-6 overflow-hidden">
                  <div className="absolute -inset-6 gradient-accent opacity-20 blur-3xl mix-blend-screen" />
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image src={projects[0].image} alt="ScaleUp preview" fill className="object-cover shadow-inner opacity-95" />
                  </div>
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/95 text-[0.75rem] font-semibold border">{projects[0].metrics}</div>
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

                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-purple-100/30 border border-purple-50 hover:shadow-xl hover:shadow-purple-200/40 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                onClick={() => setOpenIndex(index + 1)}
              >
                <div className={`relative aspect-video bg-gradient-to-br ${project.color} overflow-hidden`}>
                  {typeof project.image === "string" ? (
                    <>
                      <div className="absolute inset-0 bg-white/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {project.icon ? <project.icon className="w-8 h-8 text-white" /> : <Code className="w-8 h-8 text-white" />}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                      {project.github !== "#" && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-purple-50" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo !== "#" && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-orange-50" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
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

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-0">
          {activeProject && (
            <>
              <div className="relative w-full aspect-video">
                {typeof activeProject.image === "string" ? (
                  <div className={`w-full h-full bg-gradient-to-br ${activeProject.color} flex items-center justify-center`}>
                    {activeProject.icon ? <activeProject.icon className="w-12 h-12 text-white" /> : <Code className="w-12 h-12 text-white" />}
                  </div>
                ) : (
                  <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" />
                )}
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-50 text-purple-700">{activeProject.metrics}</span>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-foreground">{activeProject.title}</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-2">
                    {activeProject.description}
                  </DialogDescription>
                </DialogHeader>

                {activeProject.details && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1">What I did</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeProject.details}</p>
                  </div>
                )}

                {activeProject.goal && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Goal</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeProject.goal}</p>
                  </div>
                )}
                {activeProject.cause && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Why I started it</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeProject.cause}</p>
                  </div>
                )}
                {activeProject.advantage && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1">What makes it different</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeProject.advantage}</p>
                  </div>
                )}
                {activeProject.whyNotPublished && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-1">Why it isn&apos;t published yet</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeProject.whyNotPublished}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-5">
                  {activeProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-600">{t}</span>
                  ))}
                </div>

                {(activeProject.github !== "#" || activeProject.demo !== "#") && (
                  <div className="flex items-center gap-3 mt-6">
                    {activeProject.demo !== "#" && (
                      <Button size="default" className="rounded-full gradient-accent text-white px-4 py-2" asChild>
                        <a href={activeProject.demo} target="_blank" rel="noreferrer">View Project</a>
                      </Button>
                    )}
                    {activeProject.github !== "#" && (
                      <Button size="default" variant="outline" className="rounded-full px-4 py-2" asChild>
                        <a href={activeProject.github} target="_blank" rel="noreferrer">GitHub</a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
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
