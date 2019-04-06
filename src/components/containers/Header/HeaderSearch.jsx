import React from 'react';
import { Icon, Input, AutoComplete } from 'antd';

export default class Complete extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    if (value !== '') {
      const result = this.props.suggestions.filter(suggestion =>
        suggestion.toUpperCase().startsWith(value.toUpperCase())
      );
      this.setState({ dataSource: result });
    } else {
      this.setState({ dataSource: [] });
    }
  };

  render() {
    const { dataSource } = this.state;
    const { className, placeholder, searchHandler, onSearchTermInputChange } = this.props;

    return (
      <div className="global-search-wrapper">
        <AutoComplete
          className={`${className} global-search`}
          dataSource={dataSource}
          onSearch={this.handleSearch}
          onChange={onSearchTermInputChange}
          placeholder={placeholder}
        >
          <Input
            suffix={
              <Icon
                type="search"
                onClick={searchHandler}
                style={{ position: 'relative', right: '10px' }}
              />
            }
          />
        </AutoComplete>
      </div>
    );
  }
}
