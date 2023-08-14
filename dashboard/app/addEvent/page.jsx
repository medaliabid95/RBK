"use client"
import React, { useState, useEffect } from 'react'
import "./addEvent.css"
import axios from 'axios';
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";

const AddEvent = () => {
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

    const postEvent = async () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "blogging")
        const res = await axios.post("https://api.cloudinary.com/v1_1/dx3tuofza/upload", form)
        const url = res.data.secure_url
        console.log(title, url, preDescription, adress, date);
        axios.post("http://localhost:3001/events/addEvent", {
            title: title,
            preDescription: preDescription,
            image: url || file,
            lieu: adress,
            heure: date,
            description: JSON.stringify(rawContentState.blocks[0].text)
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div className='add-event-container'>
            <h1>Creez un nouveau event</h1>
            <h2>titre du event : <span>*required</span></h2>
            <div class="form__group">
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} class="form__field w-100" placeholder="titre" />
                <label for="name" class="form__label"> titre </label>
            </div>
            <h2>sous Description : <span>*not required</span></h2>
            <div class="form__group">
                <input type="text" onChange={(e) => setPreDescription(e.target.value)} class="form__field w-100" placeholder="sous description" />
                <label for="name" class="form__label"> sous description </label>
            </div>
            <h2>ajouter une image : <span>*required</span></h2>
            <div className='image-input' >
                <label className='image-input-label'  for="inputTag">
                    Select Image
                    <input id="inputTag" type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <img src="picture.png" alt="" />
                </label>
            </div>
            <h2>adress : <span>*required</span></h2>
            <div class="form__group">
                <input type="text" class="form__field w-100" onChange={(e) => setAddress(e.target.value)} placeholder="adress" />
                <label for="name" class="form__label"> adress </label>
            </div>
            <h2>date : <span>*required</span></h2>
            <div class="form__group">
                <input type="text" class="form__field w-100" onChange={(e) => setDate(e.target.value)} placeholder="date" />
                <label for="name" class="form__label">date </label>
            </div>
            <h2>description du blog : <span>*required</span></h2>
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
            <button className='button-post' onClick={(e) => { postEvent() }}>creer</button>
        </div>
    )
}

export default AddEvent;
