
import React, { useEffect } from 'react';
import { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {

    const [productCartList, setProductCartList] = useState([]);

    //Esto es la cantidad de productos dentro del carrito
    const [productsQuantity, setProductsQuantity] = useState(0);


    //Obtener la cantidad de productos dentro del carrito
    const getProductsQuantity = () => {
        let quantity = 0;
        productCartList.forEach(product => {
            quantity += product.quantity
        })
        setProductsQuantity(quantity);
    }

    useEffect(() => {
        getProductsQuantity();
    }, [productCartList]);

    //Agregar producto al carrito
    const addItem = (product) => {

        if (isInCart(product.id)) {
            const found = productCartList.find(prod => prod.id === product.id);
            const productFoundIndex = productCartList.indexOf(found);
            const productsAux = [...productCartList];

            productsAux[productFoundIndex].quantity += product.quantity;
            setProductCartList(productsAux);

        } else {
            setProductCartList([...productCartList, product]);
        }
    }

    //Sacar producto del carrito
    const removeItem = (id) => {
        setProductCartList(productCartList.filter(product => product.id !== id));
        setProductsQuantity();
    }

    //Sacar/Limpiar todos
    const clear = () => {
        setProductCartList([]);
        setProductsQuantity(0);
    }

    //Comprobar que no haya duplicados
    const isInCart = (id) => {
        // Si el producto dentro del carrito tiene el mismo ID, no lo vuelve a agregar por separado
        return productCartList.some(product => product.id === id);
    }

    //Obtener el precio total del carrito
    const getTotalPrice = () => {
        let total = 0;
        productCartList.forEach(product => {
            total += (product.price * product.quantity);
        })
        return total;
    }

    const data = {
        productCartList,
        addItem,
        removeItem,
        clear,
        productsQuantity,
        getTotalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export { CartContext };