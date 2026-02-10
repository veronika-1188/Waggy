import React from "react";
import "./products.scss";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import products from "../../assets/data";

function Products({ cartCount, setCartCount }) {
  const [showCat, setShowCat] = useState(true);
  const [showDog, setShowDog] = useState(true);
  const [showBird, setShowBird] = useState(true);

  const filtered = products.filter((product) => {
    const matchCategory =
      (!showCat && !showDog && !showBird) ||
      (product.category === "cat" && showCat) ||
      (product.category === "dog" && showDog) ||
      (product.category === "bird" && showBird);

    return matchCategory;
  });

  const grouped = filtered.reduce((acc, product) => {
    acc[product.category] ??= [];
    acc[product.category].push(product);
    return acc;
  }, {});

  const selectCat = () => {
    setShowBird(false);
    setShowDog(false);
    setShowCat(true);
  };
  //console.log(grouped)
  const addToCart = () => {
    setCartCount(Number(cartCount) + 1);
  };
  return (
    <section className="products">
      <div className="products__top">
        <h1 className="products__top-title">Products</h1>
        <div className="products__top-filter">
          <label>
            <input
              type="radio"
              name="category"
              value="all"
              onChange={() => {
                setShowCat(true);
                setShowDog(true);
                setShowBird(true);
              }}
            />{" "}
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="cat"
              onChange={() => {
                setShowCat(true);
                setShowDog(false);
                setShowBird(false);
              }}
            />{" "}
            CAT
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="dog"
              onChange={() => {
                setShowCat(false);
                setShowDog(true);
                setShowBird(false);
              }}
            />{" "}
            DOG
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="bird"
              onChange={() => {
                setShowCat(false);
                setShowDog(false);
                setShowBird(true);
              }}
            />{" "}
            BIRD
          </label>
        </div>
        <button className="products__top-btn">SHOP ALL</button>
      </div>
      <div className="products__catalog">
        {Object.entries(grouped).map(([category, products]) => {
            return(
            products.map((product) => {
              return (
                <div className="products__catalog-card">
                  <img src={product.img} alt="" className="card-img" />
                  <div className="card-info">
                    <h3 className="card-title">{product.title}</h3>
                    <div className="card-rating">
                      <MdOutlineStar /> <p>{product.rating}</p>
                    </div>
                    <p className="card-price">{product.price}</p>
                    <div className="card-btns">
                      <button
                        className="btn-Add"
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        ADD TO CART
                      </button>
                      <button className="btn-like">
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )
        })}
      </div>
    </section>
  );
}

export default Products;
