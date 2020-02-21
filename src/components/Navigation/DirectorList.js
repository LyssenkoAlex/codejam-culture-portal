import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Directors from "../Directors/Directors";
import Director from "../Directors/Director";

const DirectorList = () => (
    <Switch>
        <Route exact path='/directorList' component={Directors}/>
        <Route  path='/directorList/:id' component={Director}/>
    </Switch>
);

export default DirectorList;


