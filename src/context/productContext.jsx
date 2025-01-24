import React, { createContext, useEffect, useState } from 'react'
import { product_Data } from '../data/data'

export const productContext = createContext([])

export const ProductContext= ({children}) => {
    const [product,setProduct] = useState(product_Data)
    const [cart,setCart] = useState([])
    const [invoice,setInvoice] = useState({count:0,subTotal:0})
    
    const filterProduct = (category)=>{
        
      if(category.category){
        const filteredProduct = product_Data.filter((prod)=>{          
          if(prod.category === category.category){
            return product 
          }
        })
        setProduct(filteredProduct); 
      } 
     
     else{
      setProduct(product_Data)
      
     }
      
    }
    
    const addCart = (product)=>{
      setCart((oldCart)=>{
        let previous = [...oldCart]
        if(previous.length > 1){
          previous.push({...product, quantity: 1})
        }
        else{
          const isProduct = previous.find((prod => prod.id === product.id))
          if(!isProduct){
            previous.push({...product, quantity: 1})
          }else{
            previous = previous.map((pro)=> pro.id === product.id ? {...pro, quantity: pro.quantity + 1} : pro)
          }
        }
        return previous
      })
    }

    const setInvoiceData =() =>{
      setInvoice((previous)=>{
        let newInvoice = {...previous,count:0,subTotal:0}
        cart.forEach((item)=>{
            newInvoice.count += item.quantity
            newInvoice.subTotal += item.quantity * item.price

        })

        return newInvoice;

    })
    }

    const removeCart = (product) =>[
      setCart((oldCart)=>{
          let previous = [...oldCart]
          let isProduct = previous.find((pro) => pro.id === product.id)
          if(isProduct){
              const index = previous.indexOf(isProduct)
              previous.splice(index,1)
          }

          return previous

      })

  ]
  
  useEffect(()=>setInvoiceData(),[cart])
  return  <productContext.Provider value={{product,filterProduct,cart,addCart,invoice,removeCart}}>
    {children}
  </productContext.Provider>
}

