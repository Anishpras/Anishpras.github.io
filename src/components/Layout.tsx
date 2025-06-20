'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Nav } from './Nav'
import { Social } from './Social'
import { Email } from './Email'
import { Footer } from './Footer'
import { Loader } from './Loader'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [isLoading])

  return (
    <>
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>

      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />

          <div id="content" className="flex-1">
            {children}
            <Footer />
          </div>
        </div>
      )}
    </>
  )
} 