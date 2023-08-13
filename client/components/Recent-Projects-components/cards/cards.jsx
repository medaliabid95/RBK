"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import "./cards.css"
import TimeAgo from 'javascript-time-ago';
import HoverVideoPlayer from 'react-hover-video-player';
import en from 'javascript-time-ago/locale/en'
import Videos from "../../../app/Recent-Projects/dummy.json"
const cards = () => {
    useEffect(() => {
        TimeAgo.addDefaultLocale(en)
        const timeAgo = new TimeAgo('en-US')
        setTimeAgo(timeAgo)
    }, [])
    const newc = new Date("2023-08-13 21:45:19")
    console.log(newc.getTime());
    const [timeAgo, setTimeAgo] = useState(null)

    return (<div className='cs-container'><p className='title-cards-section'> Projet récemment publié </p>
        <div className='cards-section-inner-container'>
            {Videos.map((video, i) => {
                return (<div className='one-video' key={i} >
                    <HoverVideoPlayer className='projects-video-player'
                        videoSrc={video.src}
                        overlayTransitionDuration={100}
                        videoStyle={{ cursor: "pointer", borderRadius: 20 }}
                        muted={false}
                    />
                    <span className='video-info'>
                        <img src="/images/test.png" alt="" className='project-img' />
                        <span className='project-name'>{video.title}</span>
                        <span className='project-timeAgo'>{timeAgo && timeAgo.format(video.date)}</span>
                    </span>

                    <span className='more-details'> <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff", }} />Plus de détails</span>

                </div>
                )

            }
            )}

        </div>
    </div>
    )
}

export default cards