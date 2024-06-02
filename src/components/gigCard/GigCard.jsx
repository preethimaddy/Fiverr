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
    <img  src='./star.png' alt =''/>
<span>{item.star}</span>
    </div>
  </div>
  <div className="details"></div>
  <img  src='./heart.png' alt =''/>                              
  <span>STARTING AT</span>
  <h2>${item.price}</h2>
</div>

</Link>
    
  )
}

export default GigCard