"use client"

import Image from "next/image"

interface ZifroLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "full" | "icon" | "light"
}

export function ZifroLogo({ className = "", size = "md", variant = "full" }: ZifroLogoProps) {
  const sizes = {
    sm: { height: 32 },
    md: { height: 40 },
    lg: { height: 48 },
  }

  const { height } = sizes[size]

  return (
    <a href="#inicio" className={`flex items-center group ${className}`}>
      <Image
        src="/logo_grande.png"
        alt="Zifro - Ingenio que fluye"
        height={height}
        width={height * 4} // Ajusta este ratio según la proporción real de tu imagen
        className="transition-transform duration-500 group-hover:scale-105"
        priority
      />
    </a>
  )
}
