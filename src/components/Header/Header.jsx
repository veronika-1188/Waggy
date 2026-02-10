import React from 'react'
import './header.scss'
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

//import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'

function Header({cartCount}) {
  return (
    <header className='header'>
        <div className="header__top">
            <div className="header__top-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header__top-search">
                <input type="search" name="search" placeholder='Search for more than 10, 000 products'/>
            </div>
            <div className="header__top-contacts">
                <h2 className="contacts-title">Phone</h2>
                <p className="contacts-text">+980-340-56-56</p>
            </div>
            <div className="header__top-contacts">
                <h2 className="contacts-title">Email</h2>
                <p className="contacts-text">waggy@gmail.com</p>
            </div>
        </div>
        <div className="header__bottom">
            <nav className="header__bottom-nav">
                <a href="#" className='nav__link'>Home</a>
                <a href="#" className='nav__link'>Page</a>
                <a href="#" className='nav__link'>Shop</a>
                <a href="#" className='nav__link'>Blog</a>
                <a href="#" className='nav__link'>Contact</a>
                <a href="#" className='nav__link'>Offer</a>
            </nav>
            <div className="header__bottom-icons">
                <FaUser />
                <FaHeart />
                <FaShoppingCart className='cart'/>
                <div className='cart-count'>{cartCount}</div>
            </div>
        </div>
    </header>
  )
}

export default Header