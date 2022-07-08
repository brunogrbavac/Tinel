import React, { FormEvent, useMemo, useState } from 'react';
import CheckoutInput from '../../Components/CheckoutInput/CheckoutInput';
import closeIcon from '../../images/close.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleCheckout } from '../../redux/checkout';
import { addressCheck, emailCheck, nameCheck, zipCheck } from '../../Components/CheckoutInput/Checks';
import { postData } from '../../fetch';
import { toggleSuccess } from '../../redux/success';
import { reset } from '../../redux/cart';
import './Checkout.css';
import '../../Components/CheckoutInput/CheckoutInput.css';

const Checkout = () => {

    const dispatch = useAppDispatch();
    const cart = useAppSelector(store => store.cart.items);
    const [nameError, setNameError] = useState<boolean>(()=>true);
    const [lastnameError, setLastnameError] = useState<boolean>(()=>true);
    const [emailError, setEmailError] = useState<boolean>(()=>true);
    const [addressError, setAddressError] = useState<boolean>(()=>true);
    const [zipError, setZipError] = useState<boolean>(()=>true);
    const [checked, setChecked] = useState<boolean>(()=>false); 

    const total = useMemo(()=>{  
        let sum = 0;
        cart.forEach((item, index)=>{
            sum += item.workshop.price*item.quantity;
        });
        return sum;
    },[cart]);


    const sumbit = async (e: FormEvent) => {
        e.preventDefault();
        let toSend = {
            products: 
                cart.map( item => {return({
                    ...item.workshop,
                    quantity: item.quantity,
                });}),
            total: total,
        };

        let data = await postData(`https://brunogrbavac-tinel.herokuapp.com/orders`, toSend);
        dispatch(reset());
        dispatch(toggleCheckout());
        dispatch(toggleSuccess());
    };
    
    return(
        <div className="checkout-container">
            <div className="checkout-title-close">
                <div className="checkout-title">
                    <h1>Checkout</h1>
                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div className="checkout-close" onClick={()=>dispatch(toggleCheckout())}>
                    <img src={closeIcon} alt="Close checkout"/>
                </div>
            </div>

            <form className="checkout-form" onSubmit={(e)=>sumbit(e)}>
                <CheckoutInput id="f1" label="First Name" error="Your first name contains invalid symbol." placeholder="Type your first name here" type="text" check={nameCheck} setError={setNameError}/>
                <CheckoutInput id="f2" label="Last Name" error="Your last name contains invalid symbol." placeholder="Type your last name here" type="text" check={nameCheck} setError={setLastnameError}/>
                <CheckoutInput id="f3" label="Email Address" error="Your email address is invalid." placeholder="Type your email address here" type="email" check={emailCheck} setError={setEmailError}/>
                
                <div className="checkout-date-gender">
                    <div id="checkout-d1">
                        <label htmlFor="f4" className="checkout-label">Date of Birth</label>
                        <input type="date" id="f4" className="checkout-input" placeholder="DD.MM.YYYY"/>
                    </div>
                    <div id="checkout-d2">
                        <label htmlFor="f5" className="checkout-label">Gender</label>
                        <select id="f5" className="checkout-input" placeholder="Gender">
                            <option> Male</option>
                            <option> Female</option>
                        </select>
                    </div>
                </div>
                
                <CheckoutInput id="f6" label="Address" error="Your address contains invalid symbol." placeholder="Type your address here" type="text" check={addressCheck} setError={setAddressError}/>
                <CheckoutInput id="f7" label="Zip Code " error="Your zipcode contains invalid symbol." placeholder="eg. 21310" type="number" check={zipCheck} setError={setZipError}/>
                
                <div id="checkout-agree">
                    <input type="checkbox" id="f8" className="checkout-input" checked={checked} onChange={()=>setChecked(!checked)}/>
                    <span className="checkout-label" id="lf8">I agree</span>
                </div>

                <button type="submit" id="checkout-submit" disabled={nameError||lastnameError||emailError||addressError||zipError||!checked}>
                    Checkout
                </button>

            </form>
        </div>
    );
};

export default Checkout;