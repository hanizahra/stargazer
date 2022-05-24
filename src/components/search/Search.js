import React, { useState } from 'react';
import './Search.css';

const Search = ({onSearchSubmit}) => {
  const [input, setInput] = useState('');
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(input);
    setInput('');
  };

  const handleFocus = (event) => event.target.select();

  return(
    <form onSubmit={onFormSubmit} >
      <div id="input-container" className="ui fluid action input">
        <input 
          type="text" 
          placeholder="Enter a topic..." 
          value={input} 
          onInput={(event) => setInput(event.target.value)}
          onFocus={handleFocus}
        />
        <div className="ui button" onClick={onFormSubmit}>Search</div>
      </div>
    </form>
  );
};

export default Search;