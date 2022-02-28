import "./App.css"
import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import foodForm from "./foodForm";


const App = () => {
  return (
    
    

    <div>
      <NavBar />

      <div className="container">


        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
      </div>
    
      <div>
          <Switch>
          <Route path = {"/foodForm"}>
              <foodForm />
            </Route>
            <Route path = "/">
              <Home />
            </Route>
            
          </Switch>
        </div>

      </div>
    
  );
};
export default App;
