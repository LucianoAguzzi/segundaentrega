import React, {useState, useEffect} from 'react';
import Landing from "./components/Landing";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import Footer from './components/Footer/Footer';
import CartProvider, { CartContext } from './components/Context/CartContext';



function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Landing/>
      <Navbar/>
      <AppRoute/>
      </BrowserRouter>
      <Footer/>
      </CartProvider>
    </div>
  );
}



export default App;
