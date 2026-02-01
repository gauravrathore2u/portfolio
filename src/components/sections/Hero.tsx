"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm bg-background/50 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Available for new projects
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Software Engineer
                    <br />
                    <span className="text-muted-foreground text-3xl md:text-5xl lg:text-6xl font-normal">
                        Specializing in Node.js, React & TS
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-[600px] text-muted-foreground text-lg md:text-xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Building scalable SaaS products and high-performance web applications.
                    Expert in microservices and full-stack development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center gap-4 mb-12"
                >
                    <Button size="lg" className="rounded-full h-12 px-8 text-base" href="/resume.pdf" download="Gaurav_Resume.pdf">
                        Download Resume <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base" href="mailto:gauravrathore2u@gmail.com">
                        Contact Me
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center text-muted-foreground"
                >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Noida, Uttar Pradesh</span>
                </motion.div>

            </div>
        </section>
    );
}
