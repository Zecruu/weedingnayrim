import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const ThankYou: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image (same look as previous footer card) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/N&S-34.jpg')" }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-vintage-charcoal/70" />

      <div className="container-max relative z-10">
        <div className="text-center text-vintage-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-script text-4xl lg:text-5xl mb-6">
              ¡Que Comience la fiesta!
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
              <p className="text-xl font-medium opacity-95">¡LOS QUEREMOS MUCHO!</p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-16 h-px bg-vintage-white opacity-40"></div>
              <span className="text-2xl">💕</span>
              <div className="w-16 h-px bg-vintage-white opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ThankYou

