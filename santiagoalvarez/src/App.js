import style from "./App.module.css"
import {useEffect, useRef, useState} from "react"
import fotodeperfil from "./fotodeperfil.jpeg"
import Animations from "./components/Animations"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";

//hace con que cuando aparezca la pagina dos aparezca la barra de navegacion
// el elemento HTML, una instancia de Insertio.. , y un estado local al hook




function App() {
  
  //desetructuro como quiera  
  const [refpage1, state] = Animations()

return(
  <div className={style.app}>

    <div className={style.initialPage}>
      <div className={style.presentation}> 
        <h1 className={style.name}>SANTIAGO ALVAREZ</h1>
        <h2 className={style.title}>Full Stack Web Developer</h2>
      </div>

      <div className={style.line }></div>
      <div className={style.circle}></div>

      <main className={style.navbar}>
        <p>About me</p>
        <p>Contact</p>
        <p>Projects</p>
        <p>Tecnologias</p>
        
      </main>
    </div>

    <div className={style.About_me}>

      <div className={style.box}> 


        <div className={style.container_img}> 
          <img className={style.img} src={fotodeperfil} alt="fotoDePresentacion" />
        </div>

        <div className={style.container_text}> 
          <div className={style.text}>
            <h2>hi!, I'm Santiago Alvarez </h2>
              <div className={style.paragraph}>

              <p className={style.paragraph_p}> { `Soy de Buenos Aires, Argentina y tengo 21 años.
              Desde pequeño me apasiona el mundo Tech, crear cosas y es por eso que decidi dedicarme al desarrollo Web.
              `} </p>

              </div>
          </div>
          <div className={style.contactMe}>
            <h3>Contact me:</h3>
            <div className={style.container_icons}>
              
              <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
              <FontAwesomeIcon className={style.icon} icon={faGithub} />
              <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
           
            </div>

          </div>

        </div>

      </div>

    </div>

    <div className={style.skills}></div>
  </div>

)

}

export default App;










