import React from 'react'
import Navbar from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Projects from "./sections/Projects.jsx"
import Clients from "./sections/Clients.jsx"
import Experience from "./sections/Experience.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Experience/>
      <Contact/>
      <Footer/>
      <Toaster position="top-right" toastOptions={{
        className: '',
        style: {
          background: '#1A1A1A', // dark mode bg
          color: '#fff',
          borderRadius: '8px',
          padding: '12px 16px',
        },
      }} />
    </main>
  )
}

export default App
