"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { HexagonBackground } from "@/components/ui/hexagon-background";
import { RevealImageListItem } from "@/components/ui/reveal-images";
import Image from "next/image";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/95 antialiased"
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
              {/* Logo with Animated Background */}
              <div className="relative h-32 lg:h-96 flex items-center justify-center">
                {/* Animated logoarka.svg - Orijinal path'ler, fill ile clipPath animasyonu */}
                <svg
                  viewBox="0, 0, 400, 400"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ filter: "drop-shadow(0 0 8px rgba(204, 188, 148, 0.3))" }}
                >
                  <defs>
                    {/* Sağ üst daireden genişleyen clip */}
                    <clipPath id="clipTopRight">
                      <motion.circle
                        cx="240"
                        cy="84"
                        initial={{ r: 0 }}
                        animate={{ r: 300 }}
                        transition={{ duration: 3.5, delay: 0.6, ease: "easeOut" }}
                      />
                    </clipPath>
                    {/* Sol alt daireden genişleyen clip */}
                    <clipPath id="clipBottomLeft">
                      <motion.circle
                        cx="80"
                        cy="270"
                        initial={{ r: 0 }}
                        animate={{ r: 350 }}
                        transition={{ duration: 3.5, delay: 0.6, ease: "easeOut" }}
                      />
                    </clipPath>
                    {/* Sağ alt daireden genişleyen clip */}
                    <clipPath id="clipBottomRight">
                      <motion.circle
                        cx="261"
                        cy="298"
                        initial={{ r: 0 }}
                        animate={{ r: 350 }}
                        transition={{ duration: 3.5, delay: 0.6, ease: "easeOut" }}
                      />
                    </clipPath>
                  </defs>

                  {/* Daireler - Başlangıç noktaları (eş zamanlı belirir) */}
                  <motion.circle
                    cx="240"
                    cy="84"
                    r="8"
                    fill="#ccbc94"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <motion.circle
                    cx="80"
                    cy="270"
                    r="10"
                    fill="#ccbc94"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                  <motion.circle
                    cx="261"
                    cy="298"
                    r="10"
                    fill="#ccbc94"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />

                  {/* Üst kısım - sağ üst daireden reveal */}
                  <g clipPath="url(#clipTopRight)">
                    <path
                      d="M197.500 59.717 C 196.079 60.477,194.354 61.404,193.667 61.776 C 192.438 62.442,185.160 66.347,167.167 75.995 C 162.171 78.674,157.633 81.111,157.083 81.410 C 156.533 81.710,153.383 83.400,150.083 85.166 C 146.783 86.932,143.708 88.582,143.250 88.833 C 142.792 89.084,139.229 90.997,135.333 93.083 C 131.438 95.170,127.875 97.082,127.417 97.332 C 126.958 97.582,125.871 98.168,125.000 98.634 C 124.129 99.101,122.779 99.827,122.000 100.247 C 121.221 100.668,120.115 101.251,119.542 101.542 C 118.243 102.202,118.174 102.055,120.381 103.326 C 121.409 103.918,123.375 105.074,124.750 105.895 C 128.158 107.930,132.012 110.167,132.109 110.167 C 132.153 110.167,135.503 108.114,139.553 105.605 C 143.603 103.096,154.754 96.187,164.333 90.251 C 173.912 84.316,182.200 79.183,182.750 78.844 C 183.300 78.506,187.402 75.965,191.865 73.198 C 196.329 70.431,200.065 68.167,200.169 68.167 C 200.323 68.167,204.698 70.466,208.417 72.501 C 213.387 75.222,221.545 79.510,221.616 79.440 C 221.665 79.390,221.943 78.765,222.232 78.050 C 222.684 76.934,223.532 75.498,224.602 74.037 C 224.755 73.828,224.851 73.630,224.815 73.597 C 224.779 73.563,222.838 72.352,220.500 70.906 C 218.162 69.460,215.688 67.928,215.000 67.502 C 214.313 67.076,210.701 64.839,206.975 62.530 C 203.248 60.222,200.173 58.334,200.141 58.334 C 200.109 58.335,198.921 58.957,197.500 59.717"
                      fill="#ccbc94"
                      fillRule="evenodd"
                    />
                    <path
                      d="M235.188 74.079 C 225.755 76.224,223.981 89.233,232.508 93.739 C 236.264 95.724,240.044 95.433,244.093 92.846 C 244.409 92.644,268.409 108.222,269.083 109.067 C 269.211 109.227,269.699 109.010,271.167 108.139 C 272.221 107.514,274.599 106.121,276.452 105.043 C 278.305 103.965,279.824 103.040,279.827 102.987 C 279.831 102.934,272.626 99.314,263.817 94.941 C 250.276 88.221,247.818 86.948,247.913 86.704 C 247.974 86.546,248.064 85.779,248.112 85.000 C 248.539 78.098,241.961 72.539,235.188 74.079"
                      fill="#ccbc94"
                      fillRule="evenodd"
                    />
                    <path
                      d="M323.333 189.246 C 322.554 189.454,320.454 189.973,318.667 190.401 C 316.879 190.829,314.620 191.374,313.647 191.613 L 311.878 192.047 311.936 193.482 C 311.968 194.271,312.073 197.617,312.168 200.917 C 312.264 204.217,312.413 209.204,312.501 212.000 C 312.588 214.796,312.738 219.596,312.833 222.667 C 313.130 232.213,313.327 238.483,313.414 241.083 C 313.460 242.458,313.575 246.171,313.670 249.333 C 313.766 252.496,313.916 257.131,314.005 259.634 C 314.094 262.137,314.167 264.620,314.167 265.152 L 314.167 266.119 311.792 267.589 C 310.485 268.398,308.854 269.407,308.167 269.833 C 307.479 270.258,303.429 272.767,299.167 275.408 C 294.904 278.049,287.723 282.497,283.208 285.292 C 278.694 288.087,275.000 290.448,275.000 290.538 C 275.000 290.628,275.216 290.975,275.481 291.309 C 275.961 291.915,277.001 293.836,277.324 294.713 L 277.495 295.176 278.206 294.814 C 278.868 294.478,287.799 289.689,303.500 281.251 C 307.121 279.306,312.858 276.232,316.250 274.421 C 319.642 272.610,322.468 271.080,322.531 271.022 C 322.636 270.925,322.713 268.888,323.166 254.167 C 323.255 251.279,323.404 246.479,323.497 243.500 C 323.589 240.521,323.741 235.608,323.833 232.583 C 323.926 229.558,324.076 224.683,324.167 221.750 C 324.258 218.817,324.408 213.979,324.501 211.000 C 324.907 197.883,325.002 194.900,325.105 191.958 C 325.197 189.339,325.178 188.836,324.983 188.851 C 324.855 188.861,324.112 189.039,323.333 189.246"
                      fill="#ccbc94"
                      fillRule="evenodd"
                    />
                  </g>

                  {/* Sol dikey çizgi + sol alt daire - sol alt daireden reveal */}
                  <g clipPath="url(#clipBottomLeft)">
                    <path
                      d="M77.109 191.629 C 77.139 192.795,77.240 197.725,77.333 202.583 C 77.426 207.442,77.540 213.029,77.586 215.000 C 77.681 219.068,77.917 230.348,78.162 242.500 C 78.253 247.037,78.372 252.449,78.426 254.525 L 78.525 258.299 77.888 258.501 C 73.763 259.810,70.499 264.802,70.914 269.167 C 71.827 278.762,83.384 282.522,89.644 275.260 C 94.287 269.875,91.905 260.825,85.247 258.557 L 84.463 258.290 84.570 255.353 C 84.629 253.738,84.750 248.629,84.839 244.000 C 84.927 239.371,85.038 233.783,85.085 231.583 C 85.278 222.483,85.505 211.381,85.670 202.917 C 85.767 197.967,85.862 193.373,85.881 192.708 C 85.901 192.043,85.897 191.499,85.874 191.500 C 85.833 191.500,83.689 191.018,79.583 190.086 C 78.575 189.857,77.594 189.633,77.402 189.589 C 77.062 189.509,77.056 189.551,77.109 191.629"
                      fill="#ccbc94"
                      fillRule="evenodd"
                    />
                  </g>

                  {/* Alt çizgiler + sağ alt daire - sağ alt daireden reveal */}
                  <g clipPath="url(#clipBottomRight)">
                    <path
                      d="M97.433 269.724 C 97.037 274.486,94.375 279.087,90.542 281.633 C 89.456 282.354,89.445 282.294,90.794 283.021 C 91.412 283.354,96.042 285.837,101.083 288.540 C 109.547 293.077,117.147 297.154,131.750 304.994 C 134.867 306.667,138.054 308.376,138.833 308.790 C 139.612 309.205,140.625 309.750,141.083 310.000 C 142.262 310.645,143.313 311.210,150.083 314.833 C 153.383 316.600,156.533 318.288,157.083 318.586 C 157.633 318.884,160.108 320.214,162.583 321.542 C 170.575 325.830,182.718 332.347,190.833 336.705 C 195.188 339.043,199.071 341.118,199.463 341.317 L 200.177 341.679 207.963 336.857 C 212.246 334.206,219.350 329.805,223.750 327.078 C 239.986 317.016,247.942 312.088,248.917 311.489 C 249.467 311.150,250.998 310.199,252.319 309.374 L 254.722 307.875 255.603 308.593 C 265.934 317.007,279.274 302.539,269.918 293.068 C 262.202 285.258,249.198 293.002,252.255 303.586 C 252.339 303.879,251.939 304.144,249.134 305.652 C 246.175 307.243,238.120 311.566,217.583 322.583 C 213.275 324.895,207.635 327.922,205.051 329.310 C 202.466 330.698,200.268 331.833,200.166 331.833 C 200.064 331.833,196.329 329.570,191.865 326.803 C 187.402 324.037,183.188 321.426,182.500 321.001 C 180.104 319.519,147.519 299.332,138.917 294.000 C 134.150 291.045,126.950 286.584,122.917 284.086 C 118.883 281.587,111.983 277.311,107.583 274.583 C 103.183 271.854,99.125 269.339,98.564 268.993 L 97.545 268.365 97.433 269.724"
                      fill="#ccbc94"
                      fillRule="evenodd"
                    />
                  </g>
                </svg>
                <Image
                  src="/logo.png"
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

