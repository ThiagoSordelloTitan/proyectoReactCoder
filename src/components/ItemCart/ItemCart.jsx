import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({producto}) => {

    const {RemoverProducto} = useCartContext(); 
    
    return (
        <div className="itemCart">
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <p>Titulo: {producto.titulo}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio x unidad: {producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                <button onClick={() => RemoverProducto (producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart