import cartIcon from '../../recursos/shop-cart.ico';
import './NavBar.css';
const CartWidget = () => {
    return(
        <div className="cart-widget">
                    <h2>0</h2>
            <img src={cartIcon} alt="shopping cart" />
        </div>
    )
}
export default CartWidget;