'use client';

import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBubble({ message, isBot, timestamp }: ChatBubbleProps) {
  return (
    <motion.div
      className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar */}
      <div
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isBot
            ? 'bg-[var(--primary)]/20 text-[var(--primary)]'
            : 'bg-[var(--secondary)]/20 text-[var(--secondary)]'
        }`}
      >
        {isBot ? <Bot size={18} /> : <User size={18} />}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[80%] ${
          isBot ? '' : 'text-right'
        }`}
      >
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isBot
              ? 'bg-[var(--card)] text-[var(--foreground)] rounded-tl-none border border-[var(--border)]'
              : 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[var(--background)] rounded-tr-none'
          }`}
        >
          {message}
        </div>
        <span className="text-[10px] text-[var(--muted)] mt-1 px-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </motion.div>
  );
}
