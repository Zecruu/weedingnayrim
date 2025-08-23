import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AccessPage: React.FC = () => {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  
  const validCode = 'yestoforeveR'
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // Simulate a brief loading state for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    if (code.toLowerCase() === validCode.toLowerCase()) {
      localStorage.setItem('weddingAccessCode', code)
      navigate('/', { replace: true })
    } else {
      setError('Código inválido. Intenta nuevamente.')
      setCode('')
    }
    
    setIsLoading(false)
  }
  
  return (
    <div className="min-h-screen bg-vintage-white relative flex items-center justify-center px-4">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-vintage-grey via-transparent to-vintage-charcoal"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Vintage Access Card */}
        <div className="bg-vintage-grey shadow-2xl p-10 relative">
          {/* Decorative vintage corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-3 border-t-3 border-vintage-white/40"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-3 border-t-3 border-vintage-white/40"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-3 border-b-3 border-vintage-white/40"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-3 border-b-3 border-vintage-white/40"></div>
          
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl text-vintage-white mb-4 tracking-wide"
            >
              Steven & Nayrim
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-px bg-vintage-white"></div>
              <div className="w-2 h-2 bg-vintage-white mx-4 rotate-45"></div>
              <div className="w-16 h-px bg-vintage-white"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-vintage-white font-serif text-lg italic"
            >
              Invitación Especial
            </motion.p>
          </div>
          
          {/* Access Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="accessCode"
                className="block text-vintage-white font-serif text-lg mb-3"
              >
                Código de Acceso
              </label>
              <input
                type="text"
                id="accessCode"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-3 border-2 border-vintage-white/30 rounded-none bg-vintage-white text-vintage-charcoal font-serif text-lg focus:border-vintage-white focus:outline-none transition-colors duration-300"
                placeholder="Ingresa tu código"
                required
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-center font-serif"
              >
                {error}
              </motion.div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-vintage-charcoal text-vintage-white px-6 py-4 font-serif text-lg tracking-wide transition-all duration-300 hover:bg-vintage-dark-grey disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              {isLoading ? 'Verificando...' : 'Ingresar'}
            </button>
          </motion.form>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-8 pt-6 border-t border-vintage-white/30"
          >
            <p className="text-vintage-white font-serif text-sm italic">
              Solo invitados especiales
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AccessPage
