import './App.css';
import './style.scss'
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import Favourites from './pages/Favourites/Favourites';

function App() {
    const [cart, setCart] = useLocalStorage('cart', []);
    const [favourites, setFavourites] = useLocalStorage('favourites', []);
    // console.log(cart)
  return (
    <div className="App">
      
      <Header cart={cart}/>
      <Routes>
         <Route index element={<HomePage cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
         <Route path="/favourites" element={<Favourites cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
         <Route path="*" element={<NotFound />} />
         
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
