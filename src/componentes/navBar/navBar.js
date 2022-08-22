import logo from '../../recursos/poopifyv.png';
import loginIco from '../../recursos/user-64.ico';
import  './style.css';
const barrita = () => {
    return (
        <div className="navbar-container">
            <div><img width="55px" src={logo} alt="logo" /></div>
            <div>
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
            </div>
            <a href="#">
                <img width="50%" src={loginIco} alt="login" />
            </a>
        </div>
    )
};

export default barrita;