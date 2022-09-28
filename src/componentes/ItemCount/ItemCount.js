import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, onAdd }) {

    const [productCounter, setProductCounter] = useState(1);
    const [productStock, setProductStock] = useState(stock);

    const addProduct = (e) => {
        productStock > productCounter ? setProductCounter(productCounter + 1) : console.log(`No hay suficiente stock`);
        e.stopPropagation();
    }

    const removeProduct = (e) => {
        productCounter > 1 ? setProductCounter(productCounter - 1) : console.log(`La cantidad a comprar no puede ser menor a 1`);
        e.stopPropagation();
    }

    const addToCart = () => {
        if (productStock > 0) {
            onAdd(productCounter);
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