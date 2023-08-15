"use client";
import React,{useState,useRef} from "react";

import { RiTimer2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import moment from "moment";
import axios from "axios";


const BlogCard = ({ blog,handleRefresh}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  if (!blog) {
    return null;
  }

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };


  document.addEventListener("mousedown", handleDocumentClick);
  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
  const handleDeleteBlog=async(id)=>{
    axios.delete(`http://localhost:3001/blogs/deleteOne/${id}`)
    .then((res)=>handleRefresh())
    .catch(err=>console.log("delete error"))
}

 
  
  return (
<div className="blog-card-cotainer"  >
      <div className="edit-blog">
        <FiMoreVertical onClick={toggleDropdown} />
        {showDropdown && (
          <div ref={dropdownRef} className="dropdown">
            {/* Dropdown content */}
            <p onClick={()=>router.push(`/manageBlogs/${blog.id}`)}>Edit</p>
            <p onClick={()=>handleDeleteBlog(blog.id)}>Delete</p>
          </div>
        )}
      </div>
      <img
        // onClick={() => {
        //   router.push(`/Blogs/${blog.id}`, { scroll: true });
       
        // }}
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
