import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartContainer.css'
import { db } from '../../utils/firebase'
import { collection, addDoc, } from 'firebase/firestore'

const CartContainer = () => {

  const { productCartList, removeItem, clear, getTotalPrice } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");


  const sendOrder = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name: event.target[0].value,
        phone: event.target[1].value,
        email: event.target[2].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    }
    const queryRef = collection(db, "orders");

    addDoc(queryRef, order).then(response => {
      console.log("response", response);
      setIdOrder(response.id);
    });
  }

if (idOrder){
  return (
    <div>
      <h1>su compra ha sido realizada,</h1>
      <h3>id de compra: {idOrder}</h3>
    </div>
  )
}else if (productCartList.length !== 0) {
    return (
      <>
        <div className="flex">
          {productCartList.map(item => (
            <div className="card" key={item.id}>
              <img className="coverCart" src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.artist}</p>
              <p>{item.price}$ - x{item.quantity}</p>
              <button className="customButton" onClick={() => removeItem(item.id)}>eliminar producto</button>
            </div>
          ))}
        </div>
        <div className='mb'>
          <h2 className='total'>Total: {getTotalPrice()}$</h2>
          <h4 className="customButton" onClick={clear}>Vaciar Carrito</h4>
        </div>
        <form className='form' onSubmit={sendOrder}>
          <div>
            <label htmlFor="">Nombre: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Telefono: </label>
            <input type="text" />
          </div>
          <div>
            <label className='email' htmlFor="">Email: </label>
            <input type="email" />
          </div>
          <button className='customButton' type="submit">Finalizar Orden</button>
        </form>
      </>
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