import React from "react";


const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detalle">
                <img src={data.imagen} alt="" className="detalleImagen" />
                <div className="detalleNombre">
                    <h1>{data.titulo}</h1>
                    <h2>{data.genero}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;