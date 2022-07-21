import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


/* const juegos = [
    { id: 1, imagen: "https://generacionxbox.com/wp-content/uploads/2017/10/ac-origins-portadon-generacion-xbox.jpg", titulo: "Assassin's Creed Origins", categoria: "egipcio", precio:300 },
    { id: 2, imagen: "https://media.tycsports.com/files/2020/11/19/155016/valhalla-trailer.jpg", titulo: "Assassin's Creed Valhalla", categoria: "nordico", precio: 500 },
] */


const ItemListContainer = ({ greeting }) => {




    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, "juegos");
        if (categoriaId) {
            const queryFilter = query(queryCollection,
                where("categoria", "==", categoriaId));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))));

        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))));

        }

    }, [categoriaId]);



    return (
        <div className="container">
            <h2> {greeting} </h2>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer