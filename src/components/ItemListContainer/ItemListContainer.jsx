import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'


const juegos = [
    { id: 1, imagen: "https://generacionxbox.com/wp-content/uploads/2017/10/ac-origins-portadon-generacion-xbox.jpg", titulo: "Assassin's Creed Origins", categoria: "egipcio" },
    { id: 2, imagen: "https://media.tycsports.com/files/2020/11/19/155016/valhalla-trailer.jpg", titulo: "Assassin's Creed Valhalla", categoria: "nordico" }
]


const ItemListContainer = ( {greeting} ) => {


    

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(juegos)
            },1000);
        });
        
        if(categoriaId) {
            getData.then(res => setData(res.filter(juego =>juego.categoria === categoriaId)));
        } else {
             getData.then(res => setData(res))
        }

    }, [categoriaId]);
    
    
    
    return (
        <div className="container">
            <h2> {greeting} </h2>
            <ItemList data = {data}/>
        </div>
    )
}

export default ItemListContainer