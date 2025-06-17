import React from 'react'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Hotels from './components/Hotels'
import Flights from './components/Flights'
import DressCode from './components/DressCode'
import Itinerary from './components/Itinerary'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-blush">
      <Hero />
      <Welcome />
      <Hotels />
      <Flights />
      <DressCode />
      <Itinerary />
      <Recommendations />
      <Footer />
    </div>
  )
}

export default App
