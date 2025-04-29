import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: 'light' | 'dark';
  themeMode: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = Appearance.getColorScheme() || 'light';
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme);

  const toggleTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    if (mode === 'system') {
      const newSystemTheme = Appearance.getColorScheme() || 'light';
      setTheme(newSystemTheme);
    } else {
      setTheme(mode);
    }
  };

  // Atualiza o tema quando o sistema muda (opcional)
  Appearance.addChangeListener(({ colorScheme }) => {
    if (themeMode === 'system') {
      setTheme(colorScheme || 'light');
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};