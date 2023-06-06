import './NavBar.css';
import Logo from '../CartWidget/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'}>
                    <img className='logo' src={Logo} alt="" />
                </Link>
                <div>
                    <li><NavLink to={'/categoria/cafeteras'}></NavLink></li>
                    <li><NavLink to={'/categoria/tiposDeCafe'}></NavLink></li>
                    <li><NavLink to={'/categoria/extra'}></NavLink></li>
                </div>
                <CartWidget></CartWidget>
            </ul>
        </nav>
    );
};

export default NavBar;