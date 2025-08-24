import React from 'react'
import { motion } from 'framer-motion'

const Welcome: React.FC = () => {
  return (
    <section className="section-padding bg-vintage-white relative">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-vintage-grey via-transparent to-vintage-dark-grey"></div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Vintage Welcome Card */}
          <div 
            className="shadow-2xl p-12 relative"
            style={{
              backgroundImage: 'url(/images/N&S-44.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Decorative vintage corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-vintage-white/40"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-vintage-white/40"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-vintage-white/40"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-vintage-white/40"></div>

            {/* Vintage Title */}
            <motion.h2
              className="font-serif text-5xl lg:text-6xl text-vintage-white mb-10 tracking-wide font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Bienvenidos
            </motion.h2>

            {/* Vintage Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="w-20 h-px bg-vintage-white"></div>
              <div className="w-3 h-3 bg-vintage-white mx-6 rotate-45"></div>
              <div className="w-20 h-px bg-vintage-white"></div>
            </motion.div>
          
            {/* Vintage Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 text-xl leading-relaxed text-vintage-white font-serif"
            >
              <p className="italic">
                Nos sentimos profundamente agradecidos de poder compartir con ustedes
                este momento tan especial en nuestras vidas.
              </p>

              <p className="italic">
                Esperamos que disfruten de esta hermosa ciudad y que tengamos una
                celebración llena de amor, alegría y momentos inolvidables.
              </p>

              <p className="italic">
                Gracias por acompañarnos en este viaje y por ser parte de nuestra historia.
              </p>
            </motion.div>

            {/* Vintage Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="pt-16 border-t border-vintage-white/30 mt-12"
            >
              <p className="font-serif text-2xl text-vintage-white italic">
                Con amor,
              </p>
              <p className="font-serif text-4xl text-vintage-white font-bold mt-4 tracking-wide">
                Steven & Nayrim
              </p>
            </motion.div>


          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
