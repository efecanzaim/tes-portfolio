"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Circle, Minus } from "lucide-react";

export function About() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} id="about" className="py-24 lg:py-40 relative bg-background overflow-hidden">
      {/* Abstract Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex justify-center">
        <h1 className="text-[20vw] font-bold leading-none whitespace-nowrap text-foreground">
          CREATIVE
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Image Section - Artistic & Editorial */}
            <div className="w-full lg:w-5/12 relative order-1">
                <motion.div 
                    style={{ 
                        y: isMobile ? 0 : y, 
                        rotate: isMobile ? 0 : rotate 
                    }} 
                    className="relative aspect-3/4 w-full max-w-md mx-auto z-30"
                >
                    {/* Frame Element */}
                    <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 z-0" />
                    
                    {/* Main Image Container */}
                    <div className="relative z-10 w-full h-full overflow-hidden bg-muted group">
                        <Image
                            src="/tes.jpg"
                            alt="Portrait"
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        
                        {/* Minimal Overlay */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-background border border-border p-4 shadow-xl max-w-[150px] z-20">
                        <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                            "Design is intelligence made visible."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Text Content - Minimal & Bold */}
            <div className="lg:w-7/12 relative z-20 order-2">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <Minus className="w-12 h-px bg-primary" />
                        <span className="text-sm font-mono uppercase tracking-widest text-primary">About Me</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        Crafting Digital <br />
                        <span className="font-serif italic font-light text-muted-foreground">Masterpieces.</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <Circle className="w-3 h-3 fill-primary text-primary" />
                            <span className="font-medium">UI/UX Design</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Circle className="w-3 h-3 fill-primary text-primary" />
                            <span className="font-medium">Creative Development</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Circle className="w-3 h-3 fill-primary text-primary" />
                            <span className="font-medium">Brand Identity</span>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border/50 flex justify-between items-end">
                        <div>
                            <p className="font-mono text-sm text-muted-foreground mb-1">CURRENTLY BASED IN</p>
                            <p className="text-xl font-medium">Istanbul, TR</p>
                        </div>
                        <ArrowUpRight className="w-12 h-12 text-primary/50" />
                    </div>
                </motion.div>
            </div>

        </div>
    </div>
    </section>
  );
}

