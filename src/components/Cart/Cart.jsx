import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {

    const { cart, PrecioTotal } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>
                    No hay productos en el carrito
                </p>
                <Link to="/">Hacer compras</Link>
            </>
        )
    }

    return (
        <>
            {cart.map(producto => <ItemCart key={producto.id} producto={producto} />)}
            <p>Total: {PrecioTotal()} </p>
        </>
    )
}


export default Cart