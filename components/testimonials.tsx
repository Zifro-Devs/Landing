"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content:
      "Zifro transformó completamente nuestra visión en una plataforma increíble. Su atención al detalle y comunicación constante hicieron toda la diferencia.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Founder, InnovateLab",
    content:
      "El equipo de Zifro no solo entrega código, entrega soluciones. Su enfoque estratégico y técnico es exactamente lo que necesitábamos.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "CTO, FinanceApp",
    content:
      "Trabajar con Zifro fue una experiencia excepcional. Profesionales, creativos y siempre dispuestos a ir más allá de lo esperado.",
    rating: 5,
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-10 sm:mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 text-secondary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-6">
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            <span className="text-primary-foreground">Lo que dicen</span>
            <span className="text-secondary"> nuestros clientes</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-slide-up stagger-2" : "opacity-0"}`}>
          <div className="relative bg-primary-foreground/5 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 border border-primary-foreground/10">
            <Quote className="w-8 sm:w-10 h-8 sm:h-10 text-secondary/40 mb-4 sm:mb-6" />

            <div className="relative">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm sm:text-base">
                    {testimonials[activeIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-primary-foreground/70 text-xs sm:text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-secondary fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-secondary w-6 sm:w-8"
                      : "bg-primary-foreground/30 w-2 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
