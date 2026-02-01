"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
    return (
        <section id="education" className="py-20 container px-4 md:px-6 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
            >
                <Card>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6 p-8">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold">JSS Academy of Technical Education</h3>
                            <p className="text-muted-foreground">B.Tech in Electrical Engineering</p>
                            <p className="text-sm text-muted-foreground mt-2">Noida, UP • 2016 - 2020</p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}
