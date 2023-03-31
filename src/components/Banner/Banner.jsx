import React from "react";
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

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
                <span className="me-2"> {Read_time} min read</span>
                <span><FontAwesomeIcon icon={faBookmark} /> </span>
              </div>
         </div>
           <h4>{Blog_title}</h4>
            <p className="card-text">
            <small className="text-muted">#beginners #programming</small>
          </p>
          <a href="">Mark as read</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
