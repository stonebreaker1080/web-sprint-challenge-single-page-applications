import React from "react";


export default function Confirm(props) {
    const {order} = props
    
    const keys = Object.keys(order)

    return (
        <div className="container">Confirmed
            <div className="container">{keys.map(key => <p>{key}:{order[key]}</p>)
                
            }</div>
        </div>
    )
}