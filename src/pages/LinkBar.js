import React from 'react';
import NavLinkComp from '../components/Links'

const pages =[['Home', '/Home'],['Explore','/Explore/1']];

const LinkBar = () =>{


    const getAllLinks =
    pages.map(([name, linkTo]) =>{
        return <div>
        <NavLinkComp
        name ={name}
        linkTo={linkTo}
        ID={name+linkTo}
        >
        </NavLinkComp>
        </div>
    });

    return(
        <div>
        {getAllLinks}
        </div>

    )

}

export default LinkBar;