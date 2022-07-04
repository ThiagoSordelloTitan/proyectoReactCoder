import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const juegos = { id: 1 , imagen: "https://media.tycsports.com/files/2020/11/19/155016/valhalla-trailer.jpg", titulo: "Assassin's Creed Valhalla", genero: "acción, mundo abierto" }



const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos)
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

     return (
        <ItemDetail data = {data} />
     )

}

export default ItemDetailContainer;