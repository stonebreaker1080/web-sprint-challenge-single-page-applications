import React from "react";
import { useParams } from "react-router-dom";
import restaurantData from "./restaurantData";


export default function OrderForm(props) {
    const {change, values} = props
    const { restaurantID } = useParams()

        
    const restaurantDetails = restaurantData().filter(rest => 
        {
            // console.log(rest)
            // console.log(restaurant)

            return rest.title === restaurantID
        })[0]

    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, type} = evt.target
        const valueToUse = type === 'checkbox' ? updateToppings(value) : value;
        change(name, valueToUse);
    }



    return (
        
        <div className="container">
            <h2>OrderForm for {restaurant}</h2>
            <div>Pizza Hut Image</div>
            <h3>Build your own Meal</h3>

            <div className="container" id = "sauce">
                <h4>Choice of Sauce</h4>
                <h5>Required</h5>

                    {/* <div>dynamic version</div>
                    {restaurant.sauces.keys.map((sauce, index) => {
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
                    })} */}
                

                <div>static version</div>
                <label>Original Red
                    <input
                        type = 'radio'
                        name = 'sauce'
                        value = 'Original Red'
                        onChange = {onChange}
                        checked = {values.sauce === 'Original Red'}
                    />
                </label>
                <label>Garlic Ranch
                    <input
                        type = 'radio'
                        name = 'sauce'
                        value = 'Garlic Ranch'
                        onChange = {onChange}
                        checked = {values.sauce === 'Garlic Ranch'}
                    />
                </label>
                <label>BBQ Sauce
                    <input
                        type = 'radio'
                        name = 'sauce'
                        value = 'BBQ Sauce'
                        onChange = {onChange}
                        checked = {values.sauce === 'BBQ Sauce'}
                    />
                </label>
                <label>Spinach Alfredo
                    <input
                        type = 'radio'
                        name = 'sauce'
                        value = 'Spinach Alfredo'
                        onChange = {onChange}
                        checked = {values.sauce === 'Spinach Alfredo'}
                    />
                </label>
            </div>

            <div className="container" id = "toppings">
                <h4>Toppings</h4>
                {restaurantDetails.toppings.map((topping, index) => {
                    return(
                        <label>
                            <input
                                type = "checkbox"
                                name = 'topping'
                                value = {topping}
                                onChange = {onChange}
                            />
                        </label>
                    )
                }


                )}
            </div>
        </div>
        
    )
}