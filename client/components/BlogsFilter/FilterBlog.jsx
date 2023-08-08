"use client"
import React, { useState } from 'react'

const FilterBlog = () => {
    const [blog,setBlog]=useState("Tous les posts")
  return (
    <div>
       <h1 className="posts">{blog}</h1>
      <div class="dropdown">
      Tous les posts
        <ul class="dropdown-menu">
          <li onClick={(e)=>setBlog(e.target.textContent)} >
           Tous les posts
          </li>
          <li onClick={(e)=>setBlog(e.target.textContent)} >
          Tips
          </li>
          <li onClick={(e)=>setBlog(e.target.textContent)} >
           Technologies
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterBlog
