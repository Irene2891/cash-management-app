import React, { useState, useRef } from 'react';
import "../searchInput/searchFilterInput.css";
import searchIcon from "../assets/icons/searchIcon.svg";
import closeIcon from "../assets/icons/closeIcon.svg";




const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, inputIsFocused] = useState(false);
  const searchInputRef = useRef(null);

  const handleFocus = () => {
    inputIsFocused(true);
  };

 
  const handleClear = () => {
    setSearchValue('');
    if (searchInputRef.current){
       searchInputRef.current.focus(); 
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFocusOut =() =>{
    inputIsFocused(false);
  };



  return (
    <div className={`search-box ${isFocused ? 'focused' : ''}`}>
        <img
        src={searchIcon}
        alt="search-icon"
        className="searchIcon"
        />
      <input
        useRef={searchInputRef}
        type="text"
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocusOut}
        placeholder="Filter By Description"
        className='search-input'
      />
      {searchValue && (
        <button
        useRef={closeIcon} 
        className={`close-btn ${isFocused ?  'visible' : ''}`}
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