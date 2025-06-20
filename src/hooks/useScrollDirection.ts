'use client'

import { useState, useEffect } from 'react'

const SCROLL_UP = 'up'
const SCROLL_DOWN = 'down'

export const useScrollDirection = (initialDirection = SCROLL_DOWN) => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollDirection
} 