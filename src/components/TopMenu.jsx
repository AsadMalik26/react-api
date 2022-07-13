// import { AppBar, makeStyles, Toolbar, Typography, } from '@mui/material';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
var useStyles = makeStyles({
    Link:{
        color:"white",
    }
  });


const TopMenu = () => {
    var hookClass = useStyles();
    return (
  <div>
        {<AppBar>
            <Toolbar>
                <Typography variant="h6">
                    <Link className={hookClass.Link} to="/">Home</Link>
                </Typography>
            </Toolbar>
        </AppBar>}
    </div> );
}
 
export default TopMenu;