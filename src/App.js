import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route exact path='/products' element={<ProductPage/>}/>


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
