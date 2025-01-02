// ThemeProvider.tsx
'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Theme } from './Theme'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  } else {
    return <Theme
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </Theme>
  }


}
