import React from 'react'
import { motion } from 'framer-motion'

const Recommendations: React.FC = () => {
  const recommendations = [
    "⭐ TRAE TU ABRIGO, EN BOGOTÁ HACE FRÍO EN LAS NOCHES",
    "⭐ SIEMPRE VIAJA EN LOS TAXIS RECOMENDADOS POR EL HOTEL O UBER"
  ]

  const attractions = [
    {
      name: "CATEDRAL DE SAL",
      description: "Maravilla arquitectónica subterránea en Zipaquirá",
      icon: "⛪"
    },
    {
      name: "MONSERRAT",
      description: "Cerro emblemático con vista panorámica de Bogotá",
      icon: "🏔️"
    }
  ]

  const restaurants = [
    {
      name: "ANDRÉS CARNE DE RES",
      location: "(LOCATION CHÍA EL MEJOR!)",
      description: "Experiencia gastronómica y cultural única"
    },
    {
      name: "EL CIELO",
      location: "(CON ESTRELLA MICHELIN...)",
      description: "Alta cocina colombiana con estrella Michelin"
    },
    {
      name: "STORIA D'AMORE",
      location: "",
      description: "Restaurante italiano romántico"
    },
    {
      name: "CUMBIA HOUSE",
      location: "(REST CARLOS VIVES...)",
      description: "Restaurante del famoso cantante Carlos Vives"
    }
  ]

  return (
    <section className="section-padding bg-vintage-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-vintage-grey shadow-2xl p-8 mx-auto max-w-2xl">
            <h2 className="font-script text-4xl lg:text-5xl text-vintage-white mb-6">
              Recomendaciones Locales
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-vintage-white"></div>
              <div className="w-3 h-3 bg-vintage-white rounded-full mx-4"></div>
              <div className="w-24 h-px bg-vintage-white"></div>
            </div>
            <p className="text-lg text-vintage-white max-w-2xl mx-auto">
              Aprovechen su estadía en Bogotá para explorar la rica cultura,
              historia y gastronomía de nuestra hermosa ciudad.
            </p>
          </div>
        </motion.div>

        {/* Important Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-vintage-grey shadow-lg p-8 mb-16"
        >
          <h3 className="font-script text-4xl text-vintage-white text-center mb-8">
            Recomendaciones Importantes
          </h3>

          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-vintage-charcoal p-4 shadow-sm"
              >
                <p className="text-vintage-white font-medium text-lg">{rec}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Restaurants */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-vintage-grey shadow-lg p-8">
            <h3 className="font-script text-4xl text-vintage-white text-center mb-8">
              Restaurantes Recomendados
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {restaurants.map((restaurant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-vintage-charcoal p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-serif text-xl text-vintage-white font-bold mb-2">
                    {restaurant.name}
                  </h4>
                  {restaurant.location && (
                    <p className="text-vintage-white font-medium mb-2">{restaurant.location}</p>
                  )}
                  <p className="text-vintage-white">{restaurant.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tourist Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-vintage-grey shadow-lg p-8">
            <h3 className="font-script text-4xl text-vintage-white text-center mb-8">
              Lugares de Interés
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-vintage-charcoal p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-4xl block mb-4">{attraction.icon}</span>
                  <h4 className="font-serif text-xl text-vintage-white font-bold mb-3">{attraction.name}</h4>
                  <p className="text-vintage-white">{attraction.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Recommendations
