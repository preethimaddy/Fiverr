import React from 'react'
import { useState } from 'react';
import './Gigs.scss'
const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

const reSort =(type) =>{
  setSort(type)
  setOpen(false)
}
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR & GRAPHIC DESIGN
        </span>
        <h1>AI ARTIST</h1>
        <p>Explore the boundaries of art and technology with fiverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text"  placeholder='min'/>
            <input type="text"  placeholder='max'/>
<button>Apply</button>
          </div>
          <div className="right">
        <span className='sortBy'>SortBy</span>
        <span className='sortType'>{sort === "sales" ? "Best Selling":"Newest"}</span>
        <img  src='./img/down.png' alt='' onClick={() => setOpen(!open)}/>
        {
          open &&( 
          <div className="rightmenu">
           { sort === "sales" ? ( <span onClick={()=>reSort("createdAt")}>Newest</span>) :
         
          (<span onClick={()=>reSort("sales")}>Best Seller</span>)
        }
        </div>)
        }
      
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gigs