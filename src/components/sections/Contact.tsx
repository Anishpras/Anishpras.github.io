"use client";

import { useEffect, useRef } from "react";
import { srConfig } from "@/utils/sr";

const Contact = () => {
  const revealContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal").default;
    if (revealContainer.current) {
      ScrollReveal().reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto text-center py-24 px-6 md:px-12 lg:px-24"
      ref={revealContainer}
    >
      <div className="overline text-green-400 font-mono text-base mb-5">
        04. What's Next?
      </div>

      <h2 className="title text-4xl md:text-6xl font-semibold text-slate-100 mb-5">
        Get In Touch
      </h2>

      <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <a
        className="email-link inline-block px-7 py-5 bg-transparent border border-green-400 rounded text-green-400 font-mono text-sm hover:bg-green-400/10 hover:-translate-y-1 transition-all duration-300"
        href="mailto:anishpras@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
