import React from 'react';
import './SideCart.css'

const SideCart = (props) => {
    //    console.log(props.cart)
     const {cart}=props
     console.log(cart)
     let totalReadTime=0;
     for(const item of cart){
        totalReadTime=totalReadTime+item.Read_time
     }
    return (
        <div className='cart_bg'>
             <p className='ps-2 bg-white border m-3 fst-normal py-2 text-info rounded  '>Spent time on read :{ totalReadTime} min</p>
             <p  className=' border m-3 bg-white ps-2 fst-normal py-2  fw-bold rounded  '>Bookmarked Blogs :{cart.length} </p>
        </div>
    );
};

export default SideCart;