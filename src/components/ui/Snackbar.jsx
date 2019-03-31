import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import React, { Component } from 'react';

export default class Snack extends Component {
  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={this.props.openSnackbar}
        onClose={this.props.handleClose}
        autoHideDuration={4000}
      >
        <SnackbarContent
          action="error"
          message={this.props.children}
          style={{ backgroundColor: '#E84855' }}
        />
      </Snackbar>
    );
  }
}
