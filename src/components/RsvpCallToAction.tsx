import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const RsvpCallToAction: React.FC = () => {
  return (
    <section id="rsvp" className="section-padding bg-vintage-white relative overflow-hidden">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-vintage-grey via-transparent to-vintage-gold"></div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Vintage RSVP Card */}
          <div className="bg-vintage-grey shadow-2xl p-12 mx-auto max-w-3xl relative">
            {/* Decorative vintage corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-vintage-white/40"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-vintage-white/40"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-vintage-white/40"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-vintage-white/40"></div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              
              <h2 className="font-script text-4xl lg:text-5xl text-vintage-white mb-6 tracking-wide">
                ¡Confirma tu Asistencia!
              </h2>

              <div className="flex justify-center mb-8">
                <div className="w-24 h-px bg-vintage-white"></div>
                <div className="w-4 h-4 bg-vintage-white mx-6 rotate-45"></div>
                <div className="w-24 h-px bg-vintage-white"></div>
              </div>

              <p className="text-vintage-white font-serif text-xl italic mb-10 leading-relaxed max-w-2xl mx-auto">
                Tu presencia es el regalo más importante para nosotros. 
                Por favor, confirma tu asistencia para que podamos preparar 
                una celebración perfecta.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/rsvp"
                  className="inline-block bg-vintage-charcoal text-vintage-white px-16 py-6 font-serif text-2xl tracking-wide transition-all duration-300 hover:bg-vintage-dark-grey hover:scale-105 shadow-2xl"
                  style={{
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  Confirmar Ahora
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-vintage-white/80 font-serif text-sm italic mt-8"
              >
                Solo toma un minuto • Muy importante para nosotros
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RsvpCallToAction
