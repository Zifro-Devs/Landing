"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 50, suffix: "+", label: "Proyectos entregados" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 5, suffix: "+", label: "Años de experiencia" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 transition-transform duration-300 group-hover:scale-105">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
