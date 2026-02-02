"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail, Linkedin, Twitter, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Sayfalar",
    links: [
      { href: "/", label: "Ana Sayfa" },
      { href: "/hakkimda", label: "Hakkımda" },
      { href: "/arastirmalar", label: "Araştırmalar" },
      { href: "/yayinlar", label: "Yayınlar" },
    ],
  },
  {
    title: "Akademik",
    links: [
      { href: "/dersler", label: "Dersler" },
      { href: "/blog", label: "Blog" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
];

const socialLinks = [
  { icon: Mail, href: "mailto:lorem@ipsum.edu.tr", label: "E-posta" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: GraduationCap, href: "#", label: "Google Scholar" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Tuğçe Ezgi Soyaltın. Tüm hakları saklıdır.
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-1 mt-1">
              Made by <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Efe
            </p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-primary/10 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Yukarı Dön
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

