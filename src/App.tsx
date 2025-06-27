import React from 'react'
import Hero from './components/Hero'
import RsvpCallToAction from './components/RsvpCallToAction'
import Welcome from './components/Welcome'
import Hotels from './components/Hotels'
import Flights from './components/Flights'
import DressCode from './components/DressCode'
import Itinerary from './components/Itinerary'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-vintage-white relative">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-vintage-grey via-transparent to-vintage-dark-grey pointer-events-none"></div>

      <div className="relative z-10">
        <Hero />
        <RsvpCallToAction />
        <Welcome />
        <Hotels />
        <Flights />
        <DressCode />
        <Itinerary />
        <Recommendations />
        <Footer />
      </div>
    </div>
  )
}

export default App
