import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";



const Cart = () => {

    const { cart, PrecioTotal } = useCartContext();

    const Orden = {
        comprador: {
            nombre: "thiago",
            email: "thiagoreact@gmail.com",
            teléfono: "123456789",
            dirección: "callefalsa 123"
        },
        productos: cart.map(producto => ( {id: producto.id, titulo: producto.id, precio: producto.id, cantidad: producto.cantidad })) ,
        total: PrecioTotal(),
    }

    const RealizarCompra = () => {
        const db = getFirestore();
        const ColeccionOrdenes = collection(db, "ordenes");
        addDoc(ColeccionOrdenes, Orden)
        .then (( {id} ) => console.log(id))
    }

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
            <button onClick={RealizarCompra}> Realizar Compra </button>
        </>
    )
}


export default Cart