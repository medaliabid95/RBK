"use client"
import React, { useState } from 'react'
import "./addProject.css"
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import axios from 'axios';


const AddProject = () => {
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [videoUrl, setVideoUrl] = useState("");
    const [description, setDescription] = useState("")
    const [team, setTeam] = useState("")
    const [link, setLink] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    //*editor functions start  
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [jsonHtml, setJsonHtml] = useState();

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };
    const handlePastedText = (text, html, editorState) => {
        const contentState = ContentState.createFromText(text);
        const newEditorState = EditorState.push(editorState, contentState, 'insert-characters');
        setEditorState(newEditorState);
        return 'handled';
    };
    //*editor functions end
    const uploadImage = async () => {
        const form = new FormData();
        form.append("file", file);
        form.append("upload_preset", "RBK-WEBSITE");
        await axios
            .post("https://api.cloudinary.com/v1_1/dkhknwrn5/upload", form)
            .then((res) => {
                setVideoUrl(res.data.secure_url);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const postProject = () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const contentPlainText = EditorState.createWithContent(contentState).getCurrentContent().getPlainText();
        axios.post("http://localhost:3001/projects/addOne", {
            title, description, team, demo: videoUrl, url: link, about: contentPlainText
        })
            .then((res) => {
                setTitle("");
                setDescription("");
                setFile("");
                setLink("");
                setTeam("");
                setEditorState(EditorState.createEmpty())
                window.location.replace("/homeProjects")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='add-projcet-container'>
            <h1>Ajoutez un nouveau projet</h1>
            <h2>Titre du projet : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} class="form__field w-100" placeholder="titre" />
                <label for="name" class="form__label"> Titre </label>
            </div>
            <h2>Description : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" maxLength={30} onChange={(e) => setDescription(e.target.value)} class="form__field w-100" placeholder="sous description" />
                <label for="name" class="form__label"> Text </label>
            </div>
            <h2>Ajouter une video : <span className='required'>*requis</span></h2>
            <div className="image-upload-container">
                {videoUrl ? (
                    <div className="image-preview">
                        <button onClick={() => setVideoUrl("")} className="change-image">
                            Changer la video
                        </button>
                        <video src={videoUrl} alt="Uploaded" />
                    </div>
                ) : (
                    <>
                        {" "}
                        <label className="upload-box">
                            <input
                                type="file"
                                id="imageInput"
                                className="image-input"
                                accept="video/*"
                                onChange={(e) => { setFile(e.target.files[0]), console.log("files", e.target.files); }}
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
                                Déposez votre video ici
                                <br />
                                Ou cliquez pour la sélectionner
                            </p>
                        </label>
                        <button onClick={uploadImage} className="upload-button">
                            Upload Video
                        </button>
                    </>
                )}
            </div>
            <h2>Lien GitHub : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" class="form__field w-100" onChange={(e) => setLink(e.target.value)} placeholder="adress" />
                <label for="name" class="form__label"> Lien</label>
            </div>
            <h2>Membres de l'équipe : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" class="form__field w-100" onChange={(e) => setTeam(e.target.value)} placeholder="date" />
                <label for="name" class="form__label">Membres </label>
            </div>
            <h2>Description du projet : <span className='required'>*requis</span></h2>
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
            <button className='button-post-project' onClick={() => postProject()}>Ajoutez</button>
        </div>
    )
}

export default AddProject