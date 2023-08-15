"use client";
import React, { useState, useEffect } from "react";
import "./editBlog.css";
import axios from "axios";
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";

import { useRouter } from "next/navigation";

const EditEvent = ({ params }) => {
  const router=useRouter()
  const [jsonHtml, setJsonHtml] = useState();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [descriptionn, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(""))
  );

  useEffect(() => {
    axios
    .get(`http://localhost:3001/blogs/getOne/${params.id}`)
    .then((res) => {
      setTitle(res.data.title);
      setImageUrl(res.data.image);
      setDesc(res.data.description);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(res.data.description)
        )
      );
    })
    .catch((err) => console.log(err));
  }, []);

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
  

  const update =  () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    
    axios
      .put(`http://localhost:3001/blogs/updateBlog/${params.id}`, {
        title: title,
        image: imageUrl,
        content: JSON.stringify(rawContentState.blocks[0].text),
        description:descriptionn
      })
      .then((res) => router.push("/manageBlogs"))
      .catch((err) => alert("Error updating blog"));
  };


  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "travelMind");
    await axios
      .post("https://api.cloudinary.com/v1_1/do25iiz1j/upload", form)
      .then((res) => {
        setImageUrl(res.data.secure_url)
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="addBlog-container">
      <h1 className="title">Modifier le blog</h1>

      <div className="input-container">
        <label htmlFor="blogTitle">Titre du blog :</label>
        <input
          value={title}
          type="text"
          id="blogTitle"
          placeholder="Entrez le titre du blog"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
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
            {" "}
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
       
        <button onClick={()=>update()}>Save</button>
        <div>{jsonHtml}</div>
      </div>
    </div>
  );
};

export default EditEvent;
