import './BtnAddToCart.scss'
import { useState } from "react";

function BtnAddToCart({product, setCart, cart}) {
    const added = cart.some((item)=> item.id === product.id)
    const addToCart = (product) => {
  setCart(prevCart => {
    if (prevCart.some(item => item.id === product.id)) {
      return prevCart.map(productItem=> productItem.id === product.id ? {...productItem, count: productItem.count + 1} : productItem
      ); 
    }
    return [...prevCart, {id: product.id,
      title: product.title,
      price: product.price,
      rating: product.rating,
      img: product.img, count: 1}];
  });
};
    return (
        <button
            className={`btn-Add ${added ? "added" : ""} `}
            onClick={() => {
                addToCart(product);
            }}>
            ADD TO CART
        </button>
    )
}
export default BtnAddToCart