import React from "react";
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categoria/egipcio">Categoria 1</NavLink>
            <NavLink to="/categoria/nordico"> Categoria 2</NavLink>
            <NavLink to="/cart"> Cart</NavLink>
        </div>
    )
}

export default NavBar