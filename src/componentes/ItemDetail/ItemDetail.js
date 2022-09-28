import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({item}) => {

    const {name, price, img, description, stock} = item;

    const {addItem} = useContext(CartContext);

    const productsAdded = ( count ) => {
        addItem({...item, quantity: count})
    }
if (stock){
    return (
        <div className="itemDetail">
            <div>
                <img src={img} className="cover" alt={name} />
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <span>{price}$ ARS</span>
                <ItemCount stock={stock} onAdd={productsAdded}/>
                <Link to="/cart"><button className="custom">Terminar compra</button> </Link>
            </div>
        </div>
    );
    }else{
        return(
            <h1>Loading...</h1>
        )
    }


}

export default ItemDetail