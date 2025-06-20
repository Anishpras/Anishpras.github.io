"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { srConfig } from "@/utils/sr";

interface Job {
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  html: string[];
}

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const revealContainer = useRef<HTMLElement>(null);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal").default;
    if (revealContainer.current) {
      ScrollReveal().reveal(revealContainer.current, srConfig());
    }
  }, []);

  const jobsData: Job[] = [
    {
      title: "Software Development Engineer & Team Lead",
      company: "XAMTAC CONSULTING LLC",
      location: "Remote",
      range: "September 2022 - Present",
      url: "https://www.xamtac.com",
      html: [
        "Led the development of AI-powered marketing ERP system serving <strong>1000+ daily active users</strong> with 99.9% uptime",
        "Spearheaded a team of <strong>8 developers</strong> across multiple projects, implementing agile methodologies and reducing delivery time by 40%",
        "Architected microservices infrastructure on AWS, handling <strong>10M+ API calls monthly</strong> with auto-scaling capabilities",
        "Developed comprehensive role-based access control system, securing sensitive business data for enterprise clients",
        "Implemented real-time analytics dashboard increasing client engagement by <strong>60%</strong> and improving decision-making processes",
        "Built automated CI/CD pipelines reducing deployment time from 2 hours to <strong>15 minutes</strong> and eliminating manual errors",
        "Mentored junior developers through code reviews, technical documentation, and knowledge sharing sessions",
      ],
    },
    {
      title: "Full Stack Developer Lead & Performance Coach",
      company: "Attack Capital - YCombinator (W22)",
      location: "San Francisco, CA (Remote)",
      range: "August 2024 - October 2024",
      url: "https://attackcapital.com",
      html: [
        "Led development of <strong>Swades AI</strong> platform, implementing sovereign AI solutions for government and enterprise clients",
        "Architected <strong>OpenMic AI Telecommunication Platform</strong> handling real-time voice processing with sub-100ms latency",
        "Optimized existing React applications, improving performance metrics by <strong>45%</strong> and reducing bundle size by 30%",
        "Implemented advanced caching strategies and lazy loading, reducing initial page load time from 3.2s to <strong>1.1s</strong>",
        "Conducted performance coaching sessions for development team, establishing best practices for scalable frontend architecture",
        "Built comprehensive testing suite with 90%+ code coverage using Jest and Cypress for critical user paths",
      ],
    },
    {
      title: "Frontend Developer",
      company: "THE VOLTE",
      location: "Melbourne, Australia (Remote)",
      range: "July 2022 - September 2022",
      url: "https://www.thevolte.com",
      html: [
        "Optimized React.js application performance, reducing initial load time by <strong>40%</strong> and improving Core Web Vitals scores",
        "Implemented responsive design patterns ensuring seamless user experience across <strong>15+ device types</strong>",
        "Collaborated with design team to create pixel-perfect implementations of fashion marketplace features",
        "Built reusable component library reducing development time by <strong>25%</strong> for new feature implementations",
        "Integrated third-party APIs for payment processing and inventory management systems",
      ],
    },
    {
      title: "Software Development Intern",
      company: "Raahee.in",
      location: "Gurugram, India",
      range: "May 2021 - August 2021",
      url: "https://raahee.in",
      html: [
        "Developed healthcare booking system handling <strong>500+ daily transactions</strong> with real-time availability updates",
        "Implemented automated appointment scheduling reducing booking conflicts by <strong>60%</strong> and improving user satisfaction",
        "Built responsive React.js components for patient dashboard and doctor management interface",
        "Integrated payment gateway (Razorpay) with comprehensive error handling and transaction monitoring",
        "Optimized database queries reducing average response time from 800ms to <strong>200ms</strong> for critical operations",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Cyphen Innovations",
      location: "Remote",
      range: "December 2020 - April 2021",
      url: "https://cyphen.com",
      html: [
        "Developed full-stack web applications using React.js and Node.js for client projects",
        "Implemented RESTful APIs with comprehensive documentation and error handling",
        "Built responsive user interfaces following modern design principles and accessibility standards",
        "Collaborated with senior developers on code reviews and best practices implementation",
        "Participated in agile development processes and sprint planning sessions",
      ],
    },
    {
      title: "Student Expert",
      company: "Postman",
      location: "Remote",
      range: "June 2021 - September 2021",
      url: "https://www.postman.com",
      html: [
        "Completed comprehensive API development and testing certification program",
        "Created educational content and tutorials for Postman API testing best practices",
        "Participated in community outreach programs promoting API-first development",
        "Contributed to open-source projects and documentation improvements",
      ],
    },
  ];

  const focusTab = useCallback(() => {
    if (tabs.current[tabFocus!]) {
      tabs.current[tabFocus!]!.focus();
      return;
    }
    if (tabFocus! >= tabs.current.length) {
      setTabFocus(0);
    }
    if (tabFocus! < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }, [tabFocus]);

  useEffect(() => {
    if (tabFocus !== null) {
      focusTab();
    }
  }, [focusTab, tabFocus]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp": {
        e.preventDefault();
        setTabFocus(tabFocus! - 1);
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        setTabFocus(tabFocus! + 1);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <section
      id="jobs"
      className="max-w-3xl mx-auto py-24 px-6 md:px-12 lg:px-24"
      ref={revealContainer}
    >
      <div className="numbered-heading">
        <h2 className="section-heading">Where I've Worked</h2>
      </div>

      <div className="inner flex flex-col md:flex-row min-h-[340px]">
        <div
          className="tab-list flex md:flex-col overflow-x-auto md:overflow-x-visible relative w-full md:w-auto mb-8 md:mb-0"
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={onKeyDown}
        >
          {jobsData.map((job, i) => (
            <button
              key={i}
              className={`tab-button relative flex items-center w-full md:w-auto h-12 px-5 md:px-6 bg-transparent border-0 text-left text-sm font-mono whitespace-nowrap transition-all duration-250 ${
                activeTabId === i
                  ? "text-green-400 bg-green-400/10"
                  : "text-slate-500 hover:text-green-400 hover:bg-green-400/10"
              }`}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              onClick={() => setActiveTabId(i)}
              onFocus={() => setTabFocus(i)}
              ref={(el) => (tabs.current[i] = el)}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div
            className={`highlight absolute bg-green-400 transition-transform duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${"md:top-0 md:left-0 md:w-0.5 md:h-12 top-auto left-0 w-full h-0.5 bottom-0"}`}
            style={{
              transform: `translateY(${activeTabId * 48}px)`,
            }}
          />
        </div>

        <div className="tab-panels relative w-full ml-0 md:ml-5">
          {jobsData.map((job, i) => (
            <CSSTransition
              key={i}
              in={activeTabId === i}
              timeout={250}
              classNames="fade"
              unmountOnExit
            >
              <div
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={activeTabId === i ? 0 : -1}
                aria-labelledby={`tab-${i}`}
                aria-hidden={activeTabId !== i}
                hidden={activeTabId !== i}
              >
                <h3 className="text-xl md:text-2xl font-medium text-slate-200 mb-1">
                  <span>{job.title}</span>
                  <span className="text-green-400">
                    &nbsp;@&nbsp;
                    <a
                      href={job.url}
                      className="inline-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.company}
                    </a>
                  </span>
                </h3>

                <p className="text-sm font-mono text-slate-500 mb-6">
                  {job.range}
                </p>

                <div>
                  <ul>
                    {job.html.map((item, j) => (
                      <li
                        key={j}
                        className="relative pl-8 pb-3 text-slate-400 before:content-['▹'] before:absolute before:left-0 before:text-green-400 before:text-sm before:leading-5"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
