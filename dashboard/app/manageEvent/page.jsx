"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import "./manageEvents.css"
const ManageEvents = () => {
    const [originalEvents, setOriginalEvents] = useState([]);
    const [events, setEvents] = useState([])
    const [deleted, setDeleted] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch()
    }, [deleted])

    useEffect(() => {
        // Filter events based on the search term
        const filteredEvents = originalEvents.filter((event) => {
            const str1 = event.title.toLowerCase();
            const str2 = search.toLowerCase();
            return str1.includes(str2);
        });

        // If search is empty, use the original events, otherwise use the filtered ones
        setEvents(search === "" ? originalEvents : filteredEvents);
    }, [search, originalEvents]);

    console.log(search);
    const fetch = () => {
        axios.get("http://localhost:3001/events/getAllEvents")
            .then((res) => {
                setEvents(res.data);
                setOriginalEvents(res.data); // Update the original events
            })
            .catch((err) => console.log(err));
    };

   

    const deleteEvent = (id) => {
        axios.delete(`http://localhost:3001/events/delete/${id}`)
            .then((res) => { alert(`evenet with id ${id} was deleted`); setDeleted(!deleted) })
            .catch((err) => alert("failed to delete event"))
    }
    return (
        <div className='big-container'>
            <div className='container-container'>
                <div class="search-input-container">
                    <input type="text" name="text" class="search-input" onChange={(e) => setSearch(e.target.value)} placeholder="search..." />
                    <span class="icon">
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                </div>
            </div>
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
                    <button className='btn-delete' onClick={(e) => { e.preventDefault(); deleteEvent(event.id) }}>delete</button>
                    <img className='event-img' src={event.image} alt="" />
                    <div className='line-after'></div>
                </div>
            ))}
        </div>

    )
}
export default ManageEvents;