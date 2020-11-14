import React from 'react';
import './App.css';
import SessionsContainer from './containers/SessionsContainer';
import Header from './components/static/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SessionsContainer />
      </main>
    </div>
  );
}

export default App;
