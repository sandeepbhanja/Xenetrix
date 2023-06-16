import './cart-icon.style.scss';
import cartImg from '../../assets/icons8-shopping-bag-50.png';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CartIcon = ()=>{
    const {isCartOpen , setIsCartOpen} = useContext(CartContext);
    console.log(isCartOpen);
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return (
      <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <img className="shopping-icon" src={cartImg} alt="" />
        <span className="item-count">0</span>
      </div>
    );

}

export default CartIcon;