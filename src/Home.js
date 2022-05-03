import React from "react";
import data from "./restaurantData";
import Restaurant from "./Restaurant";
import {NavLink} from "react-router-dom";

export default function Home(props) {

    const importData = data()
    const { setRestaurant} = props
    
   
    return (

        <div className="container">
            {}
            <div className="container">Banner section</div>

            <div className="container" >
                {
                    importData.map((rest, index) => { return (
                        <Restaurant 
                        title= {rest.title}
                        subtitle = {rest.subtitle}
                        waitTime = {rest.waitTime}
                        deliveryFee = {rest.deliveryFee}
                        setRestaurant = {setRestaurant}
                        key = {index}
                        />)
                    })
                }
               <NavLink to = "/pizza">
                    <button type="button" id="order-pizza">submit</button>
                </NavLink>
            </div>
            
        </div>
    )
}