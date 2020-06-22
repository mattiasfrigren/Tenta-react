import React, { useState } from 'react';
import Alldrinks from '../data/AllDrinks.json';
import Drink from '../components/drink';

const allCocktails = Alldrinks.cocktails;

const Explore = (props) =>{

    const [searchResualt, setSearchResualt] = useState('');
    const [displayDrinks, setDrinkstodisplay] =useState([]);
    console.log(props.match.params.idName)

    const Search = ()=>{
        let newArrayList = (allCocktails.filter((e)=>{
            if(e.name.includes(searchResualt)){
                return(
                    e );
            } else{return null}           
        }))
        if(newArrayList.length !==0){
        setDrinkstodisplay([newArrayList.map((e)=>{
            return(   
                <Drink
                name ={e.name}
                imgsrc ={e.image}
                preparation ={e.preparation}
                />
            );  
        })]);}
        else{setDrinkstodisplay(<p>no result</p>)}
    }

    return(
        <div>
        <h1> Find your favorit drink</h1>
        <input id='searchField' onChange = {event =>{setSearchResualt(event.target.value)}}>
        </input>
        <button onClick={Search}> Search</button>
         {displayDrinks}
        </div>
    )
}

export default Explore;