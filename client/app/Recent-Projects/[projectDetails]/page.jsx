'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({ params }) => {
    useEffect(() => {
        axios.get(`http://localhost:3001/projects/getOne/${id}`)
            .then((res) => { setData(res.data); console.log(res) })
            .catch((err) => console.log(err))
    }, [])
    const [data, setData] = useState(null)
    const id = params.projectDetails

    return (
        <div className='project-details-container'>{
        }</div>
    )
}

export default page