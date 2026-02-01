"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
        >
            <nav className="flex items-center gap-2 md:gap-4 bg-background/80 backdrop-blur-md border border-border/40 rounded-full px-4 md:px-6 py-3 shadow-lg max-w-[95vw] overflow-x-auto no-scrollbar">
                <span className="font-bold text-lg mr-4 hidden md:block">Gaurav</span>

                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection('hero')}>About</Button>
                    <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection('experience')}>Experience</Button>
                    <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection('projects')}>Projects</Button>
                    <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection('skills')}>Skills</Button>
                </div>

                <div className="w-px h-6 bg-border mx-2 shrink-0" />

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 shrink-0" href="https://github.com/gauravrathore2u" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 shrink-0" href="https://www.linkedin.com/in/gauravrathore20" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                    </Button>
                </div>
            </nav>
        </motion.header>
    );
}
