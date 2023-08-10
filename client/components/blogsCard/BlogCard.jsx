"use client"
import React,{useEffect} from 'react'
import "./BlogCard.css"
import { RiTimer2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { useRouter } from 'next/navigation'
 


const BlogCard = ({src}) => {
  const router=useRouter()
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                }
                else {
                    entry.target.classList.remove("show")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach((el) => observer.observe(el))
    })
  return (
<div  onClick={()=>{
  router.push('/Blogs/1', { scroll: true })
}}className="blog-card-cotainer hidden">
        <img className="blog-image" src={src} alt="" />
        <div className="blog">
          <p className="blog-date">
            <RiTimer2Fill /> 6 min read // July 10, 2023
          </p>
          <h1>ReBootKamp ( RBK ) ouvre un nouveau hackerspace au Kef</h1>
          <p className="content truncate">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            commodi deleniti laboriosam vitae repudiandae dolore nisi expedita
            tenetur omnis consectetur, cum odio fugit. Sint quidem dolorem
            labore omnis possimus. Assumenda!
          </p>
          <div className="interaction">
            <div className="comments">
              <p className="vues">0 vues</p>
              <p className="comments">0 commentaires</p>
            </div>
            <div className="likes">
              10
              <AiTwotoneHeart style={{ color: "red" }} />
            </div>
          </div>
          <div className="user-details">
            <img src="creator.png" alt="avatar" />
            <div className="details">
              <p>Moez temimi</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BlogCard
