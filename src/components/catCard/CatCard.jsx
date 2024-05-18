import React from 'react'
import "./CatCard.scss"
import {Link} from 'react-router-dom'
const CatCard = ({card}) => {
  return (
   <Link >
   <div className="catCard">
  <img  src={card.img} to='/gigs?cat=design' alt=''/>
  <span className='desc'>{card.desc}</span>
  <span className='title'>{card.title}</span>
   </div>
   </Link>
  )
}

export default CatCard