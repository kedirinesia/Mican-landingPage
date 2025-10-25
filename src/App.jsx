import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'
import ChatAI from './components/ChatAI'

function App() {
  return (
    <div className="min-h-screen bg-mican-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <ChatAI />
      <Download />
      <Footer />
    </div>
  )
}

export default App
