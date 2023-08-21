"use client"
import React, { useState, useEffect } from 'react'
import { BsFillImageFill } from "react-icons/bs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import axios from 'axios';
import "./editProjectId.css"

const page = ({ params }) => {
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [videoUrl, setVideoUrl] = useState("");
    const [description, setDescription] = useState("")
    const [team, setTeam] = useState("")
    const [link, setLink] = useState("")
    const id = params.editProjectId
    useEffect(() => {
        axios.get(`http://localhost:3001/projects/getOne/${id}`)
            .then((res) => {
                console.log(res);

                setTitle(res.data.title)
                setVideoUrl(res.data.demo)
                setDescription(res.data.description)
                setTeam(res.data.team)
                setLink(res.data.url)
                setEditorState(EditorState.createWithContent(ContentState.createFromText(res.data.about)))
            })
            .catch((err) => console.log(err))


    }, [])

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

    const updateProject = () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const contentPlainText = EditorState.createWithContent(contentState).getCurrentContent().getPlainText();
        axios.put(`http://localhost:3001/projects/updateOne/${id}`, {
            title, description, team, demo: videoUrl, url: link, about: contentPlainText
        })
            .then((res) => {
                console.log(res)
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
            <h1>Modifier votre projet</h1>
            <h2>Titre du projet : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form__field w-100" placeholder="titre" />
                <label for="name" class="form__label"> Titre </label>
            </div>
            <h2>Description : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} class="form__field w-100" placeholder="sous description" />
                <label for="name" class="form__label"> Text </label>
            </div>
            <h2>Ajouter une video : <span className='required'>*requis</span></h2>
            <div className="image-upload-container">
                {videoUrl ? (
                    <div className="image-preview">
                        <button onClick={() => setVideoUrl("")} className="change-image">
                            Changer la video
                        </button>
                        <video src={videoUrl} type="video/mp4" ></video>
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
                <input type="text" value={link} class="form__field w-100" onChange={(e) => setLink(e.target.value)} placeholder="adress" />
                <label for="name" class="form__label"> Lien</label>
            </div>
            <h2>Membres de l'équipe : <span className='required'>*requis</span></h2>
            <div class="form__group">
                <input type="text" value={team} class="form__field w-100" onChange={(e) => setTeam(e.target.value)} placeholder="date" />
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
            <button className='button-post-project' onClick={() => updateProject()}>Modifier</button>
        </div>
    )
}

export default page