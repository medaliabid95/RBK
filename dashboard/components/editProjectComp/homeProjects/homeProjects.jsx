"use client"
import React, { useState, useEffect } from 'react'
import Filtered from '../filteredProjects/filtered';
import Image from "next/image";
import { GrAddCircle } from "react-icons/gr";
import { useRouter } from "next/navigation";
import "./homeProjects.css"
import axios from 'axios';
const homeProjects = () => {
    const router = useRouter()
    const [refresh, setRefresh] = useState(false);
    const [projects, setProjects] = useState([])
    console.log(projects)
    useEffect(() => {
        axios
            .get("http://localhost:3001/projects/getAll", { cache: "no-store" })
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching Projects:", error);
            });
    }, [refresh]);
    const handleRefresh = () => {
        setRefresh(!refresh);
    };
    const statCounter = (option) => {
        return projects.reduce((acc, curr) => acc + curr[option], 0);
    };
    const handleSearch = (query) => {
        const searched = projects.filter((project) => {
            const str1 = project.title.toUpperCase()
            const str2 = query.toUpperCase()
            return str1.includes(str2);
        });

        setProjects(searched);
        if (query === "") {

            setRefresh(!refresh);
        }
    };
    return (
        <div className='width-80'>
            <div className="state">
                <div className="state-item">
                    <Image src="/views.png" alt="views" width={60} height={60} />
                    Nombre de vues
                    <p>{statCounter("views")}</p>
                </div>
                <div className="state-item">
                    <Image src="/likes.png" alt="views" width={70} height={70} />
                    Nombre de j'aime
                    <p>{statCounter("likes")}</p>
                </div>
            </div>
            <div className="blogs-nav">
                <div class="search-input-container">
                    <input
                        type="text"
                        name="text"
                        class="search-input"
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="search..."
                    />
                    <span class="icon">
                        <svg
                            width="19px"
                            height="19px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    opacity="1"
                                    d="M14 5H20"
                                    stroke="#000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                    opacity="1"
                                    d="M14 8H17"
                                    stroke="#000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                    d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                                    stroke="#000"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                    opacity="1"
                                    d="M22 22L20 20"
                                    stroke="#000"
                                    stroke-width="3.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </span>
                </div>
                <div
                    onClick={() => router.push("/addProject")}
                    className="add-blog-btn">
                    <GrAddCircle />
                    Ajouter un projet
                </div>
            </div>
            <Filtered projects={projects} />
        </div>
    )
}

export default homeProjects