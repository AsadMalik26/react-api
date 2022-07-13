import React, { useState } from 'react';
import SingleProduct from './SingleProduct';
const Products = () => {
    const [products, setProducts] = useState([{title:"React", price:500, description:"Making React API by hard code testing "},{title:"React 2", price:300, description:"Making React API by hard code testing "}]);
    return ( <div>
        <h1>My Products</h1>
        {/* <SingleProduct product={products[0]}/> */}
        {products.map((product,index)=><SingleProduct product={product} key={index}/>)}
    </div> );
}
 
export default Products;