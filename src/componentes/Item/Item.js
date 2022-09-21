import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({name, artist, price, img, stock, id}) => {
  return (
    <div className='itemCard'>
    <Link to={`/item/${id}`}>
        <img className='diskCover' src={img} alt={name} />
        </Link>
        <h4>{artist}</h4>
        <h3 className='name'>{name} </h3>
        <p className='price'>${price}</p>
        <Link to={`/item/${id}`}>
        <h4 className='info'>Ver mas info</h4>
        </Link>
    </div>
  )
}

export default Item