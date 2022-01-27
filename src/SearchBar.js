import React from 'react';

const SearchBar = ({findItem, setFindItem}) => {
  return (
    <div className='searchBar'>
      <input 
        type="search" 
        placeholder='Search for an item' 
        value={findItem} 
        onChange={(e) => setFindItem(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;