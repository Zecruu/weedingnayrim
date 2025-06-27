import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/NayrimSteven.png"
          alt="Nayrim & Steven"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'sepia(0.3) contrast(1.1) brightness(0.95) saturate(0.8)',
          }}
        />
      </div>

      {/* Vintage Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-vintage-black/10 via-transparent to-vintage-grey/20" />

      {/* Vintage Border Frame */}
      <div className="absolute inset-4 border-2 border-vintage-gold/30 pointer-events-none" />
      <div className="absolute inset-8 border border-vintage-white/20 pointer-events-none" />
      

        
      {/* Vintage Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-vintage-white text-sm font-light tracking-[0.2em] uppercase"
          style={{ fontFamily: 'serif' }}
        >
          <div className="flex flex-col items-center space-y-4 bg-vintage-black/40 px-4 py-3 rounded border border-vintage-gold/30">
            <span className="text-center text-xs">Desliza hacia abajo</span>
            <div className="w-px h-8 bg-vintage-gold/60"></div>
            <div className="w-1 h-1 bg-vintage-gold/60 rotate-45"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
