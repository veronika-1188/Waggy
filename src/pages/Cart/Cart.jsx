import './cart.scss'
import products from '../../assets/data'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { MdOutlineStar } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import CartCount from '../../components/CartCount/CartCount'
import AddToFav from '../../components/AddToFav/AddToFav'

function Cart({ cart, setCart, favourites, setFavourites }) {
    const [cartCheck, setCartCheck] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    function deleteAll() {
        setCart([])
        setCartCheck([]);
        setTotalPrice(0)
    }

    const handleCheckboxChange = (itemId, itemPrice, itemCount) => {
        let price = Number(itemPrice) * itemCount
        setCartCheck(prev => {
            if (prev.includes(itemId)) {
                setTotalPrice(totalPrice - price)
                return prev.filter(id => id !== itemId);
            }
            else {
                setTotalPrice(totalPrice + price)
                return [...prev, itemId];

            }
        });
    };

    const deleteSelected = () => {
        setCart(prevCart => prevCart.filter(item => !cartCheck.includes(item.id)));
        setCartCheck([]);
        setTotalPrice(0)
    };

    useEffect(() => {
        let sum = 0
        cart.forEach(cartItem => {
            if (cartCheck.includes(cartItem.id)) {
                const price = Number(cartItem.price) * (cartItem.count || 1)
                sum += price
            }
        })
        setTotalPrice(sum)
    }, [cart, cartCheck])



    // function addToCheck(){

    // }

    //     useEffect(() => {
    //         function checkbox({cartItem}){
    //             setCartCheck([...cartCheck, cartItem.id]);
    //                 console.log(cartCheck);
    //         }

    // }, [checkRef]);

    // function totalPrice(){
    //     products.map((product, index)=>{
    //         if (cartCheck.includes(product.id)){

    //         }
    //     })
    // }





    return (
        <>
            <div className="cart__header">
                <h1 className="cart__header-title">Cart</h1>
                <div className="cart__header-delete">
                    <button className="cart__header-delete-selected" onClick={() => {
                        deleteSelected();
                    }}>delete selected ones</button>
                    <button className="cart__header-delete-all" onClick={() => {
                        deleteAll();
                    }}>delete all products</button>
                </div>

            </div>
            <div className="cart__products">
                {cart.length > 0 ?
                    cart.map((cartItem, index) => {

                        return (
                            <div className="products__catalog-card" key={index}>
                                <input type="checkbox"
                                    onChange={() => {
                                        handleCheckboxChange(cartItem.id, cartItem.price, cartItem.count)
                                    }}
                                    checked={cartCheck.includes(cartItem.id)}
                                />
                                <img src={cartItem.img} alt="" className="card-img" />
                                <div className="card-info">
                                    <h3 className="card-title">{cartItem.title}</h3>
                                    <div className="card-rating">
                                        <MdOutlineStar /> <p>{cartItem.rating}</p>
                                    </div>
                                    <p className="card-price">${cartItem.price * cartItem.count}</p>
                                    <CartCount
                                        cartID={cartItem.id}
                                        setCart={setCart}
                                        cart={cart}
                                        cartCount={cartItem.count}
                                    />
                                    <div className="card-btns">

                                        <AddToFav product={cartItem} setFavourites={setFavourites} favourites={favourites}/>
                                    </div>
                                </div>
                            </div>
                        )


                    }) :
                    <EmptyCart />
                }
                <h1>{totalPrice}</h1>

            </div>
        </>
    )
}
export default Cart;