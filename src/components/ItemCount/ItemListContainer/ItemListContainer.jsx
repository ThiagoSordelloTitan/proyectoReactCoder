import React from "react";
import ItemCount from "../ItemCount";


const ItemListContainer = ( {greeting} ) => {
    
    const onAdd = (cantidad) => {
        console.log(`se agregó ${cantidad}`);
    }
    
    return (
        <div className="container">
            <h2> {greeting} </h2>
            <ItemCount stock = {5} initial = {1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer