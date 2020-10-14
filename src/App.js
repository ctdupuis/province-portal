import React from 'react';
import './App.css';
import SessionsContainer from './containers/SessionsContainer';
import Header from './components/static/Header';
import Sidebar from './components/sessions/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Header />
      <main className="wrapper">
        <SessionsContainer />
      </main>
    </div>
  );
}

export default App;
