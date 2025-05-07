"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// English translations - more professional language with SEO focus
const en = {
  // Navbar
  services: "Services",
  process: "Methodology",
  about: "About",
  contact: "Contact",

  // Hero
  heroTitle1: "Strategic",
  heroTitle2: "Digital Solutions",
  heroSubtitle:
    "We transform business challenges into innovative digital experiences that drive measurable results and improve online visibility.",
  contactUs: "Discuss Your Project",
  ourServices: "Explore Solutions",

  // Services
  expertiseTitle: "Core",
  expertiseHighlight: "Expertise",
  expertiseSubtitle:
    "Specialized digital services tailored to elevate your brand, optimize your business operations, and enhance your online presence.",

  // Service items
  webSolutions: "Web Development",
  webSolutionsDesc:
    "Enterprise-grade web applications built with scalable architecture, modern technology stacks, and SEO best practices.",
  ecommerce: "E-commerce Solutions",
  ecommerceDesc:
    "Conversion-optimized online stores with seamless payment processing, inventory management, and search engine visibility.",
  uiUx: "UI/UX Design",
  uiUxDesc:
    "Research-driven interface design that enhances user engagement, improves conversion metrics, and creates intuitive user journeys.",
  seo: "Search Engine Optimization",
  seoDesc:
    "Comprehensive SEO strategies that increase organic visibility, drive qualified traffic, and improve search engine rankings.",
  maintenance: "Technical Support",
  maintenanceDesc:
    "Proactive maintenance and support services ensuring optimal performance, security compliance, and continuous improvement.",
  contentCreation: "Content Creation",
  contentCreationDesc:
    "Strategic content development that resonates with your target audience, establishes authority, and drives engagement.",

  // Process
  processTitle: "Our",
  processHighlight: "Methodology",
  processSubtitle:
    "A systematic approach to digital transformation that ensures consistent, high-quality outcomes and measurable results.",

  // Process steps
  step1: "Discovery & Analysis",
  step1Desc:
    "Comprehensive assessment of business requirements, market positioning, competitive landscape, and SEO opportunities.",
  step2: "Strategic Planning",
  step2Desc:
    "Development of detailed project specifications and technical architecture aligned with business goals and search visibility.",
  step3: "Design & Prototyping",
  step3Desc:
    "Creation of user-centered designs with iterative prototyping, stakeholder validation, and accessibility considerations.",
  step4: "Development & Testing",
  step4Desc:
    "Agile implementation with continuous integration, rigorous testing, quality assurance, and performance optimization.",
  step5: "Deployment & Optimization",
  step5Desc:
    "Seamless launch with post-implementation analysis, continuous performance optimization, and ongoing SEO refinement.",

  // About
  aboutTitle: "About",
  aboutHighlight: "Fushiguro Megumi",
  aboutSubtitle: "A team of digital specialists committed to excellence in every project we undertake.",
  innovationTitle: "Delivering digital excellence",
  aboutP1:
    "We were established with a clear mission: to create digital solutions that seamlessly blend form and function while maximizing online visibility.",
  aboutP2:
    "Our multidisciplinary team combines expertise in design, development, and strategic planning to deliver solutions that address complex business challenges and drive organic growth.",
  aboutP3:
    "We prioritize collaborative partnerships, investing time to thoroughly understand your business objectives before developing tailored digital strategies that align with your goals.",
  aboutP4:
    "Whether you're launching a new digital initiative, rebranding, or optimizing existing digital assets, our team provides the expertise needed to achieve measurable results and improve your digital presence.",

  // CTA
  ctaTitle: "Ready for",
  ctaHighlight: "Digital Transformation?",
  ctaSubtitle:
    "Let's collaborate on creating impactful digital solutions that elevate your brand, drive business growth, and enhance your online visibility.",

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

// Danish translations - more professional language with SEO focus
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
    "Vi transformerer forretningsudfordringer til innovative digitale oplevelser, der giver målbare resultater og forbedrer online synlighed.",
  contactUs: "Diskuter Dit Projekt",
  ourServices: "Udforsk Løsninger",

  // Services
  expertiseTitle: "Kernekompetencer",
  expertiseHighlight: "& Ekspertise",
  expertiseSubtitle:
    "Specialiserede digitale tjenester skræddersyet til at løfte dit brand, optimere dine forretningsprocesser og forbedre din online tilstedeværelse.",

  // Service items
  webSolutions: "Webudvikling",
  webSolutionsDesc:
    "Webapplikationer i virksomhedsklasse bygget med skalerbar arkitektur, moderne teknologistakke og SEO-bedste praksis.",
  ecommerce: "E-handelsløsninger",
  ecommerceDesc:
    "Konverteringsoptimerede online butikker med problemfri betalingsbehandling, lagerstyring og søgemaskinesynlighed.",
  uiUx: "UI/UX Design",
  uiUxDesc:
    "Forskningsdrevet interfacedesign, der forbedrer brugerengagement, konverteringsmetrikker og skaber intuitive brugerrejser.",
  seo: "Søgemaskineoptimering",
  seoDesc:
    "Omfattende SEO-strategier, der øger organisk synlighed, driver kvalificeret trafik og forbedrer søgemaskinerangering.",
  maintenance: "Teknisk Support",
  maintenanceDesc:
    "Proaktive vedligeholdelses- og supporttjenester, der sikrer optimal ydeevne, sikkerhedsoverholdelse og kontinuerlig forbedring.",
  contentCreation: "Indholdsproduktion",
  contentCreationDesc:
    "Strategisk indholdsudvikling, der resonerer med din målgruppe, etablerer autoritet og driver engagement.",

  // Process
  processTitle: "Vores",
  processHighlight: "Metodik",
  processSubtitle:
    "En systematisk tilgang til digital transformation, der sikrer konsistente resultater af høj kvalitet og målbare resultater.",

  // Process steps
  step1: "Opdagelse & Analyse",
  step1Desc: "Omfattende vurdering af forretningskrav, markedspositionering, konkurrencelandskab og SEO-muligheder.",
  step2: "Strategisk Planlægning",
  step2Desc:
    "Udvikling af detaljerede projektspecifikationer og teknisk arkitektur tilpasset forretningsmål og søgesynlighed.",
  step3: "Design & Prototyping",
  step3Desc:
    "Skabelse af brugercentrerede designs med iterativ prototyping, interessentvalidering og tilgængelighedsovervejelser.",
  step4: "Udvikling & Test",
  step4Desc: "Agil implementering med kontinuerlig integration, grundig test, kvalitetssikring og ydeevneoptimering.",
  step5: "Implementering & Optimering",
  step5Desc:
    "Problemfri lancering med efterimplementeringsanalyse, kontinuerlig ydeevneoptimering og løbende SEO-forfining.",

  // About
  aboutTitle: "Om",
  aboutHighlight: "Fushiguro Megumi",
  aboutSubtitle: "Et team af digitale specialister, der er forpligtet til excellence i hvert projekt, vi påtager os.",
  innovationTitle: "Leverer digital excellence",
  aboutP1:
    "Vi blev etableret med en klar mission: at skabe digitale løsninger, der problemfrit kombinerer form og funktion, samtidig med at maksimere online synlighed.",
  aboutP2:
    "Vores tværfaglige team kombinerer ekspertise inden for design, udvikling og strategisk planlægning for at levere løsninger, der adresserer komplekse forretningsudfordringer og driver organisk vækst.",
  aboutP3:
    "Vi prioriterer samarbejdspartnerskaber og investerer tid i grundigt at forstå dine forretningsmål, før vi udvikler skræddersyede digitale strategier, der er på linje med dine mål.",
  aboutP4:
    "Uanset om du lancerer et nyt digitalt initiativ, rebrander eller optimerer eksisterende digitale aktiver, giver vores team den ekspertise, der er nødvendig for at opnå målbare resultater og forbedre din digitale tilstedeværelse.",

  // CTA
  ctaTitle: "Klar til",
  ctaHighlight: "Digital Transformation?",
  ctaSubtitle:
    "Lad os samarbejde om at skabe effektfulde digitale løsninger, der løfter dit brand, driver forretningsvækst og forbedrer din online synlighed.",

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
