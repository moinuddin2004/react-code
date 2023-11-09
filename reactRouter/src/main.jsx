import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx' 
import User from './Components/user.jsx'
import Github,{loaderinfo} from './Components/Github.jsx'
// // const router=createBrowserRouter([{
//   path:'/',
//   element:<App/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     },

//   ]
// //  }])
 const router =createBrowserRouter(
 createRoutesFromElements(
   <Route path='/' element={<App/>}>

   <Route path='' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/user/:id' element={<User/>} />
  <Route
  loader={loaderinfo}
  path='/github' element={<Github/>} />
  
  
  </Route>
 )
 )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
