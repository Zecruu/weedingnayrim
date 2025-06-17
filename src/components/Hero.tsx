import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/NayrimAndSteven.png)',
          filter: 'brightness(0.8)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      

        
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-sm font-light tracking-wider"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-center">Desliza hacia abajo</span>
            <div className="w-px h-6 bg-white opacity-60"></div>
            <div className="w-2 h-2 bg-white opacity-60 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
