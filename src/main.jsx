import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './compoents/addCoffee.jsx';
import UpdateCoffee from './compoents/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: 'updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  },
  {
    path: 'addCoffee',
    element:<AddCoffee></AddCoffee>
  } 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
