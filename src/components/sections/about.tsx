"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Lightbulb, Heart, Briefcase, Wrench, Zap, Target } from "lucide-react";
import Image from "next/image";
import { getImagePath } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const infoCards = [
  {
    icon: Briefcase,
    title: "Lorem",
    value: "5+ Ipsum",
    description: "Dolor sit amet",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Code2,
    title: "Dolor",
    value: "15+ Consectetur",
    description: "Adipiscing elit",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Wrench,
    title: "Sit",
    value: "Amet Stack",
    description: "Tempor incididunt",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Heart,
    title: "Amet",
    value: "Labore First",
    description: "Magna aliqua",
    gradient: "from-red-500/20 to-rose-500/20",
  },
];

const highlights = [
  { icon: Lightbulb, text: "Lorem Ipsum Dolor" },
  { icon: Zap, text: "Sit Amet" },
  { icon: Target, text: "Consectetur Elit" },
  { icon: Palette, text: "Adipiscing Tempor" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image/Avatar section */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{ margin: "-20px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-accent/10"
                  style={{ margin: "-40px" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main avatar container */}
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full glass shadow-soft overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent/20 z-10" />
                  <Image
                    src={getImagePath("/tes.jpg")}
                    alt="Profile"
                    fill
                    className="object-cover scale-125"
                    priority
                  />
                </div>
                
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-2 -right-2 px-4 py-2 rounded-full glass shadow-soft text-sm font-medium"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  🎨 Lorem
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 px-4 py-2 rounded-full glass shadow-soft text-sm font-medium"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  💻 Ipsum
                </motion.div>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-title">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum.
                </p>
              </div>
              
              {/* Highlight tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Info cards grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl glass shadow-soft transition-all duration-300"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-sm text-muted-foreground mb-1">{card.title}</h4>
                  <p className="text-xl font-semibold mb-1">{card.value}</p>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

