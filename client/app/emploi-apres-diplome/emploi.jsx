import React from "react"

const Emploi = ()=>{

    return(
        <div>
            <img src="./emploi-apres-diplome.png"/>
            <div className="black-container">
                <h1>Obtenez votre job de rêve grâce<br/> à notre services carrières.</h1>
                <h3>Notre Service carrières vous accompagne de manière<br/> personnalisée pour vous préparer à décrocher un emploi<br/> grâce à notre réseau de partenaires employeurs.</h3>
                <div className="3-box-container">
                    <div className="box-stat">
                        <h1>1000<span>+</span></h1>
                        <p>1000 Diplômés de RBK<br/> depuis 2016</p>
                    </div>
                    <div className="box-stat">
                        <h1>93<span>%</span></h1>
                        <p>93% Taux d'employabilité<br/> de nos étudiants</p>
                    </div>
                    <div className="box-stat">
                        <h1>1251<span>TND</span></h1>
                        <p>1251 Comme 1er salaire<br/> moyen (2022)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emploi;