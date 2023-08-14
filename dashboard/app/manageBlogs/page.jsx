"use client"
import React, { useEffect, useState } from 'react'
import "./manageBlog.css"
import BlogCard from '@/components/blogsCard/blogCard.jsx'
import axios from "axios";
const page = () => {
  const [blogs,setBlogs]=useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:3001/blogs/getAll", { headers: { "Cache-Control": "no-store" } })
    .then((response) => {
      setBlogs(response.data);
    })
    .catch((error) => {
      console.error("Error fetching blogs:", error);
    });
  },[])
  return (
    <div className='manage-blog'>
       <h1 className="title">Gérer blog</h1>
       <div className="card-container">
        {
          blogs.map(blog=><BlogCard blog={blog}/>)
        }
       </div>
    </div>
  )
}

export default page
