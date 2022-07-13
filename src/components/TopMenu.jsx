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
                    <Link to="/" className='Link'>Home</Link>
                    <Link to="/products" className='Link'>Products</Link>
                    <Link to="/contact-us" className='Link'>Contact Us</Link>
                    {/* style={{color:"white", paddingRight:"1em"}}
style={{color:"white", paddingRight:"1em"}}
style={{color:"white", paddingRight:"1em"}} */}
                </Typography>
            </Toolbar>
        </AppBar>
    </div> );
}
 
export default TopMenu;