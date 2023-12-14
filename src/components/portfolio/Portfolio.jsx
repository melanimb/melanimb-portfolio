import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'Biobella landing page',
    img: 'biobella.png',
    desc: 'Landing page de un centro de estética realizada con NextJS y TailwindCSS',
    href: 'https://biobella.vercel.app/'
  },
  {
    id: 2,
    title: 'FreePics galería de imágenes',
    img: 'free-pics-preview.gif',
    desc: 'Buscador de imágenes realizado con NextJS, TailwindCSS y Pexels API',
    href: 'https://free-pics.vercel.app/'
  },
  {
    id: 3,
    title: 'StoreTrack panel de administración',
    img: 'store-track.jpg',
    desc: 'Panel de administración realizado con Ruby on Rails y Bootstrap 5',
    href: 'https://github.com/melanimb/store-track'
  }
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="Imagen del proyecto" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a
                href={item.href}
                target='_blank' rel="noreferrer"
              >
                Ver proyecto
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Portfolio () {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Proyectos destacados</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}
export default Portfolio
