import React from 'react';
import './TopicList.css';
import Topic from '../topic/Topic';

const TopicList = ({topic, onSearchSubmit}) => {
  if (!topic) return <div id="no-result-div">0 results</div>;
  const renderTopics = topic.relatedTopics.map(({name, stargazerCount}, index) => {
    return(
      <Topic 
        key={index}
        name={name} 
        stargazerCount={stargazerCount} 
        onSearchSubmit={onSearchSubmit} 
      />
    );
  });

  return(
    <div>
      <ul id="result-topic">
        <Topic 
          name={topic.name}
          stargazerCount={topic.stargazerCount}
        />
      </ul>
      <h4>Related Topics</h4>
      <ul>
        {renderTopics}
      </ul>
    </div>
  );
}

export default TopicList;