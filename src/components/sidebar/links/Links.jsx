import { motion } from 'framer-motion'

const items = [
  'Inicio',
  'Sobre mí',
  'Portfolio',
  'Contacto'
]

const variants = {
  open: {
    transition: {
      staggerChildren: 0.15
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}

function Links ({ setOpen }) {
  return (
    <motion.div className="links" variants={variants}>
      {items.map(item => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(prev => !prev)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}
export default Links
