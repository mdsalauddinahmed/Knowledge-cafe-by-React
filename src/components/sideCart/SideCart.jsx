import React, { useState } from 'react';
import './SideCart.css'

const SideCart = (props) => {
     console.log(props)
   //  const [items,setItem]= useState([])
    //  console.log(cart)

    const {cart,readTime}=props
    // console.log(props.cart)
    //   console.log(props.readTime)

     let title =[]
     let totalReadTime=0;
//    const [title,setTitle]=useState([])
     for(const item of cart){
       
         title.push(item.Blog_title)
       
     }
     for(const read of readTime){
         totalReadTime=totalReadTime+read.Read_time
        
     }
    return (
        <div className='cart_bg sideBar'>
             <p className='ps-2 bg-white border m-3 fst-normal py-2 text-info rounded  '>Spent time on read :{ totalReadTime} min</p>
             <p  className=' border m-3 bg-white ps-2 fst-normal py-2  fw-bold rounded  '>Bookmarked Blogs :{cart.length} </p>
             <div className=''>
             {
                title.map(blog=>
                    <li className='  p-2 bg-white list-style-none fw-bold rounded border m-3 my-3s list-unstyled '>{blog}</li>
                )
              }
             </div>
        </div>
    );
};

export default SideCart;