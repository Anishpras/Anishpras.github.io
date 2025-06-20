'use client'

import { useState, useEffect } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches)

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches)
    }

    if (mediaQueryList.addListener) {
      mediaQueryList.addListener(listener)
    } else {
      mediaQueryList.addEventListener('change', listener)
    }

    return () => {
      if (mediaQueryList.removeListener) {
        mediaQueryList.removeListener(listener)
      } else {
        mediaQueryList.removeEventListener('change', listener)
      }
    }
  }, [])

  return prefersReducedMotion
} 