import React from 'react';
import { StyleSheet } from 'react-native';
// import ThemeConsumer from './consumer';
import { ThemeContext } from './theme-context';

const applyTheme = (styles, PassedComponent) => {
  class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.currentTheme = '';
      this.currentStyle = {};
    }
    setTheme = theme => {
      if (styles && this.currentTheme !== theme.name) {
        this.currentTheme = theme.name;
        return StyleSheet.create(styles(theme));
      } else {
        return this.currentStyle;
      }
    };
    render() {
      return (
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => {
            this.currentStyle = this.setTheme(theme);
            return (
              <PassedComponent
                theme={theme}
                changeTheme={changeTheme}
                styles={this.currentStyle}
                {...this.props}
              />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  }
  return Parent;
};

export default applyTheme;
