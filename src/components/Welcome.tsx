import React from 'react'
import { motion } from 'framer-motion'

const Welcome: React.FC = () => {
  return (
    <section className="section-padding bg-blush">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h2
            className="font-serif text-4xl lg:text-5xl text-charcoal mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Bienvenidos
          </motion.h2>
          
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="w-24 h-px bg-rose"></div>
            <div className="w-3 h-3 bg-rose rounded-full mx-4"></div>
            <div className="w-24 h-px bg-rose"></div>
          </motion.div>
          
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-charcoal"
          >
            <p>
              NOS SENTIMOS PROFUNDAMENTE AGRADECIDOS DE PODER COMPARTIR CON USTEDES
              ESTE MOMENTO TAN ESPECIAL EN NUESTRAS VIDAS.
            </p>

            <p>
              ESPERAMOS QUE DISFRUTEN DE ESTA HERMOSA CIUDAD Y QUE TENGAMOS UNA
              CELEBRACIÓN LLENA DE AMOR, ALEGRÍA Y MOMENTOS INOLVIDABLES.
            </p>

            <p>
              GRACIAS POR ACOMPAÑARNOS EN ESTE VIAJE Y POR SER PARTE DE NUESTRA HISTORIA.
            </p>
          </motion.div>
          
          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <p className="font-serif text-2xl text-charcoal">
              Con amor,
            </p>
            <p className="font-serif text-3xl text-rose font-medium mt-2">
              Steven & Nayrim
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
