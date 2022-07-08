import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import { useAppSelector } from "../../redux/hooks";
import './Layout.css';
import CheckoutModal from "../Checkout/CheckoutModal";
import SuccessModal from "../SuccessModal/SuccessModal";


const Layout = ( {children}:any) => {

  const visibleCheckout = useAppSelector(store =>store.checkout.visible);
  const visibleSuccess = useAppSelector(store =>store.success.visible);

  return (
    <>
        {visibleSuccess&&<SuccessModal/>}
        {visibleCheckout&&<CheckoutModal/>}
        <Cart/>
        <Navbar/>
            <div className="layout">
                {children}
            </div>
        <Footer/>
    </>
  );
};

export default Layout;