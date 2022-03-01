import React from "react";
import { Link, useHistory } from 'react-router-dom';


export default function Restaurant(props) {
    const { title, subtitle, waitTime, deliveryFee} = props
    const history = useHistory()

    const routeToOrderForm = () => {
        
        history.push(`/OrderForm/${title}`)
      }

    return (
        
        <div className="container" onClick={routeToOrderForm}>
            <Link to={''}>
                <div>Restaurant image</div>
                <h3 className="restaurant-title">{title}</h3>
                <p className="restaurant-subtitle">{subtitle}</p>
                <div>Wait Time {waitTime}</div>
                <div>Delivery Fee ${deliveryFee}</div>
            </Link>    
        </div>
        
    )
}