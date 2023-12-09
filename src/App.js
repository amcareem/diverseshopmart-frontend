import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>

        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;
