import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {HOME, DIRECTORS, TEAM, STYLE, WORK_LOG} from '../../utils/utils';
import Team from "../Team/Team";
import Directors from "../Directors/Directors";
import Style from "../Style/Style.jsx";
import Worklog from "../Worklog/Worklog.jsx";
import Author from "../Author/Author";

const Main = () => (
    <main>
      <Switch>
        <Route exact path={HOME.path} component={Author}/>
        <Route path={DIRECTORS.path} component={Directors}/>
        <Route path={STYLE.path} component={Style}/>
        <Route path={WORK_LOG.path} component={Worklog}/>
        <Route path={TEAM.path} component={Team}/>
      </Switch>
    </main>
);

export default Main
