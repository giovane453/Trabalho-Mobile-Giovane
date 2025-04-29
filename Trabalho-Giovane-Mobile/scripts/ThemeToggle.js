import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable onPress={toggleTheme} style={styles.button}>
      <ThemedText>
        {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});