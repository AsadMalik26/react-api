import React from 'react';
const SingleProduct = ({product}) => {
    return ( <div>
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <hr />
    </div> );
}
 
export default SingleProduct;