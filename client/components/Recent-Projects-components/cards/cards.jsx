"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHeart } from '@fortawesome/free-solid-svg-icons';
import "./cards.css"
import TimeAgo from 'javascript-time-ago';
import HoverVideoPlayer from 'react-hover-video-player';
import en from 'javascript-time-ago/locale/en'
import { useRouter } from 'next/navigation';
const cards = ({ data }) => {
    const router = useRouter()
    useEffect(() => {
        TimeAgo.addDefaultLocale(en)
        const timeAgo = new TimeAgo('en-US')
        setTimeAgo(timeAgo)

    }, [])
    const [timeAgo, setTimeAgo] = useState(null)
    const [liked, setLiked] = useState(false)
    console.log(liked);

    return (<div className='cs-container'><p className='title-cards-section'> Projets récemments publiés </p>
        <div className='cards-section-inner-container'>
            {data.map((video, i) => {
                let newC = new Date(video.createdAt)
                return (<div className='one-video' key={i} >
                    <HoverVideoPlayer onClick={() => router.push(`Recent-Projects/${video.id}`)} className='projects-video-player'
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
                    {liked ? (<div className='like-button' onClick={() => setLiked(!liked)} ><FontAwesomeIcon className="heart" beat icon={faHeart} style={{ color: "red", }} /></div>) : (<div className='like-button' onClick={() => setLiked(!liked)} ><FontAwesomeIcon className="heart" icon={faHeart}  /></div>)}
                </div>
                )

            }
            )}

        </div>
    </div>
    )
}

export default cards