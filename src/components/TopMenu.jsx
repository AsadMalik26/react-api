import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    return ( <div>
        <ul>
            <li style={{display:"inline",paddingRight:"50px"}}><Link to="/"> Home</Link></li>
            <li style={{display:"inline",paddingRight:"50px"}}><Link to="/product"> Product</Link></li>
            <li style={{display:"inline",paddingRight:"50px"}}><Link to="/contact-us"> Contact us</Link></li>
        </ul>
    </div> );
}
 
export default TopMenu;