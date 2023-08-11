"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import "./event.css"
export const Event = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        axios.get("http://localhost:3001/events/getAllEvents")
            .then((res) => setEvents(res.data))
            .catch((err) => console.log(err))
    }

    const router = useRouter()
    return (
        <div>
            {events.map((event) => (
                <div className='one-event'>
                    <div className='event-date'>
                        <img src="dateicon.png" alt="" />
                        <h3>{event.date}</h3>
                    </div>
                    <h1 className='event-title'>{event.title}</h1>
                    <div className='event-paragraph truncate'>{event.description}</div>
                    <button onClick={() => {
                        router.push(`/events/${event.id}`)
                    }} className='read-more'>read more</button>
                    <img className='event-img' src="0.jpg" alt="" />
                    <div className='line-after'></div>
                </div>
            ))}
        </div>

    )
}
