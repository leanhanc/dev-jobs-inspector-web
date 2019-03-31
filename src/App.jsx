import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Jobs from './components/Jobs';
import DateSelect from './components/DateSelect';
import ResultsFound from './components/ResultsFound';
import NoResultsFound from './components/NoResultsFound';
import Spinner from './components/ui/Spinner';
import SnackBar from './components/ui/Snackbar';
import ErrorIcon from '@material-ui/icons/Error';

import api from './api/index';
import _throttle from 'lodash.throttle';

import './assets/scss/main.scss';

class App extends Component {
  state = {
    searchString: '',
    locationFilter: null,
    dateFilter: '',
    noResultsFound: false,
    totalItems: null,
    currentPage: 1,
    hasMoreItems: false,
    loading: false,
    errorMessage: '',
    openSnackbar: false
  };

  handleSearchStringChange = e => {
    this.setState({ searchString: e.target.value });
  };

  handleLocationFilterChange = e => {
    this.setState({ locationFilter: e.target.value });
  };

  handleDateFilterChange = e => {
    this.setState({ dateFilter: e.target.value }, () => {
      if (this.state.searchString !== '') {
        this.setState({ currentPage: 1, loading: true });
        api
          .search(
            this.state.searchString,
            this.state.locationFilter,
            this.state.dateFilter
          )
          .then(response => {
            if (!response.data.length) {
              this.setState({
                loading: false,
                searchResults: [],
                noResultsFound: true
              });
            }
            if (response.data && response.data.length) {
              this.setState({
                searchResults: response.data,
                totalItems: response.totalItems,
                hasMoreItems: response.hasMoreItems,
                loading: false,
                currentPage: this.state.currentPage + 1
              });
            }
          });
      }
    });
  };

  handleSubmit = e => {
    this.setState({
      searchResults: null,
      hasMoreItems: false,
      noResultsFound: false,
      totalItems: null
    });
    e.preventDefault();
    if (this.state.searchString !== '') {
      this.setState({ currentPage: 1, loading: true });
      api
        .search(
          this.state.searchString,
          this.state.locationFilter,
          this.state.dateFilter
        )
        .then(response => {
          if (!response.data.length) {
            this.setState({
              searchResults: [],
              noResultsFound: true,
              loading: false
            });
          }
          if (response.data && response.data.length) {
            this.setState(
              {
                searchResults: response.data,
                totalItems: response.totalItems,
                hasMoreItems: response.hasMoreItems,
                loading: false,
                currentPage: this.state.currentPage + 1
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
        .catch(error => {
          if (error.message === 'Failed to fetch') {
            this.setState({
              errorMessage:
                'No se pudo obtener los datos. Por favor, intentá más tarde.'
            });
          } else {
            this.setState({
              errorMessage:
                'Hubo un error inesperado. Por favor, intentá más tarde.'
            });
          }
          this.setState({
            loading: false,
            openSnackbar: true
          });
        });
    }
  };

  getNextPage = () => {
    if (this.state.hasMoreItems) {
      this.setState({ loading: true });
      api
        .search(
          this.state.searchString,
          this.state.locationFilter,
          this.state.dateFilter,
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

  handleSnackbarClick = state => () => {
    this.setState({ openSnackbar: true, ...state });
  };

  handleSnackbarClose = () => {
    this.setState({ openSnackbar: false });
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
      handleLocationFilterChange,
      handleDateFilterChange,
      handleSnackbarClose
    } = this;
    const {
      searchString,
      searchResults,
      dateFilter,
      hasMoreItems,
      noResultsFound,
      totalItems,
      loading,
      openSnackbar,
      errorMessage
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
          {searchResults && searchResults.length ? (
            <React.Fragment>
              <section className="results-found__container">
                <ResultsFound totalItems={totalItems} />
                <DateSelect
                  handleChange={handleDateFilterChange}
                  dateFilter={dateFilter}
                  loading={loading}
                />
              </section>
              <Jobs
                jobs={searchResults}
                hasMoreItems={hasMoreItems}
                totalItems={totalItems}
                loading={loading}
              />
            </React.Fragment>
          ) : noResultsFound ? (
            <NoResultsFound
              handleChange={handleDateFilterChange}
              dateFilter={dateFilter}
              loading={loading}
            />
          ) : loading ? (
            <Spinner loading={loading} height="50vh" />
          ) : (
            <Landing />
          )}
          <Footer />
          <SnackBar
            openSnackbar={openSnackbar}
            handleClose={handleSnackbarClose}
            errorMessage={errorMessage}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.2rem',
                textAlign: 'center'
              }}
            >
              <ErrorIcon />
              &nbsp;
              {errorMessage}
            </span>
          </SnackBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
