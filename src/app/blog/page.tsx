"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const blogPosts = [
  {
    slug: "lorem-ipsum-dolor",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "15 Ocak 2024",
    readTime: "5 dk",
    category: "Akademik",
    image: "/blog/post1.jpg",
  },
  {
    slug: "duis-aute-irure",
    title: "Duis Aute Irure Dolor in Reprehenderit",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "10 Ocak 2024",
    readTime: "8 dk",
    category: "Araştırma",
    image: "/blog/post2.jpg",
  },
  {
    slug: "excepteur-sint",
    title: "Excepteur Sint Occaecat Cupidatat Non Proident",
    excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "5 Ocak 2024",
    readTime: "6 dk",
    category: "Düşünceler",
    image: "/blog/post3.jpg",
  },
  {
    slug: "sed-ut-perspiciatis",
    title: "Sed Ut Perspiciatis Unde Omnis Iste Natus",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    date: "28 Aralık 2023",
    readTime: "4 dk",
    category: "Akademik",
    image: "/blog/post4.jpg",
  },
  {
    slug: "nemo-enim-ipsam",
    title: "Nemo Enim Ipsam Voluptatem Quia Voluptas",
    excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    date: "20 Aralık 2023",
    readTime: "7 dk",
    category: "Araştırma",
    image: "/blog/post5.jpg",
  },
  {
    slug: "neque-porro",
    title: "Neque Porro Quisquam Est Qui Dolorem",
    excerpt: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    date: "15 Aralık 2023",
    readTime: "5 dk",
    category: "Düşünceler",
    image: "/blog/post6.jpg",
  },
];

const categories = ["Tümü", "Akademik", "Araştırma", "Düşünceler"];

export default function BlogPage() {
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
              Blog
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Akademik yazılar, araştırma notları ve düşünceler
            </motion.p>
          </motion.div>

          {/* Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 hover:bg-secondary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <motion.article
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm text-primary font-medium mb-2">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button variant="outline" className="w-fit group/btn">
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors group overflow-hidden"
              >
                <div className="aspect-video bg-secondary">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Daha Fazla Göster
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
