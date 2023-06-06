import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ prod }) => {
    return (
        <div>
            <h2>Producto seleccionado</h2>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre} {prod.precio}$</h3>
            <h3>{prod.stock}</h3>
            <div>
                <ItemCount inicial={1} stock={prod.stock} onAdd={(cantidad) => console.log('agregado', cantidad)}></ItemCount>
            </div>
        </div>
    );
};

export default ItemDetail;