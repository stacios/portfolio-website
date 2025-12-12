"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl animate-float" />
        <div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/10 to-primary/5 blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className={`space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm tracking-widest text-muted-foreground uppercase">Available for Work</p>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-[0.95]">
                Hi, I'm <span className="font-medium">Staci</span>
                <br />
                <span className="font-medium text-gradient bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                Computer Science graduate from University of Washington with 4.0 GPA. Passionate about building scalable
                cloud applications and elegant user experiences.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105"
              >
                View Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="ghost"
                size="lg"
                className="rounded-full px-8 h-12 hover:bg-muted transition-all hover:scale-105"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <a
                href="https://github.com/stacios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/staci0s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:staci0str@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-all animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  )
}
