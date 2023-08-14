"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import "./manageEvents.css"
const ManageEvents = () => {
    const [events, setEvents] = useState([])
    const [deleted,setDeleted]=useState(false)

    
    useEffect(() => {
        fetch()
    }, [deleted])

    const fetch = () => {
        axios.get("http://localhost:3001/events/getAllEvents")
            .then((res) => setEvents(res.data))
            .catch((err) => console.log(err))
    }

    const deleteEvent=(id)=>{
        axios.delete(`http://localhost:3001/events/delete/${id}`)
        .then((res)=>{alert(`evenet with id ${id} was deleted`);setDeleted(!deleted)})
        .catch((err)=>alert("failed to delete event"))
    }

    return (
        <div>
            {events.map((event) => (
                <div className='one-event'>
                    <div className='event-date'>
                        <img src="dateicon.png" alt="" />
                        <h3>{event.heure}</h3>
                    </div>
                    <h1 className='event-title'>{event.title}</h1>
                    <div className='event-paragraph truncate'>{event.description}</div>
                    <Link className='read-more' href={`/manageEvent/${event.id}`}>
                   <span className='read-more-text'>edit</span>
                    </Link>
                    <button className='btn-delete'  onClick={(e)=>{e.preventDefault();deleteEvent(event.id)}}>delete</button>
                    <img className='event-img' src={event.image} alt="" />
                    <div className='line-after'></div>
                </div>
            ))}
        </div>

    )
}
export default ManageEvents;