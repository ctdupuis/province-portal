import React from 'react';
import './App.css';
import SessionsContainer from './containers/SessionsContainer';
import Header from './components/static/Header';
import PostsContainer from './containers/PostsContainer';
import MessagesContainer from './containers/MessagesContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SessionsContainer />
        <PostsContainer />
        <MessagesContainer />
      </main>
    </div>
  );
}

export default App;
