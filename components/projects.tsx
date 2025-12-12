"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Cloud-Based TLQ Pipeline",
    description:
      "High-performance AWS pipeline that transforms, loads, and queries large-scale CSV datasets. Achieved 500 rows/sec throughput on 100K datasets with optimized Lambda runtimes and Aurora database architecture.",
    image: "/cloud-data-pipeline-dashboard-with-aws-lambda-and-.jpg",
    tags: ["AWS Lambda", "Amazon Aurora", "Java", "Python", "CloudWatch"],
    demoUrl: "https://github.com/stacios",
    featured: true,
  },
  {
    title: "Library Book Management System",
    description:
      "Full-stack application with React frontend and Node.js backend. Features Docker containerization, PostgreSQL with normalized schema, RESTful APIs with <50ms latency, and comprehensive pagination.",
    image: "/modern-library-management-system-interface.jpg",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    demoUrl: "https://github.com/stacios",
    featured: true,
  },
  {
    title: "Cursed Revolver",
    description:
      "Award-winning browser-based 2D action-platformer built from scratch in 8 weeks. Custom game engine with 60 FPS performance, elemental spell system, FSM AI, and dynamic camera effects.",
    image: "/2d-pixel-art-action-platformer-game-with-spell-eff.jpg",
    tags: ["JavaScript", "HTML5 Canvas", "Game Engine", "Custom Physics"],
    demoUrl: "https://github.com/stacios",
    featured: false,
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Selected Work</p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-balance">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative overflow-hidden rounded-2xl ${
                  project.featured ? "md:col-span-2 lg:row-span-1" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 group-hover:via-background/90 transition-all duration-500" />
                </div>

                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                    <p
                      className={`text-muted-foreground leading-relaxed transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs text-foreground bg-background/50 backdrop-blur-sm border border-border/50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
