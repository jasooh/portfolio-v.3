// Anim.tsx
// TODO: Implement this when proper client and server components are made

import React from 'react'

// Spline
import Spline from '@splinetool/react-spline/next'

const Anim: React.FC = () => {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/nKZVnyaRWmCoUKIY/scene.splinecode"
      />
    </main>
  )
}

export default Anim;
