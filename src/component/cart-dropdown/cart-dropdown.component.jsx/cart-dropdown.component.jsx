import "./cart-dropdown.style.scss";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import Button from "../../button/button.component";

import CartItem from "../../cart-item/cart-item.component";
import { CartContext } from "../../../context/cart.context";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckoutHandler = ()=>{
    navigate("/checkout");
  }

  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
        <Button onClick={goToCheckoutHandler}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
