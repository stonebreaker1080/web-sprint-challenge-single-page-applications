import "./App.css"
import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import OrderForm from "./OrderForm";
import Confirm from "./Confirm";
import schema from "./formSchema";
import * as yup from 'yup';
import axios from "axios";


const App = () => {

  const initialFormValues = {
    name: '',
    toppings: [],
    sauce: '',
    size: '',
    substitutes: [],
    comment: ' ',
    quantity: 1
  }

  const initialFormErrors = {
    sauce: '',
    size: '',   
    toppings: '',
    substitutes: '',
    comment: '',
    quantity: '',
    name:''
  }

  const [ formValues, setFormValues] = useState(initialFormValues)
  const [ formErrors, setFormErrors] = useState(initialFormErrors)
  const [ disabled , setDisabled] = useState(false)

  const validate = (name, value) => {
    yup.reach(schema, name)
       .validate(value)
       .then(
         () => setFormErrors(
           {...formErrors, [name]:''}
           ))
       .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const updateForm = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
       [name]:value
      })

  }

  const formSubmit = () => {
    axios.post("https://reqres.in/api/orders", {formValues})
      .then((resp) => {
        console.log(resp)
      })
    sendOrder()
  }
  
  const sendOrder = () => {
    console.log(formValues)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  })


  return (   

    <div>
      <NavBar />
    
      <div>
          <Switch>
            <Route path = {"/:restaurantID"}>
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
