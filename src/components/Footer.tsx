import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Gracias por Acompañarnos
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-rose"></div>
              <div className="w-3 h-3 bg-rose rounded-full mx-4"></div>
              <div className="w-24 h-px bg-rose"></div>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl font-medium opacity-95">
                GRACIAS POR ACOMPAÑARNOS EN ESTE MOMENTO TAN ESPECIAL.
              </p>
              <p className="text-xl font-medium opacity-95">
                ¡LOS QUEREMOS MUCHO!
              </p>
            </div>
          </motion.div>



          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center items-center space-x-4">
              <div className="w-16 h-px bg-white opacity-40"></div>
              <span className="text-2xl">💕</span>
              <div className="w-16 h-px bg-white opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white border-opacity-20 py-6">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
            <p>© 2025 Steven & Nayrim. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              Hecho con 💖 para nuestra celebración especial
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
