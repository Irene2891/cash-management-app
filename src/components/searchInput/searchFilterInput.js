import React, { useState, useRef } from 'react';
import "../searchInput/searchFilterInput.css";
import searchIcon from "../assets/icons/searchIcon.svg";
import closeIcon from "../assets/icons/closeIcon.svg";




const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef();

  const handleFocus = () => {
    setIsFocused(true);
  };

 
  const handleClear = () => {
    setSearchValue('');
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };



  return (
    <div className={`search-box ${isFocused ? 'focused' : ''}`}>
        <img
        src={searchIcon}
        alt="search-icon"
        className="searchIcon"
        />
      <input
        ref={searchInputRef}
        type="text"
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Filter By Description"
        className='search-input'
      />
      {searchValue && (
        <button
        ref={closeIcon} 
        className="close-btn" 
        onClick={handleClear}
        >
          <img
        src={closeIcon}
        alt="close-icon"
        className="closeIcon"
        /> 
        </button>
      )}
      <button
       className="add-task-btn" >
        + Add Task
      </button>
    </div>
  );
};

export default SearchInput;