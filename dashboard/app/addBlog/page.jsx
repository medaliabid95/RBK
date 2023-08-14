"use client";
import React, { useState } from "react";
import axios from "axios";
import "./addBlog.css";
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
const page = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [jsonHtml, setJsonHtml] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [descriptionn, setDesc] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const onSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    if(!title||!descriptionn||!JSON.stringify(rawContentState)){
      return
    }
 
    axios
      .post("http://127.0.0.1:3001/blogs/add", {
        title: title,
        image: imageUrl,
        description: descriptionn,
        content: JSON.stringify(rawContentState),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "travelMind");
    await axios
      .post("https://api.cloudinary.com/v1_1/do25iiz1j/upload", form)
      .then((res) => {
        setImageUrl(res.data.secure_url);
        setIsLoading(false);
        console.log("imageee");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addBlog-container">
      <h1 className="title">Créez un nouveau blog</h1>
      <div>
        <p>
          1. Remplissez les informations nécessaires, telles que le titre et le
          contenu du blog.
        </p>
        <p>
          2. Vous pouvez ajouter une vidéo et une image en option pour enrichir
          le contenu du blog.
        </p>
      </div>
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
            <img src={imageUrl} alt="Uploaded" />
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
        <button onClick={onSave}>Save</button>
        <div>{jsonHtml}</div>
      </div>
    </div>
  );
};

export default page;
