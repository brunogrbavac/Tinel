import React from "react";
import shoppingCart from '../../images/cart.png';
import shoppingCartFull from '../../images/cartFull.png';
import tinelLogo from '../../images/tinelLogo.svg';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { toggle } from "../../redux/cart";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector( store => store.cart.items );
    const toggleCartSidebar = () => {
        dispatch(toggle());
    };

    return(
        <header>
            <nav className="navbar">
                <Link to="/" className="navbar-link">
                    <img src={tinelLogo} alt="Tinel" className="navbar-logo"/>
                </Link>
                <div className="navbar-cart" onClick={()=>toggleCartSidebar()}>
                    <img src={(cartItems.length>0)?shoppingCartFull:shoppingCart} alt="Cart" id="cart-icon"/>
                    <span id="cart-status">
                        {(cartItems.length>0)?
                            `${cartItems.length} workshops in cart.`
                            : "Cart is empty."
                        }
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;