import React, { useEffect, useState } from "react";
import CheckoutCard from '../../Components/CheckoutCard/CheckoutCard';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { toggle } from "../../redux/cart";
import { toggleCheckout } from "../../redux/checkout";
import closeIcon from '../../images/close.png';
import cart from '../../images/cart.png';
import './Cart.css';

const Cart = () => {
    
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector( store => store.cart.items );
    const cartVisible = useAppSelector( store => store.cart.visible );
    const [total, setTotal] = useState<number>(()=>0);

    const toggleCartSidebar = () => {
        dispatch(toggle());
    };

    useEffect(() => {
        let sum = 0;
        cartItems.forEach((item, index) => {
            sum += item.workshop.price*item.quantity;
        });
        setTotal(sum);
    }, [cartItems]);

    return(
        <div className={cartVisible?"cart-sidebar cart-open":"cart-sidebar-closed cart-closed"}>
            <div className="cart-and-close">
                <img src={cart} alt="Cart"/>
                <span>{cartItems.length} Workshops</span>
                <img src={closeIcon} alt="Close" id="close" onClick={()=>toggleCartSidebar()}/>
            </div>
            <div className="cart-items">
                {cartItems.map( item =>
                    <CheckoutCard item={item}/> 
                )}
            </div>            
            <div className="cart-total">
                <p id="cart-subtotal">SUBTOTAL:</p>
                <p id="cart-total">{total}<span>EUR</span></p>
            </div>
            <div className="cart-checkout" onClick={()=>{if(cartItems.length>0)dispatch(toggleCheckout());}}>
                <button disabled={cartItems.length<1}>Checkout</button>
            </div>
        </div>
    );
};

export default Cart;