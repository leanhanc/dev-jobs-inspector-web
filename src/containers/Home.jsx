import React, { Component } from 'react';

import api from '../api/index';

export default class Home extends Component {
  componentDidMount() {
    api
      .search('java')
      .then(response => console.log(response))
      .catch(e => console.log(e));
  }
  render() {
    return <section id="Home" />;
  }
}
