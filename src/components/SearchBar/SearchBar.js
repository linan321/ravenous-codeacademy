import React from 'react'
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
 'Highest Rated': 'rating',
 'Most Reviewed': 'review_count'

};

component SearchBar extends React.Components{
  renderSortByOptions(){
    return Object.keys(sortByOpitons).map(
      sortByOption => {
let sortByOptionValue = sortByOptions[sortByOption];
  });
  <li key = {sortByOptionValue} > {sortByOption} </li>

  render(){
    return(
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      <li {renderSortByOptions()} > </li>
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
);
  };

  }
};


export default SearchBar;
