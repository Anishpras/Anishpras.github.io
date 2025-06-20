'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '@/config'

const { navLinks } = config

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const menuVars = {
    open: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  const itemVars = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  return (
    <div className="md:hidden">
      <button
        className="flex items-center justify-center relative z-10 mr-[-15px] p-4 border-0 bg-transparent text-inherit transition-all duration-150"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className="inline-block relative w-hamburger-width h-6">
          <div
            className={`
              absolute top-1/2 right-0 w-hamburger-width h-0.5 rounded bg-green 
              transition-all duration-[0.22s] ease-[cubic-bezier(0.55,0.055,0.675,0.19)]
              ${menuOpen ? 'rotate-45 delay-[0.12s]' : 'delay-0'}
            `}
            style={{
              transform: menuOpen
                ? 'rotate(225deg) translateY(-50%)'
                : 'rotate(0deg) translateY(-50%)',
            }}
          />
          <div
            className={`
              absolute top-1/2 right-0 w-hamburger-width h-0.5 rounded bg-green 
              transition-all duration-[0.22s] ease-[cubic-bezier(0.55,0.055,0.675,0.19)]
              ${menuOpen ? 'opacity-0 delay-[0.12s]' : 'opacity-100 delay-0'}
            `}
            style={{
              transform: 'translateY(-50%)',
              top: menuOpen ? '50%' : 'calc(50% - 8px)',
            }}
          />
          <div
            className={`
              absolute top-1/2 right-0 w-hamburger-width h-0.5 rounded bg-green 
              transition-all duration-[0.22s] ease-[cubic-bezier(0.55,0.055,0.675,0.19)]
              ${menuOpen ? '-rotate-45 delay-[0.12s]' : 'delay-0'}
            `}
            style={{
              transform: menuOpen
                ? 'rotate(-225deg) translateY(-50%)'
                : 'rotate(0deg) translateY(-50%)',
              top: menuOpen ? '50%' : 'calc(50% + 8px)',
            }}
          />
        </div>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            variants={menuVars}
            initial="closed"
            animate="open"
            exit="closed"
            className="
              fixed top-0 bottom-0 right-0 w-min h-screen outline-none z-40 
              transform origin-top-right bg-light-navy py-12 px-12 min-w-[75vw] 
              flex flex-col justify-center items-center
            "
          >
            <nav className="flex flex-col items-center w-full">
              <ol className="w-full">
                {navLinks.map(({ url, name }, i) => (
                  <motion.li
                    key={name}
                    variants={itemVars}
                    className="relative my-1 text-center"
                  >
                    <Link
                      href={url}
                      className="
                        inline-block w-full py-3 px-5 text-center text-lg font-light 
                        text-lightest-slate hover:text-green transition-colors
                      "
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-green font-mono text-sm mr-2">
                        0{i + 1}.
                      </span>
                      {name}
                    </Link>
                  </motion.li>
                ))}
              </ol>

              <motion.a
                variants={itemVars}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-10"
              >
                Resume
              </motion.a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-navy bg-opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  )
} 