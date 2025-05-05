"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = (lang: string) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase text-sm font-medium">{language}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden z-50 border border-blue-500/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => toggleLanguage("en")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === "en" ? "bg-blue-600/50" : "hover:bg-blue-600/20"
              }`}
            >
              English
            </button>
            <button
              onClick={() => toggleLanguage("da")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === "da" ? "bg-blue-600/50" : "hover:bg-blue-600/20"
              }`}
            >
              Dansk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
