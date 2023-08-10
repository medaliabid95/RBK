"use client"
import React from 'react'
import "./one.css"
import { RiTimer2Fill } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRouter } from 'next/router';
const page = () => {
const Router=useRouter()
const blogId=Router.query.blog

  const contentState = convertFromRaw(JSON.parse(localStorage.getItem("blog")));
    const editorState = EditorState.createWithContent(contentState);
    // console.log(JSON.parse(localStorage.getItem("blog")).blocks[0].text)
    console.log("he")
  return (
    <div className='one-post-container' >
          <div className="user-details">
            <div className='user-info'>
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
          <h1 className='blog-title'>ReBootKamp ( RBK ) ouvre un nouveau hackerspace au Kef</h1>
          <img className='blog-image' src="../typescript.png" alt="" />
          <div className='content'>
          <Editor
                editorState={editorState}
                toolbarHidden
                readOnly
            />
          </div>
    </div>
  )
}

export default page
