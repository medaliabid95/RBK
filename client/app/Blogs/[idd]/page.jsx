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

const page =  ({params}) => {

  const [blog, setBlog] = useState(null);
  console.log(blog)
  useEffect(() => {
    if (params.idd) {
      getBlog(params.idd).then((fetchedBlog) => {
        setBlog(fetchedBlog);
      });
    }
  }, [params.idd]);

  
  if (!blog) {
    console.log("yess")
    return null;
  }
  const contentState = convertFromRaw(JSON.parse(blog.content));
  const editorState = EditorState.createWithContent(contentState);
  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");
  return (
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
  );
};

export default page;
