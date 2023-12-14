import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

const App = () => {
  return <div>
    <section id='Inicio'>
      <Navbar />
      <Hero />
    </section>
    {/* <section id='Servicios'>
      <Parallax type='services' />
    </section> */}
    <section id='Sobre mí'>
      <Services />
    </section>
    <section id='Portfolio' className='parallax'>
      <Parallax type='portfolio' />
    </section>
    <Portfolio />
    <section id='Contacto'>
      <Contact />
    </section>
  </div>
}

export default App
