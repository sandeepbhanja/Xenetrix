import './cart-icon.style.scss';
import cartImg from '../../assets/icons8-shopping-bag-50.png';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CartIcon = ()=>{
    const {isCartOpen , setIsCartOpen,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);

    return (
      <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <img className="shopping-icon" src={cartImg} alt="" />
        <span className="item-count">{cartCount}</span>
      </div>
    );

}

export default CartIcon;