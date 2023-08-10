"use client";
import React from "react";
import "./one.css";
import { RiTimer2Fill } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { EditorState, ContentState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const page = ({ params }) => {
  if (!localStorage.getItem("blog")) {
    return null;
  }
  console.log(params.blog);
  // const blogId=Router.query.blog
  const contentState = convertFromRaw(JSON.parse(localStorage.getItem("blog")));
  const editorState = EditorState.createWithContent(contentState);
  // console.log(JSON.parse(localStorage.getItem("blog")).blocks[0].text)
  return (
    <div className="one-post-container">
      <div className="admin-details">
        <div className="user-info">
          <img src="../creator.png" alt="avatar" />
          <div className="details">
            <p>Moez temimi</p>
            <p>Admin</p>
            <div className="blog-date">
              <RiTimer2Fill /> 6 min read // July 10, 2023
            </div>
          </div>
        </div>
        <LuMoreVertical />
      </div>
      <h1 className="blog-title">
        ReBootKamp ( RBK ) ouvre un nouveau hackerspace au Kef
      </h1>
      <img className="blog-imagee" src="../typescript.png" alt="" />
      <div className="content">
        <Editor editorState={editorState} toolbarHidden readOnly />
      </div>
    </div>
  );
};

export default page;
