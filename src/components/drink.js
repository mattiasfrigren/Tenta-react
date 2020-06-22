import React from 'react';
import NavLinkComp from './Links';
const Drink = ({imgsrc, name, preparation}) =>{
    return (
        <div className = 'drinkDiv'>
        <NavLinkComp 
        name ={name}
        ID ={name+imgsrc}
        linkTo ={'/Explore/'+name}
        />
        <img src ={imgsrc} alt ={preparation}>
        </img>
        </div>
    )
}
export default Drink;