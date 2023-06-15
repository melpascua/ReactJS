


const CartItem = ({ prod }) => {

    return (
        <>
            <div>
                <img src={prod.imagen} alt={prod.nombre} />
                <div>
                    <h3>Nombre</h3>
                    <h4>{prod.nombre}</h4>
                </div>
                <div>
                    <h3>Cantidad</h3>
                    <p>{prod.cantidad}</p>
                </div>
                <div>
                    <h3>Precio</h3>
                    <p>{prod.precio}</p>
                </div>
                <div>
                    <h3>Subtotal</h3>
                    <p>{prod.precio * prod.cantidad}</p>
                </div>
            </div>
        </>
    )
};


export default CartItem;