const Item = ({name, price, image}) => {
    <div>
    <img src= {image} alt={name} />
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
};

export default Item;