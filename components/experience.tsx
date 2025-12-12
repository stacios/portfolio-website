"use client"

import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "University of Washington, Teaching and Learning Center",
    role: "Computer Science and Mathematics Tutor",
    period: "Feb 2024 – Present",
    description:
      "Providing one-on-one tutoring to over 100 students across various majors in computer science and mathematics. Leading workshops for 20+ students covering key concepts and exam preparation.",
    achievements: [
      "Tutored 100+ students improving exam scores by 15-20%",
      "Led workshops for 20+ students on technical concepts",
      "Created visual aids and problem-solving exercises for non-technical audiences",
    ],
  },
  {
    company: "University of Washington Library",
    role: "Access Services Assistant",
    period: "Feb 2024 – Apr 2025",
    description:
      "Assisted 100+ patrons weekly in locating academic resources and resolving account issues using library databases and the Alma library management system.",
    achievements: [
      "Assisted 100+ patrons weekly with academic resources",
      "Managed library circulation with Alma and Excel",
      "Ensured accurate cataloging, shelving, and inventory control",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Career Path</p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-balance">Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-8 md:pl-0`}>
                    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      <div className="flex items-start gap-3 mb-3">
                        <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-xl font-medium mb-1">{exp.role}</h3>
                          <p className="text-primary font-medium mb-2">{exp.company}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
