'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Brain, Globe, Wrench, BarChart } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills } from '@/lib/data';

const skillCategories = [
  { key: 'languages', title: 'Languages', icon: Code2, color: 'primary' },
  { key: 'frameworks', title: 'Frameworks', icon: Globe, color: 'secondary' },
  { key: 'ai_tools', title: 'AI/ML Tools', icon: Brain, color: 'primary' },
  { key: 'scraping', title: 'Web Scraping', icon: Database, color: 'secondary' },
  { key: 'tools', title: 'Dev Tools', icon: Wrench, color: 'primary' },
  { key: 'data', title: 'Data Science', icon: BarChart, color: 'secondary' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative gradient-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm font-mono text-[var(--primary)] mb-4 tracking-wider">
            // MY SKILLS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Tech Arsenal
          </h3>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full mt-4" />
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills[category.key as keyof typeof skills];
            const Icon = category.icon;
            const isPrimary = category.color === 'primary';

            return (
              <AnimatedSection
                key={category.key}
                direction="up"
                delay={categoryIndex * 0.1}
              >
                <motion.div
                  className="p-6 rounded-xl glass h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-2 rounded-lg ${
                        isPrimary
                          ? 'bg-[var(--primary)]/20 text-[var(--primary)]'
                          : 'bg-[var(--secondary)]/20 text-[var(--secondary)]'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-[var(--foreground)]">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-[var(--foreground)]">
                            {skill.name}
                          </span>
                          <span className="text-sm text-[var(--muted)]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              isPrimary
                                ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]'
                                : 'bg-gradient-to-r from-[var(--secondary)] to-pink-500'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: 'easeOut'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Technology Cloud */}
        <AnimatedSection className="mt-16" delay={0.5}>
          <div className="text-center">
            <h4 className="text-lg font-mono text-[var(--muted)] mb-6">
              // Technologies I work with
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Python', 'FastAPI', 'Flask', 'TensorFlow', 'LangChain',
                'Ollama', 'FAISS', 'ChromaDB', 'RAG', 'Selenium',
                'Playwright', 'NumPy', 'Pandas', 'Scikit-learn',
                'SQL', 'PostgreSQL', 'Git', 'Docker', 'JavaScript'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full glass text-sm text-[var(--foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] border border-[var(--border)] transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
