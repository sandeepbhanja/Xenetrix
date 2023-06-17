import "./checkout.style.scss";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import CheckoutItems from '../../component/checkout-items/checkout-items.component';

const Checkout = () => {
  const { cartItems, setIsCartOpen,cartTotal} =
    useContext(CartContext);
  setIsCartOpen(false);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => <CheckoutItems cartItem={item}/>)}
      <span className="total">{`Total:$${cartTotal}`}</span>
    </div>
  );
};

export default Checkout;
