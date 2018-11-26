import React from 'react';

export const themes = {
  light: {
    name: 'light',
    foreground: '#000000',
    background: '#F7F7F7',
    textPrimary: 'black'
  },
  dark: {
    name: 'dark',
    foreground: '#ffffff',
    background: '#222222',
    textPrimary: 'white'
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // default value,
  changeTheme: () => {}
});
