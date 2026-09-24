import type { Experience } from "../types/experiences";

const EXPERIENCE_ORDER = [
  "assistable",
  "blockwill",
  "xamtac",
  "august-ai",
  "rebolt",
  "attack-capital",
  "the-volte",
  "raahee",
];

export const EXPERIENCES: Experience[] = (
  [
    {
      id: "xamtac",
      companyName: "XAMTAC CONSULTING LLC",
      companyUrl: "https://xamtac.com",
      companyLogo: "/experience/xamtac.png",
      positions: [
        {
          id: "xamtac-sde-team-lead",
          title: "Software Development Engineer & Team Lead",
          employmentPeriod: {
            start: "09.2022",
            end: "05.2026",
          },
          employmentType: "Full-time",
          icon: "code",
          description:
            "- Spearheaded an AI-powered marketing ERP supporting 1K+ daily active users, increasing client conversion rates by 25% and platform adoption by 35%.\n- Architected multi-tenant and white-label SaaS for asset generation, campaign planning, PPC/CRM reporting, no-code email marketing, website analytics, and cross-platform social scheduling; reduced workflow time by 70% and improved retention by 30%.\n- Built real-time marketing dashboards connecting website traffic, social engagement, email campaigns, and paid-media performance across Google, Facebook, and other channels.\n- Built CI/CD pipelines and automated testing that reduced deployment time by 40% and production bugs by 60%; mentored and guided a 14-member engineering team.\n- Delivered client platforms including Poshmom multi-vendor commerce, Loggerhead Golf Customs product personalization, and YATR yacht booking.",
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
            "System Architecture",
          ],
          isExpanded: true,
        },
      ],
    },
    {
      id: "assistable",
      companyName: "Assistable AI",
      companyUrl: "https://assistable.ai",
      companyLogo: "/experience/assistable.png",
      positions: [
        {
          id: "assistable-ai-platform",
          title: "Software Engineer, AI Platform",
          employmentPeriod: {
            start: "01.2026",
          },
          employmentType: "Freelance · Part-time",
          icon: "code",
          description:
            "- Contributed to an omnichannel AI-agent platform spanning voice, SMS, WhatsApp, and live chat with shared conversation memory across channels; the platform reports 126.9K installs and 40M+ AI conversations.\n- Reduced total application operating cost from approximately $50K/month to under $8K/month, delivering more than 84% savings through architecture, infrastructure, and provider optimization.\n- Migrated the complete no-code tooling stack from external dependencies to an in-house platform, improving product ownership, extensibility, reliability, and cost control.\n- Built an OpenAPI-driven developer platform that generates a typed TypeScript SDK, CLI, MCP server, and Python SDK from a single API specification.\n- Built provider-agnostic real-time voice orchestration across VAD, speech-to-text, LLM, text-to-speech, tool calling, barge-in handling, traces, and Telnyx/Twilio media control.\n- Developed API integrations and automation tooling for contacts, calls, conversations, messages, appointments, knowledge bases, assistants, alerts, phone numbers, and subaccounts.",
          skills: [
            "TypeScript",
            "OpenAPI",
            "MCP",
            "Python",
            "Voice AI",
            "STT / TTS",
            "Telnyx",
            "Twilio",
            "Real-time Systems",
            "Platform Engineering",
          ],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: true,
    },
    {
      id: "august-ai",
      companyName: "August AI",
      companyUrl: "https://helloaugust.ai",
      companyLogo: "/experience/august.png",
      positions: [
        {
          id: "august-ai-engineer",
          title: "Software Engineer",
          employmentPeriod: {
            start: "01.2026",
            end: "05.2026",
          },
          employmentType: "Part-time",
          icon: "code",
          description:
            "- Built conversation-intelligence workflows that capture phone, desktop, smartwatch, VoIP, and SMS interactions and turn them into structured notes, CRM-ready updates, follow-through, and relationship context.\n- Integrated AI-generated conversation context with Salesforce, Zoho, and HubSpot workflows so teams could surface objections, commitments, next steps, and coaching opportunities without replaying every conversation.\n- Implemented compliance-readiness controls for HIPAA, SOC 2 Type I/II, and ISO-aligned practices, including consent notices, PHI handling, auditability, and privacy safeguards.",
          skills: [
            "Conversation Intelligence",
            "AI Agents",
            "CRM Integrations",
            "Salesforce",
            "Zoho",
            "HubSpot",
            "HIPAA",
            "SOC 2",
            "ISO-aligned Controls",
          ],
          isExpanded: true,
        },
      ],
    },
    {
      id: "blockwill",
      companyName: "BlockWill",
      companyUrl: "https://blockwill.io",
      companyLogo: "/experience/blockwill.png",
      positions: [
        {
          id: "blockwill-head-of-technology",
          title: "Head of Technology",
          employmentPeriod: {
            start: "01.2025",
          },
          employmentType: "Part-time",
          icon: "idea",
          description:
            "- Lead architecture and engineering for a privacy-first digital inheritance platform spanning physical, financial, business, and digital assets.\n- Design client-side encrypted vaults, zero-knowledge workflows, key management, and conditional-release systems that help people transfer assets exactly as intended.\n- Design beneficiary verification and custody workflows using zero-knowledge proofs, threshold signatures, multi-party computation, and privacy-by-design controls.\n- Translate cryptography, secure data flow, and long-lived trust requirements into product and engineering decisions.",
          skills: [
            "Privacy Engineering",
            "Client-side Encryption",
            "Zero-knowledge Proofs",
            "Threshold Signatures",
            "MPC",
            "Key Management",
            "Secure Systems",
            "Product Architecture",
          ],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: true,
    },
    {
      id: "rebolt",
      companyName: "Rebolt (via XAMTAC CONSULTING LLC)",
      companyLogo: "/experience/rebolt.png",
      positions: [
        {
          id: "rebolt-team-lead",
          title: "Full-Stack Developer Lead & Team Lead",
          employmentPeriod: {
            start: "06.2025",
            end: "08.2025",
          },
          employmentType: "Contract",
          icon: "code",
          description:
            "- Led development of an AI-powered marketing platform for 1,000+ home-service businesses, including AI website generation, automated advertising, social-content generation, and business-profile tooling.\n- Designed test automation and scalable microservices for high-volume lead generation, reaching 95% code coverage and supporting 50,000+ daily interactions.",
          skills: [
            "AI Marketing",
            "React",
            "Node.js",
            "TypeScript",
            "Microservices",
            "Test Automation",
            "Ad Tech",
            "System Architecture",
          ],
          isExpanded: true,
        },
      ],
    },
    {
      id: "attack-capital",
      companyName: "Attack Capital · Y Combinator (W22)",
      companyLogo: "/experience/ac.png",
      positions: [
        {
          id: "attack-capital-lead-dev",
          title: "Full-Stack Developer Lead & Performance Coach",
          employmentPeriod: {
            start: "08.2024",
            end: "10.2024",
          },
          employmentType: "Consultant",
          icon: "code",
          description:
            "- Led engineering for Swades AI and OpenMic, an AI telecommunications platform integrating Twilio, LiveKit, Vocode, and PipeCat AI.\n- Scaled high-volume call processing to 10,000+ daily interactions, improving successful call outcomes by 40% and call-intent recognition by 30%.\n- Mentored a cross-functional team and introduced agile KPI tracking that improved team productivity by 20% and reduced delivery time by 30%.",
          skills: [
            "AI/ML",
            "NLP",
            "Twilio",
            "LiveKit",
            "Vocode",
            "PipeCat AI",
            "Real-time Communication",
            "Team Leadership",
            "Agile",
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
          description:
            "- Reduced JavaScript bundle size by 40%, improved Core Web Vitals by 130%, and increased mobile engagement by 45% through Next.js and responsive UI optimization.\n- Implemented SEO improvements that increased organic traffic by 70% within two months.",
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
          description:
            "- Built a mental-health therapist-booking platform with RESTful APIs and real-time availability, processing 500+ daily transactions.\n- Designed a real-time availability calendar that reduced booking conflicts by 60% and streamlined the appointment process.",
          skills: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "RESTful APIs",
            "Real-time Systems",
            "Healthcare Technology",
          ],
          isExpanded: true,
        },
      ],
    },
  ] as Experience[]
).sort(
  (left, right) =>
    EXPERIENCE_ORDER.indexOf(left.id) - EXPERIENCE_ORDER.indexOf(right.id)
);
