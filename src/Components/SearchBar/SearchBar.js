import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'

const SearchBar = ({ allMons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  const handleChange = event => {
    setSearchTerm(event.target.value);
    const results = allMons.filter(item =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);

  };



  return (

    <div className='searchResultsPage'>
      <div className='justSearch'>
        <form >
          <input
            className='searchBar'
            type="text"
            placeholder="Type Enter To Clear Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
      {searchResults.map(item => (
        <div className='singleSearchDisplay' key={item.id}>
          <h2>{item.name}</h2>
          <img className='pokeImage' src={item.image} alt={item.name} />
          <p>WEIGHT: {item.weight}</p>
        </div>
      ))}

    </div>
  );
};

export default SearchBar;
SearchBar.propTypes = {
  allMons: PropTypes.array,
}