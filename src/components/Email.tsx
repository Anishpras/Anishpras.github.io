'use client'

import { config } from '@/config'

interface EmailProps {
  isHome: boolean
}

export const Email = ({ isHome }: EmailProps) => {
  return (
    <div className="fixed bottom-0 right-10 left-auto z-10 text-light-slate hidden lg:block">
      <div className="flex flex-col items-center relative after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate">
        <a
          href={`mailto:${config.email}`}
          className="
            mb-5 p-2 font-mono text-sm tracking-widest transition-all duration-custom ease-custom 
            hover:text-green hover:-translate-y-1 
            [writing-mode:vertical-rl]
          "
        >
          {config.email}
        </a>
      </div>
    </div>
  )
} 