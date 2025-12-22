'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, ExternalLink, Building2, Globe } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { experiences } from '@/lib/data';

interface GovernmentProject {
  title: string;
  client: string;
  highlights: string[];
  tech: string[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
  github?: string;
  governmentProject?: GovernmentProject;
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-mono text-[var(--primary)] mb-4 tracking-wider">
            // WORK EXPERIENCE
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Journey
          </h3>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            From internships to government projects - my professional evolution
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full mt-4" />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] transform md:-translate-x-1/2" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.2}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-0 w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-[var(--background)] ${
                  index % 2 === 0
                    ? 'left-0 md:left-auto md:-right-2 transform -translate-x-1/2 md:translate-x-1/2'
                    : 'left-0 md:-left-2 transform -translate-x-1/2'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
              />

              {/* Card */}
              <motion.div
                className="ml-8 md:ml-0 p-6 rounded-xl glass border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                {/* Period Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-xs font-mono mb-4">
                  {exp.period}
                </span>

                {/* Title & Company */}
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-1">
                  {exp.title}
                </h4>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--secondary)] font-medium">
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--muted)] text-sm">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + hIndex * 0.1 }}
                    >
                      <span className="text-[var(--primary)] mt-1">▹</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-[var(--card-hover)] text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {exp.github && (
                  <motion.a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm text-[var(--primary)] hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    View on GitHub <ExternalLink size={14} />
                  </motion.a>
                )}

                {/* Government Project Highlight */}
                {(exp as Experience).governmentProject && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg border-2 border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />

                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="text-amber-400" size={20} />
                      <span className="text-sm font-bold text-amber-400">
                        {(exp as Experience).governmentProject!.title}
                      </span>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        Featured
                      </span>
                    </div>

                    {/* Client */}
                    <div className="flex items-center gap-2 mb-3 text-sm text-[var(--muted)]">
                      <Globe size={14} className="text-amber-400" />
                      <span>Client: <span className="text-[var(--foreground)]">{(exp as Experience).governmentProject!.client}</span></span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {(exp as Experience).governmentProject!.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-[var(--muted)]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + hIndex * 0.1 }}
                        >
                          <span className="text-amber-400 mt-1">◆</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-amber-500/20">
                      {(exp as Experience).governmentProject!.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
