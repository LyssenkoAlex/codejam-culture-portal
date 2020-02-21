import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {HOME, DIRECTORS, TEAM} from '../../utils/utils';
import Team from "../Team/Team";
import App from "../../App.jsx";
import DirectorList from "../Navigation/DirectorList";

const Main = () => (
    <main>
        <Switch>
            <Route path={HOME.path} component={App}/>
            <Route path={DIRECTORS.path} component={DirectorList}/>
            <Route path={TEAM.path} component={Team}/>
        </Switch>
    </main>
);

export default Main
