import logo from '../../recursos/poopifyv.png';
import loginIco from '../../recursos/user-32.ico';
import './NavBar.css';
import CartWidget from './CartWidget'
const barrita = () => {
    return (
        <div className="navbar-container">
            <div><img width="55px" src={logo} alt="Poopify logo" /></div>
            <nav>
                <ul className="navMenu">
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">contacts</a>
                    </li>
                </ul>
            </nav>
            <div className="user">
            <CartWidget />
                <a href="#">
                    <img src={loginIco} alt="login" />
                </a>
                </div>
        </div>
    )
};

export default barrita;