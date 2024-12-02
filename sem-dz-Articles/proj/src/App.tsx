import React from 'react';
import './App.css';
import ArticlesGrid from '../src/components/ArticlesGrid/ArticlesGrid';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="main-content">
        <ArticlesGrid />
      </div>
    </div>
  );
};

export default App;
