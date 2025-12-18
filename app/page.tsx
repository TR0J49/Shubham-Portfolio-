'use client';

import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Publications from '@/components/sections/Publications';
import Contact from '@/components/sections/Contact';
import ChatBot from '@/components/Chatbot/ChatBot';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Publications & Achievements Section */}
      <Publications />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.p
            className="text-[var(--muted)] text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[var(--primary)]">&lt;/&gt;</span>
            {' '}Designed & Built by{' '}
            <span className="gradient-text font-semibold">Shubham Rahangdale</span>
            {' '}with{' '}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </motion.p>
          <motion.p
            className="text-[var(--muted)] text-xs mt-2 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            All Rights Reserved © 2025
          </motion.p>
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </main>
  );
}
