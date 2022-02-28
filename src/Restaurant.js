import React from "react";
import { Link, useHistory } from 'react-router-dom';


export default function Restaurant(props) {
    const { title, subtitle, waitTime, deliveryFee} = props
    const history = useHistory()

    const routeToFoodForm = () => {
        history.push(`/${title}`)
      }

    return (
        <Link to={title}>
        <div className="container" onClick={routeToFoodForm}>
            <div>Restaurant image</div>
            <h3 className="restaurant-title">Title: {title}</h3>
            <p className="restaurant-subtitle">Sub-Title: {subtitle}</p>
            <div>Wait Time {waitTime}</div>
            <div>Delivery Fee ${deliveryFee}</div>
            
        </div>
        </Link>
    )
}