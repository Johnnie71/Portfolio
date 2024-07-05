"use client"

import { ThemeProvider } from "next-themes"
import React, { useState, useEffect } from 'react'

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[]
}

const Provider = ({children}: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider defaultTheme="dark" enableSystem={true} attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export default Provider;