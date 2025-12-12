const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "R", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "JavaFX", "JUnit", "LibGDX"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS S3", "Amazon Aurora", "CloudWatch", "Docker", "Git", "GitHub"],
  },
  {
    title: "Tools",
    skills: ["Postman", "VS Code", "Visual Studio", "IntelliJ", "LaTeX", "PostgreSQL"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Expertise</p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-balance">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-lg font-medium tracking-tight border-b border-border pb-3">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground leading-relaxed">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
