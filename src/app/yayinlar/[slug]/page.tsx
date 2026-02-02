"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BookFlipViewer } from "@/components/book-flip-viewer";
import { AudioPlayer } from "@/components/audio-player";
import { ArrowLeft, Calendar, User, BookOpen, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

// Örnek yayın verileri - gerçek projede API'den gelecek
const publications: Record<string, {
  title: string;
  authors: string;
  year: number;
  type: "article" | "book" | "thesis";
  abstract: string;
  pdfUrl?: string;
  audioUrl?: string;
  journal?: string;
  publisher?: string;
  pages?: number;
}> = {
  "lorem-ipsum-dolor-sit-amet": {
    title: "Lorem Ipsum Dolor Sit Amet: Consectetur Adipiscing Elit",
    authors: "Soyaltın, T.E., Lorem, I., Dolor, S.",
    year: 2024,
    type: "article",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    journal: "Journal of Lorem Ipsum Studies",
    pdfUrl: "/yayin.pdf",
    audioUrl: "/publications/sample-audio.mp3",
    pages: 12,
  },
  "duis-aute-irure-dolor": {
    title: "Duis Aute Irure Dolor in Reprehenderit in Voluptate",
    authors: "Soyaltın, T.E., Amet, C.",
    year: 2023,
    type: "article",
    abstract: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    journal: "International Journal of Dolor Research",
    pdfUrl: "/yayin.pdf",
    pages: 8,
  },
  "kitap-basligi-lorem-ipsum": {
    title: "Kitap Başlığı: Alt Başlık Lorem Ipsum",
    authors: "Soyaltın, T.E.",
    year: 2022,
    type: "book",
    abstract: "Bu kitap, lorem ipsum dolor sit amet konusunda kapsamlı bir inceleme sunmaktadır. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua konularını derinlemesine ele almaktadır.",
    publisher: "Lorem Yayınevi",
    pdfUrl: "/yayin.pdf",
    audioUrl: "/publications/book-audio.mp3",
    pages: 256,
  },
  "excepteur-sint-occaecat": {
    title: "Excepteur Sint Occaecat Cupidatat Non Proident",
    authors: "Lorem, I., Soyaltın, T.E., Ipsum, D.",
    year: 2022,
    type: "article",
    abstract: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    journal: "Applied Lorem Sciences",
    pdfUrl: "/yayin.pdf",
    pages: 22,
  },
  "doktora-tezi-lorem-ipsum": {
    title: "Doktora Tezi Başlığı: Lorem Ipsum Dolor Sit Amet Consectetur",
    authors: "Soyaltın, T.E.",
    year: 2010,
    type: "thesis",
    abstract: "Bu doktora tezi, lorem ipsum dolor sit amet consectetur adipiscing elit konusunda kapsamlı bir araştırma sunmaktadır. Araştırma, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua üzerine yoğunlaşmaktadır. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris metodolojisi kullanılmıştır.",
    publisher: "Lorem Ipsum Üniversitesi",
    pdfUrl: "/yayin.pdf",
    audioUrl: "/publications/thesis-audio.mp3",
    pages: 180,
  },
  "editorlu-kitap-lorem-ipsum": {
    title: "Editörlü Kitap: Lorem Ipsum Koleksiyonu",
    authors: "Soyaltın, T.E. (Ed.)",
    year: 2020,
    type: "book",
    abstract: "Bu editörlü kitap, alanında önde gelen araştırmacıların lorem ipsum dolor sit amet konusundaki makalelerini bir araya getirmektedir. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua konuları çeşitli perspektiflerden ele alınmaktadır.",
    publisher: "Akademik Yayınlar",
    pdfUrl: "/yayin.pdf",
    pages: 320,
  },
};

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

export default function PublicationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const publication = publications[slug];

  if (!publication) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <section className="pt-32 pb-20 px-6 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Yayın Bulunamadı</h1>
            <Link href="/yayinlar">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Yayınlara Dön
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/yayinlar">
              <Button variant="ghost" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Yayınlara Dön
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-sm rounded-full ${
                publication.type === "article" ? "bg-blue-500/10 text-blue-500" :
                publication.type === "book" ? "bg-green-500/10 text-green-500" :
                "bg-purple-500/10 text-purple-500"
              }`}>
                {publication.type === "article" ? "Makale" : publication.type === "book" ? "Kitap" : "Tez"}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {publication.year}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl lg:text-4xl font-bold mb-4">
              {publication.title}
            </motion.h1>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {publication.authors}
              </span>
              {publication.journal && (
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  {publication.journal}
                </span>
              )}
              {publication.publisher && (
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {publication.publisher}
                </span>
              )}
              {publication.pages && (
                <span>{publication.pages} sayfa</span>
              )}
            </motion.div>

            {/* Abstract */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-secondary/30 mb-8">
              <h2 className="font-semibold mb-3">Özet</h2>
              <p className="text-muted-foreground leading-relaxed">
                {publication.abstract}
              </p>
            </motion.div>

            {/* Audio Player */}
            {publication.audioUrl && (
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="font-semibold mb-4">Sesli Anlatım</h2>
                <AudioPlayer
                  src={publication.audioUrl}
                  title={publication.title}
                />
              </motion.div>
            )}

            {/* Download Button */}
            {publication.pdfUrl && (
              <motion.div variants={itemVariants} className="flex gap-4 mb-8">
                <a href={publication.pdfUrl} download>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PDF İndir
                  </Button>
                </a>
              </motion.div>
            )}
          </motion.div>

          {/* PDF Viewer with Page Flip */}
          {publication.pdfUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Yayını Oku</h2>
              <BookFlipViewer
                pdfUrl={publication.pdfUrl}
                totalPages={publication.pages || 10}
              />
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
