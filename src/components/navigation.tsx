"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/arastirmalar", label: "Araştırmalar" },
  { href: "/yayinlar", label: "Yayınlar" },
  { href: "/dersler", label: "Dersler" },
  { href: "/blog", label: "Blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(10, 10, 10, 0.9)"]
  );
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          backgroundColor: headerBg,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        <motion.nav
          className="max-w-7xl mx-auto flex items-center justify-between"
          style={{ scale: headerScale }}
        >
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center relative h-16"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={220}
                height={80}
                className="h-16 w-auto relative z-10"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* CTA button - desktop */}
            <Link href="/iletisim">
              <Button className="hidden md:flex rounded-full">
                İletişim
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu content */}
            <motion.nav
              className="absolute top-20 left-6 right-6 p-6 rounded-2xl glass shadow-soft"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link key={link.href} href={link.href}>
                    <motion.div
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        isActive(link.href)
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-secondary"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </div>

              <motion.div
                className="mt-6 pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/iletisim">
                  <Button className="w-full rounded-full">
                    İletişim
                  </Button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

