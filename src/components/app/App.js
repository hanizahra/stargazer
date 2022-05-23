import React from 'react';
import './App.css';
import ApiProvider from '../../api/ApiProvider';
import StargazerContent from '../stargazerContent/StargazerContent';

const App = () => {    
  return (
    <ApiProvider>
      <StargazerContent />
    </ApiProvider>
  );
}

export default App;