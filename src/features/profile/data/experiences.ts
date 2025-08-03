import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "xamtac",
    companyName: "XAMTAC CONSULTING LLC",
    companyLogo: "/experience/xamtac.png",
    positions: [
      {
        id: "xamtac-sde-team-lead",
        title: "Software Development Engineer & Team Lead",
        employmentPeriod: {
          start: "09.2022",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Spearheaded creation of AI-powered marketing ERP system (app.xamtac.com), driving 25% increase in client conversion rates and supporting 1K+ daily active users
- Architected key features of Xamtac SaaS platform, driving 35% increase in adoption and 30% boost in client retention:
  • Engineered asset library system and multi-channel campaign tool, reducing time-to-market by 40%
  • Implemented PPC reporting and CRM functionalities, increasing lead conversion by 30%
  • Designed client portal and email marketing suite with no-code builder, elevating email engagement by 50%
  • Integrated social media platforms with cross-platform scheduling, cutting workflow time by 70%
- Orchestrated CI/CD pipelines and automated testing, reducing deployment time by 40% and mitigating production bugs by 60%
- Promoted to Team Lead, mentoring and guiding a 14-member development team, elevating overall code quality by 35%
- Directed creation and execution of key client deliverables for high-value clients like Poshmom E-Commerce and TalkTales`,
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Docker",
          "CI/CD",
          "Team Leadership",
          "Project Management",
          "System Architecture",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "attack-capital",
    companyName: "Attack Capital - YCombinator (W22)",
    companyLogo: "/experience/ac.png",
    positions: [
      {
        id: "attack-capital-lead-dev",
        title: "Full Stack Developer Lead & Performance Coach",
        employmentPeriod: {
          start: "08.2024",
          end: "10.2024",
        },
        employmentType: "Consultant",
        icon: "code",
        description: `- Leading development of Swades AI, India's first sovereign AI platform
- Spearheaded development of OpenMic, AI-driven telecommunication platform integrating Twilio, LiveKit, Vocode, and PipeCat AI
- Managed cross-functional team of developers, data scientists, and UX designers, fostering 20% increase in team productivity
- Served as performance coach executing agile methodologies and KPI tracking, resulting in 30% reduction in project delivery time
- Implemented advanced NLP algorithms, achieving 40% increase in successful call outcomes
- Optimized system architecture for high-volume call processing, scaling to handle 10,000+ daily interactions
- Collaborated with data scientists to fine-tune AI models, resulting in 30% enhancement in call intent recognition accuracy`,
        skills: [
          "React",
          "Node.js",
          "Python",
          "AI/ML",
          "NLP",
          "Twilio",
          "LiveKit",
          "System Architecture",
          "Performance Optimization",
          "Team Leadership",
          "Agile Methodologies",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "the-volte",
    companyName: "The Volte",
    companyLogo: "/experience/volte.png",
    positions: [
      {
        id: "volte-frontend-dev",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "07.2022",
          end: "09.2022",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Optimized e-commerce platform, reducing JavaScript bundle size by 40% and improving core web vitals by 130%
- Engineered responsive UI components with Next.js, boosting mobile user engagement by 45% 
- Implemented advanced SEO strategies, driving 70% increase in organic traffic within two months`,
        skills: [
          "Next.js",
          "React",
          "JavaScript",
          "TypeScript",
          "Performance Optimization",
          "SEO",
          "Responsive Design",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "raahee",
    companyName: "RAAHEE",
    companyLogo: "/experience/raahee.png",
    positions: [
      {
        id: "raahee-fullstack-intern",
        title: "Full-Stack Developer Intern",
        employmentPeriod: {
          start: "05.2021",
          end: "07.2021",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Created a mental health platform for booking therapist sessions, processing 500+ daily transactions with optimized RESTful APIs
- Designed a real-time availability calendar, reducing booking conflicts by 60% and streamlining the appointment process`,
        skills: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "RESTful APIs",
          "Real-time Systems",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "amity-university",
        title: "Amity University, Patna",
        employmentPeriod: {
          start: "2019",
          end: "2023",
        },
        icon: "education",
        description: `- B.Tech in Computer Science
- Smart India Hackathon Winner: Led 6-member team to develop unified database for arbitration and mediation, recognized by Ministry of Finance
- Secured Intellectual Property Rights (Copyright) for A-Lab project, impacting 10,000+ students across India
- Achieved Postman Student Expert certification, showcasing proficiency in API development and testing`,
        skills: [
          "Computer Science",
          "Data Structures",
          "Algorithms",
          "Software Engineering",
          "Database Systems",
          "Team Leadership",
          "Problem Solving",
        ],
        isExpanded: true,
      },
    ],
  },
];
