import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get initial theme from localStorage or default to theme1
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem('selectedTheme') as Theme;
    return savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme) 
      ? savedTheme 
      : 'theme1';
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Update theme and persist to localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('selectedTheme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Apply theme to document on mount and theme change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 