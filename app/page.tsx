"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import NavBar from "@/components/nav"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import {
  Laptop,
  ShoppingCart,
  Globe,
  Search,
  Wrench,
  FileText,
  ArrowRight,
  Lightbulb,
  PenTool,
  Code,
  Rocket,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"

// Updated services with new icons and replacing Digital Strategy with Content Creation
const services = [
  {
    titleKey: "webSolutions",
    descriptionKey: "webSolutionsDesc",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    titleKey: "ecommerce",
    descriptionKey: "ecommerceDesc",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    titleKey: "uiUx",
    descriptionKey: "uiUxDesc",
    icon: <Laptop className="w-8 h-8" />,
  },
  {
    titleKey: "seo",
    descriptionKey: "seoDesc",
    icon: <Search className="w-8 h-8" />,
  },
  {
    titleKey: "maintenance",
    descriptionKey: "maintenanceDesc",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    titleKey: "contentCreation",
    descriptionKey: "contentCreationDesc",
    icon: <FileText className="w-8 h-8" />,
  },
]

// Process steps with minimalistic icons
const processSteps = [
  {
    number: "01",
    titleKey: "step1",
    descKey: "step1Desc",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-600 to-blue-800",
  },
  {
    number: "02",
    titleKey: "step2",
    descKey: "step2Desc",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-teal-600 to-teal-800",
  },
  {
    number: "03",
    titleKey: "step3",
    descKey: "step3Desc",
    icon: <PenTool className="w-8 h-8" />,
    color: "from-cyan-600 to-cyan-800",
  },
  {
    number: "04",
    titleKey: "step4",
    descKey: "step4Desc",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
  },
  {
    number: "05",
    titleKey: "step5",
    descKey: "step5Desc",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-teal-500 to-teal-700",
  },
]

export default function Home() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })

  // Parallax effect for hero section - simplified
  const heroY = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <NavBar />

      {/* Hero Section with new color scheme */}
      <section
        className="relative min-h-[120vh] flex items-center justify-center px-8 overflow-hidden pt-24"
        ref={heroRef}
        aria-label="Hero section"
      >
        {/* Abstract background elements - updated colors */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.1),transparent_70%)]"></div>

        {/* Animated shapes - updated colors */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatePresence>
            {heroInView && (
              <>
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                    {t("heroTitle1")}
                  </span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                    {t("heroTitle2")}
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {t("heroSubtitle")}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="#contact" aria-label="Contact us to discuss your project">
                    <motion.button
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all shadow flex items-center gap-2 group font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t("contactUs")}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link href="#services" aria-label="Explore our services">
                    <motion.button
                      className="px-8 py-4 border border-blue-500/30 rounded-full hover:bg-white/5 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t("ourServices")}
                    </motion.button>
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Section with updated colors */}
      <section id="services" className="py-32 px-8 bg-gray-900 relative overflow-hidden" aria-label="Our services">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("expertiseTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                {t("expertiseHighlight")}
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("expertiseSubtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-teal-700 shadow-lg`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(service.titleKey)}</h3>
                <p className="text-white/70">{t(service.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - updated colors */}
      <section id="process" className="py-32 px-8 bg-gray-900 relative overflow-hidden" aria-label="Our methodology">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.1),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("processTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                {t("processHighlight")}
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("processSubtitle")}</p>
          </motion.div>

          {/* Process Steps - Vertical Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/30 via-teal-500/30 to-blue-500/30 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-24 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Step Number with Icon */}
                  <div
                    className={`relative z-10 w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    aria-hidden="true"
                  >
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 md:max-w-lg w-full"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-white/70">{t(step.descKey)}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - updated colors */}
      <section id="about" className="py-32 px-8 bg-gray-900" aria-label="About us">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("aboutTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              {t("aboutHighlight")}
            </span>
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("aboutSubtitle")}
          </motion.p>

          <motion.div
            className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              {t("innovationTitle")}
            </h3>
            <p className="text-white/90 text-lg">{t("aboutP1")}</p>
            <p className="text-white/80 text-lg">{t("aboutP2")}</p>
            <p className="text-white/80 text-lg">{t("aboutP3")}</p>
            <p className="text-white/80 text-lg">{t("aboutP4")}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - updated colors */}
      <section
        className="py-32 px-8 bg-gradient-to-r from-blue-900/40 to-teal-900/40 relative overflow-hidden"
        aria-label="Call to action"
      >
        {/* Animated background elements - updated colors */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("ctaTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              {t("ctaHighlight")}
            </span>
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-2xl mx-auto text-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("ctaSubtitle")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#contact" aria-label="Contact us to discuss your project">
              <motion.button
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("contactUs")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
