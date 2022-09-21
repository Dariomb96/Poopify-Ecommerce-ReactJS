import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = () => {

  const { productCartList, removeItem, clear, getTotalPrice } = useContext(CartContext);

  if (productCartList.length !== 0) {
    return (
      <div>
        {productCartList.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <p>{item.name} - {item.artist}</p>
            <p>{item.price}$ - x{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>eliminar producto</button>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <h1>Tu carrito esta vacio!</h1>
        <Link to='/'>
        <h3>volver</h3>
        </Link>
      </div>
    )
  }
}

export default CartContainer