import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { toggleSuccess } from '../../redux/success';
import './SuccessModal.css';

const SuccessModal = () => {

    const dispatch = useAppDispatch();
    
    return(
        <div className="success-modal-back">
            <div className="success-modal">
                <div className="success-modal-content">
                    <h1 className="success-ty"> Thank you! </h1>
                    <p className="success-msg">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.</p>
                    <Link to="/" onClick={()=>dispatch(toggleSuccess())}>
                        <button className="success-btn" >Back to Shop</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;