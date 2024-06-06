
import './App.css';
import  Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/mygigs/MyGigs"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
function App() {
   const Layout = () => {
     return (
       <div className="app">
         <Navbar />
         <Outlet />
         <Footer />
       </div>
     );
   };
 
   const router = createBrowserRouter([
     {
       path: "",
       element: <Layout />,
       children: [
         {
           path: "/",
           element: <Home />,
         },
   
         {
           path: "/orders",
           element: <Orders />,
         },
         {
           path: "/messages",
           element: <Messages />,
         },
         {
           path: "/message/:id",
           element: <Message />,
         },
         {
           path: "/add",
           element: <Add />,
         },
         {
            path: "/gig",
            element: <Gig />,
          },
         {
            path: "/gigs",
            element: <Gigs />,
          },
          {
            path: "/myGigs",
            element: <MyGigs />,
          },
       
       ],
     },
     {
       path: "/register",
       element: <Register />,
     },
     {
       path: "/login",
       element: <Login />,
     },
   ]);
 
   return <RouterProvider router={router} />;
 }

export default App;
