import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./Component/Login" 
import './App.css';
import Home from './Component/Home';
import SingUp from "./Component/SingUp"


function App() {

  return (
    <div className="form">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  exact path="/login" component={Login}/>
         <Route exact path="/singup" component={SingUp} />
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
