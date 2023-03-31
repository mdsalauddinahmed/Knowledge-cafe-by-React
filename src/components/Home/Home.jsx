import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SideCart from '../sideCart/SideCart';

const Home = () => {
     
    const [blogs,setBlog]=useState([])
     const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('fakadb.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    const handleAddToCart =(items)=>{
         const newCart = [...cart,items]
         setCart(newCart)
    }
    return (

       <div className='container d-flex justify-content-between gap-4'>
        <div>
         
         {
             blogs.map(blog=><Banner handleAddToCart={handleAddToCart}  blog={blog}></Banner>)
         }
     </div>
        <div className="side_cart col-md-4 card">
         <SideCart cart={cart} ></SideCart>
        </div>
       </div>
    );
};

export default Home;