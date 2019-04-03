import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import { autocompleteSuggestions } from '../../constants/';

const suggestions = autocompleteSuggestions.map(suggestion => ({
  label: suggestion
}));

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        className: 'Header__Autocomplete'
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span
              key={String(index)}
              style={{ fontWeight: 500, fontSize: '1.4rem' }}
            >
              {part.text}
            </span>
          ) : (
            <strong
              key={String(index)}
              style={{ fontWeight: 300, fontSize: '1.4rem' }}
            >
              {part.text}
            </strong>
          )
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  root: {
    width: '33vw',
    display: 'inline-block',
    position: 'relative',
    bottom: '5px',
    height: '100%',
    fontSize: '1.4rem'
  },
  container: {
    display: 'flex'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block',
    fontSize: '10rem'
  },
  suggestionsList: {
    margin: 0,
    padding: 0
  },
  divider: {
    height: '2rem'
  }
});

class IntegrationAutosuggest extends React.Component {
  state = {
    single: '',
    popper: '',
    suggestions: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <div className={classes.root}>
        <div className={classes.divider} />
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            placeholder: 'Área, lenguaje o framework',
            value: this.state.popper,
            onChange: this.handleChange('popper'),
            inputRef: node => {
              this.popperNode = node;
            },
            InputLabelProps: {
              shrink: true
            }
          }}
          renderSuggestionsContainer={options => (
            <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
              <Paper
                square
                {...options.containerProps}
                style={{
                  width: this.popperNode ? this.popperNode.clientWidth : null
                }}
              >
                {options.children}
              </Paper>
            </Popper>
          )}
        />
      </div>
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationAutosuggest);
