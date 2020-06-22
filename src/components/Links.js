import {NavLink} from 'react-router-dom';
import React from 'react';
const NavLinkComp = ({name, linkTo, ID}) => {
    return(
        <NavLink
        id={ID}
        to ={linkTo}
        className ='links'
        >
        {name}
        </NavLink>

    );
};
export default NavLinkComp;