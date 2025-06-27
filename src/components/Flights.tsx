import React from 'react'
import { motion } from 'framer-motion'

const Flights: React.FC = () => {
  const flightOptions = [
    {
      airline: "VUELOS DE IDA",
      route: "SJU A BOG JUEVES 12, 2025",
      departure: "OPCION 1:",
      departureTime: "1:05PM",
      arrival: "LLEGANDO A LAS 3PM",
      duration: "",
      price: "",
      notes: ""
    },
    {
      airline: "",
      route: "",
      departure: "OPCION 2:",
      departureTime: "5:05PM",
      arrival: "LLEGANDO A LAS 7:55PM",
      duration: "",
      price: "",
      notes: ""
    }
  ]

  const returnFlights = [
    {
      airline: "VUELOS DE VUELTA",
      route: "BOG A SJU DOMINGO 15 DE MARZO 2025",
      departure: "OPCION 1:",
      departureTime: "12:50 PM",
      arrival: "LLEGANDO A LAS 4:40PM",
      duration: ""
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
              Aéreo
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-vintage-white"></div>
              <div className="w-3 h-3 bg-vintage-white rounded-full mx-4"></div>
              <div className="w-24 h-px bg-vintage-white"></div>
            </div>
            <p className="text-lg text-vintage-white max-w-2xl mx-auto font-medium">
              HAY VUELOS DIRECTOS TODOS LOS DÍAS POR LÍNEA AÉREA AVIANCA
            </p>
          </div>
        </motion.div>

        {/* Arrival Flights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-vintage-grey shadow-lg p-8">
            <h3 className="font-serif text-3xl text-vintage-white mb-8 text-center">
              Vuelos de Ida
            </h3>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-vintage-charcoal p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h4 className="font-serif text-2xl text-vintage-white mb-2">VUELOS DE IDA</h4>
                  <p className="text-lg text-vintage-white font-medium">SJU A BOG JUEVES 12, 2025</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-vintage-white border-opacity-30">
                    <span className="font-medium text-vintage-white">OPCION 1:</span>
                    <span className="text-vintage-white">1:05PM LLEGANDO A LAS 3PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-vintage-white">OPCION 2:</span>
                    <span className="text-vintage-white">5:05PM LLEGANDO A LAS 7:55PM</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Return Flights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-vintage-grey shadow-lg p-8">
            <h3 className="font-serif text-3xl text-vintage-white mb-8 text-center">
              Vuelos de Vuelta
            </h3>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-vintage-charcoal p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <h4 className="font-serif text-2xl text-vintage-white mb-2">VUELOS DE VUELTA</h4>
                  <p className="text-lg text-vintage-white font-medium">BOG A SJU DOMINGO 15 DE MARZO 2025</p>
                </div>

                <div className="text-center py-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-vintage-white">OPCION 1:</span>
                    <span className="text-vintage-white">12:50 PM LLEGANDO A LAS 4:40PM</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Travel Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-vintage-grey shadow-lg p-8 text-center"
        >
          <h4 className="font-serif text-2xl text-vintage-white mb-4">
            Consejos de Viaje
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h5 className="font-medium text-vintage-white mb-2">📋 Documentos necesarios:</h5>
              <ul className="text-vintage-white space-y-1">
                <li>• Pasaporte vigente (mínimo 6 meses)</li>
                <li>• Boleto de avión de ida y vuelta</li>
                <li>• Tarjeta de turista (se compra en el aeropuerto)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-vintage-white mb-2">💡 Recomendaciones:</h5>
              <ul className="text-vintage-white space-y-1">
                <li>• Lleguen el 11 o 12 de marzo</li>
                <li>• Reserven con anticipación</li>
                <li>• Consideren seguro de viaje</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Flights
