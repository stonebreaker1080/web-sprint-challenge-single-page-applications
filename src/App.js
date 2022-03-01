import "./App.css"
import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import OrderForm from "./OrderForm";


const App = () => {

  const initialFormValues = {
    title: "",
    subtitle:"",
    waitTime: "",
    deliveryFee: 0,
    toppings: [],
    sauce: ''
}

  const [ formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (name, value) => {

    setFormValues({...formValues, [name]:value})

  }

  return (
    
    

    <div>
      <NavBar />
    
      <div>
          <Switch>
            <Route path = {"/OrderForm/:restaurant"}>
                <OrderForm
                  values = {formValues}
                  change = {updateForm}
                />
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
