"use client"

import { Mail, Phone, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function Contact() {
  const { t } = useLanguage()

  const handleEmailClick = () => {
    window.location.href = "mailto:info@pulsestudio.co"
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <section id="contact" className="py-32 px-8 bg-gray-900 relative overflow-hidden">
      {/* Background elements - simplified */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            {t("contactTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              {t("contactHighlight")}
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("contactSubtitle")}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-blue-500/10 shadow-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600/20 to-teal-600/20">
                <Mail className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("emailUs")}</h3>
              <p className="text-white/70 mb-6">hello@pulsestudio.co</p>
              <motion.button
                onClick={handleEmailClick}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
                {t("sendEmail")}
              </motion.button>
            </motion.div>

            <motion.div
              className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-blue-500/10 shadow-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600/20 to-teal-600/20">
                <Phone className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("whatsappUs")}</h3>
              <p className="text-white/70 mb-6">{t("available247")}</p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("startWhatsapp")}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
