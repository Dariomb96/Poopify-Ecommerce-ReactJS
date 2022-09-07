import React from 'react'
import './Item.css'

const Item = ({producto}) => {
    const {name, artist, price, img, stock} = producto;
    console.log(img);
  return (
    <div className='itemCard'>
        <img className='diskCover' src={img} alt={name} />
        <h2>{name} - {artist}</h2>
        <p>${price} - Stock:{stock}</p>
    </div>
  )
}

export default Item