import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Jobs from './components/Jobs';
import ResultsFound from './components/ResultsFound';
import Spinner from './components/ui/Spinner';

import api from './api/index';
import _throttle from 'lodash.throttle';

import './assets/scss/main.scss';

class App extends Component {
  state = {
    searchString: '',
    searchResults: '',
    locationFilter: null,
    totalItems: null,
    currentPage: 2,
    hasMoreItems: false,
    loading: false
  };

  handleSearchStringChange = e => {
    this.setState({ searchString: e.target.value });
  };

  handleLocationFilterChange = e => {
    this.setState({ locationFilter: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchString !== '') {
      this.setState({ currentPage: 2 });
      api
        .search(this.state.searchString, this.state.locationFilter)
        .then(response => {
          if (!response.length) {
            this.setState({ searchResults: null });
          }
          if (response.data.length) {
            this.setState(
              {
                searchResults: response.data,
                totalItems: response.totalItems,
                filteredItems: response.data.length,
                hasMoreItems: response.hasMoreItems
              },
              () => {
                window.addEventListener(
                  'scroll',
                  _throttle(this.handleScroll, 1000, {
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
      this.getNextPage();
    }
  };

  getNextPage = () => {
    if (this.state.hasMoreItems) {
      this.setState({ loading: true });

      api
        .search(
          this.state.searchString,
          this.state.locationFilter,
          this.state.currentPage
        )
        .then(({ data, hasMoreItems }) => {
          this.setState(
            prevState => ({
              searchResults: [...prevState.searchResults, ...data],
              hasMoreItems
            }),
            () => {
              this.setState({ currentPage: this.state.currentPage + 1 });
              this.setState({ loading: false });
            }
          );
        });
    }
  };

  componentWillUnmount() {
    window.removeEventListener(
      'scroll',
      _throttle(this.handleScroll, 700, { leading: true, trailing: true })
    );
  }

  render() {
    const {
      handleSearchStringChange,
      handleSubmit,
      handleLocationFilterChange
    } = this;
    const {
      searchString,
      searchResults,
      hasMoreItems,
      totalItems,
      loading
    } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header
            handleSearchStringChange={handleSearchStringChange}
            handleSubmit={handleSubmit}
            searchString={searchString}
            handleLocationFilterChange={handleLocationFilterChange}
          />
          {searchResults ? (
            <React.Fragment>
              <ResultsFound totalItems={totalItems} />
              <Jobs
                jobs={searchResults}
                hasMoreItems={hasMoreItems}
                totalItems={totalItems}
              />
            </React.Fragment>
          ) : (
            <Landing />
          )}
          <Spinner loading={loading} />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
