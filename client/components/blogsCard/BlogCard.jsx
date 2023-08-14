"use client";
import React, { useEffect, useState } from "react";
import "./BlogCard.css";
import { RiTimer2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import moment from "moment";
import axios from "axios";

const BlogCard = ({ blog, handleVuee }) => {
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [comment, setComment] = useState(""); 
  const [comments, setComments] = useState([]);
  const [showCommentsPopup, setShowCommentsPopup] = useState(false);
  if (!blog) {
    return null;
  }
  const router = useRouter();
  useEffect(() => {
    const storedLikedBlogs =
      JSON.parse(localStorage.getItem("likedBlogs")) || [];
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
  }, []);
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
        .put(`http://localhost:3001/blogs/updateLikes/${id}`,{like:"+ 1"})
        .then((res) => {
          handleVuee();
  
          setLikedBlogs((prevLikedBlogs) => [...prevLikedBlogs, id]);
  
          // Now, after the state is updated, set local storage
          const updatedLikedBlogs = [...likedBlogs, id];
          localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
        })
        .catch((err) => console.log(err));
    }else {
      axios
        .put(`http://localhost:3001/blogs/updateLikes/${id}`,{like:"- 1"})
        .then((res) => {
          handleVuee();
  
          setLikedBlogs((prevLikedBlogs) =>{
            return prevLikedBlogs.filter(like=>like!==id)
          });
  
          // Now, after the state is updated, set local storage
          const updatedLikedBlogs = likedBlogs.filter(like=>like!==id)
          localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
        })
        .catch((err) => console.log(err));
    }
  };
  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      // Add the new comment to the comments list
      setComments((prevComments) => [...prevComments, comment]);
      // Clear the input field after submitting
      setComment("");
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
        <div className="user-details">
          <img src="creator.png" alt="avatar" />
          <div className="details">
            <p>Moez temimi</p>
            <p>Admin</p>
          </div>
        </div>
        <h1>{blog.title}</h1>
        <p className="content truncate">{blog.description}</p>
        <div className="interaction">
          <div className="comments">
            <p
              onClick={() => handleLikes(blog.id)}
              className={`jaime`}
              style={{
                color: likedBlogs.includes(blog.id) ? "red" : "inherit",
              }}
            >
              {blog.likes} j'aime
            </p>
            <p className="vues">{blog.vues} vues</p>
            <p className="comments">{blog.comments.length} commentaire</p>
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
