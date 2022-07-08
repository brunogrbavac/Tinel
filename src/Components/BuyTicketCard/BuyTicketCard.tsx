import React, { useState } from 'react';
import { Workshop } from '../../types';
import { useAppDispatch } from '../../redux/hooks';
import { add } from '../../redux/cart';
import './BuyTicketCard.css';

const BuyTicketCard = ({workshop}:{workshop: Workshop}) => {

    const dispatch = useAppDispatch();
    const [numberOfTickets, setNumberOfTickets] = useState<number>(()=>0);
    
    return(
        <div className="ticket-block">
            <h1 id="ticket-title">Buy Your Ticket</h1>
            <h2 id="ticket-price"> {workshop.price}<span id="ticket-currency">EUR</span></h2>
            <div id="ticket-select-buy">
                <div id="ticket-select">
                    <select value={numberOfTickets} onChange={(e)=>setNumberOfTickets(parseInt(e.target.value))}>
                        {[...Array(10).keys()].map(
                                num => <option value={num}>{num}</option>
                        )}
                    </select>
                </div>
                <div id="ticket-add-subtotal">
                    <button onClick={()=>{if(numberOfTickets>0)dispatch(add({workshop:workshop, quantity: numberOfTickets}));}}> Add to cart </button>
                    <p> Subtotal: {numberOfTickets*workshop.price}</p>
                </div>
            </div>
        </div>
    );
};

export default BuyTicketCard;