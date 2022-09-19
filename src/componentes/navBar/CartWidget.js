import './NavBar.css';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className="cart-widget">
                <h2>0</h2>
                <img src='/assets/ico/shop-cart.ico' alt="shopping cart" />
            </div>
        </Link>
    )
}
export default CartWidget;