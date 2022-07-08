import React from 'react';
import clock from '../../images/clock.png';
import calendar from '../../images/calendar.png';
import shoppingCart from '../../images/cart.png';
import { useAppDispatch } from '../../redux/hooks';
import { add } from '../../redux/cart';
import { Workshop } from '../../types';
import './WorkshopCardInfo.css';
import { Link } from 'react-router-dom';

const WorkshopCardInfo = ({workshop}:{workshop: Workshop}) => {
    
    const dispatch = useAppDispatch();

    return(
        <div className="card-info">
            <p className="card-stamp">
                <img src={calendar} className="date-time-icon" alt="Date"/> {new Date(workshop.date).toLocaleDateString("en-UK")}
                <span id="card-timestamp" className="card-stamp">
                    <img src={clock} className="date-time-icon" alt="Time"/> {new Date(workshop.date).toLocaleTimeString("en-UK")}h
                </span> 
            </p>
            <Link to={`/workshop/${workshop.id}`}>
                <h1 id="card-title">{(workshop.title.length)>20?workshop.title.substring(0,20)+' ...':workshop.title}</h1>
            </Link>
            <h2 id="card-price"> {workshop.price}<span id="card-currency">EUR</span></h2>
            <button id="card-buy-button" onClick={()=>dispatch(add({workshop: workshop, quantity: 1}))}>Add to Cart</button>
            <button id="card-buy-button-no-text" onClick={()=>dispatch(add({workshop: workshop, quantity: 1}))}> 
                <img src={shoppingCart} alt="shoppingCart"/>
            </button>
        </div>
    );
};

export default WorkshopCardInfo;