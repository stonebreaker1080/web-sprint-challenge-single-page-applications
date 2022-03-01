import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    

    return (
        <div className="container">
            <h3>Bloomtech Eats</h3>
            <Link to = "/">Home</Link>
            <Link to ="/">Help</Link>
        </div>
    )
}