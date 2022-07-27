import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/narbar';
import {Products} from './components/products'
import './App.css';
import { ProductDetails } from './components/productDetails';
import {Footer} from './components/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
