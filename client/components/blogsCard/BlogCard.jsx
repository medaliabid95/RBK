"use client";
import React, { useEffect,useState } from "react";
import "./BlogCard.css";
import { RiTimer2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import moment from "moment";
import axios from "axios";

const BlogCard = ({ blog, handleVuee }) => {
  const [likedBlogs, setLikedBlogs] = useState([]);
  if (!blog) {
    return null;
  }
  const router = useRouter();
  useEffect(() => {
    const storedLikedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setLikedBlogs(storedLikedBlogs);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
  const handleVue = (id) => {
    axios
      .put(`http://localhost:3001/blogs/updateVue/${id}`)
      .then((res) => handleVuee())
      .catch((err) => console.log(err));
  };
  const handleLikes = (id) => {
   
    
    if (!likedBlogs.includes(id)) {
      axios
        .put(`http://localhost:3001/blogs/updateLikes/${id}`)
        .then((res) => {
          handleVuee();
          
          // Update likedBlogs in local storage
        setLikedBlogs(prev=>[...prev,id])
          localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="blog-card-cotainer hidden">
      <img
        onClick={() => {
          router.push(`/Blogs/${blog.id}`, { scroll: true });
          handleVue(blog.id);
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
            <p onClick={()=>handleLikes(blog.id)}   className={`jaime ${likedBlogs.includes(blog.id) ? "liked" : ""}`} style={{}}>{blog.likes} j'aime</p>
            <p className="vues">{blog.vues} vues</p>
            <p className="comments">0 commentaires</p>
          </div>
          <div className="likes">
            {blog.likes}
            <AiFillHeart style={{ fill: "red" }} />
          </div>
        </div>
        <div className="user-details">
          <img src="creator.png" alt="avatar" />
          <div className="details">
            <p>Moez temimi</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
