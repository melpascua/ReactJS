import Button from '../../common/Button/Button';

const Item = ({ productos }) => {
    return (
        <>
            {
                productos.map((prod) =>
                    <div>
                        <img src={prod.imagen} alt={prod.nombre} />
                        <h2>{prod.nombre}</h2>
                        <small>{prod.precio}</small>
                        <Button
                            text="Información"
                        ></Button>
                    </div>)
            }
        </>
    )
}

export default Item;

