import Banner from "./pages/Banner"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Product_Overview from "./pages/Product_Overview"
import { Outlet , useParams} from "react-router-dom"
import {productContext} from './context/productContext'
import { useContext,useEffect } from "react";
import Footer from "./components/Footer"




function App() {
 const {filterProduct} = useContext(productContext)
 const category = useParams()
 useEffect(()=>filterProduct(category),[category])
 
  return (
    <>
      <Navbar/>
      <Home/>
      <Banner/>
      <Product_Overview/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
