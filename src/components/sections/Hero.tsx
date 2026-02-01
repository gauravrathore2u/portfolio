"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const PHRASES = ["Gaurav Rathore", "Software Engineer"];

export function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const ticker = setTimeout(() => {
            const i = loopNum % PHRASES.length;
            const fullText = PHRASES[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTypingSpeed(2000);
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        }, typingSpeed);

        return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum, typingSpeed]);

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

                <div className="flex flex-col items-center min-h-[120px] md:min-h-[160px] justify-center">
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                        suppressHydrationWarning
                    >
                        {text}
                        <span className="animate-pulse text-foreground">|</span>
                    </h1>
                </div>

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
