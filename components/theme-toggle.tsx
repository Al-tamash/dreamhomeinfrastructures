"use client";

import React from 'react';
import { useTheme } from '@/contexts/theme-context';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <Sun
          size={24}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 text-yellow-500'
              : 'opacity-0 rotate-90 text-yellow-500'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          size={24}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 text-white'
              : 'opacity-0 -rotate-90 text-white'
          }`}
        />
      </div>
    </button>
  );
}
