import './NavBar.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const NavBar = () => {

    const { productCartList } = useContext(CartContext);


    return (
        <div className="navbar-container">
            <Link to="/">
                <div>
                    <img width="55px" src='/assets/ico/poopifyv.png' alt="Poopify logo" />
                </div>
            </Link>
            <nav>
                <ul className="navMenu">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'seleccionado' : 'noseleccionado'} to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'seleccionado' : 'noseleccionado'} to="/genero/driving-techno">driving-techno</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'seleccionado' : 'noseleccionado'} to="/genero/raw-techno">raw-techno</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="user">
                <Link to="/cart"><CartWidget data={productCartList} /></Link>
                <a href="#">
                    <img src='/assets/ico/user-32.ico' alt="login" />
                </a>
            </div>
        </div>
    )
};

export default NavBar;