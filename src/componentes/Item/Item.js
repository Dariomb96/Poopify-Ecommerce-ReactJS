import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {
    const {name, artist, price, img, stock} = producto;
  return (
    <div className='itemCard'>
        <img className='diskCover' src={img} alt={name} />
        <h3>{name} - {artist}</h3>
        <p>${price}</p>
        <ItemCount stock={stock} initial={0}></ItemCount>
    </div>
  )
}

export default Item