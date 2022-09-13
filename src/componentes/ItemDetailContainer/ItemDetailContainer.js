import data from '../Item/ListaItems'
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { productId } = useParams();
    const [item, setItem] = useState([]);

    const getItem = (id) => {
        return new Promise((resolve, reject) => {
            const producto = data.find(item => item.id === parseInt(id));
            setTimeout(() => {
                resolve(producto)
            }, 1000)
        })
    }
    useEffect(() => {
        const getProducto = async () => {
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    }, [productId]);

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
};

export default ItemDetailContainer