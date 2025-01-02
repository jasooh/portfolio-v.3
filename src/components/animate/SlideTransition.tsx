// SlideTransition.tsx

import React, { HTMLAttributes } from 'react'

// Motion
import { motion } from 'motion/react'

type SlideTransitionProps = {
  children: React.ReactNode;
  className?: string;
}

// TODO: Make the animation stagger
const SlideTransition: React.FC<SlideTransitionProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', x: '-5vw' }}
      animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default SlideTransition