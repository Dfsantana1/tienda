import React from 'react';
import Home from '../pages/homePage/home';
import Cart from './cart';
import Products from '../pages/product';
import LoginForm from './login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './registro/registro';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginForm" element={<LoginForm/>}/>
          <Route path='/registro' element={<RegistrationForm/> }/>

        </Routes>
      </div>
    </Router>
  );
}


export default App;
