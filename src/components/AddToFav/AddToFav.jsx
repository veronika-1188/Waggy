import { useState } from "react";
import './AddToFav.scss'
import { FaHeart } from "react-icons/fa";

function AddToFav({product, setFavourites, favourites}) {
    const liked = favourites.some((item)=> item === product.id)
      const addToFavourites = (productId) =>{
     setFavourites(prev => {
            if (prev.includes(productId)) {
                return prev.filter(id => id !== productId)
            }
            else {
                return [...prev, productId];

            }
        });
  }
    return (
        <button className={`btn-like ${liked ? "liked" : ""}`}
            onClick={() => {
                addToFavourites(product.id)
            }}>
            <FaHeart />
        </button>
    )
}

export default AddToFav;