'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  enableGlitch?: boolean;
}

export default function GlitchText({
  text,
  className = '',
  enableGlitch = true
}: GlitchTextProps) {
  if (!enableGlitch) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={`glitch ${className}`}
      data-text={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  );
}
