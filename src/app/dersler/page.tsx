"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Clock, Users, BookOpen, GraduationCap } from "lucide-react";

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

const currentCourses = [
  {
    code: "ABC101",
    name: "Lorem Ipsum Dersi",
    level: "Lisans",
    semester: "Güz 2024",
    credits: 3,
    students: 45,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    code: "ABC501",
    name: "İleri Lorem Çalışmaları",
    level: "Yüksek Lisans",
    semester: "Güz 2024",
    credits: 3,
    students: 12,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    code: "ABC202",
    name: "Dolor Sit Amet",
    level: "Lisans",
    semester: "Güz 2024",
    credits: 4,
    students: 60,
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
];

const pastCourses = [
  { code: "ABC301", name: "Consectetur Adipiscing", level: "Lisans" },
  { code: "ABC401", name: "Elit Sed Do", level: "Lisans" },
  { code: "ABC601", name: "Eiusmod Tempor", level: "Doktora" },
  { code: "ABC502", name: "Incididunt Ut Labore", level: "Yüksek Lisans" },
  { code: "ABC102", name: "Dolore Magna Aliqua", level: "Lisans" },
  { code: "ABC602", name: "Ut Enim Ad Minim", level: "Doktora" },
];

export default function DerslerPage() {
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
              Dersler
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lisans ve lisansüstü düzeyde verilen dersler
            </motion.p>
          </motion.div>

          {/* Current Courses */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Güncel Dersler
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCourses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary/70 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono text-primary">{course.code}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      course.level === "Lisans" ? "bg-blue-500/10 text-blue-500" :
                      course.level === "Yüksek Lisans" ? "bg-green-500/10 text-green-500" :
                      "bg-purple-500/10 text-purple-500"
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.credits} Kredi
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students} Öğrenci
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Courses */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Geçmiş Dersler
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastCourses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">{course.code}</span>
                    <h3 className="font-medium">{course.name}</h3>
                  </div>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    course.level === "Lisans" ? "bg-blue-500/10 text-blue-500" :
                    course.level === "Yüksek Lisans" ? "bg-green-500/10 text-green-500" :
                    "bg-purple-500/10 text-purple-500"
                  }`}>
                    {course.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">
              Ofis Saatleri
            </motion.h2>
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Görüşme Saatleri</h3>
                <p className="text-muted-foreground">
                  Pazartesi: 10:00 - 12:00<br />
                  Çarşamba: 14:00 - 16:00
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Konum</h3>
                <p className="text-muted-foreground">
                  Lorem Ipsum Fakültesi<br />
                  Oda: A-123
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
