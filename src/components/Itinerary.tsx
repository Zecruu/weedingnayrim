import React from 'react'
import { motion } from 'framer-motion'

const Itinerary: React.FC = () => {
  const events = [
    {
      date: "VIERNES 13 DE MARZO 2026",
      day: "Día 1",
      events: [
        {
          time: "1PM",
          title: "WELCOME BRUNCH!",
          location: "LOCATION: --------",
          description: "",
          icon: "🥂"
        }
      ]
    },
    {
      date: "SÁBADO 14 DE MARZO 2026",
      day: "Día 2",
      events: [
        {
          time: "2:30PM",
          title: "RECOGIDO LOBBY HOTEL",
          location: "",
          description: "",
          icon: "💍"
        },
        {
          time: "",
          title: "WEDDING DAY!",
          location: "LOCATION: LA BELLA TOSCANA",
          description: "",
          icon: "💒"
        }
      ]
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
            Itinerario
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px bg-rose"></div>
            <div className="w-3 h-3 bg-rose rounded-full mx-4"></div>
            <div className="w-24 h-px bg-rose"></div>
          </div>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            ¡Prepárense para momentos inolvidables!
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {events.map((dayEvent, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Day Header */}
              <div className="text-center mb-12">
                <div className="inline-block bg-rose text-white px-6 py-3 rounded-full mb-4">
                  <span className="font-medium">{dayEvent.day}</span>
                </div>
                <h3 className="font-serif text-3xl text-charcoal">
                  {dayEvent.date}
                </h3>
              </div>

              {/* Events */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-rose opacity-30 hidden md:block"></div>
                
                <div className="space-y-8">
                  {dayEvent.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start"
                    >
                      {/* Timeline Dot */}
                      <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-rose shadow-lg flex-shrink-0 mr-8">
                        <span className="text-2xl">{event.icon}</span>
                      </div>
                      
                      {/* Event Card */}
                      <div className="flex-1 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <span className="md:hidden text-2xl mr-3">{event.icon}</span>
                          <div>
                            <h4 className="font-serif text-xl text-charcoal font-medium">
                              {event.title}
                            </h4>
                            {event.time && (
                              <p className="text-charcoal font-medium">HORA: {event.time}</p>
                            )}
                          </div>
                        </div>

                        {event.location && (
                          <div className="text-charcoal font-medium">
                            {event.location}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-sage bg-opacity-10 rounded-lg p-8"
        >
          <h4 className="font-serif text-2xl text-charcoal mb-6 text-center">
            Notas Importantes
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-charcoal mb-3 flex items-center">
                <span className="mr-2">🚗</span>
                Transporte
              </h5>
              <p className="text-charcoal text-base">
                Proporcionaremos transporte desde los hoteles principales
                a todos los eventos. Los horarios de recogida se compartirán
                por WhatsApp.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-charcoal mb-3 flex items-center">
                <span className="mr-2">📱</span>
                Comunicación
              </h5>
              <p className="text-charcoal text-base">
                Manténganse atentos a nuestro grupo de WhatsApp para
                actualizaciones de último minuto y coordinación de actividades.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-charcoal mb-3 flex items-center">
                <span className="mr-2">🌧️</span>
                Plan B
              </h5>
              <p className="text-charcoal text-base">
                En caso de lluvia, tenemos espacios cubiertos alternativos
                para todos los eventos al aire libre.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-charcoal mb-3 flex items-center">
                <span className="mr-2">🎁</span>
                Regalos
              </h5>
              <p className="text-charcoal text-base">
                Su presencia es nuestro regalo más preciado. Si desean
                obsequiarnos algo, habrá una mesa designada en la recepción.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Itinerary
