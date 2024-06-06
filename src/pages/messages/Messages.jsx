import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"
const Messages = () => {
  const currentUser = {
    id:1,
    username: "john Doe",
    isSeller:true
  }
   const message = 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <div className="messages">
<div className="container">
  <div className="title">
    <h1>Messages</h1>
    
  </div>
  <table>
    <tr className='active'>
      <th>Buyer</th>
      <th>Last Message</th>
      <th>Date</th>
      <th>Action</th>
      
    </tr>
    <tr >
      <td>John Doe</td>
      <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
      <td>1 day ago</td>
      <td>
        <button>Mark as Read</button>
      </td>
          
          </tr>
          <tr className='active'>
           
            <td>Bency</td>
      <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
      <td>1 day ago</td>
      <td>
        <button>Mark as Read</button>
      </td>
          </tr>
          <tr >
           
           <td>Lama Dev</td>
     <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
     <td>1 day ago</td>
     <td>
       <button>Mark as Read</button>
     </td>
         </tr>
         <tr className='active'>
           
           <td>Fernandis</td>
     <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
     <td>1 day ago</td>
     <td>
       <button>Mark as Read</button>
     </td>
         </tr>
         <tr>
           
           <td>Jacob</td>
     <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
     <td>1 day ago</td>
     <td>
       <button>Mark as Read</button>
     </td>
         </tr>
         <tr className='active'>
           
           <td>Leo</td>
     <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
     <td>1 day ago</td>
     <td>
       <button>Mark as Read</button>
     </td>
         </tr>
          
  </table>
</div>
    </div>
  )
}

export default Messages