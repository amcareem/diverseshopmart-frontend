import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';





function App() {
  return (
    <Router>nup
      <div className="App">
        <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route exact path='/products' element={<ProductPage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/signup' element={<SignupPage/>}/>





        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
