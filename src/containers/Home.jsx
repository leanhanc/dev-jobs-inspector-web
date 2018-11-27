import React, { Component } from 'react';

import api from '../api/index';
import FormControl from '@material-ui/core/FormControl';
import SearchBar from 'material-ui-search-bar';

import '../assets/scss/pages/Home.scss';
import Jobs from '../components/Jobs';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { searchString: '', searchResults: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(searchString) {
    this.setState({ searchString });
  }

  handleSubmit(algo) {
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
              onChange={this.handleChange.bind(this)}
              onRequestSearch={this.handleSubmit.bind(this)}
              value={searchString}
            />
          </FormControl>
        </section>
        <Jobs jobs={searchResults} />
      </React.Fragment>
    );
  }
}
