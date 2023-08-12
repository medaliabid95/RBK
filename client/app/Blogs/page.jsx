"use client"
import React, { useState, useEffect } from "react";
import "./Blogs.css";
import axios from "axios"; // Import Axios library

import Header from "../../components/blogsHeader/Header.jsx";
import BlogCard from "@/components/blogsCard/BlogCard.jsx";
import FilterBlog from "@/components/BlogsFilter/FilterBlog.jsx";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs(); // Fetch blogs when component mounts
  }, []);

  const getBlogs = () => {
    axios
      .get("http://localhost:3001/blogs/getAll", { headers: { "Cache-Control": "no-store" } })
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const handleVuee = () => {
    getBlogs()
  };

  return (
    <div className="blogs-container">
      <section className="image-blogs-container">
        <img src="Blogs.png" alt="aws" />
        <Header />
      </section>
      <section className="main">
        <FilterBlog />
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} handleVuee={handleVuee} />
        ))}
      </section>
    </div>
  );
};

export default BlogsPage;
