"use client"

import { ZifroLogo } from "./zifro-logo"
import { Linkedin, Twitter, Github, Instagram, Heart, ArrowUpRight } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Diseño UX/UI", href: "#servicios" },
    { label: "Consultoría Tech", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Nuestro Proceso", href: "#proceso" },
    { label: "Casos de Éxito", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <ZifroLogo size="lg" variant="light" />
            <p className="mt-4 sm:mt-6 text-primary-foreground/80 max-w-sm leading-relaxed text-sm sm:text-base">
              Transformamos ideas en software excepcional. Desde Colombia para el mundo, con{" "}
              <span className="text-secondary">ingenio que fluye</span>.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg sm:rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group"
                >
                  <social.icon className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Colombia Badge */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 text-xs sm:text-sm">
              <span>Hecho con</span>
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-secondary fill-current" />
              <span>en Colombia</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 sm:mb-5 text-sm sm:text-base">Servicios</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4 sm:mb-5 text-sm sm:text-base">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-primary-foreground mb-4 sm:mb-5 text-sm sm:text-base">Legal</h4>
            <ul className="flex sm:block gap-4 sm:gap-0 sm:space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
            © {new Date().getFullYear()} Zifro. Todos los derechos reservados.
          </p>

          <div className="w-16 sm:w-24 h-1 colombia-accent rounded-full opacity-60 order-first sm:order-none" />

          <p className="text-xs sm:text-sm text-primary-foreground/60 flex items-center gap-2">
            <span className="font-mono text-secondary">{"</"}</span>
            Ingenio que fluye
            <span className="font-mono text-secondary">{"/>"}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
