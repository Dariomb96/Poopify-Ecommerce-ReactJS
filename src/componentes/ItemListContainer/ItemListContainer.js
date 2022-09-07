import './ItemListContainer.css';
import data from '../Item/ListaItems'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [itemList, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getData.then((result) => {
            setItems(result);
        });
    }, []);

    return (<>
        <div className='itemList'>
            <ItemList itemList={itemList} />
        </div>
    </>
    );
};

export default ItemListContainer;