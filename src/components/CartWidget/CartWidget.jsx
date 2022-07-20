import React from "react";
import {useCartContext} from "../../context/CartContext"
 



export const CartWidget = () => {
    const {TotalProductos} = useCartContext();



    return (
        <>
            <i className="bi bi-cart3"></i>
            <span>{TotalProductos() || ""}</span>
        </>
    )
}