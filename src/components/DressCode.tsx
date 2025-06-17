import React from 'react'
import { motion } from 'framer-motion'

const DressCode: React.FC = () => {
  const colorPalette = [
    { name: "Rosa Claro", color: "#F4C2C2", description: "Rosa suave y delicado" },
    { name: "Rosa", color: "#E91E63", description: "Rosa vibrante" },
    { name: "Coral", color: "#FF6B6B", description: "Coral cálido" },
    { name: "Naranja", color: "#FF9800", description: "Naranja brillante" },
    { name: "Azul Verdoso", color: "#4DB6AC", description: "Teal suave" },
    { name: "Lavanda", color: "#CE93D8", description: "Púrpura claro" },
    { name: "Púrpura", color: "#9C27B0", description: "Púrpura elegante" },
    { name: "Beige", color: "#D7CCC8", description: "Beige natural" }
  ]

  const avoidColors = [
    { name: "Negro", color: "#000000" },
    { name: "Blanco puro", color: "#FFFFFF" },
    { name: "Rojo intenso", color: "#DC2626" },
    { name: "Verde neón", color: "#00FF00" }
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
            Dress to Impress
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px bg-rose"></div>
            <div className="w-3 h-3 bg-rose rounded-full mx-4"></div>
            <div className="w-24 h-px bg-rose"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-charcoal text-white px-8 py-4 rounded-lg inline-block">
              <p className="text-xl font-bold tracking-wider">BLACK TIE EVENT</p>
            </div>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              FORMAL ELEGANTE, COLORES SUGERIDOS
            </p>
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-serif text-3xl text-charcoal text-center mb-8">
            Paleta de Colores Sugerida
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {colorPalette.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg"
                  style={{ backgroundColor: color.color }}
                ></div>
                <h4 className="font-medium text-charcoal mb-1">{color.name}</h4>
                <p className="text-sm text-gray-600">{color.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What to Avoid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-rose bg-opacity-10 rounded-lg p-8 text-center mb-12"
        >
          <h4 className="font-serif text-2xl text-charcoal mb-4">
            Colores a Evitar
          </h4>
          <p className="text-charcoal mb-8">
            Por favor eviten estos colores para mantener la armonía de nuestra paleta:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {avoidColors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  {/* Color Circle */}
                  <div
                    className="w-20 h-20 rounded-full shadow-lg border-2 border-gray-300"
                    style={{ backgroundColor: color.color }}
                  ></div>

                  {/* Skip Sign Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 bg-opacity-90 flex items-center justify-center border-2 border-white">
                      <div className="w-7 h-0.5 bg-white transform rotate-45"></div>
                      <div className="w-7 h-0.5 bg-white transform -rotate-45 absolute"></div>
                    </div>
                  </div>
                </div>

                <h4 className="font-medium text-charcoal text-sm">{color.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-sage bg-opacity-10 rounded-lg p-6">
            <h4 className="font-serif text-xl text-charcoal mb-4 flex items-center">
              <span className="mr-2">🌴</span>
              Clima Tropical
            </h4>
            <p className="text-charcoal">
              Recuerden que estaremos en un clima cálido y húmedo. Elijan telas 
              ligeras y transpirables que los mantengan frescos durante la celebración.
            </p>
          </div>
          
          <div className="bg-sage bg-opacity-10 rounded-lg p-6">
            <h4 className="font-serif text-xl text-charcoal mb-4 flex items-center">
              <span className="mr-2">👠</span>
              Calzado Cómodo
            </h4>
            <p className="text-charcoal">
              Parte de la celebración será al aire libre. Consideren zapatos 
              cómodos que no se hundan en la arena o césped.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DressCode
