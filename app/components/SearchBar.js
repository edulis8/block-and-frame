import React, { Component } from 'react';

/*  
  This component requires the following props
  * items - array of objects to search through; should be all data
  * updateFiltered - method bound to component handling state that will update list
  The component rendering the list should render a filtered set of data and not actual data
*/

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  onSearchInput(e) {
    const filtered = this.props.items.filter((item) => {
      let bool = false;
      for (const key in item) {
        if (new RegExp(e.target.value.toLowerCase()).test(String(item[key]).toLowerCase())) {
          bool = true;
        }
      }
      return bool;
    });
    this.props.updateFiltered(filtered);
  }

  render() {
    return (
      <div className="ui icon transparent input">
        <input
          placeholder="Search"
          onChange={this.onSearchInput}
        />
        <i className="search icon"></i>
      </div>
    );
  }
}

export default SearchBar; 
