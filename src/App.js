import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm'; // Import the RegistrationForm component
import logo from './logo.svg'; // Assuming you have this logo file in your src folder

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Registration Form */}
          <Route path="/register" element={<RegistrationForm />} />

          {/* Default Route */}
          <Route path="/" element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Edit <code>src/App.js</code> and save to reload.</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
