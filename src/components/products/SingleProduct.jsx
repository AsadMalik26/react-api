import { Grid } from '@mui/material';
import React from 'react';
const SingleProduct = ({product}) => {
    return ( <Grid item xs={4}>
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <hr />
    </Grid> );
}
 
export default SingleProduct;