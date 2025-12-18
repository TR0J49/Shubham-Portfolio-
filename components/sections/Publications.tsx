'use client';

import { motion } from 'framer-motion';
import { FileText, Award, Trophy, Users, Github, ExternalLink } from 'lucide-react';
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
              <GlowCard key={index} className="mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[var(--primary)]/20 shrink-0">
                    <FileText className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[var(--foreground)] mb-2">
                      {pub.title}
                    </h5>
                    <div className="space-y-1 text-sm">
                      <p className="text-[var(--secondary)]">
                        {pub.type}: {pub.registrationNo}
                      </p>
                      <p className="text-[var(--muted)]">{pub.event}</p>
                    </div>
                    {pub.github && (
                      <motion.a
                        href={pub.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--primary)] hover:underline"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={14} />
                        View on GitHub
                        <ExternalLink size={12} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </GlowCard>
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
