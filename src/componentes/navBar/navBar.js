import logo from '../../recursos/poopifyv.png';
import  './style.css';
const navBar = () => {
    return (
        <div className="navbar-container">
            <div><img width="100px" src={logo} alt="logo" /></div>
            <div>
                <ul>
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
        </div>
    )
};

export default navBar;