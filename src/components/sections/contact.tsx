"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const contactInfo = [
  { icon: Mail, label: "Lorem", value: "lorem@ipsum.com" },
  { icon: MapPin, label: "Dolor", value: "Sit Amet, CA" },
  { icon: Phone, label: "Consectetur", value: "+1 (555) 123-4567" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Lorem Ipsum
            </span>
            <h2 className="text-headline mb-6">
              Dolor sit amet
              <br />
              <span className="gradient-text">consectetur adipiscing</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-3xl glass shadow-soft">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum!</h3>
                    <p className="text-muted-foreground mb-6">
                      Dolor sit amet consectetur. Adipiscing elit sed eiusmod.
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Lorem Ipsum Dolor
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium">Lorem</label>
                        <Input
                          placeholder="Lorem Ipsum"
                          className="rounded-xl h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="space-y-2"
                      >
                        <label className="text-sm font-medium">Dolor</label>
                        <Input
                          type="email"
                          placeholder="lorem@ipsum.com"
                          className="rounded-xl h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                          required
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-sm font-medium">Sit Amet</label>
                      <Input
                        placeholder="Consectetur Adipiscing"
                        className="rounded-xl h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <label className="text-sm font-medium">Consectetur</label>
                      <Textarea
                        placeholder="Lorem ipsum dolor sit amet..."
                        className="rounded-xl min-h-[150px] bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto rounded-full px-8 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            Lorem Ipsum
                            <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Lorem Ipsum</h3>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Dolor Sit</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <motion.div
                className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <h4 className="font-semibold mb-2">Lorem ipsum dolor?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Sit amet consectetur adipiscing elit sed eiusmod tempor.
                </p>
                <Button variant="outline" className="rounded-full group">
                  Amet Consectetur
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

