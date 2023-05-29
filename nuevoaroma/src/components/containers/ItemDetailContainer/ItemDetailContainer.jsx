import { useEffect, useState } from "react";
import { obtenerProducto } from "../async";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    
        useEffect(() => {
            obtenerProducto('SASD4')
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            });
        }, []);
    

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto}></ItemDetail>
        </div>
    );
};


export default ItemDetailContainer;