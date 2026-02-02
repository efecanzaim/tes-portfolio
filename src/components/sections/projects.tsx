"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Data ---
const projects = [
  {
    id: "proj1",
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description: "A comprehensive dashboard for managing online stores. Features real-time analytics, inventory management, and order processing with a modern, dark-themed UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: "proj2",
    title: "AI Image Generator",
    category: "Machine Learning",
    description: "An interactive platform that uses stable diffusion models to generate unique artwork from text descriptions. Includes a community gallery and prompt engineering tools.",
    tags: ["React", "Python", "FastAPI", "PyTorch"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: "proj3",
    title: "Finance Tracker App",
    category: "Mobile App",
    description: "A cross-platform mobile application for personal finance management. Users can track expenses, set budgets, and visualize their spending habits.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    link: "#",
    github: "#"
  },
  {
    id: "proj4",
    title: "Portfolio v1",
    category: "Website",
    description: "My previous portfolio website showcasing my early work. Built with a focus on minimalism and typography.",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    link: "#",
    github: "#"
  }
];

// --- Components ---

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full flex flex-col gap-y-8", className)}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 bg-muted/50 p-2 rounded-2xl w-fit mx-auto backdrop-blur-sm border border-border/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-6 py-2.5 text-sm font-medium rounded-xl outline-none transition-colors duration-300",
              activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary shadow-lg shadow-primary/25 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[500px] w-full">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)" 
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20, 
                    filter: "blur(10px)" 
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut" as const,
                  }}
                  className="w-full"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export function Projects() {
  // Map projects to tabs format
  const projectTabs: Tab[] = projects.map((project) => ({
    id: project.id,
    label: project.title,
    content: (
      <div className="w-full max-w-6xl mx-auto bg-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-[300px] lg:h-[500px] overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-card/50 backdrop-blur-sm">
            <div className="mb-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  {project.category}
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <Button className="rounded-full px-6" asChild>
                <a href={project.link}>
                  View Live <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href={project.github}>
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore a selection of my recent work, ranging from web applications to machine learning models.
          </p>
        </div>

        <AnimatedTabs tabs={projectTabs} className="max-w-6xl mx-auto" />
      </div>
    </section>
  );
}

