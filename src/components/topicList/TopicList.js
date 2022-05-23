import React from 'react';
import './TopicList.css';
import Topic from '../topic/Topic';

const TopicList = ({topic, onSearchSubmit}) => {
  if (!topic) return <div id="no-result-div">0 results</div>;
  console.log('here is topic: ' + JSON.stringify(topic));
  console.log('here is topic.relatedTopics ' + JSON.stringify(topic.relatedTopics));
  const renderTopics = topic.relatedTopics.map(({name, stargazerCount}, index) => {
    return(
      <Topic 
        key={index} // needs to be replaced with a real id
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