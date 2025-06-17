import React from 'react'
import { motion } from 'framer-motion'

const Flights: React.FC = () => {
  const flightOptions = [
    {
      airline: "Avianca",
      route: "Miami (MIA) → Bogotá (BOG)",
      departure: "12 de Marzo, 2025",
      departureTime: "11:30 PM",
      arrival: "5:45 AM +1",
      duration: "4h 15min",
      price: "Desde $350 USD",
      notes: "Vuelo directo nocturno, llega temprano"
    },
    {
      airline: "Avianca",
      route: "Nueva York (JFK) → Bogotá (BOG)",
      departure: "12 de Marzo, 2025",
      departureTime: "10:15 PM",
      arrival: "5:30 AM +1",
      duration: "6h 15min",
      price: "Desde $420 USD",
      notes: "Vuelo directo desde la costa este"
    },
    {
      airline: "Avianca",
      route: "Los Angeles (LAX) → Bogotá (BOG)",
      departure: "12 de Marzo, 2025",
      departureTime: "11:45 PM",
      arrival: "11:30 AM +1",
      duration: "8h 45min",
      price: "Desde $480 USD",
      notes: "Vuelo directo desde la costa oeste"
    }
  ]

  const returnFlights = [
    {
      airline: "Avianca",
      route: "Bogotá (BOG) → Miami (MIA)",
      departure: "15 de Marzo, 2025",
      departureTime: "7:30 AM",
      arrival: "12:45 PM",
      duration: "4h 15min"
    },
    {
      airline: "Avianca",
      route: "Bogotá (BOG) → Nueva York (JFK)",
      departure: "15 de Marzo, 2025",
      departureTime: "8:15 AM",
      arrival: "4:30 PM",
      duration: "6h 15min"
    }
  ]

  return (
    <section className="section-padding bg-blush">
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
            Aéreo
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px bg-rose"></div>
            <div className="w-3 h-3 bg-rose rounded-full mx-4"></div>
            <div className="w-24 h-px bg-rose"></div>
          </div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto font-medium">
            HAY VUELOS DIRECTOS TODOS LOS DÍAS POR LÍNEA AÉREA AVIANCA
          </p>
        </motion.div>

        {/* Arrival Flights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-serif text-3xl text-charcoal mb-8 text-center">
            Vuelos de Llegada
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flightOptions.map((flight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif text-xl text-charcoal">{flight.airline}</h4>
                  <span className="text-2xl">✈️</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-medium text-charcoal">{flight.route}</p>
                    <p className="text-sm text-gray-600">{flight.departure}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Salida</p>
                      <p className="font-medium text-charcoal">{flight.departureTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Duración</p>
                      <p className="font-medium text-charcoal">{flight.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Llegada</p>
                      <p className="font-medium text-charcoal">{flight.arrival}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-serif text-lg text-rose font-medium mb-2">
                    {flight.price}
                  </p>
                  <p className="text-sm text-gray-600">{flight.notes}</p>
                </div>
              </motion.div>
            ))}
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
          <h3 className="font-serif text-3xl text-charcoal mb-8 text-center">
            Vuelos de Regreso Sugeridos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {returnFlights.map((flight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif text-xl text-charcoal">{flight.airline}</h4>
                  <span className="text-2xl">🛫</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-charcoal">{flight.route}</p>
                    <p className="text-sm text-gray-600">{flight.departure}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Salida</p>
                      <p className="font-medium text-charcoal">{flight.departureTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Duración</p>
                      <p className="font-medium text-charcoal">{flight.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Llegada</p>
                      <p className="font-medium text-charcoal">{flight.arrival}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-sage bg-opacity-10 rounded-lg p-8 text-center"
        >
          <h4 className="font-serif text-2xl text-charcoal mb-4">
            Consejos de Viaje
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h5 className="font-medium text-charcoal mb-2">📋 Documentos necesarios:</h5>
              <ul className="text-charcoal space-y-1">
                <li>• Pasaporte vigente (mínimo 6 meses)</li>
                <li>• Boleto de avión de ida y vuelta</li>
                <li>• Tarjeta de turista (se compra en el aeropuerto)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-charcoal mb-2">💡 Recomendaciones:</h5>
              <ul className="text-charcoal space-y-1">
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
