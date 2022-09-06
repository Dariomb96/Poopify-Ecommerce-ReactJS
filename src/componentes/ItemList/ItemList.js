import Item from '../Item/Item';

const ItemList = ({ itemList }) => {
    return (
        <>
            {itemList.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        name={producto.name}
                        price={producto.price}
                        image={producto.image}
                    />
                );
            })}
        </>
    );
};

export default ItemList;