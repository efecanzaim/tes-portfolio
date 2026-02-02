"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

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

const stats = [
  { icon: GraduationCap, value: "15+", label: "Yıl Deneyim" },
  { icon: Award, value: "50+", label: "Yayın" },
  { icon: BookOpen, value: "20+", label: "Ders" },
  { icon: Users, value: "500+", label: "Öğrenci" },
];

export default function HakkimdaPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src="/profile.jpg"
                  alt="Profil Fotoğrafı"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Hakkımda
                </h1>
                <p className="text-xl text-primary font-medium">
                  Prof. Dr. Tuğçe Ezgi Soyaltın
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-secondary/50 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Academic Background */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
              Akademik Geçmiş
            </motion.h2>

            <div className="space-y-6">
              {[
                { year: "2020 - Günümüz", title: "Profesör", institution: "Lorem Ipsum Üniversitesi" },
                { year: "2015 - 2020", title: "Doçent", institution: "Lorem Ipsum Üniversitesi" },
                { year: "2010 - 2015", title: "Yardımcı Doçent", institution: "Dolor Sit Üniversitesi" },
                { year: "2005 - 2010", title: "Doktora", institution: "Amet Consectetur Üniversitesi" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="text-sm text-muted-foreground w-32 shrink-0">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
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
