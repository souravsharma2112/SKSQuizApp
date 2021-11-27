import React from "react";
import './App.css';
import './component/Quizscreen.css'
import './component/Quizoption.css'
import './component/Homescreen.css'
import { Switch, Route } from "react-router-dom";
import Homescreeen from "./component/Homescreeen";
import Startgame from "./component/Startgame";


function App() {

  return (
    <>
        <Switch>
            <Route exact path="/" component={Homescreeen}/>
            <Route exact path="/homescreen" component={Homescreeen}/>
            <Route exact path="/startgame" component={Startgame}/>
        </Switch>
    </>
  );
}

export default App;
