"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import TimeAgo from 'javascript-time-ago';
import HoverVideoPlayer from 'react-hover-video-player';
import en from 'javascript-time-ago/locale/en'
import { useRouter } from 'next/navigation';
const cards = ({ projects }) => {
    const router = useRouter()
    const [timeAgo, setTimeAgo] = useState(null)
    useEffect(() => {
        TimeAgo.addDefaultLocale(en)
        const timeAgo = new TimeAgo('en-US')
        setTimeAgo(timeAgo)
    }, [])

    return (<div className='cs-container'>
        <div className='cards-section-inner-container'>
            {projects.map((video, i) => {
                let newC = new Date(video.createdAt)
                return (<div className='one-video' key={i} >
                    <HoverVideoPlayer onClick={() => { router.push(`/editProject/${video.id}`, { scroll: true }); }} className='projects-video-player'
                        videoSrc={video.demo}
                        overlayTransitionDuration={100}
                        videoStyle={{ cursor: "pointer", borderRadius: 20 }}
                        muted={false}
                    />
                    <span className='video-info'>
                        <span className='project-name'>{video.title}</span>

                        <span className='project-timeAgo'>{timeAgo && timeAgo.format(newC.getTime())}</span>
                    </span>
                    <span className='more-details'> <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff", }} />Plus de détails</span>
                    <p className='desc-demo'>{video.description}</p>
                    <div className="like-rp-container">{video.likes} <span className="like-rp">j'aimes</span></div>
                </div>
                )
            }
            )}

        </div>
    </div>
    )
}

export default cards