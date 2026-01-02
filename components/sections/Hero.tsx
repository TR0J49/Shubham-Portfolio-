'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import TypeWriter from '@/components/ui/TypeWriter';
import GlitchText from '@/components/ui/GlitchText';
import { personalInfo } from '@/lib/data';


interface Particle {
  id: number;
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: number;
}

// Floating particle component
const FloatingParticle = ({ delay, duration, x, y, size }: { delay: number; duration: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-[var(--primary)]"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      filter: 'blur(1px)',
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0, 1, 1.2, 1, 0],
      y: [0, -100, -200, -300, -400],
      x: [0, 30, -20, 40, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// Animated gradient orb component
const GradientOrb = ({ className, delay }: { className: string; delay: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      x: [0, 50, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function Hero() {
  // Generate particles only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        x: `${Math.random() * 100}%`,
        y: `${70 + Math.random() * 30}%`,
        size: 2 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Orbs */}
      <GradientOrb
        className="w-96 h-96 bg-[var(--primary)] -top-20 -left-20 opacity-20"
        delay={0}
      />
      <GradientOrb
        className="w-[500px] h-[500px] bg-[var(--secondary)] -bottom-40 -right-20 opacity-15"
        delay={2}
      />
      <GradientOrb
        className="w-72 h-72 bg-[var(--primary)] top-1/3 right-1/4 opacity-10"
        delay={4}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} {...p} />
      ))}

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.03,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-[var(--background)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-[var(--primary)] text-sm font-mono"
            animate={{
              boxShadow: [
                '0 0 0px rgba(0, 255, 255, 0)',
                '0 0 20px rgba(0, 255, 255, 0.3)',
                '0 0 0px rgba(0, 255, 255, 0)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &lt;Hi There /&gt;
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 100
          }}
        >
          <motion.span
            className="text-[var(--foreground)] inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm{' '}
          </motion.span>
          <GlitchText
            text={personalInfo.name.split(' ')[0]}
            className="gradient-text"
          />
        </motion.h1>

        {/* Dynamic Role */}
        <motion.div
          className="text-xl md:text-3xl text-[var(--muted)] mb-8 h-10"
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TypeWriter
            words={personalInfo.roles}
            className="font-mono"
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2000}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-[var(--muted)] max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Building intelligent systems with AI/ML. Passionate about Generative AI,
          RAG systems, and creating impactful solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="neon-button flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/@Shubham_Rahangdale.rsm.pdf"
            download="@Shubham_Rahangdale.rsm.pdf"
            className="px-6 py-3 rounded-lg border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold transition-all hover:bg-[var(--secondary)] hover:text-[var(--background)] hover:shadow-[0_0_20px_var(--glow-secondary)]"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <Download size={18} />
              Download CV
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: 'GitHub' },
            { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-[var(--muted)] hover:text-[var(--primary)] hover:glow-box transition-all"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.9 + index * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{
                scale: 1.2,
                y: -5,
                rotate: [0, -10, 10, 0],
                transition: { rotate: { duration: 0.3 } }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-[var(--muted)] hover:text-[var(--primary)] transition-colors group"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            className="text-sm mb-2 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            className="relative"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} />
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: [0, 0.5, 0], y: [0, 10, 20] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            >
              <ChevronDown size={24} className="text-[var(--primary)]" />
            </motion.div>
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
