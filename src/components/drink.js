import React from 'react';

const Drink = ({imgsrc, name, preparation}) =>{
    return (
        <div>
        <p>{name}</p>
        <img src ={imgsrc} alt ={preparation}>
        </img>
        </div>
    )
}
export default Drink;