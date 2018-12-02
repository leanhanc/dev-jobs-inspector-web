import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Landing from './components/Landing';

export default function RouterView() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
    </Router>
  );
}
