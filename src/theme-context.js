import React from 'react';

const Theme = {
  themes: null,
  context: null
};

export const init = themes => {
  if (themes) {
    const keys = Object.keys(themes);
    if (keys && keys.length > 0) {
      let defaultTheme = keys[0];
      Theme.themes = themes;
      Theme.context = React.createContext({
        theme: themes[defaultTheme], // default value,
        changeTheme: () => {}
      });
    } else {
      throw 'Object dont have any themes.';
    }
  } else {
    throw 'Themes not found. Make sure you are passing proper params in init.';
  }
};

export const getThemes = () => Theme.themes;

export const getContext = () => Theme.context;
