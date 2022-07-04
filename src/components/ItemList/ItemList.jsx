import React from "react";
import Item from "../Item/Item";

const ItemList = ({data = []}) => {
    return (
        data.map(juego => <Item key={juego.id} info={juego}/>)
    )
}

export default ItemList