export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Introduction</p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-balance mb-12">About Me</h2>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a recent Computer Science graduate from the University of Washington with a perfect 4.0 GPA and a
              minor in Mathematics. My passion lies in building scalable, high-performance systems that solve real-world
              problems.
            </p>
            <p>
              Throughout my academic journey, I've specialized in cloud computing, full-stack development, and data
              systems. From designing AWS-based data pipelines that process 100K datasets at 500 rows per second to
              creating immersive browser games with custom engines, I thrive on tackling complex technical challenges.
            </p>
            <p>
              Beyond coding, I've tutored over 100 students in computer science and mathematics, helping improve their
              exam scores by 15-20%. I believe in writing clean, maintainable code and sharing knowledge with the
              developer community.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-light mb-8">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-1">University of Washington</h4>
                <p className="text-muted-foreground mb-1">
                  Bachelor of Science in Computer Science and Systems, Minor in Mathematics
                </p>
                <p className="text-sm text-muted-foreground">March 2025 • Summa Cum Laude • GPA: 4.0/4.0</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Cascadia College</h4>
                <p className="text-muted-foreground mb-1">
                  Associate of Science, Bioengineering and Chemical Engineering Track
                </p>
                <p className="text-sm text-muted-foreground">June 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
