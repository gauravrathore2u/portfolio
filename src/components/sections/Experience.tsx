"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        company: "IOPSHub",
        role: "Software Engineer",
        period: "Feb 2024 - Present",
        description: "Built HRMS SaaS with Microservices, Docker, and Permify authorization. Integrated Docuseal for e-signatures.",
        skills: ["Node.js", "Microservices", "Docker", "PostgreSQL"]
    },
    {
        company: "Designoweb",
        role: "Full Stack Developer",
        period: "Sep 2023 - Jan 2024",
        description: "Led backend for Mental Health CRM using Express & TypeORM. Deployed on AWS EC2 with NGINX.",
        skills: ["AWS", "Express.js", "TypeORM", "NGINX"]
    },
    {
        company: "Infosys",
        role: "Systems Engineer",
        period: "Mar 2022 - Sep 2023",
        description: "Developed enterprise apps for Mercedes-Benz using Node.js, Express, and React. Optimized API efficiency.",
        skills: ["Node.js", "React.js", "PostgreSQL", "Enterprise"]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 container px-4 md:px-6 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
                <p className="text-muted-foreground">My professional journey in tech.</p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center md:justify-between`}
                        >
                            {/* Dot */}
                            {/* On mobile, dot is on left. On desktop, center. */}
                            <div className="absolute left-8 md:left-1/2 top-0 md:top-8 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 transform -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            </div>


                            {/* Spacer for desktop layout */}
                            <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? "order-1" : "order-3"}`} />

                            <Card className={`w-[calc(100%-4rem)] md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "order-3" : "order-1"}`}>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <CardTitle className="text-lg">{exp.company}</CardTitle>
                                            <CardDescription>{exp.role}</CardDescription>
                                        </div>
                                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{exp.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
