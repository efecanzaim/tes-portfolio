"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Code2, 
  Wrench, 
  Users,
  Figma,
  PenTool,
  Layers,
  Smartphone,
  Globe,
  Database,
  Server,
  GitBranch,
  Terminal,
  Boxes,
  MessageSquare,
  Lightbulb,
  Clock,
  Target
} from "lucide-react";

const skillCategories = [
  {
    title: "Lorem",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "Lorem Ipsum", icon: Figma },
      { name: "Dolor Sit", icon: PenTool },
      { name: "Amet Consectetur", icon: Layers },
      { name: "Adipiscing Elit", icon: Smartphone },
    ],
  },
  {
    title: "Ipsum",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Sed Eiusmod", icon: Globe },
      { name: "Tempor Incididunt", icon: Code2 },
      { name: "Labore Dolore", icon: Server },
      { name: "Magna Aliqua", icon: Database },
    ],
  },
  {
    title: "Dolor",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "Ut Enim", icon: GitBranch },
      { name: "Ad Minim", icon: Terminal },
      { name: "Veniam Quis", icon: Figma },
      { name: "Nostrud Exercitation", icon: Boxes },
    ],
  },
  {
    title: "Sit Amet",
    icon: Users,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "Ullamco Laboris", icon: MessageSquare },
      { name: "Nisi Aliquip", icon: Lightbulb },
      { name: "Commodo Consequat", icon: Clock },
      { name: "Duis Aute", icon: Target },
    ],
  },
];

const technologies = [
  "Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur",
  "Adipiscing", "Elit", "Sed", "Eiusmod", "Tempor",
  "Incididunt", "Labore", "Dolore", "Magna", "Aliqua", "Veniam", "Quis"
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

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/20 to-transparent" />
      
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

          {/* Skill categories grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-2xl glass shadow-soft"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 bg-linear-to-r ${category.color} bg-clip-text text-transparent`} style={{ color: category.color.includes('pink') ? '#ec4899' : category.color.includes('blue') ? '#3b82f6' : category.color.includes('orange') ? '#f97316' : '#a855f7' }} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.4 
                      }}
                    >
                      <skill.icon className="w-4 h-4 text-primary/60" />
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Technology marquee */}
          <motion.div variants={itemVariants} className="relative">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Lorem Ipsum Dolor Sit</h3>
              <p className="text-muted-foreground">Amet consectetur adipiscing elit sed eiusmod</p>
            </div>
            
            <div className="relative overflow-hidden py-4">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
              
              {/* Scrolling content */}
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, -1000] }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={`${tech}-${index}`}
                    className="shrink-0 px-6 py-3 rounded-full glass text-sm font-medium whitespace-nowrap hover:bg-primary/10 transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

