import { Fab, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "../CSSFiles/ProductsCSS.css";
import { useNavigate } from "react-router-dom";
import productOperation from "../../services/ProductOperations";

const Products = () => {
  const [products, setProducts] = useState([]);
  // {title:"React", price:500, description:"Making React API by hard code testing "},{title:"React 2", price:300, description:"Making React API by hard code testing "}
  // console.log("Calling Products component");

  const getData = () => {
    productOperation
      .getProduct()
      .then((data) => {
        setProducts(data);
        console.log("Data fetched");
      })
      .catch((error) => console.log("Error fetch data", error));
  };
  useEffect(getData, []);

  const navigate = useNavigate();
  const handleAddNewItem = (props) => {
    console.log(props);
    navigate("/products/new");
    // push function relocate the the location i.e address
  };

  return (
    <div>
      <h1>My Products</h1>
      <Fab
        style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
        color="primary"
        aria-label="add"
        onClick={handleAddNewItem}
      >
        <AddIcon />
      </Fab>

      {products.length === 0 ? (
        <p>There is no product</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct product={product} key={index} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
