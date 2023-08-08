import React from "react";
import "./Blogs.css";

import Header from "../../components/blogsHeader/Header.jsx";
import BlogCard from "@/components/blogsCard/BlogCard.jsx";
import FilterBlog from "@/components/BlogsFilter/FilterBlog.jsx";
const page = () => {
  return (
    <div className="blogs-container">
      <section className="image-blogs-container">
        <img src="Blogs.png" alt="aws" />
        <Header />
      </section>
      <section className="main">
      <FilterBlog/>

     <BlogCard src="typescript.png"/>
     <BlogCard src="mongodb.png"/>
     <BlogCard src="redux.png"/>
     <BlogCard src="mySql.png"/>

      </section>
    </div>
  );
};

export default page;
