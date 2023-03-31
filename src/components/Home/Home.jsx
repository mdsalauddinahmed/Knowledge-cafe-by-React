import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    const [blogs,setBlog]=useState([])
    useEffect(()=>{
        fetch('fakadb.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (

       <div>
         
            {
                blogs.map(blog=><Banner blog={blog}></Banner>)
            }
        </div>
    );
};

export default Home;