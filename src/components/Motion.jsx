import { motion } from 'framer-motion'

const transitions = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 0.5
  }
}

function Motion ({ children }) {
  return (
    <motion.div
      transition={transitions.transition}
      initial={transitions.initial}
      animate={transitions.animate}
    >
      {children}
    </motion.div>
  )
}
export default Motion
