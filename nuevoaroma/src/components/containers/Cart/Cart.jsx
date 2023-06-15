import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";


const Cart = () => {

    const { carrito, limpiar, cantidadTotal, total} = useContext(CartContext)

    if ( cantidadTotal === 0 ) {

        return (
            <div>
                <h1>¡Ups! ¡No hay nada que ver aquí!</h1>
                <Link to='/'>Página principal</Link>
            </div>
        )
    } else {
        return (
            <div>
                { carrito.map ( prod => <CartItem key={prod.id} {...prod}/>)}
                <h1>Total: ${total}</h1>
                <Button onClick={() => limpiar}>Limpiar carrito</Button>
            </div>
        )
    }
};

export default Cart;

