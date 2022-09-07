import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial }) {

    const [productCounter, setProductCounter] = useState(initial);
    const [productStock, setProductStock] = useState(stock);

    const addProduct = () => {
        productStock > productCounter ? setProductCounter(productCounter + 1) : console.log(`No hay suficiente stock`);
    }

    const removeProduct = () => {
        productCounter > 1 ? setProductCounter(productCounter - 1) : console.log(`La cantidad a comprar no puede ser menor a 1 xd`);
    }

    const addToCart = () => {
        if (productStock > 0) {
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else console.log("Sin stock");
    }

    return (
        <div className='stock'>
            <p>Stock: {productStock}</p>
            <div className='contadorProducto'>
                <button onClick={removeProduct}>-</button>
                <p>{productCounter}</p>
                <button onClick={addProduct}>+</button>
                <button className='agregarCarrito' onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount