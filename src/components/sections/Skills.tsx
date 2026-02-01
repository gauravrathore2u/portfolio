"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconCloud } from "@/components/ui/icon-cloud";

const skillCategories = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Java"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Nest.js", "Jest", "InversifyJS", "Microservices"]
    },
    {
        title: "Frontend",
        skills: ["React.js", "Next.js", "MUI", "Redux Toolkit", "HTML/CSS", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "Databases & Tools",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kafka", "AWS (EC2)", "Git", "NGINX"]
    }
];

const portfolioSlugs = [
    "javascript", "typescript", "java",
    "nodedotjs", "express", "nestjs", "jest", "docker", "postgresql", "mongodb", "redis", "apachekafka", "amazonaws", "git", "nginx",
    "react", "nextdotjs", "mui", "redux", "html5", "css3", "tailwindcss", "framer"
];

const images = portfolioSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

export function Skills() {
    return (
        <section id="skills" className="py-20 ">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Tech Stack</h2>
                    <p className="text-muted-foreground">Technologies I work with.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors flex flex-col">
                                <CardHeader className="text-center">
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 mx-auto"
                >
                    <IconCloud images={images} />
                </motion.div>
            </div>
        </section>
    );
}
