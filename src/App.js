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

import CookieConsent from "react-cookie-consent";


function App() {
    const [cart, setCart] = useLocalStorage('cart', []);
    const [favourites, setFavourites] = useLocalStorage('favourites', []);
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      
      <Header cart={cart} setSearchQuery={setSearchQuery}/>
      <Routes>
         <Route index element={<HomePage cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites} searchQuery={searchQuery}/>} />
         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
         <Route path="/favourites" element={<Favourites cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites}/>} />
         <Route path="*" element={<NotFound />} />
         
      </Routes>
      <Footer/>

       <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="waggy"
        style={{ background: "#363634", color: "#fff", fontSize: "25px" }}
        buttonStyle={{ 
          background: "#DEAD6F", 
          color: "#363634", 
          fontSize: "20px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
        expires={120}
      >
       We use cookie. Accept it
      </CookieConsent>
    </div>
  );
}

export default App;
