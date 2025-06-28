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
              Alojamiento
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-vintage-white"></div>
              <div className="w-3 h-3 bg-vintage-white rounded-full mx-4"></div>
              <div className="w-24 h-px bg-vintage-white"></div>
            </div>
          </div>
          <p className="text-lg text-vintage-black max-w-2xl mx-auto mt-8">
            Hemos seleccionado estos hoteles para que tengan opciones cómodas y convenientes
            durante su estadía en Bogotá.
          </p>
          <p className="text-xl font-bold text-vintage-black max-w-2xl mx-auto mt-4">
            Escoge uno de los dos
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
              className="bg-vintage-grey shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
            >
              {/* Hotel Name */}
              <h3 className="font-serif text-xl text-vintage-white mb-4 font-bold">
                {hotel.name}
              </h3>

              {/* Address */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="font-medium text-vintage-white mr-2">📍</span>
                  <span className="text-vintage-white font-medium">{hotel.address}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-vintage-white mb-6 leading-relaxed">
                {hotel.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-vintage-white mb-3">Servicios incluidos:</h4>
                <ul className="space-y-1">
                  {hotel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-vintage-white">
                      <span className="w-2 h-2 bg-vintage-white rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Now Button */}
              <div className="text-center">
                <a
                  href={index === 0
                    ? "https://www.clickclackhotel.com/en/hotels/colombia/medellin/clickclackmedellin/?gclid=8943f7dbaa1a19b1063f9f848f1957c5&gclsrc=3p.ds&gad_source=7"
                    : "https://www.booking.com/index.en-gb.html?label=msn-LXsJga95E*bNvtpzYeLIjw-80676815398188%3Atikwd-80676969432379%3Aloc-154%3Aneo%3Amte%3Alp154%3Adec%3AqsHOTEL+ESTELAR+PARQUE+DE+LA+93&sid=f1d22e5a869bf244d807b478333fff82&utm_source=bing&utm_medium=cpc&utm_term=LXsJga95E*bNvtpzYeLIjw&utm_campaign=Hotel+-+Colombia&aid=2276372"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-vintage-black text-vintage-white px-8 py-3 font-medium hover:bg-vintage-charcoal transition-colors duration-300 inline-block"
                >
                  Reservar Ahora
                </a>
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
          className="text-center mt-12 p-8 bg-vintage-grey shadow-lg"
        >
          <div className="flex justify-center mb-4">
            <span className="text-2xl">⭐⭐</span>
          </div>
          <p className="text-vintage-white font-medium text-lg leading-relaxed">
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
