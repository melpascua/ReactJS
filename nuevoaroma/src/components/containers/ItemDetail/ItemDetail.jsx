import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({prod}) => {
    return (
        <div>
            <h2>Producto seleccionado</h2>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <small>{prod.precio}</small>
            <div>
                <ItemCount inicial={1} stock={25} onAdd={(cantidad) => console.log('agregado', cantidad)}></ItemCount>
            </div>
        </div>);
};

export default ItemDetail;