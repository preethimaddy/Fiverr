import {useState,useEffect} from 'react'
import "./Navbar.scss"
const Navbar = () => {

  const[active, setactive] = useState(false)
  const[open, setOpen] = useState(false)
  const isActive = ()=>{
    window.scrollY > 0 ? setactive(true) : setactive(false)
  }

  useEffect (()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener('scroll',isActive)
    }
  },[])
const currentUser = {
  id:1,
  username: "john Doe",
  isSeller:true
}




  return (
    <>
    <div className={active ? "navbar active":"navbar"}>
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
                  {!currentUser?.isSeller && <span>Become a Seller</span>}
                   {!currentUser &&<button>Join</button>}
                   <div className="user" onClick={()=>setOpen(!open)}>
                    <img src=''
                     alt=''/>
                    <span>{currentUser?.username}</span>
                  {open &&
                    <div className="options">
                    {currentUser?.isSeller && (
                      <>
                      <span>Gigs</span>
                      <span>Add new Gigs</span>
                      </>
                     
                    )}
                     <span>orders</span>
                     <span>Messages</span>
                     <span>Logout</span>
                  </div>
                  }  
                   </div>
                    </div>
                            
        </div>
        {active && (
           <>
       <hr />
         <div className="menu">
  
                            <span>Test</span>
                            <span>Test2</span>
                        </div></>
        )

        }
      
        <div>
                    </div>
    </div>
    
  
    </>
  )
}

export default Navbar