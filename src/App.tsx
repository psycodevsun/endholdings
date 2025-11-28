import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CEO from './components/CEO'
import Services from './components/Services'
import Technology from './components/Technology'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CEO />
        <Services />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
