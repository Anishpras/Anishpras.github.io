"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { srConfig } from "@/utils/sr";

const About = () => {
  const revealContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal").default;
    if (revealContainer.current) {
      ScrollReveal().reveal(revealContainer.current, srConfig());
    }
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Rust",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
  ];

  return (
    <section
      id="about"
      className="max-w-4xl mx-auto py-24 px-6 md:px-12 lg:px-24"
      ref={revealContainer}
    >
      <div className="numbered-heading">
        <h2 className="section-heading">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
        <div>
          <div className="text-slate-400 text-lg leading-relaxed space-y-4">
            <p>
              Hello! My name is Anish and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at{" "}
              <a
                href="https://www.xamtac.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                a marketing consultancy
              </a>
              ,{" "}
              <a
                href="https://attackcapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                a YC-backed startup
              </a>
              ,{" "}
              <a
                href="https://www.thevolte.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                a fashion-tech platform
              </a>
              , and{" "}
              <a
                href="https://raahee.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                a healthcare startup
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <a
                href="https://www.xamtac.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                XAMTAC
              </a>{" "}
              for a variety of clients, while also leading and mentoring a team
              of talented developers.
            </p>

            <p>
              I recently had the opportunity to work with{" "}
              <a
                href="https://attackcapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Attack Capital
              </a>
              , a YCombinator W22 company, where I led the development of
              AI-powered platforms and contributed to building cutting-edge
              telecommunication solutions.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list grid grid-cols-2 gap-2 mt-5 text-sm font-mono text-slate-500">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green-400 before:text-sm before:leading-3"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group">
          <div className="relative w-full max-w-xs mx-auto lg:mx-0">
            <div className="wrapper relative">
              <Image
                src="/me.jpg"
                alt="Anish Prasad"
                width={300}
                height={300}
                className="img relative z-10 rounded mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 hover:filter-none hover:mix-blend-normal"
                priority
              />
              <div className="absolute inset-0 border-2 border-green-400 rounded translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
