import './NavBar.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = ( {data} ) => {

    const { productsQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            {data.length != 0 && (
            <div className="cart-widget">
            <h2> {productsQuantity} </h2>
            <img src='/assets/ico/shop-cart.ico' alt="shopping cart" />
            </div>)
            }
        </Link>
    )
}
export default CartWidget;