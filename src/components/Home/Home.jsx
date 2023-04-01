import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import SideCart from "../sideCart/SideCart";
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [blogs, setBlog] = useState([]);
  const [cart, setCart] = useState([]);
  const [readTime, setReadTime] = useState([]);
  useEffect(() => {
    fetch("fakadb.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  const handleAddToCart = (items) => {
    const newCart = [...cart, items];
    setCart(newCart);
    toast("blog bookmarked")

  };
  const handleReadTime = (items) => {
    const newReadTime = [...readTime, items];
    setReadTime(newReadTime);
    toast('read time marked')
    
    // console.log(newReadTime)
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {blogs.map((blog) => (
            <Banner
              handleAddToCart={handleAddToCart}
              handleReadTime={handleReadTime}
              blog={blog}
            ></Banner>
          ))}
        </div>
        <div className="side_cart col-md-4 card sideBar ">
          <SideCart cart={cart} readTime={readTime}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default Home;
