import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import fetchTopic from '../../queries/fetchTopic';
import Search from '../search/Search';
import TopicList from '../topicList/TopicList';

const StargazerContent = () => {
  const [getTopics, {loading, error, data}] = useLazyQuery(fetchTopic);
  
  const onSearchSubmit = (term) => {
    getTopics({variables: {name: term}});
  };

  useEffect(() => {
    onSearchSubmit('react');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const renderContent = (error, loading, data) => {
    if (loading) return <div></div>; 
    if (error) {
      return <div id="no-result-div">Something went wrong: {error.message}</div>;
    } 
    if (data) {
      return <TopicList onSearchSubmit={onSearchSubmit} topic={data.topic} />;
    }
  }

  return(
    <div className="ui container">
      <header><h1>STARGAZER</h1></header>
      <Search onSearchSubmit={onSearchSubmit} />
      {renderContent(error, loading, data)}
    </div>
  );
}

export default StargazerContent;