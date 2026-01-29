"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark theme
    setTheme('dark');
  }, []);

  useEffect(() => {
    if (mounted) {
      // Create/Update document class to always be dark
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      
      // Save to localStorage just in case, or we can skip it
      localStorage.setItem('theme', 'dark');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    // Disabled toggling
    setTheme('dark');
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
