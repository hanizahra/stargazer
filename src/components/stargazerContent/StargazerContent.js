import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import fetchTopic from '../../queries/fetchTopic';
import Search from '../search/Search';
import TopicList from '../topicList/TopicList';

const StargazerContent = () => {
  const [getTopics, {data}] = useLazyQuery(fetchTopic);
  
  const onSearchSubmit = (term) => {
    getTopics({variables: {name: term}})
  };

  useEffect(() => {
    onSearchSubmit('react');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <div className="ui container">
      <header><h1>STARGAZER</h1></header>
      <Search onSearchSubmit={onSearchSubmit} />
      {data && <TopicList onSearchSubmit={onSearchSubmit} topic={data.topic} />}
    </div>
  );
}

export default StargazerContent;