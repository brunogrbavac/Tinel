import React, { useState } from "react";
import cover from '../../images/cover.png';
import trash from '../../images/trash.png';
import { CartItem } from "../../types";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { add, remove, change, toggle } from "../../redux/cart";
import './CheckoutCard.css';

const CheckoutCard = ({item}:{item:CartItem}) => {    

    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState<number>(()=>item.quantity);

    const quantityChanged = (n:number) => {
        setQuantity(n);
        dispatch(change({...item, quantity: n}));
    };
    
    return(
        <div className="cart-card">
            <div className="cc-cover">
                <img src={item.workshop.imageUrl} alt="Cover." />
            </div>
            <div className="cc-info-container">
                <div id="cc-title-container">
                    <p id="cc-title">{(item.workshop.title.length)>15?item.workshop.title.substring(0,15)+' ...':item.workshop.title}</p>
                    <button id="cc-trash-button" onClick={()=>dispatch(remove(item))}>                    
                        <img src={trash} alt="Trash"/>
                    </button>
                </div>

                <div id="cart-select-buy">
                    <div id="cart-select">
                        <select value={quantity} onChange={(e)=>quantityChanged(parseInt(e.target.value))}>
                            {[...Array(10).keys()].map(
                                num => <option value={num}>{num}</option>
                            )}
                        </select>
                    </div>
                    <p id="cc-total"> {quantity*item.workshop.price},00 <span>EUR</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default CheckoutCard;