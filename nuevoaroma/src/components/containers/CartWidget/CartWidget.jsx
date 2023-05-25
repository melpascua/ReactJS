import Cart from '../CartWidget/images/carrito-de-compras.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <a href=""><img src={Cart} alt="compras" /></a>
        </div>
    );
};

export default CartWidget;