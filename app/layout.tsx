import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Zifro | Ingenio que fluye",
  description:
    "Desarrollamos software que impulsa el futuro de tu negocio. Soluciones innovadoras, diseño excepcional y tecnología de vanguardia.",
  keywords: ["desarrollo de software", "aplicaciones web", "apps móviles", "tecnología", "innovación", "Zifro"],
  authors: [{ name: "Zifro" }],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "Zifro | Ingenio que fluye",
    description: "Desarrollamos software que impulsa el futuro de tu negocio",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
