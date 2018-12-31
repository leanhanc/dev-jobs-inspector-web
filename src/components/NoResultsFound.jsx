import React, { Component } from 'react';
import DateSelect from './DateSelect';
import '../assets/scss/pages/Jobs.scss';

export default class NoResultsFound extends Component {
  render() {
    return (
      <div className="no-results-found">
        No hay avisos para mostrar{' '}
        <span role="img" aria-label="Sad Face">
          &nbsp; 😢
        </span>
        {this.props.dateFilter ? (
          <DateSelect
            handleChange={this.props.handleChange}
            dateFilter={this.props.dateFilter}
          />
        ) : null}
      </div>
    );
  }
}
