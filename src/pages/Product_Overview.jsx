import React from 'react'
import { products_Category } from '../data/data'
import {Link} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'

function Product_Overview() {
  return (
    <>
    <section className=' max-sm:my-20 max-sm:px-3 xl:mt-3 xl:px-9 w-full h-full '>
        <div className='xl:mx-16 xl:px-14'>
        <div className='max-sm:p-2 md:p-2 lg:p-5'>
          <h1 className='max-sm:font-bold max-sm:text-4xl md:font-bold md:text-4xl lg:font-bold lg:text-4xl'>PRODUCT OVERVIEW</h1>
        </div>
        <ul className='max-sm:px-2 max-sm:my-5 md:my-5 md:gap-x-6 lg:px-2 flex flex-row justify-start items-start flex-wrap max-sm:gap-x-3 max-sm:gap-y-2'>
          <li className='md:p-2 lg:mx-2 lg:p-2 relative'><Link className=' text-black/50 duration-300 before:absolute before:w-[82%] max-sm:before:w-[95%] before:h-[2px] max-sm:before:h-[1.4px] max-sm:before:bottom-[1px] before:bottom-[5px] before:duration-300 hover:before:bg-black hover:text-black/100' to={'/'}>All Product</Link></li>
          {
            products_Category.map((items,index)=>{
              return <li key={index} className='max-sm:mx-1 md:p-2 lg:mx-2 lg:p-2 relative'><Link className=' text-black/50 duration-300 before:absolute before:w-[82%] max-sm:before:w-[95%] before:h-[2px] max-sm:before:h-[1.4px] before:bottom-[5px] max-sm:before:bottom-[1px] before:duration-300 hover:before:bg-black hover:text-black/100' to={items.value}>{items.value}</Link></li>
            })
          }
          
        </ul>
        </div>
    </section>
    </>
  )
}

export default Product_Overview