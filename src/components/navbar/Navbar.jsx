import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="container">
            <div className="logo">
               <span className='text'>Fiverr</span>
               <span className='dot'>.</span>
            </div>
            <div className="links">
                   <span>Fiver Business</span> 
                   <span>Explore</span>
                   <span>English</span>
                   <span>sign in</span>
                   <span>Become a Seller</span>
                   <button>Join</button>
                    </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar