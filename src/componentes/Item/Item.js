import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({name, artist, price, img, stock, id}) => {
  return (
    <div className='itemCard'>
    <Link to={`/item/${id}`}>
        <img className='diskCover' src={img} alt={name} />
        </Link>
        <h3>{name} - {artist}</h3>
        <p>${price}</p>
        <ItemCount stock={stock} initial={0}></ItemCount>
    </div>
  )
}

export default Item