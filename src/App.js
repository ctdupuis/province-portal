import React from 'react';
import './App.css';
import SessionsContainer from './containers/SessionsContainer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <SessionsContainer />
      </main>
    </div>
  );
}

export default App;
