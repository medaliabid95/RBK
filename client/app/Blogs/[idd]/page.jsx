"use client"
import React,{useState,useEffect} from "react";
import "./one.css";
import { RiTimer2Fill } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import moment from "moment";



const getBlog = (id) => {
  return fetch(`http://localhost:3001/blogs/getOne/${id}`).then((res) =>
    res.json()
  );
};
const getComments = (blogId) => {
  return fetch(`http://localhost:3001/blogs/${blogId}/comments`).then((res) => res.json());
};

const addComment = (blogId, content) => {
  return fetch(`http://localhost:3001/blogs/${blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  }).then((res) => res.json());
};

const updateComment = (commentId, content) => {
  return fetch(`http://localhost:3001/comments/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  }).then((res) => res.json());
};

const deleteComment = (commentId) => {
  return fetch(`http://localhost:3001/comments/${commentId}`, {
    method: "DELETE",
  });
};

const page =  ({params}) => {

  const [blog, setBlog] = useState(null);
  const [Comment, setComment] = useState(""); 
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [refresh,setRefresh]=useState(false)
  const [showDropdown, setShowDropdown] = useState(null);
  console.log(blog)
  useEffect(() => {
    if (params.idd) {
      getBlog(params.idd).then((fetchedBlog) => {
        setBlog(fetchedBlog);
      });
      getComments(params.idd).then((fetchedComments) => {
        setComments(fetchedComments);
      });
    }
  }, [params.idd,refresh]);

  
  if (!blog) {
    console.log("yess")
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
      setRefresh(!refresh)
    }
  };

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
  };

  const handleUpdateComment = async (commentId) => {
    if (Comment.trim() !== "") {
      const updatedComment = await updateComment(commentId, Comment);
      setComments((prevComments) =>
        prevComments.map((c) => (c.id === commentId ? updatedComment : c))
      );
      setEditingCommentId(null);
      setComment("");
      setRefresh(!refresh)
      setShowDropdown(null)
    }
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(commentId);
    setComments((prevComments) => prevComments.filter((c) => c.id !== commentId));
  };
  return (
    <div className="one-post">
      <div className="one-post-container">
      <div className="admin-details">
        <div className="user-info">
          <img src="../creator.png" alt="avatar" />
          <div className="details">
            <p>Moez temimi</p>
            <p>Admin</p>
            <div className="blog-date">
              <RiTimer2Fill /> 2 min read // {formattedDate}
            </div>
          </div>
        </div>
        <LuMoreVertical />
      </div>
      <h1 className="blog-title">
        ReBootKamp ( RBK ) ouvre un nouveau hackerspace au Kef
      </h1>
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
