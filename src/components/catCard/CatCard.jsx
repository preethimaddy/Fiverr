import React from 'react'
import "./CatCard.scss"
import {Link} from 'react-router-dom'
const CatCard = ({item}) => {
  return (
   <Link >
   <div className="catCard">
  <img  src={item.card} to='/gigs?cat=design' alt=''/>
  <span className='desc'>{item.desc}</span>
  <span className='title'>{item.title}</span>
   </div>
   </Link>
  )
}

export default CatCard