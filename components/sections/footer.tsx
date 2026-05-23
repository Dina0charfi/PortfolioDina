"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Dina0charfi", label: "GitHub", color: "hover:bg-purple-100 hover:text-purple-600" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dina-charfi-0037b4380/", label: "LinkedIn", color: "hover:bg-blue-100 hover:text-blue-600" },
  { icon: Mail, href: "mailto:dina.charfi@esprit.tn", label: "Email", color: "hover:bg-orange-100 hover:text-orange-500" },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-transparent via-purple-50/30 to-purple-100/50">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="gradient-text">Dina</span>{" "}
              <span className="gradient-text-coral">Charfi</span>
              <Sparkles className="w-4 h-4 text-orange-400" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI Engineering Student building intelligent applications with Machine Learning, Deep Learning, and Generative AI.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-white shadow-md shadow-purple-100/50 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Dina Charfi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
