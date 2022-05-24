import React from 'react';
import './Topic.css';

const Topic = ({name, stargazerCount, onSearchSubmit}) => {
  return(
    <li>
      <button 
        className="topic-button"
        onClick={onSearchSubmit ? () => onSearchSubmit(name) : undefined} 
        type="button">{name}
      </button>
      <span>{stargazerCount} <i className="star filled icon"></i></span>
    </li>
  );
}

export default Topic;