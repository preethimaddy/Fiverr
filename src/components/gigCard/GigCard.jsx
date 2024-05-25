import React from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'
const GigCard = ({item}) => {
  return (
<Link to='/gig/123'>
<div className="gigCard">
<img  src={item.img} alt =''/>
  <div className="info">
    <div className="user">
    <img  src={item.pp} alt =''/>
<p>{item.username}</p>
    </div>
    <div className="star">
    <img  src='./img/star.png' alt =''/>
<span>{item.star}</span>
    </div>
  </div>
  <div className="details"></div>
  <img  src='./im/heart.png' alt =''/>
  <span>STARTING AT</span>
  <p>{item.price}</p>
</div>

</Link>
    
  )
}

export default GigCard