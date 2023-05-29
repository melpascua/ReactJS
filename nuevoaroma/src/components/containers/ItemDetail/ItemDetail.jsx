import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h2>Producto seleccionado</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <small>{producto.precio}</small>
            <div>
                <ItemCount inicial={1} stock={25} onAdd={(cantidad) => console.log('agregado', cantidad)}></ItemCount>
            </div>
        </div>);
};

export default ItemDetail;