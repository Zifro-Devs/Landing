"use client"

import { MessageSquare, Lightbulb, Code, Rocket, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Descubrimiento",
    description: "Te escuchamos. Entendemos tu visión, tus objetivos y los desafíos de tu negocio.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    description: "Diseñamos la arquitectura perfecta y planificamos cada fase del desarrollo.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Code,
    title: "Desarrollo",
    description: "Construimos tu solución con código limpio, metodologías ágiles y mucho café.",
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description: "Desplegamos, optimizamos y te acompañamos en cada paso del crecimiento.",
    color: "from-green-500 to-emerald-500",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section id="proceso" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-6">
            <Code className="w-3 sm:w-4 h-3 sm:h-4" />
            Nuestro Proceso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            De la idea al
            <span className="gradient-text"> lanzamiento</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty">
            Un enfoque estructurado pero flexible que garantiza resultados extraordinarios y una experiencia de
            colaboración excepcional.
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-border">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Number Badge */}
                  <div
                    className={`relative z-10 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-gradient-to-br " + step.color + " text-white shadow-2xl scale-110"
                        : "bg-card border-2 border-border text-muted-foreground"
                    }`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Connector Dot */}
                  <div
                    className={`absolute top-[4.75rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-500 ${
                      index <= activeStep ? "bg-secondary scale-125" : "bg-border"
                    }`}
                  />

                  {/* Content */}
                  <div className="pt-10">
                    <span
                      className={`text-5xl font-black transition-colors duration-300 ${
                        index === activeStep ? "text-secondary" : "text-muted/30"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3
                      className={`text-xl font-bold mt-2 mb-3 transition-colors duration-300 ${
                        index === activeStep ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border/50 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              } ${index === activeStep ? "border-secondary/50 shadow-lg" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  index <= activeStep
                    ? "bg-gradient-to-br " + step.color + " text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <step.icon className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-secondary">{step.number}</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
