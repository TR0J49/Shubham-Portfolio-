'use client';

import { motion } from 'framer-motion';
import { FileText, Award, Trophy, Users, Github, ScrollText, Image, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowCard from '@/components/ui/GlowCard';
import { publications, achievements } from '@/lib/data';

const achievementIcons: Record<string, typeof Trophy> = {
  'Data Analytics Lead': Users,
  'Finalist': Trophy,
  '4th Place': Award,
  'Top 5': Award
};

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-mono text-[var(--primary)] mb-4 tracking-wider">
            // PUBLICATIONS & ACHIEVEMENTS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Recognition
          </h3>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Patents, copyrights, and notable achievements in AI/ML
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full mt-4" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <AnimatedSection direction="left">
            <h4 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <FileText className="text-[var(--primary)]" />
              Publications & Copyright
            </h4>

            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-2xl border-2 border-[var(--primary)]/50 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--card)] to-[var(--secondary)]/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Glow effects */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-[var(--primary)]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--secondary)]/20 rounded-full blur-3xl" />

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-black">
                    <Sparkles size={12} />
                    COPYRIGHT REGISTERED
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--primary)]/30 to-[var(--secondary)]/30 shrink-0">
                      <FileText className="text-[var(--primary)]" size={28} />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-[var(--foreground)] mb-1 pr-32">
                        {pub.title}
                      </h5>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="px-2 py-1 rounded-md bg-amber-500/20 text-amber-400 font-semibold">
                          {pub.type}: {pub.registrationNo}
                        </span>
                      </div>
                      <p className="text-[var(--muted)] text-sm mt-2">{pub.event}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  {pub.highlights && (
                    <div className="mb-5 p-4 rounded-xl bg-[var(--card)]/80 border border-[var(--border)]">
                      <h6 className="text-sm font-semibold text-[var(--primary)] mb-3 flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        Key Highlights
                      </h6>
                      <ul className="space-y-2">
                        {pub.highlights.map((highlight: string, hIndex: number) => (
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
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {pub.github && (
                      <motion.a
                        href={pub.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[var(--card-hover)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)] transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                    )}
                    {pub.certificate && (
                      <motion.a
                        href={pub.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ScrollText size={16} />
                        Certificate
                      </motion.a>
                    )}
                    {pub.poster && (
                      <motion.a
                        href={pub.poster}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-[var(--primary)] to-cyan-400 text-black hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image size={16} />
                        Poster
                      </motion.a>
                    )}
                    {pub.researchPaper && (
                      <motion.a
                        href={pub.researchPaper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-[var(--secondary)] to-purple-400 text-white hover:from-purple-400 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BookOpen size={16} />
                        Research Paper
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection direction="right">
            <h4 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <Trophy className="text-[var(--secondary)]" />
              Achievements
            </h4>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievementIcons[achievement.title] || Award;

                return (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl glass border border-[var(--border)] hover:border-[var(--secondary)]/50 transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-[var(--secondary)]/20 shrink-0">
                        <Icon className="text-[var(--secondary)]" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-semibold text-[var(--foreground)]">
                            {achievement.title}
                          </h5>
                          <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)]">
                            {achievement.organization}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--muted)]">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Summary */}
        <AnimatedSection className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Copyright', value: '1', icon: FileText },
              { label: 'Hackathons', value: '3+', icon: Trophy },
              { label: 'National Competitions', value: '2+', icon: Award },
              { label: 'Leadership Roles', value: '1', icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-xl glass text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[var(--primary)]" />
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-[var(--muted)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
