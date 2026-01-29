"use client"

import { useState, useEffect } from "react"
import { ZifroLogo } from "./zifro-logo"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-primary ${
        isScrolled ? "shadow-lg shadow-primary/20 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <ZifroLogo size="md" variant="light" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
                activeSection === item.href.replace("#", "")
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-secondary transition-all duration-300 rounded-full ${
                  activeSection === item.href.replace("#", "") ? "w-4" : "w-0 group-hover:w-4"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group"
            asChild
          >
            <a href="#contacto">
              Hablemos
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-primary transition-all duration-300 overflow-hidden border-b border-primary-foreground/10 ${
          isMobileMenuOpen ? "max-h-[400px]" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "bg-secondary/20 text-secondary font-medium"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" asChild>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              Hablemos
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
