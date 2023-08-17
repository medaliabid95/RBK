"use client";
import React, { useEffect, useState } from "react";
import "./manageBlog.css";
import BlogCard from "@/components/blogsCard/blogCard.jsx";
import axios from "axios";
import Image from "next/image";
import { GrAddCircle } from "react-icons/gr";
import { useRouter } from "next/navigation";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  
  const [refresh, setRefresh] = useState(false);
  const router=useRouter()
  useEffect(() => {
    axios
      .get("http://localhost:3001/blogs/getAll", { cache: "no-store" })
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, [refresh]);
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  const statCounter = (option) => {
    if (option === "comments") {
      return blogs.reduce((acc, curr) => acc + curr.comments.length, 0);
    }
    return blogs.reduce((acc, curr) => acc + curr[option], 0);
  };
  const handleSearch = (query) => {
    const searched = blogs.filter((blog) => {
      const str1 = blog.title.toLowerCase();
      const str2 = query.toLowerCase();
      return str1.includes(str2);
    });

    setBlogs(searched);
    if (query === "") {
      
      setRefresh(!refresh);
    }
  };
  return (
    <div className="manage-blog">
      <h1 className="title">
        RebootKamp <p>Blogs</p>
      </h1>
      <div className="state">
        <div className="state-item">
          <Image src="/views.png" alt="views" width={60} height={60} />
          Nombre du vues
          <p>{statCounter("vues")}</p>
        </div>
        <div className="state-item">
          <Image src="/likes.png" alt="views" width={70} height={70} />
          j'aimes
          <p>{statCounter("likes")}</p>
        </div>
        <div className="state-item">
          <Image src="/comments.png" alt="views" width={70} height={70} />
          commentaires
          <p>{statCounter("comments")}</p>
        </div>
      </div>
      <div className="blogs-nav">
        <div class="search-input-container">
          <input
            type="text"
            name="text"
            class="search-input"
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="search..."
          />
          <span class="icon">
            <svg
              width="19px"
              height="19px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="1"
                  d="M14 5H20"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M14 8H17"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  opacity="1"
                  d="M22 22L20 20"
                  stroke="#000"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
        <div 
        onClick={()=>router.push("/addBlog")}
        className="add-blog-btn">
          <GrAddCircle />
          Add New Blog
        </div>
      </div>
      <div className="card-container">
        {blogs.map((blog) => (
          <BlogCard blog={blog} handleRefresh={handleRefresh} />
        ))}
      </div>
    </div>
  );
};

export default page;
