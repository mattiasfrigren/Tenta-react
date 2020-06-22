import React, { useState, useEffect } from 'react';
import Alldrinks from '../data/AllDrinks.json';
import Drink from '../components/drink';

const allCocktails = Alldrinks.cocktails;

const Explore = (props) =>{

    const [searchResualt, setSearchResualt] = useState('');
    const [displayDrinks, setDrinkstodisplay] =useState([]);
    const [currentView, setView] =useState(props.match.params.idName);
    const [currentDrink, setDrink] =useState([]);

    useEffect(()=>{
        setView(props.match.params.idName);
        console.log(currentView)
    })

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
/*
försökte få denna functionen att fungera för att lösa subsidor, tyvärr blev tiden för mig lite knapp.


    const currentDrinkView =() =>{
      let drinkside = allCocktails.filter((e)=>{
          if(e.name.match({currentView})){
              return e;
          }
      })
      console.log(drinkside.name)
      console.log(drinkside.image)
      console.log(drinkside.preparation)
      
        setDrink([
            <div>
            <h3> {drinkside.name}</h3>
            <p>{drinkside.preparation}</p>
            <img src={drinkside.image}></img>
            </div>

        ])
    }
*/
    return(
        <div>
        {currentView ==='1' ?
            <div>
        <h1> Find your favorit drink</h1>
        <input id='searchField' onChange = {event =>{setSearchResualt(event.target.value)}}>
        </input>
        <button onClick={Search}> Search</button>
         {displayDrinks}
         </div> :
         <div> 
         <h3>{currentView}</h3>
         <p></p>
         </div>

        }

        </div>
    )
}

export default Explore;