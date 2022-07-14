import { Grid } from "@mui/material";
import React from "react";
const NewProduct = (props) => {
  console.log("New Product", props.history);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add new product</h1>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
