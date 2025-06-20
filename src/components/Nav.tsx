'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { config } from '@/config'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Menu } from './Menu'
import { IconLogo } from './icons/Logo'

const { navLinks } = config

interface NavProps {
  isHome: boolean
}

export const Nav = ({ isHome }: NavProps) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection()
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prefersReducedMotion])

  const Logo = (
    <div className="flex justify-center items-center" tabIndex={-1}>
      {isHome ? (
        <a href="/" aria-label="home">
          <div className="w-10 h-10 text-green">
            <IconLogo />
          </div>
        </a>
      ) : (
        <Link href="/" aria-label="home">
          <div className="w-10 h-10 text-green">
            <IconLogo />
          </div>
        </Link>
      )}
    </div>
  )

  return (
    <header
      className={`
        flex justify-between items-center fixed top-0 z-50 px-12 w-full h-nav-height
        backdrop-blur-md transition-all duration-custom ease-custom
        ${
          scrollDirection === 'up' && !scrolledToTop
            ? 'h-nav-scroll-height translate-y-0 bg-navy/85 shadow-custom'
            : scrollDirection === 'down' && !scrolledToTop
            ? 'h-nav-scroll-height -translate-y-full shadow-custom'
            : 'bg-navy/85'
        }
        md:px-16 lg:px-12
      `}
    >
      <nav className="flex justify-between items-center w-full font-mono text-sm relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {Logo}
        </motion.div>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <ol className="hidden md:flex items-center list-none p-0 m-0">
            {isMounted &&
              navLinks &&
              navLinks.map(({ url, name }, i) => (
                <motion.li
                  key={name}
                  className="mr-12 last:mr-0"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={url}
                    className="px-2 py-1 text-slate hover:text-green transition-colors duration-custom"
                  >
                    <span className="text-green text-xs mr-1">0{i + 1}.</span>
                    {name}
                  </Link>
                </motion.li>
              ))}
          </ol>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden md:block ml-4"
          >
            <a
              className="btn btn-small"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </motion.div>

          {/* Mobile Menu */}
          <Menu />
        </div>
      </nav>
    </header>
  )
} 