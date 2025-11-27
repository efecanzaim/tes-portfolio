"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    rotateZ: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-linear-to-br from-primary/30 to-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-linear-to-tr from-accent/20 to-primary/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-linear-to-r from-primary/10 via-transparent to-accent/10 blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80">
                <Sparkles className="w-4 h-4 text-primary" />
                Lorem ipsum dolor sit
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-display mb-6"
            >
              <span className="block">Lorem</span>
              <span className="block gradient-text">Ipsum.</span>
              <span className="block">Dolor Sit.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-body-large text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 shadow-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Lorem Ipsum
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium border-border/50 hover:bg-secondary transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Dolor Sit
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated 3D Card/Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative"
            >
              {/* Main card */}
              <div className="relative w-[400px] h-[500px] rounded-3xl glass shadow-soft overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10" />
                
                {/* Decorative elements inside card */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top decorative circles */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  
                  {/* Mock UI elements */}
                  <div className="space-y-4">
                    <div className="h-3 w-3/4 rounded-full bg-foreground/10" />
                    <div className="h-3 w-1/2 rounded-full bg-foreground/10" />
                    <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
                  </div>
                  
                  {/* Floating mini cards */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="h-16 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 p-4 flex items-center gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/20" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 w-1/2 rounded-full bg-foreground/20" />
                          <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating accent cards */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl glass shadow-soft"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 rounded-2xl" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-8 w-32 h-20 rounded-2xl glass shadow-soft"
                animate={{
                  y: [5, -5, 5],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent/30 to-primary/30 rounded-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-foreground/40"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

