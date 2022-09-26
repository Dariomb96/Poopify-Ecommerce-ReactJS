import './ItemListContainer.css';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../utils/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [itemList, setItems] = useState([]);
    /*
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    */
    useEffect(() => {
        const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"), where("genre", "==", categoryId));
        getDocs(queryRef).then(response => {
            const results = response.docs.map(doc => {
                const newItem = {
                    id: doc.id,
                    ...doc.data(),
                }
                return newItem;
            });
            setItems(results);
        })
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