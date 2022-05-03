import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import restaurantData from "./restaurantData";


export default function OrderForm(props) {
    const { change, values, submit, disabled, errors } = props
    // const { restaurantID } = useParams()

        
    const restaurantDetails = {
        title: "pizza",
        subtitle:"American - Pizza",
        waitTime: "20-30 Min",
        deliveryFee: 5.99,
        toppings: [ 'Pepperoni', 'Sausage', "Canadian Bacon", 'Spicy Italian Sausage',
                    'Grilled Chicken', "Onions", 'Green Peppers', "Diced Tomatoes",
                    'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese',
                    'Pineapple', 'Extra Cheese'],
        sauces: {   'Original Red': false,
                    'Garlic Ranch': false,
                    'BBQ Sauce': false,
                    'Spinach Alfredo': false
                },
        substitutes: ['Gluten Free Crust $1', 'Whole Grain Crust $2']
    }

    const updateList = (name, value) => {
                
        return (values[name].includes(value) ? values[name].filter(item => item !== value) : [...values[name], value])

    }

    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, type} = evt.target
        const valueToUse = type === 'checkbox' ? updateList(name, value) : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        axios.post("https://reqres.in/api/orders", {values})
      .then((resp) => {
        console.log(resp)
      })
        evt.preventDefault()
        submit()
    }

    


    return (
        
        <form className="form" id="pizza-form" onSubmit={onSubmit} >
            <div className="container">
            <h2>OrderForm for {restaurantDetails.title}</h2>
            <div>Pizza Hut Image</div>
            <h3>Build your own Meal</h3>

            </div>

            <div className="container" >
                <h4>Name for the order</h4>
                <div>{errors.name}</div>
                <input 
                    type='text'
                    name ='name'
                    value = {values.name}
                    onChange={onChange}
                    id ="name-input"
                    />
            </div>

            <div className="container" >
                <h4>Choice of Size</h4>
                <div>{errors.size}</div>
                <select
                    onChange={ onChange}
                    value = {values.size}
                    name = "size"
                    id = "size-dropdown"
                    >
                    <option value = ''>-</option>
                    <option value = 'S'>S</option>
                    <option value = 'M'>M</option>
                    <option value = 'L'>L</option>
                </select>
            </div>

            <div className="container" id = "sauceField">
                <h4>Choice of Sauce</h4>
                <h5>{errors.sauce}</h5>

                    <div>dynamic version</div>
                    {Object.keys(restaurantDetails.sauces).map((sauce, index) => {
                        return(
                            <label>{sauce}
                                <input
                                type = 'radio'
                                name = 'sauce'
                                value = {sauce}
                                onChange = {onChange}
                                checked = {values.sauce === sauce}
                                />
                            </label>
                        )
                    }
                    )}
                

              
            </div>

            <div className="container" id = "toppings">
                <h4>Toppings</h4>
                {restaurantDetails.toppings.map((topping, index) => {
                    return(
                        <label>
                            {/* {console.log(values.toppings.includes(topping))}
                            {console.log("this is the toppings output",values.toppings)} */}
                            <input
                                type = "checkbox"
                                name = 'toppings'
                                value = {topping}
                                onChange = {onChange}
                                checked = {values.toppings.includes(topping)}
                            />{topping}
                        </label>
                    )
                }


                )}
            </div>

            <div className="container" id = "substituteField">

                <h4>Choice of Substitute</h4>
                {restaurantDetails.substitutes.map(substitute => {
                    return (
                        <label>
                            <input
                                type = "checkbox"
                                name = 'substitutes'
                                value = {substitute}
                                onChange = {onChange}
                                checked = {values.substitutes.includes(substitute)}
                            />{substitute}
                        </label>
                    )
                })}
               
            </div>

            <div className="container" >
                <h4>Special Instructions</h4>
                <div>{errors.comment}</div>
                <input 
                    type='text'
                    name ='comment'
                    value = {values.comment}
                    onChange={onChange}
                    id = "special-text"
                    
                    />
            </div>

            <div className="container" id = "quantityField">
                <label>How many?
                    <input
                        type = 'number'
                        name = 'quantity'
                        value = {values.quantity}
                        onChange={onChange}
                        min = "1"
                    />
                </label>
            </div>

            <div className="container submit">
                {/* <NavLink to = "/Confirm"> */}
                    <input type="submit" disabled={disabled} id="order-button"/>
                {/* </NavLink> */}
                
            </div>
            
        </form>
        
    )
}