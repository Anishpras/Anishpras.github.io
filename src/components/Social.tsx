'use client'

import { config } from '@/config'

interface SocialProps {
  isHome: boolean
}

export const Social = ({ isHome }: SocialProps) => {
  return (
    <div className="fixed bottom-0 left-10 right-auto z-10 text-light-slate hidden lg:block">
      <ul className="flex flex-col items-center m-0 p-0 list-none after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate">
        {config.socialMedia &&
          config.socialMedia.map(({ url, name }, i) => (
            <li key={i} className="last:mb-5">
              <a
                href={url}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                className="p-2 transition-all duration-custom ease-custom hover:text-green hover:-translate-y-1"
              >
                <div className="w-5 h-5">
                  {/* Icon placeholder - will be replaced with actual icons */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather"
                  >
                    {name === 'GitHub' && (
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    )}
                    {name === 'LinkedIn' && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </>
                    )}
                    {name === 'Twitter' && (
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    )}
                    {name === 'Instagram' && (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </>
                    )}
                    {name === 'StackOverflow' && (
                      <>
                        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.614-4.806l8.237 6.855 1.359-1.62-8.237-6.853-1.359 1.618zm5.077-4.82l-1.822 1.357 6.405 8.603 1.822-1.358-6.405-8.602zM6.51 17.605h10.4v-2.134H6.51v2.134z" />
                      </>
                    )}
                  </svg>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
} 