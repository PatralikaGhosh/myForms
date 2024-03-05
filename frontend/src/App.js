import React from 'react';
import './App.css';
import Header from './headers/Header';
import Template from './homepage/Template';
import Homepage from './homepage/Homepage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Formheader from './headers/Formheader';
import Questiontabs from './headers/Questiontabs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<>
            <Header/>
            <Template/>
            <Homepage/>
          </>} />
          <Route path="/form/:id" element={<><Formheader/><Questiontabs/></>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
