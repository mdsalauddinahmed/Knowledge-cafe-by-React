import React from "react";

const Banner = (props) => {
    console.log(props.blog)
     
  return (
    <div>
      <div className="card mb-3">
        <img src={props.blog.banner_image} className="card-img-top" alt=" " />
        <div className="card-body">
        <h5 className="card-title"> {props.blog.Author_name}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
