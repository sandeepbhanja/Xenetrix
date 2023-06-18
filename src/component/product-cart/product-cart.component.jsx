import Button from "../button/button.component";
import './product-cart.style.scss';

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const ProductCart = ({product}) => {
    const{name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addItem = ()=>{
      addItemToCart(product)
    };
    
  return (
    <div className="product-card-container">
      <img className="product-image" src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button onClick={addItem} ButtonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCart;
