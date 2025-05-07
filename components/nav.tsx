"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

export default function NavBar() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Fushiguro Megumi - Home">
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 p-1 shadow-md animate-pulse"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            Fushiguro Megumi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          <Link href="#services" className="text-sm text-white/80 hover:text-teal-300 transition-colors">
            {t("services")}
          </Link>
          <Link href="#process" className="text-sm text-white/80 hover:text-teal-300 transition-colors">
            {t("process")}
          </Link>
          <Link href="#about" className="text-sm text-white/80 hover:text-teal-300 transition-colors">
            {t("about")}
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all text-sm font-medium"
            >
              {t("contact")}
            </Link>
          </motion.div>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <motion.button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-white/80 hover:text-teal-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href="#process"
                className="text-white/80 hover:text-teal-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("process")}
              </Link>
              <Link
                href="#about"
                className="text-white/80 hover:text-teal-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="#contact"
                className="text-white/80 hover:text-teal-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
