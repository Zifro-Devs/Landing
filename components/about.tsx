"use client"

import { Heart, Users, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Proyectos", value: "50+" },
  { label: "Satisfacción", value: "98%" },
  { label: "Años", value: "5+" },
]

const values = [
  { 
    icon: Heart, 
    title: "Cercanos y directos",
    description: "Somos un equipo colombiano que combina creatividad, dedicación y cercanía. Te explicamos todo en palabras simples."
  },
  { 
    icon: Users, 
    title: "Comprometidos contigo",
    description: "No desaparecemos después de entregar. Seguimos contigo, resolviendo dudas y asegurándonos de que todo funcione."
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="nosotros" ref={sectionRef} className="py-16 sm:py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Centered Content */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6 sm:mb-8">
              Sobre Zifro
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 leading-tight">
              Somos tu equipo,
              <span className="gradient-text block">no solo proveedores</span>
            </h2>
          </div>
          
          {/* Big Quote / Manifesto Style */}
          <div className="relative mb-10 sm:mb-20">
            {/* Mobile: Card style quote */}
            <div className="sm:hidden bg-card border border-border rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Nuestra misión
              </div>
              <p className="text-base text-foreground font-medium leading-relaxed mt-2">
                En Zifro creemos que detrás de cada proyecto hay un sueño. Ya seas un emprendedor con una idea, una empresa que quiere crecer, o un negocio que necesita modernizarse — <span className="text-primary font-bold">estamos aquí para ayudarte.</span>
              </p>
            </div>
            
            {/* Desktop: Original quote style */}
            <div className="hidden sm:block">
              <div className="absolute -left-8 top-0 text-9xl font-serif text-primary/10 leading-none select-none">"</div>
              <blockquote className="text-2xl md:text-3xl text-foreground font-medium leading-relaxed pl-12">
                En Zifro creemos que detrás de cada proyecto hay un sueño. 
                <span className="text-muted-foreground"> Ya seas un emprendedor con una idea, una empresa que quiere crecer, o un negocio que necesita modernizarse</span> — estamos aquí para ayudarte.
              </blockquote>
            </div>
          </div>

          {/* Values - Cards on mobile, simple text on desktop */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-12 mb-10 sm:mb-20">
            {values.map((value, index) => (
              <div key={index} className="sm:contents">
                {/* Mobile: Full card */}
                <div className="sm:hidden bg-card border border-border rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Desktop: Simple text */}
                <div className="hidden sm:block">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          {/* Mobile: Grid of cards */}
          <div className="sm:hidden grid grid-cols-3 gap-3 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Desktop: Band style */}
          <div className="hidden sm:block border-y border-border py-14">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-row items-center justify-center gap-20 md:gap-32">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-6xl md:text-7xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-base text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Colombia badge - Mobile only */}
          <div className="sm:hidden flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm text-foreground font-medium">Hecho en Colombia</span>
            </div>
          </div>
          
          {/* Philosophy line */}
          <div className="text-center mt-6 sm:mt-14">
            <p className="text-muted-foreground italic text-sm sm:text-lg px-4">
              "Menos es más. Elegancia y movimiento." <span className="text-foreground not-italic font-medium">— Nuestra filosofía</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
