import React from 'react';
import './App.css';
import SessionsContainer from './containers/SessionsContainer';
import Header from './components/static/Header';
import PostsContainer from './containers/PostsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SessionsContainer />
        <PostsContainer />
      </main>
    </div>
  );
}

export default App;
