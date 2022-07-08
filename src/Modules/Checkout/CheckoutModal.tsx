import React from 'react';
import Checkout from './Checkout';
import './CheckoutModal.css';

const CheckoutModal = () => {
    
    return(
        <div className="checkout-modal">
            <div className="checkout-modal-content">
                <Checkout/>
            </div>
        </div>
    );
};

export default CheckoutModal;