import "./App.css"
import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import OrderForm from "./OrderForm";
import Confirm from "./Confirm";
import schema from "./formSchema";
import * as yup from 'yup';


const App = () => {

  const initialFormValues = {
    toppings: [],
    sauce: '',
    size: '',
    substitutes: [],
    comment: '',
    quantity: 1
  }

  const initialFormErrors = {
    sauce: '',
    size: ''    
  }

  const [ formValues, setFormValues] = useState(initialFormValues)
  const [ order, setOrder ] = useState({})
  const [ formErrors, setFormErrors] = useState(initialFormErrors)
  const [ disabled , setDisabled] = useState(false)

  const validate = (name, value) => {
    yup.reach(schema, name)
       .validate(value)
       .then(
         () => setFormErrors({...formErrors, [name]:''}))
       .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const updateForm = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]:value})

  }

  const formSubmit = () => {
    const newOrder = {
      
      toppings : formValues.toppings,
      sauce: formValues.sauce,
      size: formValues.size,
      substitutes: formValues.comment,
      quantity: formValues.quantity
    }
    setOrder(newOrder)

  }
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  })


  return (   

    <div>
      <NavBar />
    
      <div>
          <Switch>
            <Route path = {"/OrderForm/:restaurantID"}>
                <OrderForm
                  values = {formValues}
                  change = {updateForm}
                  submit = {formSubmit}
                  disabled = {disabled}
                  errors = {formErrors}
                />
            </Route>

            <Route path = {"/Confirm"}>
                <Confirm order = {formValues}/>
            </Route>

            <Route path = "/">
                <Home 
                />
            </Route>
            
          </Switch>
        </div>

      </div>
    
  );
};
export default App;
