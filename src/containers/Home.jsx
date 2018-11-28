import React, { Component } from 'react';

import api from '../api/index';
import FormControl from '@material-ui/core/FormControl';
import SearchBar from 'material-ui-search-bar';
import Jobs from '../components/Jobs';

import '../assets/scss/pages/Home.scss';
import '../assets/scss/pages/Jobs.scss';

export default class Home extends Component {
  
    state = { searchString: '', searchResults: [] };

  handleChange = (searchString) => {
    this.setState({ searchString });
  }

  handleSubmit = (algo) => {
    api
      .search(this.state.searchString)
      .then(response => {
        this.setState({ searchResults: response });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { searchString, searchResults } = this.state;
    return (
      <React.Fragment>
        <section id="Home">
          <FormControl className="form">
            <SearchBar
              placeholder="Buscar"
              onChange={this.handleChange}
              onRequestSearch={this.handleSubmit}
              value={searchString}
            />
          </FormControl>
        </section>
        <Jobs jobs={searchResults} />
      </React.Fragment>
    );
  }
}
