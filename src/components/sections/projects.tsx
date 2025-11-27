"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/projects/fintech.jpg",
    tags: ["Lorem", "Ipsum", "Dolor", "Sit"],
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/projects/ecommerce.jpg",
    tags: ["Amet", "Consectetur", "Adipiscing", "Elit"],
    color: "from-purple-500/20 to-pink-500/20",
    featured: true,
  },
  {
    id: 3,
    title: "Consectetur Elit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/projects/health.jpg",
    tags: ["Tempor", "Incididunt", "Labore", "Dolore"],
    color: "from-green-500/20 to-emerald-500/20",
    featured: true,
  },
  {
    id: 4,
    title: "Adipiscing Tempor",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/projects/portfolio.jpg",
    tags: ["Magna", "Aliqua", "Veniam", "Quis"],
    color: "from-orange-500/20 to-amber-500/20",
    featured: false,
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
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        !isEven ? "lg:flex-row-reverse" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.div
        className={`relative aspect-4/3 rounded-3xl overflow-hidden glass shadow-soft ${
          !isEven ? "lg:order-2" : ""
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Gradient placeholder */}
        <div className={`absolute inset-0 bg-linear-to-br ${project.color}`} />
        
        {/* Mock UI elements */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-4 rounded-full bg-white/10"
                style={{ width: `${100 - i * 20}%` }}
                animate={isHovered ? { width: `${100 - i * 15}%` } : {}}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <div className="h-12 w-24 rounded-xl bg-white/10" />
            <div className="h-12 w-24 rounded-xl bg-white/5" />
          </div>
        </div>
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button size="sm" className="rounded-full">
            <ExternalLink className="w-4 h-4 mr-2" />
            Lorem Ipsum
          </Button>
          <Button size="sm" variant="outline" className="rounded-full">
            <Github className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className={`space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
        {project.featured && (
          <Badge variant="secondary" className="rounded-full">
            Lorem Ipsum
          </Badge>
        )}
        
        <h3 className="text-title">{project.title}</h3>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button className="group rounded-full">
            Lorem Ipsum
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
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
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>

          {/* Projects list */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View all projects button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Dolor Sit Amet
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

