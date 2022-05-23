import React, { useState } from 'react';
import './Search.css';

const Search = ({onSearchSubmit}) => {
  const [input, setInput] = useState('');
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('onsubmit happend with input: ' + input);
    onSearchSubmit(input);
    console.log('this is input and this is event.target.value: ' + input + ' ' + event.target.value);
    setInput('');
  };

  const handleFocus = (event) => event.target.select();

  return(
    <form onSubmit={onFormSubmit} >
      <div id="input-container" class="ui fluid action input">
        <input 
          type="text" 
          placeholder="Enter a topic..." 
          value={input} 
          onInput={(event) => setInput(event.target.value)}
          onFocus={handleFocus}
        />
        <div class="ui button" onClick={onFormSubmit}>Search</div>
      </div>
    </form>
  );
};

export default Search;