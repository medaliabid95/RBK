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
        console.log(title , url , preDescription,adress,date);
        axios.post("http://localhost:3001/events/addEvent", {
            title: title,
            preDescription: preDescription,
            image: url,
            lieu: adress,
            heure: date,
            description: JSON.stringify(rawContentState.blocks[0].text)
        })
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
    }

    return (
        <div className='add-event-container'>
            <h1>Creez un nouveau event</h1>
            <h2>titre du event : <span>*required</span></h2>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <h2>sous Description : <span>*not required</span></h2>
            <input type="text" onChange={(e)=>setPreDescription(e.target.value)}/>
            <h2>ajouter une image : <span>*required</span></h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <h2>lieu : <span>*required</span></h2>
            <input type="text"onChange={(e)=>setAddress(e.target.value)} />
            <h2>date : <span>*required</span></h2>
            <input type="text" onChange={(e)=>setDate(e.target.value)}/>
            <h2>description du blog : <span>*required</span></h2>
            {/* <TextEditor onChange={(e)=>setDescription(e.target.value)}/> */}
            <div className="text-editor">
                {/* <label className="blog-text">Text du event :</label> */}
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
            <button className='button-post' onClick={(e)=>{e.preventDefault();postEvent()}}>creer</button>
        </div>
    )
}

export default AddEvent;
