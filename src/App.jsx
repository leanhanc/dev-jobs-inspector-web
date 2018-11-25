import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import Home from './containers/Home';
import './assets/scss/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Home />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
