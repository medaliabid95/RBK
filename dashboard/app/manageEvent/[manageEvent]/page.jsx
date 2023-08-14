"use client"
import React, { useState, useEffect } from 'react'
import "./editEvent.css"
import axios from 'axios';

import { useParams,useRouter } from 'next/navigation'
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";

const EditEvent = () => {
    const param = useParams()
    const id = param.manageEvent
    const router = useRouter(); 
    // const  manageEvent = router.query.manageEvent;
    const [event, setEvent] = useState([])
    const [jsonHtml, setJsonHtml] = useState();
    const [file, setFile] = useState(event.image)
    const [title, setTitle] = useState(event.title)
    const [isLoading, setIsLoading] = useState(false);
    const [preDescription, setPreDescription] = useState("")
    const [adress, setAddress] = useState('')
    const [date, setDate] = useState('')
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(ContentState.createFromText(""))
    );
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

    const fetch = () => {
        axios.get(`http://localhost:3001/events/getOneEvent/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setFile(res.data.image);
                setAddress(res.data.lieu);
                setPreDescription(res.data.preDescription);
                setDate(res.data.heure);
                setEditorState(EditorState.createWithContent(ContentState.createFromText(res.data.description)));
                
            })
            .catch((err) => console.log(err))
    }


    const update=async (id)=>{
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const form = new FormData()
        form.append("file", file)
        form.append("upload_preset", "blogging")
        const res = await axios.post("https://api.cloudinary.com/v1_1/dx3tuofza/upload", form)
        const url = res.data.secure_url
        axios.put(`http://localhost:3001/events/updateOne/${id}`,{
            title: title,
            preDescription: preDescription,
            image: url,
            lieu: adress,
            heure: date,
            description: JSON.stringify(rawContentState.blocks[0].text)
        })
        .then((res)=>{alert("Updated event");router.push("/manageEvent")})
        .catch((err)=>alert("Error updating event"))
    }
    
    useEffect(()=>{
        fetch(id)
        
    },[])

    return (
        <div className='add-event-container'>
            <h1>Creez un nouveau event</h1>
            <h2>titre du event : <span>*required</span></h2>
            <div class="form__group">
                <input type="text"value={title} onChange={(e) => { setTitle(e.target.value) }} class="form__field w-100" placeholder="titre" />
                <label for="name" class="form__label"> titre </label>
            </div>
            <h2>sous Description : <span className='required'>*not required</span></h2>
            <div class="form__group">
                <input type="text" value={preDescription} onChange={(e) => setPreDescription(e.target.value)} class="form__field w-100" placeholder="sous description" />
                <label for="name" class="form__label"> sous description </label>
            </div>
            <h2>ajouter une image : <span>*required</span></h2>
            <div className='image-input' >
                <label className='image-input-label' for="inputTag">
                    Select Image
                    <input id="inputTag"  type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <img src="picture.png" alt="" />
                </label>
            </div>
            <h2>adress : <span>*required</span></h2>
            <div class="form__group">
                <input type="text" value={adress} class="form__field w-100" onChange={(e) => setAddress(e.target.value)} placeholder="adress" />
                <label for="name" class="form__label"> adress </label>
            </div>
            <h2>date : <span>*required</span></h2>
            <div class="form__group">
                <input type="text" value={date} class="form__field w-100" onChange={(e) => setDate(e.target.value)} placeholder="date" />
                <label for="name" class="form__label"> date </label>
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
            <button className='button-post' onClick={(e) => { update(id) }}>save changes</button>
        </div>
    )
}

export default EditEvent;
