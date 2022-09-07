import Item from '../Item/Item';

const ItemList = ({ itemList }) => {
    return (
        <>
            {itemList.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        producto={producto}
                    />
                );
            })}
        </>
    );
};

export default ItemList;