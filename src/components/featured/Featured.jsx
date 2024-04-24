import React from 'react'
import "./Featured.scss"
const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the freelance service of your choice</h1>
                <div className="search">
                    <div className="searchInput">
                        <img  src='./search.png' alt=''/>
                        <input type='text' placeholder='"try" building Mobile App' className=''/>
                    </div>
                    <button type='button' className='search'>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Webdesign</button>
                    <button>WordPress</button>
                    <button>Logodesign</button>
                    <button>AI services</button>
                </div>
            </div>
            <div className="right">
                <img src='./man.png' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Featured