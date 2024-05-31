import React from 'react'
import './ProjectCard.scss'
import {Link} from 'react-router-dom'
const ProjectCard = ({item}) => {
  return (
   <Link to='/' className='link'>
   <div className="projectCard">
  <img  src={item.img} to='' alt=''/>
  <div className="info">
    <img  src='' alt=''/>
    <div className="texts">
        <h2>{item.cat}</h2>
        <span>{item.username}</span>
    </div>
  </div>

   </div>
   </Link>
  )
}

export default ProjectCard