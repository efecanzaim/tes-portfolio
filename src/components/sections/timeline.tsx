"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    icon: Rocket,
    title: "Lorem Ipsum Dolor",
    company: "Sit Amet Inc.",
    period: "2023 - Lorem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlights: ["Lorem", "Ipsum", "Dolor"],
  },
  {
    id: 2,
    type: "work",
    icon: Briefcase,
    title: "Consectetur Adipiscing",
    company: "Elit Solutions Co.",
    period: "2021 - 2023",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: ["Sit", "Amet", "Consectetur"],
  },
  {
    id: 3,
    type: "work",
    icon: Briefcase,
    title: "Sed Eiusmod Tempor",
    company: "Incididunt Studio",
    period: "2019 - 2021",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    highlights: ["Adipiscing", "Elit", "Sed"],
  },
  {
    id: 4,
    type: "education",
    icon: GraduationCap,
    title: "Labore et Dolore",
    company: "Magna Aliqua University",
    period: "2015 - 2019",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    highlights: ["Eiusmod", "Tempor", "Incididunt"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function TimelineItem({ item, index }: { item: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative grid md:grid-cols-2 gap-8 md:gap-16"
      variants={itemVariants}
    >
      {/* Content */}
      <motion.div
        className={`${isLeft ? "md:text-right" : "md:order-2"}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={`p-6 rounded-2xl glass shadow-soft ${isLeft ? "md:ml-auto" : ""} max-w-md`}>
          {/* Period badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {item.period}
          </span>
          
          {/* Title & Company */}
          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
          <p className="text-primary mb-4">{item.company}</p>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
          
          {/* Highlights */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-2 py-1 rounded-md bg-secondary text-xs"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline node */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-full glass shadow-soft flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
        >
          <item.icon className="w-5 h-5 text-primary" />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className={`hidden md:block ${isLeft ? "md:order-2" : ""}`} />
    </motion.div>
  );
}

export function Timeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
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
              Lorem Ipsum
            </span>
            <h2 className="text-headline mb-6">
              Dolor sit amet
              <br />
              <span className="gradient-text">consectetur adipiscing</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block">
              <motion.div
                className="w-full bg-linear-to-b from-primary to-accent"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Timeline items */}
            <div className="space-y-16">
              {experiences.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

