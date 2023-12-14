import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20
    }
  }
}

function Hero () {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>MELANI MARES</motion.h2>
          <motion.h1 variants={textVariants}>Desarrollo y diseño web a medida</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href='#Portfolio' variants={textVariants}>Ver portfolio</motion.a>
            <motion.a href='#Contacto' variants={textVariants}>Contacto</motion.a>
          </motion.div>
          <motion.img
            src="scroll.png"
            alt="scroll image"
            variants={textVariants}
            animate='scrollButton'
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="spline.png" alt="spline image" />
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Web Design And Developement
      </motion.div>
    </div>
  )
}
export default Hero
