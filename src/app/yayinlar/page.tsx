"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FileText, BookOpen, Newspaper, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const categories = [
  { id: "all", label: "Tümü", icon: FileText },
  { id: "article", label: "Makaleler", icon: Newspaper },
  { id: "book", label: "Kitaplar", icon: BookOpen },
  { id: "thesis", label: "Tezler", icon: FileText },
];

const publications = [
  {
    slug: "lorem-ipsum-dolor-sit-amet",
    type: "article",
    year: 2024,
    title: "Lorem Ipsum Dolor Sit Amet: Consectetur Adipiscing Elit",
    authors: "Soyaltın, T.E., Lorem, I., Dolor, S.",
    journal: "Journal of Lorem Ipsum Studies",
    volume: "Vol. 15, No. 3, pp. 123-145",
    doi: "10.1234/lorem.2024.001",
  },
  {
    slug: "duis-aute-irure-dolor",
    type: "article",
    year: 2023,
    title: "Duis Aute Irure Dolor in Reprehenderit in Voluptate",
    authors: "Soyaltın, T.E., Amet, C.",
    journal: "International Journal of Dolor Research",
    volume: "Vol. 28, No. 2, pp. 56-78",
    doi: "10.1234/dolor.2023.002",
  },
  {
    slug: "kitap-basligi-lorem-ipsum",
    type: "book",
    year: 2022,
    title: "Kitap Başlığı: Alt Başlık Lorem Ipsum",
    authors: "Soyaltın, T.E.",
    publisher: "Lorem Yayınevi",
    isbn: "978-3-16-148410-0",
  },
  {
    slug: "excepteur-sint-occaecat",
    type: "article",
    year: 2022,
    title: "Excepteur Sint Occaecat Cupidatat Non Proident",
    authors: "Lorem, I., Soyaltın, T.E., Ipsum, D.",
    journal: "Applied Lorem Sciences",
    volume: "Vol. 10, No. 4, pp. 234-256",
    doi: "10.1234/applied.2022.003",
  },
  {
    slug: "doktora-tezi-lorem-ipsum",
    type: "thesis",
    year: 2010,
    title: "Doktora Tezi Başlığı: Lorem Ipsum Dolor Sit Amet Consectetur",
    authors: "Soyaltın, T.E.",
    institution: "Lorem Ipsum Üniversitesi",
    type_detail: "Doktora Tezi",
  },
  {
    slug: "editorlu-kitap-lorem-ipsum",
    type: "book",
    year: 2020,
    title: "Editörlü Kitap: Lorem Ipsum Koleksiyonu",
    authors: "Soyaltın, T.E. (Ed.)",
    publisher: "Akademik Yayınlar",
    isbn: "978-3-16-148411-1",
  },
];

export default function YayinlarPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPublications = publications.filter(
    (pub) => activeCategory === "all" || pub.type === activeCategory
  );

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
              Yayınlar
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Akademik makaleler, kitaplar ve diğer yayınlar
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 hover:bg-secondary"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Publications List */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-4"
              >
                {filteredPublications.map((pub) => (
                  <motion.div
                    key={pub.slug}
                    variants={itemVariants}
                  >
                    <Link href={`/yayinlar/${pub.slug}`}>
                      <div className="p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-medium text-primary">{pub.year}</span>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                pub.type === "article" ? "bg-blue-500/10 text-blue-500" :
                                pub.type === "book" ? "bg-green-500/10 text-green-500" :
                                "bg-purple-500/10 text-purple-500"
                              }`}>
                                {pub.type === "article" ? "Makale" : pub.type === "book" ? "Kitap" : "Tez"}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{pub.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                            <p className="text-sm text-muted-foreground">
                              {pub.journal || pub.publisher || pub.institution}
                              {pub.volume && `, ${pub.volume}`}
                            </p>
                          </div>
                          <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
