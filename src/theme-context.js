import React from 'react';

// export const themes = {
//   light: {
//     name: 'light',
//     foreground: '#000000',
//     background: '#F7F7F7',
//     textPrimary: 'black'
//   },
//   dark: {
//     name: 'dark',
//     foreground: '#ffffff',
//     background: '#222222',
//     textPrimary: 'white'
//   }
// };

// export const ThemeContext = React.createContext({
//   theme: themes.dark, // default value,
//   changeTheme: () => {}
// });

const Theme = {
  themes: null,
  context: null
};

export const init = themes => {
  Theme.themes = themes;
  Theme.context = React.createContext({
    theme: themes.dark, // default value,
    changeTheme: () => {}
  });
};

export const getThemes = () => Theme.themes;

export const getContext = () => Theme.context;
