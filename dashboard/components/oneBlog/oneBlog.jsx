"use client";
import React, { useState, useEffect } from "react";
import { RiTimer2Fill } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import {
  EditorState,
  convertFromRaw,
  ContentState,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import moment from "moment";
import "./oneBlog.css";
import { AiFillEdit } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { useRouter } from "next/navigation";
const getBlog = (id) => {
  return fetch(`http://localhost:3001/blogs/getOne/${id}`).then((res) =>
    res.json()
  );
};
const getComments = (blogId) => {
  return fetch(`http://localhost:3001/comments/getAll/${blogId}`).then((res) =>
    res.json()
  );
};

const oneBlog = ({ id }) => {
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [jsonHtml, setJsonHtml] = useState();
  const [descriptionn, setDesc] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [editTitle, setTitleEdit] = useState(false);
  const [comments,setComments]=useState([])
  const router = useRouter();

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(""))
  );

  useEffect(() => {
    if (id) {
      getBlog(id).then((fetchedBlog) => {
        console.log("data", fetchedBlog);
        setBlog(fetchedBlog);
        setImageUrl(fetchedBlog.image);
        setDesc(fetchedBlog.description);
        const contentState = convertFromRaw(JSON.parse(fetchedBlog.content)); // Parse the JSON content
        setEditorState(EditorState.createWithContent(contentState));
      })
      getComments(id).then(res=>setComments(res.data)).catch(err=>console.log(err))
    }
  }, [id, refresh]);

  if (!blog) {
    return null;
  }

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "travelMind");
    await axios
      .post("https://api.cloudinary.com/v1_1/do25iiz1j/upload", form)
      .then((res) => {
        setImageUrl(res.data.secure_url);
      })
      .catch((err) => console.log(err));
  };

  const formattedDate = moment(blog.createdAt).format("MMMM D, YYYY");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handlePastedText = (text, html, editorState) => {
    const contentState = ContentState.createFromText(text);
    const newEditorState = EditorState.push(
      editorState,
      contentState,
      "insert-characters"
    );
    setEditorState(newEditorState);
    return "handled";
  };
  const update = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    axios
      .put(`http://localhost:3001/blogs/updateBlog/${id}`, {
        title: title,
        image: imageUrl,
        content: JSON.stringify(rawContentState),
        description: descriptionn,
      })
      .then((res) => router.push("/manageBlogs"))
      .catch((err) => alert("Error updating blog"));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`)
      .then((res) => setRefresh(!false))
      .catch((err) => console.error(err));
  };
  return (
    <div className="one-post">
      <div className="one-post-container">
        <div className="admin-details">
          <div className="user-info">
            <img src="../profil.png" alt="avatar" />
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
        {editTitle ? (
          <div className="input-container">
            <label htmlFor="blogTitle">Titre du blog :</label>
            <input
              value={title}
              type="text"
              className="blogTitle"
              placeholder="Entrez le titre du blog"
              onChange={(e) => setTitle(e.target.value)}
            />{" "}
            <button className="save-btn" onClick={() => update()}>
              Save
            </button>
          </div>
        ) : (
          <h1
            className="blog-title"
            onClick={(e) => {
              setTitleEdit(true);
              setTitle(blog.title);
            }}
          >
            {blog.title} <AiFillEdit className="edit-icon" />
          </h1>
        )}
        <div className="image-upload-container">
          {imageUrl ? (
            <div className="image-preview">
              <button onClick={() => setImageUrl("")} className="change-image">
                Changer l'image
              </button>
              <img className="Uploaded-image" src={imageUrl} alt="Uploaded" />
            </div>
          ) : (
            <>
              <label className="upload-image">Ajouter une image:</label>
              <label className="upload-box">
                <input
                  type="file"
                  id="imageInput"
                  className="image-input"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <div className="upload-icon">
                  <BsFillImageFill
                    style={{
                      width: 55,
                      height: 55,
                      viewBox: "0 0 55 55",
                    }}
                  />
                </div>
                <p className="upload-text">
                  Déposez votre image ici
                  <br />
                  ou cliquez pour la sélectionner
                </p>
              </label>
              <button onClick={uploadImage} className="upload-button">
                Upload Image
              </button>
            </>
          )}
        </div>
        <div className="edit-btn-container">
          <div
            className="edit-btn"
            onClick={() => {
              setEdit(true);
            }}
          >
            {" "}
            Edit Content <AiFillEdit className="edit-icon" />
          </div>
        </div>

        {edit ? (
          <>
            <div className="input-container">
              <label htmlFor="descritption">Description du blog :</label>
              <textarea
                value={descriptionn}
                type="text"
                id="desc-input"
                placeholder="description..."
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="text-editor">
              <label className="blog-text">Text du blog:</label>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                handlePastedText={handlePastedText}
                onEditorStateChange={onEditorStateChange}
              />

              <div>{jsonHtml}</div>
              <button onClick={() => update()}>Save</button>
            </div>
          </>
        ) : (
          <div className="content">
            {blog.description}
            <Editor editorState={editorState} toolbarHidden readOnly />
          </div>
        )}
      </div>

      <div className="comments-list">
        {comments?.map((comment, index) => (
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
            <TiDeleteOutline
              onClick={() => handleDelete(comment.id)}
              className="delete-comment"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default oneBlog;
