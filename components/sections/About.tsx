'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowCard from '@/components/ui/GlowCard';
import { personalInfo, education } from '@/lib/data';

const stats = [
  { label: 'Projects Completed', value: '10+', icon: Code2 },
  { label: 'Internships', value: '2', icon: Briefcase },
  { label: 'Achievements', value: '4+', icon: Award },
  { label: 'CGPA', value: '7.67', icon: GraduationCap }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-mono text-[var(--primary)] mb-4 tracking-wider">
            // ABOUT ME
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Who Am I?
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <AnimatedSection direction="left">
            <GlowCard className="h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-[var(--muted)] font-mono text-sm">about.py</span>
              </div>

              <div className="font-mono text-sm">
                <p className="text-[var(--muted)]">
                  <span className="text-[var(--primary)]">developer</span>{' '}
                  <span className="text-[var(--secondary)]">=</span> {'{'}
                </p>
                <div className="ml-4 mt-2 space-y-2">
                  <p>
                    <span className="text-green-400">"name"</span>:{' '}
                    <span className="text-yellow-400">"{personalInfo.name}"</span>,
                  </p>
                  <p>
                    <span className="text-green-400">"title"</span>:{' '}
                    <span className="text-yellow-400">"{personalInfo.title}"</span>,
                  </p>
                  <p>
                    <span className="text-green-400">"location"</span>:{' '}
                    <span className="text-yellow-400">"{personalInfo.location}"</span>,
                  </p>
                  <p>
                    <span className="text-green-400">"interests"</span>: [
                  </p>
                  <div className="ml-4">
                    <p className="text-yellow-400">"Generative AI",</p>
                    <p className="text-yellow-400">"RAG Systems",</p>
                    <p className="text-yellow-400">"Computer Vision",</p>
                    <p className="text-yellow-400">"Full-Stack AI Apps"</p>
                  </div>
                  <p>],</p>
                </div>
                <p className="text-[var(--muted)]">{'}'}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <p className="text-[var(--foreground)] leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[var(--muted)]">
                <MapPin size={16} className="text-[var(--primary)]" />
                <span>{personalInfo.location}</span>
              </div>
            </GlowCard>
          </AnimatedSection>

          {/* Right - Education & Stats */}
          <div className="space-y-6">
            {/* Education */}
            <AnimatedSection direction="right" delay={0.1}>
              <GlowCard glowColor="secondary">
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <GraduationCap className="text-[var(--secondary)]" />
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`${
                        index !== education.length - 1
                          ? 'pb-4 border-b border-[var(--border)]'
                          : ''
                      }`}
                    >
                      <h5 className="font-semibold text-[var(--foreground)]">
                        {edu.institution}
                      </h5>
                      <p className="text-[var(--primary)] text-sm">{edu.degree}</p>
                      <p className="text-[var(--muted)] text-sm mt-1">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </p>
                      {edu.coursework && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 text-xs rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} direction="up" delay={0.2 + index * 0.1}>
                  <motion.div
                    className="p-4 rounded-xl glass text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-[var(--primary)]" />
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-[var(--muted)]">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
