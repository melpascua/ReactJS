import './NavBar.css';
import Logo from '../CartWidget/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <img className='logo' src={Logo} alt="" />
                <li><a href="">Principal</a></li>
                <li><a href="">Menú</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Contacto</a></li>
                <CartWidget></CartWidget>
            </ul>
        </nav>
    );
};

export default NavBar;