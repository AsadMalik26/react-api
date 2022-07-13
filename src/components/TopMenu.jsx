import { AppBar, Toolbar, Typography, } from '@mui/material';

/* import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; */
import React from 'react';
import { Link } from 'react-router-dom';



const TopMenu = () => {
    // var hookClass = useStyles();
    return (
  <div>
        {<AppBar>
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/" style={{color:"white"}}>Home</Link>
                </Typography>
            </Toolbar>
        </AppBar>}
    </div> );
}
 
export default TopMenu;