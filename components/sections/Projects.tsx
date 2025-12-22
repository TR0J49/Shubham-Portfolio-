'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowCard from '@/components/ui/GlowCard';
import { projects } from '@/lib/data';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative gradient-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-mono text-[var(--primary)] mb-4 tracking-wider">
            // MY PROJECTS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Work
          </h3>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A showcase of AI/ML projects that solve real-world problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full mt-4" />
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <GlowCard
                className="h-full"
                glowColor={index % 2 === 0 ? 'primary' : 'secondary'}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder className="text-[var(--primary)]" size={24} />
                    <Star className="text-yellow-500" size={16} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-3 hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h4>

                {/* Stats Badges (for projects with stats) */}
                {project.stats && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.modules && (
                      <span className="px-2 py-1 text-xs rounded-md bg-[var(--secondary)]/20 text-[var(--secondary)] font-semibold">
                        {project.stats.modules} AI Modules
                      </span>
                    )}
                    {project.stats.privacy && (
                      <span className="px-2 py-1 text-xs rounded-md bg-green-500/20 text-green-400 font-semibold">
                        {project.stats.privacy}
                      </span>
                    )}
                    {project.stats.performance && (
                      <span className="px-2 py-1 text-xs rounded-md bg-[var(--primary)]/20 text-[var(--primary)] font-semibold">
                        {project.stats.performance} Productivity
                      </span>
                    )}
                    {project.stats.features && (
                      <span className="px-2 py-1 text-xs rounded-md bg-[var(--secondary)]/20 text-[var(--secondary)] font-semibold">
                        {project.stats.features} Features
                      </span>
                    )}
                    {project.stats.type && (
                      <span className="px-2 py-1 text-xs rounded-md bg-green-500/20 text-green-400 font-semibold">
                        {project.stats.type}
                      </span>
                    )}
                    {project.stats.impact && (
                      <span className="px-2 py-1 text-xs rounded-md bg-yellow-500/20 text-yellow-400 font-semibold">
                        {project.stats.impact}
                      </span>
                    )}
                  </div>
                )}

                {/* Project Type Badge (Freelance, etc.) */}
                {project.type && (
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30">
                      {project.type} Project
                    </span>
                  </div>
                )}

                {/* Project Description */}
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Highlights */}
                {project.highlights && (
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight: string, hIndex: number) => (
                      <motion.li
                        key={hIndex}
                        className="flex items-start gap-2 text-sm text-[var(--muted)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hIndex * 0.1 }}
                      >
                        <span className="text-[var(--primary)] mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <AnimatedSection key={project.title} direction="up" delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-xl glass border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="text-[var(--secondary)]" size={20} />
                    <h5 className="font-semibold text-[var(--foreground)]">
                      {project.title}
                    </h5>
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-[var(--card-hover)] text-[var(--accent)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* View More */}
        <AnimatedSection className="text-center mt-12">
          <motion.a
            href="https://github.com/TR0J49"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 neon-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
