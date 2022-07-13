import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
const Products = () => {
    const [products, setProducts] = useState([]);
    // {title:"React", price:500, description:"Making React API by hard code testing "},{title:"React 2", price:300, description:"Making React API by hard code testing "}
    console.log("Calling Products component");

    const getData = () => {
        axios.get("https://asad-crud-api.herokuapp.com/api/expense")
        .then(
            res=>{
                setProducts(res.data);
                console.log("Data fetched");
            
            },
        )
        .catch(error => console.log("Error fetch data", error))
    }
    // getData();
    
    // here we used a hook useEffect - it will call getData() function & the [] is our initail array i.e empty
    React.useEffect(getData,[]);
    // so getData() will be called when it hook matches the initial state which is empty.
    // if it matched, getData() will be called otherwise it will not call it anymore

    // other thing  if we call only getData() without specifying the initial array, then the function will be called again and again when state changes
    //as when state change, the component will remount itself 
    
    return ( <div>
        <h1>My Products</h1>
        {products.length == 0 ? <p>There is no product</p>: <div>
        {products.map((product,index)=><SingleProduct product={product} key={index}/>)}
        </div> }
        
    </div> );
}
 
export default Products;