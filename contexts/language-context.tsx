"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// English translations - more professional language
const en = {
  // Navbar
  services: "Services",
  process: "Methodology",
  about: "About",
  contact: "Contact",

  // Hero
  heroTitle1: "Strategic",
  heroTitle2: "Digital Solutions",
  heroSubtitle: "We transform business challenges into innovative digital experiences that drive measurable results.",
  contactUs: "Discuss Your Project",
  ourServices: "Explore Solutions",

  // Services
  expertiseTitle: "Core",
  expertiseHighlight: "Expertise",
  expertiseSubtitle:
    "Specialized digital services tailored to elevate your brand and optimize your business operations.",

  // Service items
  webSolutions: "Web Development",
  webSolutionsDesc: "Enterprise-grade web applications built with scalable architecture and modern technology stacks.",
  ecommerce: "E-commerce Solutions",
  ecommerceDesc: "Conversion-optimized online stores with seamless payment processing and inventory management.",
  uiUx: "UI/UX Design",
  uiUxDesc: "Research-driven interface design that enhances user engagement and improves conversion metrics.",
  seo: "Digital Marketing",
  seoDesc: "Data-driven strategies that increase visibility and generate qualified leads for sustainable growth.",
  maintenance: "Technical Support",
  maintenanceDesc: "Proactive maintenance and support services ensuring optimal performance and security compliance.",
  digitalStrategy: "Digital Strategy",
  digitalStrategyDesc: "Comprehensive digital roadmaps aligned with your business objectives and market positioning.",

  // Partners
  partnersTitle: "Strategic Partners",
  partnersSubtitle: "Collaborating with industry leaders to deliver exceptional digital solutions.",

  // Process
  processTitle: "Our",
  processHighlight: "Methodology",
  processSubtitle: "A systematic approach to digital transformation that ensures consistent, high-quality outcomes.",

  // Process steps
  step1: "Discovery & Analysis",
  step1Desc: "Comprehensive assessment of business requirements, market positioning, and competitive landscape.",
  step2: "Strategic Planning",
  step2Desc: "Development of detailed project specifications and technical architecture aligned with business goals.",
  step3: "Design & Prototyping",
  step3Desc: "Creation of user-centered designs with iterative prototyping and stakeholder validation.",
  step4: "Development & Testing",
  step4Desc: "Agile implementation with continuous integration, rigorous testing, and quality assurance.",
  step5: "Deployment & Optimization",
  step5Desc: "Seamless launch with post-implementation analysis and continuous performance optimization.",

  // About
  aboutTitle: "About",
  aboutHighlight: "Pulse Studio",
  aboutSubtitle: "A team of digital specialists committed to excellence in every project we undertake.",
  innovationTitle: "Delivering digital excellence since 2018",
  aboutP1:
    "Pulse Studio was established with a clear mission: to create digital solutions that seamlessly blend form and function.",
  aboutP2:
    "Our multidisciplinary team combines expertise in design, development, and strategic planning to deliver solutions that address complex business challenges.",
  aboutP3:
    "We prioritize collaborative partnerships, investing time to thoroughly understand your business objectives before developing tailored digital strategies.",
  aboutP4:
    "Whether you're launching a new digital initiative, rebranding, or optimizing existing digital assets, our team provides the expertise needed to achieve measurable results.",

  // CTA
  ctaTitle: "Ready for",
  ctaHighlight: "Digital Transformation?",
  ctaSubtitle:
    "Let's collaborate on creating impactful digital solutions that elevate your brand and drive business growth.",

  // Contact
  contactTitle: "Let's",
  contactHighlight: "Connect",
  contactSubtitle: "Discuss your project requirements with our team of specialists.",
  emailUs: "Email Us",
  whatsappUs: "Contact via WhatsApp",
  available247: "Prompt response guaranteed within 24 hours",
  sendEmail: "Send Email",
  startWhatsapp: "Start Conversation",

  // Footer
  footerText: "Delivering strategic digital solutions that drive business growth and enhance user engagement.",
  allRights: "All rights reserved.",
  followUs: "Connect With Us",
}

// Danish translations - more professional language
const da = {
  // Navbar
  services: "Ydelser",
  process: "Metodik",
  about: "Om Os",
  contact: "Kontakt",

  // Hero
  heroTitle1: "Strategiske",
  heroTitle2: "Digitale Løsninger",
  heroSubtitle:
    "Vi transformerer forretningsudfordringer til innovative digitale oplevelser, der giver målbare resultater.",
  contactUs: "Diskuter Dit Projekt",
  ourServices: "Udforsk Løsninger",

  // Services
  expertiseTitle: "Kernekompetencer",
  expertiseHighlight: "& Ekspertise",
  expertiseSubtitle:
    "Specialiserede digitale tjenester skræddersyet til at løfte dit brand og optimere dine forretningsprocesser.",

  // Service items
  webSolutions: "Webudvikling",
  webSolutionsDesc: "Webapplikationer i virksomhedsklasse bygget med skalerbar arkitektur og moderne teknologistakke.",
  ecommerce: "E-handelsløsninger",
  ecommerceDesc: "Konverteringsoptimerede online butikker med problemfri betalingsbehandling og lagerstyring.",
  uiUx: "UI/UX Design",
  uiUxDesc: "Forskningsdrevet interfacedesign, der forbedrer brugerengagement og konverteringsmetrikker.",
  seo: "Digital Markedsføring",
  seoDesc: "Datadrevne strategier, der øger synlighed og genererer kvalificerede leads til bæredygtig vækst.",
  maintenance: "Teknisk Support",
  maintenanceDesc:
    "Proaktive vedligeholdelses- og supporttjenester, der sikrer optimal ydeevne og sikkerhedsoverholdelse.",
  digitalStrategy: "Digital Strategi",
  digitalStrategyDesc: "Omfattende digitale køreplaner, der er tilpasset dine forretningsmål og markedspositionering.",

  // Partners
  partnersTitle: "Strategiske Partnere",
  partnersSubtitle: "Samarbejde med brancheledere for at levere exceptionelle digitale løsninger.",

  // Process
  processTitle: "Vores",
  processHighlight: "Metodik",
  processSubtitle:
    "En systematisk tilgang til digital transformation, der sikrer konsistente resultater af høj kvalitet.",

  // Process steps
  step1: "Opdagelse & Analyse",
  step1Desc: "Omfattende vurdering af forretningskrav, markedspositionering og konkurrencelandskab.",
  step2: "Strategisk Planlægning",
  step2Desc: "Udvikling af detaljerede projektspecifikationer og teknisk arkitektur tilpasset forretningsmål.",
  step3: "Design & Prototyping",
  step3Desc: "Skabelse af brugercentrerede designs med iterativ prototyping og interessentvalidering.",
  step4: "Udvikling & Test",
  step4Desc: "Agil implementering med kontinuerlig integration, grundig test og kvalitetssikring.",
  step5: "Implementering & Optimering",
  step5Desc: "Problemfri lancering med efterimplementeringsanalyse og kontinuerlig ydeevneoptimering.",

  // About
  aboutTitle: "Om",
  aboutHighlight: "Pulse Studio",
  aboutSubtitle: "Et team af digitale specialister, der er forpligtet til excellence i hvert projekt, vi påtager os.",
  innovationTitle: "Leverer digital excellence siden 2018",
  aboutP1:
    "Pulse Studio blev etableret med en klar mission: at skabe digitale løsninger, der problemfrit kombinerer form og funktion.",
  aboutP2:
    "Vores tværfaglige team kombinerer ekspertise inden for design, udvikling og strategisk planlægning for at levere løsninger, der adresserer komplekse forretningsudfordringer.",
  aboutP3:
    "Vi prioriterer samarbejdspartnerskaber og investerer tid i grundigt at forstå dine forretningsmål, før vi udvikler skræddersyede digitale strategier.",
  aboutP4:
    "Uanset om du lancerer et nyt digitalt initiativ, rebrander eller optimerer eksisterende digitale aktiver, giver vores team den ekspertise, der er nødvendig for at opnå målbare resultater.",

  // CTA
  ctaTitle: "Klar til",
  ctaHighlight: "Digital Transformation?",
  ctaSubtitle:
    "Lad os samarbejde om at skabe effektfulde digitale løsninger, der løfter dit brand og driver forretningsvækst.",

  // Contact
  contactTitle: "Lad Os",
  contactHighlight: "Forbinde",
  contactSubtitle: "Diskuter dine projektkrav med vores team af specialister.",
  emailUs: "Email Os",
  whatsappUs: "Kontakt via WhatsApp",
  available247: "Hurtig respons garanteret inden for 24 timer",
  sendEmail: "Send Email",
  startWhatsapp: "Start Samtale",

  // Footer
  footerText: "Leverer strategiske digitale løsninger, der driver forretningsvækst og forbedrer brugerengagement.",
  allRights: "Alle rettigheder forbeholdes.",
  followUs: "Forbind Med Os",
}

type Translations = typeof en

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: keyof Translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en")

  const t = (key: keyof Translations): string => {
    const translations = language === "en" ? en : da
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
