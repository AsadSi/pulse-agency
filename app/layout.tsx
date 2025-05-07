import type React from "react"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata = {
  title: "Fushiguro Megumi | Professional Web Development & SEO Services",
  description:
    "Fushiguro Megumi delivers strategic digital solutions including web development, SEO, UI/UX design, and e-commerce. Transform your online presence with our expert team.",
  keywords: "web development, SEO services, digital solutions, UI/UX design, e-commerce development, Fushiguro Megumi",
  openGraph: {
    title: "Fushiguro Megumi | Professional Web Development & SEO Services",
    description:
      "Transform your online presence with our expert digital solutions including web development, SEO, UI/UX design, and e-commerce.",
    url: "https://fushiguromegumi.com",
    siteName: "Fushiguro Megumi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fushiguro Megumi | Professional Web Development & SEO Services",
    description:
      "Transform your online presence with our expert digital solutions including web development, SEO, UI/UX design, and e-commerce.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://fushiguromegumi.com" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
