import './ItemListContainer.css';
import data from '../Item/ListaItems'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const {categoryId} = useParams();
    console.log('categoryId', categoryId);
    const [itemList, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getData.then((result) => {
            if(categoryId){
                const newResult = result.filter(item=>item.genre === categoryId);
                setItems(newResult);
            }else
            setItems(result);
        });
    }, [categoryId]);
    
    return (
        <>
        {itemList.length > 0 ? (
            <div className='itemList'>
                <ItemList itemList={itemList} />
            </div>
        ) : (
            <div>Cargando...</div>
        )}
        </>
    );
};

export default ItemListContainer;