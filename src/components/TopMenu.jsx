import React from 'react';
import { AppBar, Toolbar, Typography, } from '@mui/material';
import "./CSSFiles/TopMenuCss.css";

import { Link } from 'react-router-dom';

const TopMenu = () => {

    return (
  <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/"  style={{color:"white", paddingRight:"1em"}}>Home</Link>
                    <Link to="/products"  style={{color:"white", paddingRight:"1em"}}>Products</Link>
                    <Link to="/contact-us"  style={{color:"white", paddingRight:"1em"}}>Contact Us</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </div> );
}
 
export default TopMenu;