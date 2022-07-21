import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore";



/* const juegos = [
    { id: 1, imagen: "https://generacionxbox.com/wp-content/uploads/2017/10/ac-origins-portadon-generacion-xbox.jpg", titulo: "Assassin's Creed Origins", categoria: "egipcio", precio:300 },
    { id: 2, imagen: "https://media.tycsports.com/files/2020/11/19/155016/valhalla-trailer.jpg", titulo: "Assassin's Creed Valhalla", categoria: "nordico", precio: 500 },
]
 */

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {
        
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "juegos", detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))

    }, [detalleId])

     return (
        <ItemDetail data = {data} />
     )

}

export default ItemDetailContainer;