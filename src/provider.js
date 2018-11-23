import React from 'react';
import { ThemeContext, themes } from './theme-context';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      changeTheme: this.changeTheme
    };
  }
  changeTheme = name => {
    if (themes) {
      const newTheme = themes[name];
      this.setState(state => ({
        theme: newTheme
      }));
      if (this.props.onThemeChanged) this.props.onThemeChanged(newTheme);
    }
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
