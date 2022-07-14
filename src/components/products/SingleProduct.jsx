import { Grid, Button } from "@mui/material";
import React from "react";
const SingleProduct = ({ product }) => {
  return (
    <Grid item xs={4} style={{ border: "1px dotted" }}>
      <span>
        <h2>
          {product.title}
          <Button variant="outlined" color="primary">
            Edit
          </Button>{" "}
          <Button variant="outlined" color="secondary">
            Delete
          </Button>
        </h2>
      </span>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
    </Grid>
  );
};

export default SingleProduct;
