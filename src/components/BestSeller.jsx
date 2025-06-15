import React, { useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import ProductItem from './ProductItem';

const BestSeller = () => {
  
    const {products}=useContext(ShopContext)
    const [bestseller,setBestSeller]=useState([]);

    useEffect(()=>{
      const bestProduct=products.filter((item)=>(item.bestseller));
       setBestSeller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='my-10 '>
<div className="text-center text-3xl py-8">
<Title text1={'BEST'}text2={'SELLERS'}  />
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis veniam in dolore dolorem? Optio deleniti reiciendis voluptate ab recusandae corrupti voluptates, minima quia repudiandae nostrum minus sapiente voluptatum non.
 </p>
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6  ">
    {bestseller.map((item,index )=>(
        <ProductItem key={index}/>
    ))}
 </div>
</div>

    </div>
  )
}

export default BestSeller