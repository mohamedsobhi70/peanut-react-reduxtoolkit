import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Tickets from './Components/Tickets/Tickets';
import Wishlist from './Components/Wishlist/Wishlist';
import Draws from './Components/Draws/Draws';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Products from './Components/Products/Products';
import Productdetails from './Components/Products/Productdetails';

function App() {
  return (
    <>
      <Header />
      <main className='py-8 flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/draws" element={<Draws />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:id" element={<Productdetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
