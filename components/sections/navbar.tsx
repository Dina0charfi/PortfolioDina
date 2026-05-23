"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`glass rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_18px_50px_rgba(92,60,160,0.08)]"
              : "shadow-[0_12px_30px_rgba(92,60,160,0.06)]"
          }`}>
            <nav className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="text-xl font-bold flex items-center gap-3 tracking-tight">
                <span className="gradient-text">Dina — AI</span>
                <Sparkles className="w-4 h-4 text-[var(--brand-orange)]" />
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-purple-600 transition-colors relative group py-1"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:block">
                <Button
                  size="sm"
                  className="rounded-full gradient-accent text-white shadow-lg transition-transform duration-200 hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let&apos;s Talk
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden rounded-full hover:bg-purple-50/80"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5 text-purple-600" />
              </Button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-12">
              <a href="#" className="text-xl font-bold flex items-center gap-2">
                <span className="gradient-text">Dina</span>
                <Sparkles className="w-4 h-4 text-orange-500" />
              </a>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full hover:bg-purple-50/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5 text-purple-600" />
              </Button>
            </div>

            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-bold text-foreground hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-orange-500 text-white shadow-lg"
              onClick={() => {
                setIsMobileMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
