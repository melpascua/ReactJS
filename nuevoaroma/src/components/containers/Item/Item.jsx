import Button from '../../common/Button/Button';


const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div className="contenedor-tienda">
            <img src={imagen} alt={nombre} />
            <h2>{nombre}</h2>
            <small>{precio}</small>
            <Button
                text="Información"
            ></Button>
        </div>
    );
};

export default Item;