import { useEffect, useState } from "react";
import { obtenerProductosId } from "../async";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    
        useEffect(() => {
            obtenerProductosId('SASD4')
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            });
        }, []);
    

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}></ItemDetail>
        </div>
    );
};


export default ItemDetailContainer;