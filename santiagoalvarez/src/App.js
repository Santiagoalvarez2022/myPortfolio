import style from "./App.module.css"
import {useEffect, useRef, useState} from "react"
import fotodeperfil from "./assets/fotodeperfil.jpeg"
import Animations from "./components/Animations"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"

//hace con que cuando aparezca la pagina dos aparezca la barra de navegacion
// el elemento HTML, una instancia de Insertio.. , y un estado local al hook




function App() {
  
  //desetructuro como quiera  
  const [refpage1, state] = Animations()

return(
  <div className={style.app}>
    <div className={style.boxOne} >
      <div>
        <div className={style.rowUp}></div>
        <div className={style.rowBootom}></div>
      </div>
    </div>

    <div className={style.boxTwo} >
      
    </div>

    <div className={style.boxThree} >
      <div className={style.marco_izq}>
        <div>
          <div className={style.rowUp}></div>
          <div className={style.rowBootom}></div>
        </div>
      </div>

      <div className={style.container_nav}>
        <div className={style.nav}>
          <div><h3>ABOUT ME</h3> </div>
          <div><h3>PROJECTS</h3> </div>
          <div><h3>SKILLS</h3> </div>
          <div><h3>CONTAC ME</h3> </div>
        </div>
      </div>

      <div className={style.marco_drc}>
          <div>
            <div className={style.rowBootom_d}></div>
            <div className={style.rowUp_d}></div>
          </div>
      </div>
    </div>  
  </div>)
}

export default App;










