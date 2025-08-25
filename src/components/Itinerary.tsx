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
          location: "LOCATION: To be announced",
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
          time: "3:45PM",
          title: "WEDDING DAY!",
          location: "LOCATION: LA BELLA TOSCANA",
          description: "",
          icon: "💒"
        }
      ]
    }
  ]

  return (
    <section id="itinerary" className="section-padding bg-vintage-white relative">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-vintage-grey via-transparent to-vintage-dark-grey"></div>

      <div className="container-max relative z-10">
        {/* Vintage Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Decorative vintage border */}
          <div className="p-8 mx-auto max-w-2xl bg-vintage-grey shadow-lg">
            <div className="border border-vintage-white/20 p-6">
              <h2 className="font-script text-5xl lg:text-6xl text-vintage-white mb-6 tracking-wide">
                Itinerario
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-16 h-px bg-vintage-white"></div>
                <div className="w-2 h-2 bg-vintage-white mx-4 rotate-45"></div>
                <div className="w-16 h-px bg-vintage-white"></div>
              </div>
              <p className="text-lg text-vintage-white max-w-xl mx-auto font-serif italic">
                ¡Prepárense para momentos inolvidables!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Image Below Itinerary Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <img 
              src="/images/N&S-57.jpg" 
              alt="Steven & Nayrim" 
              className="w-full h-auto shadow-2xl rounded-lg"
            />
          </div>
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
              {/* Vintage Day Header */}
              <div className="text-center mb-16">
                <div className="inline-block bg-vintage-charcoal text-vintage-white px-8 py-4 shadow-lg mb-6">
                  <span className="font-serif text-lg tracking-widest uppercase">{dayEvent.day}</span>
                </div>
                <h3 className="font-serif text-4xl text-vintage-black tracking-wide">
                  {dayEvent.date}
                </h3>
              </div>

              {/* Vintage Events */}
              <div className="relative">
                {/* Vintage Timeline Line */}
                <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-vintage-gold/40 hidden md:block"></div>

                <div className="space-y-12">
                  {dayEvent.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start"
                    >
                      {/* Vintage Timeline Dot */}
                      <div className="hidden md:flex items-center justify-center w-20 h-20 bg-vintage-grey shadow-xl flex-shrink-0 mr-10">
                        <span className="text-3xl">{event.icon}</span>
                      </div>

                      {/* Vintage Event Card */}
                      <div className="flex-1 bg-vintage-grey shadow-xl p-8 relative">
                        {/* Decorative corners */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-vintage-white/50"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-vintage-white/50"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-vintage-white/50"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-vintage-white/50"></div>

                        <div className="flex items-center mb-6">
                          <span className="md:hidden text-3xl mr-4">{event.icon}</span>
                          <div>
                            <h4 className="font-serif text-2xl text-vintage-white font-bold tracking-wide">
                              {event.title}
                            </h4>
                            {event.time && (
                              <p className="text-vintage-white font-serif text-lg mt-2">HORA: {event.time}</p>
                            )}
                          </div>
                        </div>

                        {event.location && (
                          <div className="text-vintage-white font-serif text-lg border-t border-vintage-white/30 pt-4">
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

        {/* Vintage Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-vintage-grey shadow-2xl p-10 relative"
        >
          {/* Vintage decorative elements */}
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-vintage-white rotate-45"></div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-vintage-white rotate-45"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-vintage-white rotate-45"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-vintage-white rotate-45"></div>

          <h4 className="font-script text-4xl text-vintage-white mb-8 text-center tracking-wide">
            Notas Importantes
          </h4>
          <div className="flex justify-center mb-10">
            <div className="w-20 h-px bg-vintage-gold"></div>
            <div className="w-2 h-2 bg-vintage-gold mx-4 rotate-45"></div>
            <div className="w-20 h-px bg-vintage-gold"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-vintage-white/30 pl-6">
              <h5 className="font-serif text-xl text-vintage-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🚗</span>
                Transporte
              </h5>
              <p className="text-vintage-white text-base leading-relaxed">
                Proporcionaremos transporte desde los hoteles principales
                a todos los eventos. Los horarios de recogida se compartirán
                por WhatsApp.
              </p>
            </div>

            <div className="border-l-4 border-vintage-white/30 pl-6">
              <h5 className="font-serif text-xl text-vintage-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">📱</span>
                Comunicación
              </h5>
              <p className="text-vintage-white text-base leading-relaxed">
                Manténganse atentos a nuestro grupo de WhatsApp para
                actualizaciones de último minuto y coordinación de actividades.
              </p>
            </div>

            <div className="border-l-4 border-vintage-white/30 pl-6">
              <h5 className="font-serif text-xl text-vintage-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🌧️</span>
                Plan B
              </h5>
              <p className="text-vintage-white text-base leading-relaxed">
                En caso de lluvia, tenemos espacios cubiertos alternativos
                para todos los eventos al aire libre.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Itinerary
