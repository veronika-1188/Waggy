import './App.css';
import './style.scss'
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offer from './components/Offer/Offer';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage'

function App() {
    const [cartCount, setCartCount] = useLocalStorage('CountCart', 0);
    // console.log(cartCount)
  return (
    <div className="App">
        <Header cartCount={cartCount}/>
      <Hero/>
      <Products cartCount={cartCount} setCartCount={setCartCount}/>
      <Offer/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
