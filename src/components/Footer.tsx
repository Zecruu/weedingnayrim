import React from 'react'

const Footer: React.FC = () => {

  return (
    <footer className="bg-vintage-charcoal text-vintage-white">
      {/* Copyright Footer */}
      <div className="bg-vintage-charcoal/90 py-4">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-vintage-white/70">
            <p>2025 Steven & Nayrim. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Hecho con 💕 para nuestra celebración especial</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
