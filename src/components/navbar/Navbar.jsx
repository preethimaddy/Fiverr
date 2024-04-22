import {useState,useEffect} from 'react'
import "./Navbar.scss"
const Navbar = () => {

  const[active, setactive] = useState(false)

  const isActive = ()=>{
    window.scrollY > 0 ? setactive(true) : setactive(false)
  }

  useEffect (()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener('scroll',isActive)
    }
  },[])
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
                   <span>Become a Seller</span>
                   <button>Join</button>
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