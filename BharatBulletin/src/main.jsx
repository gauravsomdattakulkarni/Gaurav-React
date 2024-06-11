import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Outlet, Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx';
import Home from './components/News/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import { NewsLoader } from './components/News/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route 
        loader = {NewsLoader}
        path="" 
        element={<Home/>}
      >

      </Route>
      <Route path="/about_us" element={<About/>}></Route>
      <Route path="/contact_us" element={<Contact/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
