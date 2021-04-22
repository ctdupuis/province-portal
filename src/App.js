import React from 'react';
import './App.css';
import SessionsContainer from './containers/SessionsContainer';
import Header from './components/static/Header';
import PostsContainer from './containers/PostsContainer';
import MessagesContainer from './containers/MessagesContainer';
import ReportsContainer from './containers/ReportsContainer';
import AlertHandler from './containers/AlertHandler';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SessionsContainer />
        <PostsContainer />
        <MessagesContainer />
        <ReportsContainer />
      </main>
        <AlertHandler />
    </div>
  );
}

export default App;
