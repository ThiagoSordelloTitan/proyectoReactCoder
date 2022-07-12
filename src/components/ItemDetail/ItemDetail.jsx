import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom'
import "./ItemDetail.css"




const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);



    const onAdd = (cantidad) => {
        setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detalle">
                <img src={data.imagen} alt="" className="detalleImagen" />
                <div className="detalleNombre">
                    <h1>{data.titulo}</h1>
                    <h2>{data.genero}</h2>
                    {
                        goToCart
                        ? <Link to={"/cart"} className="terminarCompra"> Terminar Compra </Link>
                        :<ItemCount stock = {5} initial = {1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;