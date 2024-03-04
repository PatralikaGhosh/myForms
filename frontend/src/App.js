import React from 'react';
import './App.css';
import Header from './headers/Header';
import Template from './homepage/Template';
import Homepage from './homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Template/>
      <Homepage/>
      </div>
  );
}

export default App;
