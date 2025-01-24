import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { ProductContext } from './context/productContext.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import ShopingCart from './pages/ShopingCart.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/:category?',
        element:<Product/>
      },
      {
        path:'/Cart',
        element:<Cart/>
      }
    ]
    
  },{
    path:'/ShopingCart',
    element:<ShopingCart/>
  },
  {
    path:'/Contact',
    element:<Contact/>

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContext>
      <RouterProvider router={router}/>
    </ProductContext>
  </StrictMode>,
)
