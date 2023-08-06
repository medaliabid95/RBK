"use client";

import Image from "next/image";
import React,{useRef} from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

function Fullpage({arr1,arr2,imgSrc}) {
  // Import HTMLDivElement type
  const secRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,arr1,arr2
 
  );

  return (
    <FullpageStyled ref={secRef}>
      <motion.div
        className="image"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >
        <img
            className="image"
          src={imgSrc}
          alt="monkey"
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",
           
            
          }}
        />
      </motion.div>
    </FullpageStyled>
  );
}
const FullpageStyled = styled.div`
  .image {
    width: 110%;
    height: 400px;

    position: relative;
    border-radius: 1rem;
    border-radius: 8px;

   
   


  }
  @media (max-width: 992px) {
    display: none;
  }
}`;

export default Fullpage;