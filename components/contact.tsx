"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, ArrowUpRight, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-16 sm:py-24 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left Column - Info */}
          <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-6">
              Contacto
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Hagamos realidad
              <span className="gradient-text"> tu proyecto</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-10 leading-relaxed max-w-md">
              Cuéntanos tu idea y descubre cómo podemos transformarla en una solución digital que supere todas tus
              expectativas.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hola@zifro.dev"
                    className="font-semibold text-sm sm:text-base hover:text-secondary transition-colors truncate block"
                  >
                    hola@zifro.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-semibold text-sm sm:text-base">Colombia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Tiempo de respuesta</p>
                  <p className="font-semibold text-sm sm:text-base">Menos de 24 horas</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">+50 proyectos exitosos</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`${isVisible ? "animate-slide-up stagger-2" : "opacity-0"}`}>
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Cuéntanos tu proyecto</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Te respondemos en menos de 24 horas
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 block">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/50 border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 block">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/50 border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 block">
                    Empresa <span className="text-muted-foreground font-normal">(opcional)</span>
                  </label>
                  <Input
                    id="company"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-11 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 block">
                    Tu proyecto *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu idea, objetivos y cualquier detalle que consideres importante..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 sm:h-14 text-sm sm:text-base group"
                >
                  Enviar mensaje
                  <Send className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Quick Link */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border text-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  O agenda una videollamada directamente
                  <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
