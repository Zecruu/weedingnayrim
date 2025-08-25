import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {

  return (
    <footer className="bg-vintage-charcoal text-vintage-white">

      {/* Main Footer Card with Background Image */}
      <div className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/N&S-34.jpg')" }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-vintage-charcoal/70"></div>
        
        <div className="container-max relative z-10">
          <div className="text-center text-vintage-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-script text-4xl lg:text-5xl mb-6">
                Gracias por Acompañarnos
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-24 h-px bg-vintage-white"></div>
                <div className="w-3 h-3 bg-vintage-white rounded-full mx-4"></div>
                <div className="w-24 h-px bg-vintage-white"></div>
              </div>
              <div className="space-y-4 max-w-3xl mx-auto mb-8">
                <p className="text-xl font-medium opacity-95">
                  GRACIAS POR ACOMPAÑARNOS EN ESTE MOMENTO TAN ESPECIAL.
                </p>
                <p className="text-xl font-medium opacity-95">
                  ¡LOS QUEREMOS MUCHO!
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-16 h-px bg-vintage-white opacity-40"></div>
                <span className="text-2xl">💕</span>
                <div className="w-16 h-px bg-vintage-white opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-vintage-charcoal/90 py-4">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-vintage-white/70">
            <p>2025 Steven & Nayrim. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              Hecho con 💕 para nuestra celebración especial
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
