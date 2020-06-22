import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import LinkBar from './pages/LinkBar'

const Routes =(

    <BrowserRouter>
    <LinkBar/>
    <Switch>
    <Redirect exact from ='/' to='/Home'></Redirect>
    <Route path ="/Home" component={Home}></Route>
    </Switch>
    </BrowserRouter>
    

)

export default Routes