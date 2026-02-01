"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "AI Documentation Chat",
        description: "An AI-powered chat interface that allows users to query and interact with documentation efficiently.",
        tags: ["AI", "Chat", "Documentation"],
        repoUrl: "https://github.com/gauravrathore2u/ai-documentation-chat",
        demoUrl: null
    },
    {
        title: "Resume AI Analyser",
        description: "A tool that uses Artificial Intelligence to analyze resumes and provide feedback for improvement.",
        tags: ["AI", "Resume", "Analysis"],
        repoUrl: "https://github.com/gauravrathore2u/resume-ai-analyser",
        demoUrl: null
    },
    {
        title: "GitHub Analytics",
        description: "A dashboard providing insights and analytics for GitHub repositories and user activity.",
        tags: ["GitHub", "Analytics", "Dashboard"],
        repoUrl: "https://github.com/gauravrathore2u/GitHub-Analytics",
        demoUrl: null
    },
    {
        title: "E-commerce MERN",
        description: "A full-stack e-commerce application built with MongoDB, Express, React, and Node.js.",
        tags: ["MERN", "E-commerce", "Full Stack"],
        repoUrl: "https://github.com/gauravrathore2u/ECommerce_MERN",
        demoUrl: null
    },
    {
        title: "Chat Application",
        description: "A real-time chat application enabling users to communicate instantly.",
        tags: ["Chat", "Real-time", "Messaging"],
        repoUrl: "https://github.com/gauravrathore2u/ChatApplication",
        demoUrl: null
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 container px-4 md:px-6 mx-auto bg-secondary/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Projects</h2>
                <p className="text-muted-foreground">Some of the projects I&apos;ve built.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between mt-auto">
                                <Button variant="outline" size="sm" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                </Button>
                                {project.demoUrl && (
                                    <Button size="sm" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
