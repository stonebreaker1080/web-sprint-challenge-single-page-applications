import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    

    return (
        <div className="container">
            <h3>Bloomtech Eats</h3>
            <div className="container">
                <Link to = "/">Home</Link>
            </div>
            <div className="container">
                <Link to ="/">Help</Link>
            </div>
        </div>
    )
}