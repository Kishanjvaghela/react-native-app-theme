import React from 'react';
import Colors from '@colors';

export const themes = {
  light: {
    name: 'light',
    foreground: '#000000',
    background: '#F7F7F7',
    textPrimary: Colors.primaryColor
  },
  dark: {
    name: 'dark',
    foreground: '#ffffff',
    background: '#222222',
    textPrimary: Colors.textLight
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // default value,
  changeTheme: () => {}
});
