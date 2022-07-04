import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregarCantidad = () => {
        onAdd(count)
    }

    return (
        <>
            <div className="containerContador">
                <div className="containerButton">
                    <button className="boton1" onClick={restar}> - </button>

                    <label>{count}</label>

                    <button className="boton1" onClick={sumar}> + </button>
                </div>
                <button className="agregarCantidad" onClick={agregarCantidad}> Agregar al carrito </button>
            </div>
        </>
    )
}


export default ItemCount

