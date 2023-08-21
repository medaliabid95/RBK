"use client"
import React, { useState, useEffect } from 'react'
import "./addStudent.css"
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation'
import { BsFillImageFill } from "react-icons/bs";

const AddStudent = () => {
    const location = sessionStorage.getItem('location');
    const image = sessionStorage.getItem('image');
    const name = sessionStorage.getItem('name');
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [numero, setNumero] = useState("");
    const [formule, setFormule] = useState("Temps plein (19 semaines)");
    const [session, setSession] = useState("Session 1");
    const router = useRouter();
    const param = useParams()
    const id = param.cohortID
    const handleSelectChange = (e) => {
        setPreDescription(e.target.value);
    };

    const addStudent = () => {
        axios.post("http://localhost:3001/students/add", {
            "prenom": prenom,
            "nom": nom,
            "email": email,
            "phone": numero,
            "accept": false,
            "formule": formule,
            "age": age,
            "session": session,
            "city": address,
            "compus": sessionStorage.getItem("location"),
            "stauts": "En Cours",
            "CohortId":id
        })
            .then((res) => alert("student added successfully"))
            .catch((err) => console.log(err))
    }
    const update = async (id) => {
        axios.put(`http://localhost:3001/events/updateOne/${id}`, {
            title: title,
            preDescription: preDescription,
            image: imageUrl,
            lieu: address,
            heure: date,
            description: contentPlainText
        })
            .then((res) => { alert("Updated event"); router.push("/manageEvent") })
            .catch((err) => alert("Error updating event"))
    }



    if (!location && !image && !name) {
        return (<div className='not-found'>404 not found</div>)
    }
    else {
        return (
            <div className='add-event-container'>
                <h1 >Ajouter un candidat</h1>
                <h2>entrer le prenom : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => { setPrenom(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> prenom </label>
                </div>
                <h2>entrer le nom : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => { setNom(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> nom </label>
                </div>
                <h2>entrer l'email : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> email </label>
                </div>
                <h2>entrer l'age : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="number" onChange={(e) => { setAge(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> age </label>
                </div>
                <h2>entrer l'adress' : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="text" onChange={(e) => { setAddress(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> adress </label>
                </div>
                <h2>entrer le numero : <span className='required'>*</span></h2>
                <div class="form__group">
                    <input type="number" onChange={(e) => { setNumero(e.target.value) }} class="form__field w-100" placeholder="nom" />
                    <label for="name" class="form__label"> numero </label>
                </div>
                <h2>choisir formule  : <span className='required'></span></h2>
                <select onChange={(e) => setFormule(e.target.value)} className="form__field w-100">
                    <option value="Temps plein (19 semaines)">Temps plein (19 semaines)</option>
                    <option value="Temps partiel (40 semaines)">Temps partiel (40 semaines)</option>
                </select>

                <h2>choisir session : <span className='required'></span></h2>
                <select onChange={(e) => setSession(e.target.value)} className="form__field w-100">
                    <option value="Session 1">Session 1</option>
                    <option value="Session 2">Session 2</option>
                </select>
                <button className='button-post' onClick={(e) =>{addStudent();router.push(`/cohorts/${id}`)}}>save changes</button>
            </div>
        )
    }
}

export default AddStudent;
