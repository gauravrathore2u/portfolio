"use client";

import Link from "next/link";
import { Printer, Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
    { label: "Programming", items: "JavaScript, TypeScript, Python" },
    { label: "Backend", items: "Node.js, Express.js, Nest.js, InversifyJS, Jest, Microservices" },
    { label: "Frontend", items: "React.js, Next.js, MUI, Redux Toolkit, Tailwind, React Testing Library, Playwright" },
    { label: "Databases", items: "PostgreSQL, MongoDB, Redis/Valkey, Qdrant" },
    { label: "AI", items: "RAG, LangChain, OpenAI, Claude, Google GenAI, Prompt Engineering, Vector DB" },
    { label: "Tools", items: "Docker, Kafka, Socket.io, AWS EC2, NGINX, TypeORM, Git, Claude Code" },
];

const experiences = [
    {
        company: "Floes",
        role: "Senior Software Engineer",
        period: "Mar 2026 – Present",
        bullets: [
            "Leading end-to-end development of the Audit Management module (React, MUI, Redux Toolkit), driving UX decisions directly with stakeholders.",
            "Owning document and e-signature workflows via Docuseal integration for scheduling and contract execution.",
            "Driving feature flag strategy with PostHog, enabling controlled rollouts and A/B experimentation.",
        ],
    },
    {
        company: "IOPSHub (Floes)",
        role: "Software Engineer",
        period: "Feb 2024 – Feb 2026",
        bullets: [
            "Engineered backend foundation of a multi-tenant HRMS SaaS as the primary contractor — Node.js, Express, TypeScript.",
            "Architected a microservices system with Docker, enabling independent deployments and horizontal scalability.",
            "Built secure REST APIs using InversifyJS with fine-grained RBAC, enforcing strict access control across tenant boundaries.",
            "Established observability with Winston and GlitchTip, improving incident response in an agile environment.",
        ],
    },
    {
        company: "Designoweb Technologies",
        role: "Full Stack Developer",
        period: "Sep 2023 – Jan 2024",
        bullets: [
            "Built mental health CRM backend (Express, TypeORM, PostgreSQL), deployed on AWS EC2 with NGINX.",
            "Shipped salon management panel (React + Node + Express) and integrated Mapbox APIs for navigation features.",
        ],
    },
    {
        company: "Infosys Ltd.",
        role: "Systems Engineer",
        period: "Mar 2022 – Sep 2023",
        bullets: [
            "Built enterprise applications for Mercedes-Benz using Node.js, Express, PostgreSQL, and React with optimized tabular data APIs.",
            "Completed 3-month intensive MERN stack training program.",
        ],
    },
];

const projects = [
    {
        name: "AI PDF Chat",
        link: "https://github.com/gauravrathore2u/ai-pdf-chat",
        bullets: [
            "Built a per-user RAG pipeline: PDF ingestion → chunking → embeddings in Qdrant, orchestrated by LangChain with Google GenAI for grounded document Q&A.",
            "Designed multi-tenant isolation with Clerk auth and per-user vector namespaces; cached embeddings and chat history in Valkey for low-latency retrieval.",
            "Stack: Next.js + Node/Express + Qdrant + LangChain + Google GenAI + Clerk + Valkey.",
        ],
    },
    {
        name: "AI Resume Analyzer",
        link: "https://github.com/gauravrathore2u/resume-analyzer",
        bullets: [
            "Web app that extracts text from uploaded PDFs and uses Google AI Studio LLMs to score skills and job fit, persisting structured results in PostgreSQL.",
        ],
    },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-[11pt] font-bold uppercase tracking-[0.15em] text-resume-accent border-b border-resume-border pb-1 mb-3 mt-5 first:mt-0">
            {children}
        </h2>
    );
}

export default function ResumePage() {
    const handlePrint = () => {
        if (typeof window !== "undefined") window.print();
    };

    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 print:bg-white py-10 print:py-0">
            {/* Print controls — hidden on print */}
            <div className="max-w-[8.5in] mx-auto mb-6 px-4 flex justify-between items-center print:hidden">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    ← Back to portfolio
                </Link>
                <Button onClick={handlePrint} className="rounded-full" size="sm">
                    <Printer className="w-4 h-4 mr-2" />
                    Print / Save as PDF
                </Button>
            </div>

            {/* Resume document */}
            <article className="resume-doc mx-auto bg-white text-neutral-900 shadow-xl print:shadow-none max-w-[8.5in] w-full px-12 py-10 print:p-0 text-[10.5pt] leading-[1.45] font-sans">
                {/* Header */}
                <header className="text-center mb-5">
                    <h1 className="text-[26pt] font-bold tracking-tight leading-tight">Gaurav Rathore</h1>
                    <p className="text-resume-accent font-medium mt-0.5 text-[11pt]">Senior Software Engineer</p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-[9.5pt] text-neutral-600">
                        <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Noida, Uttar Pradesh
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Phone className="w-3 h-3" /> +91 8630953717
                        </span>
                        <a href="mailto:gauravrathore2u@gmail.com" className="inline-flex items-center gap-1 hover:underline">
                            <Mail className="w-3 h-3" /> gauravrathore2u@gmail.com
                        </a>
                        <a
                            href="https://github.com/gauravrathore2u"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                        >
                            <Github className="w-3 h-3" /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gauravrathore20"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                        >
                            <Linkedin className="w-3 h-3" /> LinkedIn
                        </a>
                    </div>
                </header>

                {/* Skills */}
                <section>
                    <SectionTitle>Skills</SectionTitle>
                    <ul className="space-y-0.5">
                        {skills.map((s) => (
                            <li key={s.label}>
                                <span className="font-semibold">{s.label}:</span> {s.items}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Experience */}
                <section>
                    <SectionTitle>Experience</SectionTitle>
                    <div className="space-y-4">
                        {experiences.map((exp) => (
                            <div key={exp.company} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline gap-4">
                                    <h3 className="font-bold">
                                        {exp.role}, <span className="font-semibold">{exp.company}</span>
                                    </h3>
                                    <span className="text-[9.5pt] text-neutral-600 italic shrink-0">{exp.period}</span>
                                </div>
                                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <SectionTitle>Projects</SectionTitle>
                    <div className="space-y-3">
                        {projects.map((p) => (
                            <div key={p.name} className="break-inside-avoid">
                                <div className="flex justify-between items-baseline gap-4">
                                    <h3 className="font-bold">
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 hover:underline"
                                        >
                                            {p.name}
                                            <ArrowUpRight className="w-3 h-3 text-resume-accent" />
                                        </a>
                                    </h3>
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[9.5pt] text-resume-accent hover:underline shrink-0 inline-flex items-center gap-1"
                                    >
                                        <Github className="w-3 h-3" /> View Repo
                                    </a>
                                </div>
                                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                                    {p.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section>
                    <SectionTitle>Education</SectionTitle>
                    <div className="flex justify-between items-baseline gap-4">
                        <div>
                            <span className="font-bold">JSS Academy of Technical Education, Noida</span>
                            <span> — B.Tech, Electrical Engineering</span>
                        </div>
                        <span className="text-[9.5pt] text-neutral-600 italic shrink-0">2016 – 2020</span>
                    </div>
                </section>
            </article>

            <style jsx global>{`
                .resume-doc {
                    --resume-accent-color: #1f3a8a;
                    --resume-border-color: #cbd5e1;
                }
                .text-resume-accent {
                    color: var(--resume-accent-color);
                }
                .border-resume-border {
                    border-color: var(--resume-border-color);
                }
                @media print {
                    @page {
                        size: Letter;
                        margin: 0.4in;
                    }
                    html,
                    body {
                        background: #ffffff !important;
                    }
                    .resume-doc {
                        box-shadow: none !important;
                        max-width: 100% !important;
                        padding: 0 !important;
                        font-size: 9.5pt !important;
                        line-height: 1.3 !important;
                    }
                    .resume-doc h1 {
                        font-size: 22pt !important;
                    }
                    .resume-doc h2 {
                        margin-top: 10pt !important;
                        margin-bottom: 4pt !important;
                        padding-bottom: 2pt !important;
                        font-size: 10pt !important;
                    }
                    .resume-doc h3 {
                        font-size: 10pt !important;
                    }
                    .resume-doc header {
                        margin-bottom: 8pt !important;
                    }
                    .resume-doc section > div.space-y-4 > * + * {
                        margin-top: 6pt !important;
                    }
                    .resume-doc section > div.space-y-3 > * + * {
                        margin-top: 6pt !important;
                    }
                    .resume-doc ul {
                        margin-top: 2pt !important;
                    }
                    .resume-doc li {
                        margin-top: 1pt !important;
                    }
                }
            `}</style>
        </div>
    );
}
