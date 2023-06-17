import { useContext } from 'react';
import { ProductsContext } from '../../context/product.context';
import ProductCart from '../../component/product-cart/product-cart.component';
import './shop.style.scss';

const Shop = () =>{
    const {currentProducts} = useContext(ProductsContext);
    return(
        <div className='products-container'>
            {currentProducts.map((data)=>(
                <ProductCart key={data.id} product={data}/>
            ))}
        </div>
    )
}

export default Shop;