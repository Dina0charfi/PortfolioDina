"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Linkedin, Mail, Send, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  { icon: Github, href: "https://github.com/Dina0charfi", label: "GitHub", color: "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dina-charfi-0037b4380/", label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
  { icon: Mail, href: "mailto:dina.charfi@esprit.tn", label: "Email", color: "hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: "", email: "", message: "" })
    alert("Message sent! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-purple-500 font-mono text-sm font-semibold">07</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Get in Touch</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Let&apos;s build something <span className="gradient-text-coral">amazing</span> together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, AI opportunities, or ways to collaborate.
                Whether you have a question or just want to connect, feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md shadow-purple-100/50 border border-purple-100/50"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200/50">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:dina.charfi@esprit.tn" className="font-semibold text-foreground hover:text-purple-600 transition-colors">
                      dina.charfi@esprit.tn
                    </a>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md shadow-orange-100/50 border border-orange-100/50"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-200/50">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <span className="font-semibold text-foreground">Ben Arous, Tunis</span>
                  </div>
                </motion.div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    size="lg"
                    variant="outline"
                    className={`rounded-full w-14 h-14 p-0 border-2 transition-all duration-300 hover:scale-110 ${social.color}`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-100/50 border border-purple-100/50 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="bg-purple-50/50 border-purple-100 focus:border-purple-300 focus:ring-purple-200 rounded-xl h-12"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="bg-purple-50/50 border-purple-100 focus:border-purple-300 focus:ring-purple-200 rounded-xl h-12"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-purple-50/50 border-purple-100 focus:border-purple-300 focus:ring-purple-200 rounded-xl resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 rounded-xl h-14 text-base font-semibold shadow-lg shadow-purple-200/50 hover:shadow-purple-300/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Heart className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
