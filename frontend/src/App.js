import React from 'react';
import './App.css';
import Header from './headers/Header';
import Template from './homepage/Template';
import Homepage from './homepage/Homepage';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Formheader from './headers/Formheader';
import Questiontabs from './headers/Questiontabs';
import Question_form from './forms/Question_form';
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
          <Route path="/form/:id" element={<><Formheader/><Questiontabs/><Question_form/></>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
