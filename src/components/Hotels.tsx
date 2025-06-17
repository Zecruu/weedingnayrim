import React from 'react'
import { motion } from 'framer-motion'

const Hotels: React.FC = () => {
  const hotels = [
    {
      name: "THE CLICK CLACK HOTEL BOGOTÁ",
      address: "CARRERA 11 NO. 93-77, BOGOTÁ, DISTRITO CAPITAL, 110221",
      description: "Hotel boutique moderno en la zona rosa de Bogotá con diseño contemporáneo y excelente ubicación.",
      features: [
        "Ubicación en Zona Rosa",
        "Diseño contemporáneo",
        "Restaurante gourmet",
        "Gimnasio y spa",
        "WiFi gratuito"
      ]
    },
    {
      name: "HOTEL ESTELAR PARQUE DE LA 93",
      address: "CALLE 93, 11-19, BOGOTÁ, DISTRITO CAPITAL, 110221",
      description: "Hotel elegante ubicado en el exclusivo sector del Parque de la 93 con vistas panorámicas.",
      features: [
        "Vista panorámica",
        "Ubicación exclusiva",
        "Centro de negocios",
        "Restaurante internacional",
        "Servicio de concierge"
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">
            Alojamiento
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px bg-rose"></div>
            <div className="w-3 h-3 bg-rose rounded-full mx-4"></div>
            <div className="w-24 h-px bg-rose"></div>
          </div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Hemos seleccionado estos hoteles para que tengan opciones cómodas y convenientes
            durante su estadía en Bogotá.
          </p>
        </motion.div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-blush rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Hotel Name */}
              <h3 className="font-serif text-xl text-charcoal mb-4 font-bold">
                {hotel.name}
              </h3>

              {/* Address */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="font-medium text-charcoal mr-2">📍</span>
                  <span className="text-charcoal font-medium">{hotel.address}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-charcoal mb-6 leading-relaxed">
                {hotel.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-charcoal mb-3">Servicios incluidos:</h4>
                <ul className="space-y-1">
                  {hotel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-charcoal">
                      <span className="w-2 h-2 bg-sage rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
        
        {/* Important Reservation Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-rose bg-opacity-15 rounded-lg border-2 border-rose border-opacity-30"
        >
          <div className="flex justify-center mb-4">
            <span className="text-2xl">⭐⭐</span>
          </div>
          <p className="text-charcoal font-medium text-lg leading-relaxed">
            ES IMPORTANTE QUE NUESTROS INVITADOS HAGAN SUS RESERVAS CON ANTICIPACIÓN
            PARA GARANTIZAR DISPONIBILIDAD Y MEJORES TARIFAS.
          </p>
          <div className="flex justify-center mt-4">
            <span className="text-2xl">⭐⭐</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hotels
