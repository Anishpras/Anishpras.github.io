"use client";

import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { srConfig } from "@/utils/sr";
import { Icon } from "@/components/icons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  external: string;
}

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef<HTMLDivElement>(null);
  const revealArchiveLink = useRef<HTMLAnchorElement>(null);
  const revealProjects = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal").default;
    if (revealTitle.current) {
      ScrollReveal().reveal(revealTitle.current, srConfig());
    }
    if (revealArchiveLink.current) {
      ScrollReveal().reveal(revealArchiveLink.current, srConfig());
    }
    revealProjects.current.forEach((ref, i) => {
      if (ref) {
        ScrollReveal().reveal(ref, srConfig(i * 100));
      }
    });
  }, []);

  const projectsData: Project[] = [
    {
      title: "Pras Kit",
      description:
        "A comprehensive React component library with customizable UI components, built with TypeScript and featuring extensive documentation and testing.",
      tech: ["React", "TypeScript", "Storybook", "Jest", "npm"],
      github: "https://github.com/anishpras/pras-kit",
      external: "https://pras-kit.vercel.app",
    },
    {
      title: "Swingler",
      description:
        "A modern dating application with real-time matching, chat functionality, and location-based discovery. Built with React Native for cross-platform compatibility.",
      tech: ["React Native", "Firebase", "Redux", "Socket.io", "Expo"],
      github: "https://github.com/anishpras/swingler",
      external: "https://swingler-app.vercel.app",
    },
    {
      title: "Peep Peep",
      description:
        "Social media platform with real-time messaging, post sharing, and interactive features. Includes advanced privacy controls and content moderation.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Cloudinary"],
      github: "https://github.com/anishpras/peep-peep",
      external: "https://peep-peep.vercel.app",
    },
    {
      title: "ETM System",
      description:
        "Employee Task Management system with project tracking, time logging, and team collaboration features. Includes comprehensive reporting and analytics.",
      tech: ["React", "Express", "PostgreSQL", "Chart.js", "Material-UI"],
      github: "https://github.com/anishpras/etm-system",
      external: "https://etm-system.vercel.app",
    },
    {
      title: "PDF Corruptor",
      description:
        "Utility tool for intentionally corrupting PDF files for testing purposes. Features various corruption methods and batch processing capabilities.",
      tech: ["Python", "Flask", "PyPDF2", "React", "REST API"],
      github: "https://github.com/anishpras/pdf-corruptor",
      external: "https://pdf-corruptor.vercel.app",
    },
    {
      title: "Dopulence POS",
      description:
        "Point of Sale system for retail businesses with inventory management, sales tracking, and customer relationship management features.",
      tech: ["React", "Node.js", "SQLite", "Electron", "Chart.js"],
      github: "https://github.com/anishpras/dopulence-pos",
      external: "https://dopulence-pos.vercel.app",
    },
    {
      title: "Pathfinding Visualizer",
      description:
        "Interactive visualization tool for pathfinding algorithms including A*, Dijkstra, and BFS. Features customizable grid and real-time algorithm execution.",
      tech: ["React", "JavaScript", "Canvas API", "CSS Animations"],
      github: "https://github.com/anishpras/pathfinding-visualizer",
      external: "https://pathfinding-viz.vercel.app",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Educational tool for visualizing sorting algorithms with interactive controls, speed adjustment, and step-by-step execution.",
      tech: ["React", "JavaScript", "CSS Animations", "Web Audio API"],
      github: "https://github.com/anishpras/sorting-visualizer",
      external: "https://sorting-viz.vercel.app",
    },
    {
      title: "Smart Contract JS",
      description:
        "JavaScript library for interacting with Ethereum smart contracts. Provides simplified API for common blockchain operations and wallet integration.",
      tech: ["JavaScript", "Web3.js", "Solidity", "npm", "Jest"],
      github: "https://github.com/anishpras/smart-contract-js",
      external: "https://www.npmjs.com/package/smart-contract-js",
    },
  ];

  const GRID_LIMIT = 6;
  const projects = showMore ? projectsData : projectsData.slice(0, GRID_LIMIT);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6 md:px-12 lg:px-24"
    >
      <div ref={revealTitle} className="numbered-heading">
        <h2 className="section-heading">Other Noteworthy Projects</h2>
      </div>

      <a
        className="inline-link archive-link text-green-400 font-mono text-sm mb-12 block"
        href="https://github.com/anishpras"
        target="_blank"
        rel="noopener noreferrer"
        ref={revealArchiveLink}
      >
        view the archive
      </a>

      <ul className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 relative">
        <TransitionGroup component={null}>
          {projects.map((project, i) => (
            <CSSTransition
              key={i}
              classNames="fadeup"
              timeout={300}
              exit={false}
            >
              <li
                className="project-card relative cursor-default transition-all duration-300"
                ref={(el) => (revealProjects.current[i] = el)}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="project-inner flex flex-col justify-between h-full p-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:-translate-y-2 transition-all duration-300">
                  <header>
                    <div className="project-top flex justify-between items-center mb-9">
                      <div className="folder text-green-400">
                        <Icon name="Folder" className="w-10 h-10" />
                      </div>
                      <div className="project-links flex items-center gap-2">
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

                    <h3 className="project-title text-xl font-semibold text-slate-100 mb-3">
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <div className="project-description text-slate-400 text-sm leading-relaxed">
                      <p>{project.description}</p>
                    </div>
                  </header>

                  <footer className="mt-6">
                    <ul className="project-tech-list flex flex-wrap gap-3 list-none p-0">
                      {project.tech.map((tech, j) => (
                        <li
                          key={j}
                          className="text-slate-500 font-mono text-xs"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>

      <button
        className="more-button mx-auto mt-20 px-7 py-3 bg-transparent border border-green-400 rounded text-green-400 font-mono text-sm hover:bg-green-400/10 transition-all duration-300 block"
        onClick={() => setShowMore(!showMore)}
      >
        Show {showMore ? "Less" : "More"}
      </button>
    </section>
  );
};

export default Projects;
