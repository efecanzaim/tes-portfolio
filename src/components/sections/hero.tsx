"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { HexagonBackground } from "@/components/ui/hexagon-background";
import { RevealImageListItem } from "@/components/ui/reveal-images";
import Image from "next/image";
import { getImagePath } from "@/lib/config";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/[0.96] antialiased"
    >
      <HexagonBackground />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--color-primary)"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-row lg:grid lg:grid-cols-2 gap-4 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left flex-1"
          >
            {/* Main Headline */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <RevealImageListItem
                text="Lorem"
                className="text-4xl sm:text-6xl lg:text-display"
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    alt: "Image 1",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    alt: "Image 2",
                  },
                ]}
              />
              <RevealImageListItem
                text="Ipsum."
                className="text-4xl sm:text-6xl lg:text-display gradient-text"
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    alt: "Image 1",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    alt: "Image 2",
                  },
                ]}
              />
              <RevealImageListItem
                text="Dolor Sit."
                className="text-4xl sm:text-6xl lg:text-display"
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    alt: "Image 1",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    alt: "Image 2",
                  },
                ]}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-body-large text-muted-foreground mb-6 lg:mb-10 max-w-xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-6 py-4 lg:px-8 lg:py-6 text-sm lg:text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 shadow-glow"
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
                className="rounded-full px-6 py-4 lg:px-8 lg:py-6 text-sm lg:text-base font-medium border-border/50 hover:bg-secondary transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Dolor Sit
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo with Hexagon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="relative flex items-center justify-center w-1/3 lg:w-auto"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative w-full flex items-center justify-center"
            >
              {/* Logo with Hexagon */}
              <div className="relative h-32 lg:h-96 flex items-center justify-center">
                {/* Animated Hexagon Border */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 220 80"
                  className="absolute inset-0 pointer-events-none"
                  preserveAspectRatio="none"
                  style={{ filter: "drop-shadow(0 0 8px rgba(231, 216, 143, 0.3))" }}
                >
                  <motion.path
                    d="M 110,5 L 200,25 L 200,55 L 110,75 L 20,55 L 20,25 Z"
                    stroke="#e7d88f"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      times: [0, 0.5, 1],
                      ease: "linear",
                    }}
                  />
                </svg>
                <Image
                  src={getImagePath("/logo.png")}
                  alt="Logo"
                  width={220}
                  height={80}
                  className="h-32 lg:h-96 w-auto relative z-10"
                  priority
                />
              </div>
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

