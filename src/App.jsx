import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import RouterView from './router';
import Header from './components/Header';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import api from './api/index';
import _throttle from 'lodash.throttle';

import './assets/scss/main.scss';

class App extends Component {
  state = {
    searchString: '',
    searchResults: '',
    totalItems: null,
    hasMoreItems: false
  };

  handleChange = searchString => {
    this.setState({ searchString });
  };

  handleSubmit = () => {
    if (this.state.searchString !== '') {
      api
        .search(this.state.searchString)
        .then(response => {
          if (!response.length) {
            this.setState({ searchResults: null });
          }
          if (response.data.length) {
            this.setState(
              {
                searchResults: response.data,
                totalItems: response.totalItems,
                hasMoreItems: response.hasMoreItems
              },
              () => {
                window.addEventListener(
                  'scroll',
                  _throttle(this.handleScroll, 500, {
                    leading: true,
                    trailing: true
                  })
                );
              }
            );
          }
        })
        .catch(error => console.log(error));
    }
  };

  handleScroll = e => {
    const pageHeight = document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);

    if (pageHeight <= windowHeight + scrollPosition) {
      alert('At the bottom');
    }
  };

  componentWillUnmount() {
    window.removeEventListener(
      'scroll',
      _throttle(this.handleScroll, 700, { leading: true, trailing: true })
    );
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { searchResults, hasMoreItems, totalItems } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header handleChange={handleChange} handleSubmit={handleSubmit} />
          <RouterView />
          <Jobs
            jobs={searchResults}
            hasMoreItems={hasMoreItems}
            totalItems={totalItems}
          />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
