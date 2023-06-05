import './ItemListContainer.css';
import { obtenerProductos } from '../async';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        });
    }, []);

    return (
        <main>
            <div className='contenedor-tienda'>
                    <Item productos={productos}/>
            </div>
        </main>
    );
};

export default ItemListContainer;