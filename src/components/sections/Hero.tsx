'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { config } from '@/config'

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const one = <h1 className="font-mono text-base md:text-lg text-green mb-0 ml-0.5">Hi, my name is</h1>
  const two = <h2 className="big-heading">Anish Prasad.</h2>
  const three = <h3 className="big-heading text-slate">I build things for the web.</h3>
  const four = (
    <p className="mt-5 text-base md:text-lg max-w-[540px]">
      I'm a senior software engineer specializing in building exceptional digital experiences. 
      Currently, I'm focused on building accessible, human-centered products at{' '}
      <a
        href="https://xamtac.com"
        target="_blank"
        rel="noreferrer"
        className="text-green"
      >
        Xamtac
      </a>
      .
    </p>
  )
  const five = (
    <a
      className="btn btn-lg mt-12"
      href={`mailto:${config.email}`}
      target="_blank"
      rel="noreferrer"
    >
      Get In Touch
    </a>
  )

  const items = [one, two, three, four, five]

  return (
    <section
      id="hero"
      className="flex justify-center flex-col items-start min-h-screen px-0 md:px-0"
    >
      {isMounted &&
        items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          >
            {item}
          </motion.div>
        ))}
    </section>
  )
} 