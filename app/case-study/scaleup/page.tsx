"use client"

import Image from "next/image"
import profileImg from "../../../../scaleup project.png"
import { Button } from "@/components/ui/button"

export default function ScaleUpCaseStudy() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">ScaleUp — Startup Intelligence</h1>
          <p className="text-muted-foreground mt-2">University Project — Featured</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={profileImg} alt="ScaleUp preview" className="object-cover w-full h-96" />
          </div>

          <div>
            <p className="text-lg text-foreground mb-4">AI startup intelligence platform: pitch-deck generation, startup evaluation, emotion &amp; speech intelligence, posture analysis, RAG systems, LLM workflows and predictive scoring.</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['FastAPI','Python','TensorFlow','PyTorch','RAG','LLM APIs'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/90 border text-sm">{t}</span>
              ))}
            </div>

            <div className="flex gap-3">
              <Button asChild size="default" className="gradient-accent text-white rounded-full px-4 py-2">
                <a href="#" target="_blank" rel="noreferrer">View Project</a>
              </Button>
              <Button asChild size="default" variant="outline" className="rounded-full px-4 py-2">
                <a href="https://github.com/Dina0charfi/scaleup" target="_blank" rel="noreferrer">GitHub</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
