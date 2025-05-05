import type React from "react"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata = {
  title: "Pulse Studio - Digital Design & Development",
  description:
    "We create digital experiences that captivate, engage, and convert. Web design, development, and digital marketing services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
