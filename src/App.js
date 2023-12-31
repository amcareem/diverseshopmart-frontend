import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ResetPwd } from './pages/ResetPwd';
import { Mobile } from './pages/Mobile';
import { Tablet } from './pages/Tablet';
import { Cart } from './pages/Cart';

import { Laptop } from './pages/Laptop';
import { MobAcc } from './pages/MobAcc';
import { Audio } from './pages/Audio';
import { ComAcc } from './pages/ComAcc';
import { Fragrance } from './pages/Fragrance';
import { SkinCare } from './pages/SkinCare';
import { ProductCategory } from './pages/ProductCategory';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>

      <Route exact path='/products' element={<ProductPage/>}>
        <Route path=':productId' element={<ProductPage/>}/>
      </Route>

      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/signup' element={<SignupPage/>}/>
      <Route exact path='/reset' element={<ResetPwd/>}/>
      <Route exact path='/mobile' element={<ProductCategory category="mobile"/>}/>
      <Route exact path='/tablet' element={<Tablet/>}/>
      <Route exact path='/laptop' element={<Laptop/>}/>
      <Route exact path='/moba' element={<MobAcc/>}/>
      <Route exact path='/audio' element={<Audio/>}/>
      <Route exact path='/coma' element={<ProductCategory category="coma"/>}/>
      <Route exact path='/frag' element={<ProductCategory category="frag"/>}/>
      <Route exact path='/skincare' element={<SkinCare/>}/>
      <Route exact path='/cart' element={<Cart/>}/>


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
