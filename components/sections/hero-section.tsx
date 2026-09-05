"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import profileImg from "../../Gemini_Generated_Image_eg9v14eg9v14eg9v.png"
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16">
      {/* Animated background blobs - purple and coral */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-violet-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-orange-300/25 to-rose-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-purple-400/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/25 to-orange-300/20 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] subtle-grid" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Text content (restored original with refined layout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
              {/* Inline availability badge, aligned with the heading */}
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass shadow-md mb-8 -mt-2"
              >
                <span className="relative inline-flex items-center justify-center w-3 h-3 flex-none">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-400/30 animate-ping" />
                  <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-foreground/95">Available for Opportunities</span>
              </motion.div>

            {/* Name with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[0.95]"
            >
              <span className="text-foreground">Hello, I&apos;m</span>
              <br />
              <span className="gradient-text">Dina</span>{" "}
              <span className="gradient-text">Charfi</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground mb-6 tracking-wide"
            >
              AI Engineer &bull; Full Stack Builder &bull; ESPRIT Student
            </motion.p>

            {/* Tagline (shorter, premium) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-foreground/80 max-w-xl mb-6 leading-relaxed"
            >
              Driven by curiosity, I explore AI technologies and build intelligent applications through real-world projects.
            </motion.p>

            {/* Credibility chips (cleaned up) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                '8+ Projects',
                'AI/ML Engineer',
                'NVIDIA Certified',
                'Full-Stack Developer',
              ].map((s) => (
                <div key={s} className="px-3 py-2 rounded-full bg-white shadow-sm text-sm font-medium glass">
                  {s}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-violet-600 to-orange-500 text-white hover:scale-[1.03] rounded-full px-8 py-6 text-base glow-sm transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2 text-purple-500" />
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-6 py-6 text-base hover:bg-orange-50 transition-all duration-300"
                asChild
              >
                <a href="/cv.pdf" target="_blank" rel="noreferrer">
                  <FileText className="w-5 h-5 mr-2 text-orange-500" />
                  View CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="mt-5 flex justify-center"
            >
              <motion.button
                type="button"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/55 backdrop-blur-md border border-white/50 shadow-sm text-sm font-medium text-foreground/80 hover:text-foreground hover:shadow-md transition-all"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Discover My Journey</span>
                <ArrowDown className="w-4 h-4 text-[var(--brand-orange)]" />
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative elements behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-400/30 via-pink-300/20 to-orange-300/30 rounded-full blur-2xl" />
              <div className="absolute -inset-2 bg-gradient-to-tr from-violet-500/20 to-rose-400/20 rounded-full blur-xl" />
              
              {/* Main photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border glow">
                <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
                  <Image
                    src={profileImg}
                    alt="Dina Charfi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating labels around photo (smaller, glass, softer) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.8 }}
                className="absolute -top-2 -right-2 px-3 py-1 rounded-full glass shadow-sm text-xs font-semibold"
              >
                Computer Vision
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.9 }}
                className="absolute bottom-10 -left-6 px-3 py-1 rounded-full glass shadow-sm text-xs font-semibold"
              >
                Machine Learning
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1 }}
                className="absolute -bottom-2 right-8 px-3 py-1 rounded-full glass shadow-sm text-xs font-semibold"
              >
                Full Stack
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 1.1 }}
                className="absolute top-14 -left-6 px-3 py-1 rounded-full glass shadow-sm text-xs font-semibold"
              >
                Gen AI
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

