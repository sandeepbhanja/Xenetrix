import './category.style.scss';

import { useState,useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';

import ProductCart from '../../component/product-cart/product-cart.component';

const Category = ()=>{
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
            setProducts(categoriesMap[category]);
        }, [category,categoriesMap]);
    
    return (
      <>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
        </div>
      </>
    );
};

export default Category;