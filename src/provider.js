import React from 'react';
import { getContext, getThemes } from './theme-context';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getThemes().light,
      changeTheme: this.changeTheme
    };
  }
  changeTheme = name => {
    const themes = getThemes();
    if (themes) {
      const newTheme = themes[name];
      this.setState(state => ({
        theme: newTheme
      }));
      if (this.props.onThemeChanged) this.props.onThemeChanged(newTheme);
    }
  };
  render() {
    const ThemeContext = getContext();
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
