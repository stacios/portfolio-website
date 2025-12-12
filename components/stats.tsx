"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 3, label: "Major Projects", suffix: "+" },
  { value: 4.0, label: "GPA", suffix: "" },
  { value: 100, label: "Students Tutored", suffix: "+" },
  { value: 500, label: "Rows/Sec Pipeline", suffix: "" },
]

export function Stats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 px-6 lg:px-12 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-5xl lg:text-6xl font-light mb-3">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-background/70 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
