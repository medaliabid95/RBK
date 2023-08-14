"use client";
import React from "react";

import { RiTimer2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import moment from "moment";



const BlogCard = ({ blog }) => {
 
  if (!blog) {
    return null;
  }


  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
 
 
  
  return (
    <div className="blog-card-cotainer">
      <img
        onClick={() => {
          router.push(`/Blogs/${blog.id}`, { scroll: true });
       
        }}
        className="blog-image"
        src={blog.image}
        alt=""
      />
      <div className="blog">
        <p className="blog-date">
          <RiTimer2Fill /> 2 min read // {formattedDate}
        </p>
      
        <h1>{blog.title}</h1>
        <p className="content truncate">{blog.description}</p>
        <div className="interaction">
          <div className="comments">
            <p
             
              className={`jaime`}

            >
              {blog.likes} j'aime
            </p>
            <p className="vues">{blog.vues} vues</p>
            <p >0 commentaires</p>
          <div className="likes">
            {blog.likes}
            <AiFillHeart style={{ fill: "red" }} />
          </div>
          </div>
        </div>

 
      </div>
    </div>
  );
};

export default BlogCard;
