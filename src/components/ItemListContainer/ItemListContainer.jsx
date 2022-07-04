import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const juegos = [
    { id: 1, imagen: "https://generacionxbox.com/wp-content/uploads/2017/10/ac-origins-portadon-generacion-xbox.jpg", titulo: "Assassin's Creed Origins" },
    { id: 2, imagen: "https://media.tycsports.com/files/2020/11/19/155016/valhalla-trailer.jpg", titulo: "Assassin's Creed Valhalla" }
]


const ItemListContainer = ( {greeting} ) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos)
            }, 3000);
        }) 

        getData.then(res => setData(res))
    }, [])
    
    const onAdd = (cantidad) => {
        console.log(`se agregó ${cantidad} unidad/es`);
    }
    
    return (
        <div className="container">
            <h2> {greeting} </h2>
            <ItemCount stock = {5} initial = {1} onAdd={onAdd} />
            <ItemList data = {data}/>
        </div>
    )
}

export default ItemListContainer