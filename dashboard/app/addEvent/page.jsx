"use client"
import React, { useState, useEffect } from 'react'
import "./addEvent.css"
import axios from 'axios';
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";

const AddEvent = () => {
    const [imageUrl, setImageUrl] = useState("");
    const location = sessionStorage.getItem('location');
    const image = sessionStorage.getItem('image');
    const name = sessionStorage.getItem('name');
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [jsonHtml, setJsonHtml] = useState();
    const [file, setFile] = useState("")
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [preDescription, setPreDescription] = useState("")
    const [adress, setAddress] = useState('')
    const [date, setDate] = useState('')

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

    const postEvent = async () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const contentPlainText = EditorState.createWithContent(contentState).getCurrentContent().getPlainText();
        axios.post("http://localhost:3001/events/addEvent", {
            title: title,
            preDescription: preDescription,
            image: imageUrl,
            lieu: adress,
            heure: date,
            description: contentPlainText
        })
            .then((res) => {
                setTitle("");
                setPreDescription("");
                setFile("");
                setAddress("");
                setDate("");
                setEditorState(EditorState.createEmpty())
                alert("event added successfully")
                window.location.reload()
            })
            .catch((err) => alert("failed to add event"))
    }
    if (!location && !image && !name) {
        return (<div className='not-found'>404 not found</div>)
    }
    else {
        return (
            <div className='add-event-container'>
                <h1>Creez un nouveau event</h1>
                <h2>titre du event : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => { setTitle(e.target.value) }} class="form__field w-100" placeholder="titre" />
                    <label for="name" class="form__label"> titre </label>
                </div>
                <h2>sous Description : <span className='required'></span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => setPreDescription(e.target.value)} class="form__field w-100" placeholder="sous description" />
                    <label for="name" class="form__label"> sous description </label>
                </div>
                <h2>ajouter une image : <span className='required'>*</span></h2>
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
                <h2>adress : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" class="form__field w-100" onChange={(e) => setAddress(e.target.value)} placeholder="adress" />
                    <label for="name" class="form__label"> adress </label>
                </div>
                <h2>date : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" class="form__field w-100" onChange={(e) => setDate(e.target.value)} placeholder="date" />
                    <label for="name" class="form__label">date </label>
                </div>
                <h2>description du blog : <span className='required'>*</span></h2>
                <div className="text-editor">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        handlePastedText={handlePastedText}
                        onEditorStateChange={onEditorStateChange}
                    />
                    <div>{jsonHtml}</div>
                </div>
                <button className='button-post' onClick={() => { postEvent(); }}>creer</button>
            </div>
        )
    }
}

export default AddEvent;
