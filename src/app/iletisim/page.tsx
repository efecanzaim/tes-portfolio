"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

const contactInfo = [
  {
    icon: Mail,
    label: "E-posta",
    value: "lorem@ipsum.edu.tr",
    href: "mailto:lorem@ipsum.edu.tr",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (XXX) XXX XX XX",
    href: "tel:+90XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Lorem Ipsum Üniversitesi, Dolor Sit Fakültesi, Amet Bölümü",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: GraduationCap, label: "Google Scholar", href: "#" },
];

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

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
              İletişim
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Akademik işbirlikleri, sorular veya görüşmeler için benimle iletişime geçebilirsiniz
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{info.label}</h3>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{info.label}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="font-semibold mb-4">Sosyal Medya</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
              >
                <h3 className="font-semibold mb-3">Görüşme Saatleri</h3>
                <p className="text-muted-foreground text-sm">
                  Pazartesi: 10:00 - 12:00<br />
                  Çarşamba: 14:00 - 16:00<br />
                  <span className="text-xs mt-2 block">
                    * Randevu için önceden e-posta ile iletişime geçiniz
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-secondary/30"
              >
                <h2 className="text-2xl font-bold mb-6">Mesaj Gönderin</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Gönder
                  </Button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
