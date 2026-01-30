"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const messages = [
  "Hola, tengo una idea para una app...",
  "¿Me pueden ayudar con mi página web?",
  "Necesito automatizar mi negocio",
  "Quiero vender por internet",
  "Mi empresa necesita un sistema",
]

export function Hero() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const message = messages[currentMessage]
    let charIndex = 0
    setDisplayedText("")
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        setDisplayedText(message.slice(0, charIndex + 1))
        charIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % messages.length)
        }, 2500)
      }
    }, 60)

    return () => clearInterval(typingInterval)
  }, [currentMessage])

  return (
    <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center bg-background">
      {/* Clean Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8">
              <span className="block text-primary">Transformamos</span>
              <span className="block gradient-text">tus ideas en</span>
              <span className="block text-foreground">
                <span className="text-secondary">realidad digital</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed">
              Las ideas nacen en la mente, pero los proyectos nacen cuando se construyen. En <span className="text-foreground font-semibold">Zifro</span> trabajamos contigo para convertir tu visión en una solución digital construida con criterio, orden y atención a cada detalle.
            </p>

            <div className="flex justify-center sm:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-6 sm:py-7 text-sm sm:text-base group w-full sm:w-auto max-w-sm"
              >
                <span className="flex items-center justify-center">
                  Cuéntanos tu idea
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

          </div>

          {/* Right Column - Chat */}
          <div className={`relative ${isVisible ? "animate-slide-up stagger-2" : "opacity-0"}`}>
            <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-primary border-b border-border">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Zifro</p>
                  <p className="text-xs text-white/70">En línea - Respuesta inmediata</p>
                </div>
              </div>

              <div className="p-4 sm:p-6 min-h-[240px] sm:min-h-[300px] flex flex-col justify-between bg-muted/20">
                {/* Zifro Message */}
                <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">Z</span>
                  </div>
                  <div className="bg-card rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-border max-w-[220px] sm:max-w-[280px]">
                    <p className="text-foreground text-sm sm:text-base">
                      ¡Hola! Cuéntanos, ¿qué tienes en mente para tu proyecto?
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex gap-2 sm:gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-3 sm:px-4 py-2 sm:py-3 max-w-[220px] sm:max-w-[280px]">
                    <p className="text-sm sm:text-base">
                      {displayedText}
                      {isTyping && <span className="inline-block w-0.5 h-4 bg-white/70 ml-0.5 animate-pulse" />}
                    </p>
                  </div>
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">Tú</span>
                  </div>
                </div>

                {/* Typing indicator */}
                {!isTyping && (
                  <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">Z</span>
                    </div>
                    <div className="bg-card rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-border">
                      <div className="flex gap-1">
                        <span
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Footer */}
              <div className="px-4 py-2 sm:py-3 bg-card border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Escríbenos por WhatsApp o agenda una llamada gratis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 hidden sm:flex">
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
