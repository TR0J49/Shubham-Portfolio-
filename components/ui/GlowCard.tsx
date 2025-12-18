'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary';
  hover3D?: boolean;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'primary',
  hover3D = true
}: GlowCardProps) {
  const glowClass = glowColor === 'primary' ? 'hover:glow-box' : 'hover:glow-box-secondary';

  return (
    <motion.div
      className={`
        relative p-6 rounded-xl
        bg-[var(--card)] border border-[var(--border)]
        transition-all duration-300
        ${glowClass}
        ${hover3D ? 'card-3d' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: hover3D ? 1.02 : 1 }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-20 blur-sm" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
