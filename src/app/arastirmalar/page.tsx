"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const researchAreas = [
  {
    title: "Araştırma Alanı 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    tags: ["Keyword 1", "Keyword 2", "Keyword 3"],
  },
  {
    title: "Araştırma Alanı 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Keyword 4", "Keyword 5"],
  },
  {
    title: "Araştırma Alanı 3",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    tags: ["Keyword 6", "Keyword 7", "Keyword 8"],
  },
];

const projects = [
  {
    title: "Proje Başlığı 1",
    status: "Devam Ediyor",
    period: "2023 - Günümüz",
    team: "5 Araştırmacı",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    funding: "TÜBİTAK",
  },
  {
    title: "Proje Başlığı 2",
    status: "Tamamlandı",
    period: "2020 - 2023",
    team: "3 Araştırmacı",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    funding: "BAP",
  },
  {
    title: "Proje Başlığı 3",
    status: "Tamamlandı",
    period: "2018 - 2020",
    team: "4 Araştırmacı",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    funding: "AB Horizon",
  },
];

export default function ArastirmalarPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-4">
              Araştırmalar
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore.
            </motion.p>
          </motion.div>

          {/* Research Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8">
              Araştırma Alanları
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary/70 transition-colors group"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8">
              Araştırma Projeleri
            </motion.h2>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.team}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      project.status === "Devam Ediyor"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Fon: <span className="text-foreground">{project.funding}</span>
                    </span>
                    <Button variant="ghost" size="sm" className="group">
                      Detaylar
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
