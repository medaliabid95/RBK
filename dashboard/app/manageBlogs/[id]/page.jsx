import React from "react";
import "./editBlog.css";
import OneBlog from "@/components/oneBlog/oneBlog.jsx";

const EditBlogs = ({ params }) => {
  return (
    <div className="addBlog-container">
      <h1 className="title">
        RebootKamp <p>Blogs</p>
      </h1>
      <OneBlog id={params.id} />
    </div>
  );
};

export default EditBlogs;
