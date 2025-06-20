'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IconLogo } from './icons/Logo'

interface LoaderProps {
  finishLoading: () => void
}

export const Loader = ({ finishLoading }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = document.getElementById('loader')
    if (loader) {
      loader.classList.remove('opacity-100')
      loader.classList.add('opacity-0')
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)

    const timer = setTimeout(() => {
      animate()
      setTimeout(() => finishLoading(), 300)
    }, 2000)

    return () => {
      clearTimeout(timeout)
      clearTimeout(timer)
    }
  }, [finishLoading])

  return (
    <div
      id="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy transition-opacity duration-300 opacity-100"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isMounted ? 1 : 0, scale: isMounted ? 1 : 0.8 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-24 h-24 text-green"
      >
        <IconLogo />
      </motion.div>
    </div>
  )
} 