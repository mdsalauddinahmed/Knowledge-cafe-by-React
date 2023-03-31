import React from "react";
import './Banner.css'

const Banner = (props) => {
    // console.log(props.blog)
    const {Author_name,Blog_title,banner_image,Read_time,Author_image,Publish_Date}=props.blog
     
  return (
    <div>
      <div className="card mb-3">
        <img src={banner_image} className="banner_img rounded" alt=" " />
        <div className="card-body">
         <div className="d-flex justify-content-between">
            <div className="user_details d-flex items-content-center">
                <img src={Author_image} alt="" className="user_img" />
                <div className=" ms-2">
                    <h5 >{Author_name}</h5>
                    <p><small>{Publish_Date}</small></p>
                </div>
            </div>
            <div>
                <span> {Read_time} min read</span>
                <button>bookmark</button>
              </div>
         </div>
           <h2>{Blog_title}</h2>
            <p className="card-text">
            <small className="text-muted">#beginners #programming</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
