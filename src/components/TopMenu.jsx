import { AppBar, makeStyles, Toolbar, Typography, } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

/* const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.color.red,
    },
  })); */

const TopMenu = () => {
    // const classes = useStyles(); 
    return ( <div>
        {<AppBar>
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/">Home</Link>
                </Typography>
            </Toolbar>
        </AppBar>}
    </div> );
}
 
export default TopMenu;