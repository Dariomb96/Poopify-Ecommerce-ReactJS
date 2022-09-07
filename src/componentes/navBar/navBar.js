import './NavBar.css';
import CartWidget from './CartWidget'

const barrita = () => {
    return (
        <div className="navbar-container">
            <div><img width="55px" src='/assets/ico/poopifyv.png' alt="Poopify logo" /></div>
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
                    <img src='/assets/ico/user-32.ico' alt="login" />
                </a>
                </div>
        </div>
    )
};

export default barrita;