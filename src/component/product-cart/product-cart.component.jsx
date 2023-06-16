import Button from "../button/button.component";
import './product-cart.style.scss';
const ProductCart = ({product}) => {
    const{name,price,imageUrl} = product;
  return (
    <div className="product-card-container">
      <img className="product-image" src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button ButtonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCart;
