"use client";

import Image from "next/image";
import React,{useRef} from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

function Text({arr1,arr2}) {
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
    <TextStyled ref={secRef}>
      <motion.div
        className="image"
        style={{
          scale: scale,
          x: xTransform,
        }}
      >

                <div className="qui-nous-somme-item">
          <div>
            <h3>* Notre méthodologie</h3>
            <ul>
              <li>Basée sur une plateforme hybride de training dédiée</li>
              <li>
                Un apprentissage pratique basé sur la réalisation de projets et
                axée sur les besoins du marché de l’emploi
              </li>
              <li>
                S'adapte à la demande du marché de l’emploi en créant
                continuellement de nouveaux programmes
              </li>
            </ul>
          </div>
          <div>
            <h3>Les programmes comprennent :</h3>
            <ul>
              <li>Des compétences techniques,</li>
              <li>Des Compétences durables (soft skills),</li>
              <li>Les bonnes pratiques professionnelles.</li>
              <li>Un accompagnement permanent des apprenants par des coachs</li>
              <li>Des mentors métier pour garantir la qualité</li>
              <li>Un suivi psycho émotionnel</li>
              <li>Un lien communautaire puissant</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </TextStyled>
  );
}
const TextStyled = styled.div`
    .qui-nous-somme-item{
        width:100%
    }

}`;

export default Text;