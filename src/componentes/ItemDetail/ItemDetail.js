import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({item}) => {

    const {name, price, img, description} = item;

    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const productsAdded = (itemsToCart) => {
        console.log('Items added to cart: ', itemsToCart);
        setContador(itemsToCart);
        addItem(item, itemsToCart);
    }

    return (
        <div className="itemDetail">
            <div>
                <img src={img} className="cover" alt={name} />
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p className="description">{description}</p>
                <span>{price} $ ARS</span>
                <h6>{contador}</h6>
                <ItemCount stock={10} initial={1} onAdd={productsAdded}/>
            </div>
        </div>
    );



}

export default ItemDetail