"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { srConfig } from "@/utils/sr";
import { Icon } from "@/components/icons";

interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  github: string;
  external: string;
  image: string;
  cta?: string;
}

const Featured = () => {
  const revealTitle = useRef<HTMLDivElement>(null);
  const revealProjects = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal").default;
    if (revealTitle.current) {
      ScrollReveal().reveal(revealTitle.current, srConfig());
    }
    revealProjects.current.forEach((ref, i) => {
      if (ref) {
        ScrollReveal().reveal(ref, srConfig(i * 100));
      }
    });
  }, []);

  const featuredProjects: FeaturedProject[] = [
    {
      title: "Xamtac Marketing ERP",
      description:
        "A comprehensive AI-powered marketing ERP platform designed for digital marketing agencies. Features advanced analytics, client management, campaign automation, and real-time performance tracking. Built with modern React architecture and microservices backend.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
      github: "",
      external: "https://app.xamtac.com",
      image: "/featured/xamtac-erp.png",
      cta: "Visit Platform",
    },
    {
      title: "RBAC System",
      description:
        "Production-ready Role-Based Access Control library for JavaScript and TypeScript applications. Provides flexible permission management, hierarchical roles, and seamless integration with popular frameworks. Used by developers worldwide.",
      tech: ["TypeScript", "Node.js", "Jest", "npm"],
      github: "https://github.com/anishpras/rbac",
      external: "https://www.npmjs.com/package/@anishpras/rbac",
      image: "/featured/rbac.png",
    },
    {
      title: "A-Lab Platform",
      description:
        "Advanced laboratory management system with inventory tracking, experiment scheduling, and data analysis capabilities. Features real-time collaboration tools and comprehensive reporting dashboard for research teams.",
      tech: ["React", "Express", "MongoDB", "Socket.io", "Chart.js"],
      github: "https://github.com/anishpras/alab",
      external: "https://alab-platform.vercel.app",
      image: "/featured/alab.png",
    },
    {
      title: "Cryptohood",
      description:
        "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis. Built with modern React hooks and state management for optimal performance and user experience.",
      tech: [
        "React",
        "Redux",
        "Chart.js",
        "CoinGecko API",
        "Styled Components",
      ],
      github: "https://github.com/anishpras/cryptohood",
      external: "https://cryptohood.vercel.app",
      image: "/featured/cryptohood.png",
    },
    {
      title: "Code Editor Pro",
      description:
        "Feature-rich online code editor with syntax highlighting, real-time collaboration, and multi-language support. Includes integrated terminal, file management, and live preview capabilities for web development.",
      tech: ["React", "Monaco Editor", "WebSocket", "Express", "Docker"],
      github: "https://github.com/anishpras/code-editor",
      external: "https://code-editor-pro.vercel.app",
      image: "/featured/code-editor.png",
    },
    {
      title: "COVID-19 Tracker",
      description:
        "Comprehensive COVID-19 statistics dashboard with interactive maps, charts, and real-time data visualization. Features country-wise comparison, vaccination tracking, and historical data analysis.",
      tech: ["React", "D3.js", "REST API", "Material-UI", "Leaflet"],
      github: "https://github.com/anishpras/covid-tracker",
      external: "https://covid-tracker-anish.vercel.app",
      image: "/featured/covid-tracker.png",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6 md:px-12 lg:px-24"
    >
      <div ref={revealTitle} className="numbered-heading">
        <h2 className="section-heading">Some Things I've Built</h2>
      </div>

      <ul className="list-none p-0">
        {featuredProjects.map((project, i) => (
          <li
            key={i}
            className="relative grid grid-cols-12 gap-2 items-center mb-24 last:mb-0"
            ref={(el) => (revealProjects.current[i] = el)}
          >
            <div
              className={`project-content relative col-span-12 lg:col-span-7 ${
                i % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6"
              }`}
            >
              <div>
                <p className="text-green-400 font-mono text-sm mb-2">
                  Featured Project
                </p>

                <h3 className="text-2xl lg:text-3xl font-semibold text-slate-100 mb-5">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>

                <div
                  className={`project-description relative z-10 p-6 rounded bg-slate-800 text-slate-300 shadow-lg ${
                    i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <p>{project.description}</p>
                </div>

                <ul
                  className={`project-tech-list flex flex-wrap gap-3 mt-6 mb-3 list-none p-0 ${
                    i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {project.tech.map((tech, j) => (
                    <li key={j} className="text-slate-400 font-mono text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`project-links flex items-center gap-3 ${
                    i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-green-400 transition-colors p-2"
                      aria-label="GitHub Link"
                    >
                      <Icon name="GitHub" className="w-5 h-5" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-green-400 transition-colors p-2"
                      aria-label="External Link"
                    >
                      <Icon name="External" className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`project-image relative col-span-12 lg:col-span-6 ${
                i % 2 === 0 ? "lg:col-start-7" : "lg:col-start-1"
              }`}
            >
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative w-full bg-green-400 rounded overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={438}
                    className="w-full h-auto mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:mix-blend-normal group-hover:filter-none"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 transition-all duration-300 group-hover:bg-transparent" />
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featured;
