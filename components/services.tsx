"use client"

import { Plus, Minus } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Páginas y Aplicaciones Web",
    description:
      "Construimos el espacio digital de tu proyecto: desde una página para mostrar lo que haces, hasta herramientas que te ayuden a trabajar mejor cada día.",
  },
  {
    title: "Apps Móviles",
    description: "Desarrollamos aplicaciones pensadas para extender tu proyecto al entorno móvil, facilitando que tus usuarios puedan utilizar tus servicios, gestionar procesos o acceder a información desde su celular de manera práctica y ordenada.",
  },
  {
    title: "Automatización de Procesos",
    description: "Diseñamos soluciones que transforman procesos manuales y repetitivos en sistemas digitales que facilitan el trabajo, reducen reprocesos y permiten que la información esté siempre organizada y disponible.",
  }
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleService = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="servicios" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <div className={`lg:sticky lg:top-32 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-6">
              Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">¿Qué podemos</span>
              <span className="gradient-text block">hacer por ti?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-md">
              No importa si tienes una idea clara o apenas estás explorando. Estamos aquí para escucharte y encontrar la
              mejor solución juntos.
            </p>

            {/* Decorative element */}
            <div className="hidden lg:flex items-center gap-4 mt-12">
              <div className="w-16 h-[2px] bg-primary"></div>
              <span className="text-sm text-muted-foreground">3 servicios especializados</span>
            </div>
          </div>

          {/* Right Column - Accordion Services */}
          <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full py-5 sm:py-8 flex items-center gap-3 sm:gap-6 text-left group"
                  >
                    {/* Number */}
                    <span className={`text-3xl sm:text-5xl md:text-6xl font-bold transition-colors duration-300 min-w-[2.5rem] sm:min-w-[4rem] ${activeIndex === index ? "text-secondary" : "text-muted-foreground/30"
                      }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <span className={`flex-1 text-base sm:text-xl md:text-2xl font-semibold transition-colors duration-300 leading-tight ${activeIndex === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                      {service.title}
                    </span>

                    {/* Toggle Icon */}
                    <span className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeIndex === index
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                      {activeIndex === index ? (
                        <Minus className="w-4 h-4 sm:w-6 sm:h-6" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-6 sm:h-6" />
                      )}
                    </span>
                  </button>

                  {/* Expandable Description */}
                  <div className={`grid transition-all duration-500 ease-out ${activeIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                    <div className="overflow-hidden">
                      <p className="pl-12 sm:pl-20 md:pl-24 pb-5 sm:pb-8 text-sm sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
