"use client"
import React, { useState, useEffect } from 'react'
import "./addStaff.css"
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import { BsFillImageFill } from "react-icons/bs";

const AddStaff = () => {
    const [imageUrl, setImageUrl] = useState("");
    const location = sessionStorage.getItem('location');
    const image = sessionStorage.getItem('image');
    const name = sessionStorage.getItem('name');
    const [file, setFile] = useState(event.image)
    const [isLoading, setIsLoading] = useState(false);
    const [speciality,setSpeciality]=useState("developper")
    const [nom, setNom] = useState("")
    const router = useRouter();
    const param = useParams()
    const id = param.cohortID

    const handleSelectChange = (e) => {
        setSpeciality(e.target.value);
    };

    const uploadImage = async () => {
        const form = new FormData();
        form.append("file", file);
        form.append("upload_preset", "blogging");
        await axios
            .post("https://api.cloudinary.com/v1_1/dx3tuofza/upload", form)
            .then((res) => {
                setImageUrl(res.data.secure_url);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const update = async (id) => {
        
        axios.post("http://localhost:3001/instructor/add", {
            "name": nom,
            "image": imageUrl,
            "speciality": speciality,
            "disponibility": true,
            "CohortId":id
        })
    }
console.log("image", imageUrl);


    if (!location && !image && !name) {
        return (<div className='not-found'>404 not found</div>)
    }
    else {
        return (
            <div className='add-event-container'>
                <h1>Ajouter un instructeur</h1>
                <h2>entrer le nom : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => { setNom(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> nom </label>
                </div>
                <h2>choisir specialité : <span className='required'>*</span></h2>
                <select value={speciality} onChange={handleSelectChange} class="form__field w-100">
                    <option value="developper">Developper</option>
                    <option value="classe cordinator">coordinateur de classe</option>
                </select>
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
                <button className='button-post' onClick={(e) => { { update(id); router.push(`/cohorts/${id}`) } }}>save changes</button>
            </div>
        )
    }
}

export default AddStaff;
