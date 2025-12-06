"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const skills = [
  { quote: "Figma", name: "Design", title: "Expert" },
  { quote: "React", name: "Development", title: "Advanced" },
  { quote: "Next.js", name: "Development", title: "Advanced" },
  { quote: "Tailwind CSS", name: "Design", title: "Expert" },
  { quote: "TypeScript", name: "Development", title: "Advanced" },
  { quote: "Node.js", name: "Backend", title: "Intermediate" },
  { quote: "PostgreSQL", name: "Database", title: "Intermediate" },
  { quote: "Git", name: "DevOps", title: "Advanced" },
  { quote: "Docker", name: "DevOps", title: "Intermediate" },
  { quote: "AWS", name: "Cloud", title: "Beginner" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden bg-grid-white/[0.02]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Skills
            </span>
            <h2 className="text-headline mb-6">
              My Technical
              <br />
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              A comprehensive list of technologies and tools I work with.
            </p>
          </motion.div>

          <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={skills}
              direction="right"
              speed="slow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
