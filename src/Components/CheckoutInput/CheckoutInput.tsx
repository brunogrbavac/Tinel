import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import './CheckoutInput.css';

const CheckoutInput = ({id, label, error, placeholder, type, check, setError}: { id: string; label: string, error: string, placeholder: string, type: string, check: any, setError: Function }) => {
    
    const [inputValue, setInputValue] = useState(()=>"");
    const [errorExists, setErrorExists] = useState<any>(()=>undefined);

    useEffect(()=>{
        if(errorExists==undefined) { setErrorExists(false) }
        else{
            setErrorExists(!check.test(inputValue));
            setError(!check.test(inputValue));
        };
    }, [inputValue]);


    return(
        <>
            <label htmlFor={id} className="checkout-label"> {label} {errorExists&&<span className="checkout-error-label">{error}</span>}</label>
            <input id={id} name={id} className={clsx(!errorExists?"checkout-input":"checkout-input checkout-input-error")} placeholder={placeholder} type={type} onBlur={(e)=>setInputValue(e.target.value)}/>
        </>
    );
};

export default CheckoutInput;