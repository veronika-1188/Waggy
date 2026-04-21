import Gallery from '../../components/Gallery/Gallery';
import Hero from '../../components/Hero/Hero'
import Offer from '../../components/Offer/Offer';
import Products from '../../components/Products/Products';
import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage'

function HomePage({cart, setCart, favourites, setFavourites}) {


    
    return (
        <>
            <Hero />
            <Products cart={cart} 
            setCart={setCart}
            favourites={favourites}
            setFavourites={setFavourites} />
            <Offer />
            <Gallery />
        </>
    )
}

export default HomePage;