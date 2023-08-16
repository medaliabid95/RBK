"use client";
import React, { useState, useEffect } from "react";
import "./one.css";
import { RiTimer2Fill } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import moment from "moment";
import Header from "../../../components/blogsHeader/Header.jsx";

const getBlog = (id) => {
  return fetch(`http://localhost:3001/blogs/getOne/${id}`).then((res) =>
    res.json()
  );
};
const getComments = (blogId) => {
  return fetch(`http://localhost:3001/blogs/${blogId}/comments`).then((res) =>
    res.json()
  );
};

const addComment = (blogId, content) => {
  return fetch(`http://localhost:3001/comments/${blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  }).then((res) => res.json());
};




const page = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [Comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const [refresh, setRefresh] = useState(false);
  

  useEffect(() => {
    if (params.idd) {
      getBlog(params.idd).then((fetchedBlog) => {
        setBlog(fetchedBlog);
      });
      getComments(params.idd).then((fetchedComments) => {
        setComments(fetchedComments);
      });
    }
  }, [params.idd, refresh]);

  if (!blog) {
    console.log("yess");
    return null;
  }
  const contentState = convertFromRaw(JSON.parse(blog.content));
  const editorState = EditorState.createWithContent(contentState);
  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
  const handleCommentSubmit = async () => {
    if (Comment.trim() !== "") {
      const newComment = await addComment(blog.id, Comment);
      setComments((prevComments) => [...prevComments, newComment]);
      setComment("");
      setRefresh(!refresh);
    }
  };




  

  return (
    <div className="one-post">
      <section className="image-blogs-container">
        <img src="/blog.jpg" alt="aws" />
        <Header />
      </section>
      <div className="one-post-container">
        <div className="admin-details">
          <div className="user-info">
            <img src="/profil.png" alt="avatar" />
            <div className="details">
              <p>Admin</p>
              <p></p>
              <div className="blog-date">
                <RiTimer2Fill /> 2 min read // {formattedDate}
              </div>
            </div>
          </div>
          <LuMoreVertical />
        </div>
        <h1 className="blog-title">{blog.title}</h1>
        <img className="blog-imagee" src={blog.image} alt="" />
        <div className="content">
          {blog.description}
          <Editor editorState={editorState} toolbarHidden readOnly />
        </div>
      </div>
      <div className="comment-section">
        <input
          type="text"
          placeholder="Laissez un commentaire..."
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Commenter</button>
      </div>
      <div className="comments-list">
        {blog.comments.map((comment, index) => (
          <div key={comment.id} className="comment">
            <img src="../profil.png" alt="Avatar" className="avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <div>
                  <p className="comment-name">guest</p>
                  <p>{comment.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
