"use client";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-auto min-h-16 p-4 text-center">
      <div className="text-slate font-mono text-xs leading-none">
        <a
          href="https://github.com/anishpras/Anishpras.github.io"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition-all duration-custom ease-custom hover:text-green"
        >
          <div>Built by Anish Prashun</div>
        </a>
      </div>
    </footer>
  );
};
