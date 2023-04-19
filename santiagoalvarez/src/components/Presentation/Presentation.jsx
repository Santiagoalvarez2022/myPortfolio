import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import style from "./Presentation.module.css"
import cv from "../../assets/Santiago Alvarez.pdf"
import Nav from '../Nav/Nav';

   
export default function Presentation(){
    return(
        <div className={style.app}>

        <div className={style.boxOne} >
          <div>
            <div className={style.rowUp}></div>
            <div className={style.rowBootom}></div>
          </div>
        </div>
    
        <div className={style.boxTwo} >

          <div className={style.presentation}>
              <div className={style.section_a} ></div>
    
              <div className={style.section_b} >
                <div className={style.name} >
    
                  <div className={style.name_a}>
                    <p>Hi! I´m</p>
                  </div> 
                  <div className={style.name_b}>
                    <h1>SANTIAGO ALVAREZ</h1>
                  </div>
                </div>
                
                <div className={style.info} >
                  <h3>Full Stack Web Developer</h3>
                  <p>Hola bienvenidos a mi portfolio! espero les guste, desde ppequeño me facina el mundo It y los avances cientificos, creo que la imagiginacion y la invecion son el combustible de un mundo mejor.</p>
                </div>
              </div>
    
              <div className={style.section_c} >
                  <a href={cv} target="_blank" rel="noopener noreferrer" download="Santiago Alvarez.pdf"> 
                    <div className={style.btn} >
                      DESCARGAR CV
                    </div>
                  </a>
              </div>
          </div>

          <div className={style.contact}>
            <div className={style.icon_container}>
             
              <div className={style.icon_containerDivA}  >
                  <a  className={style.enlaces}  href="https://github.com/Santiagoalvarez2022" target="_blanck">
                    <FontAwesomeIcon className={style.icon_a}   icon={faGithub}/>
                  </a>
              </div>
    
    
              <div className={style.icon_containerDivB}  >
                  <a className={style.enlaces}  href="mailto:santiagoalvarez.job2023@gmail.com" >
                    <FontAwesomeIcon className={style.icon_b}   icon={faEnvelope}/>
                  </a>
              </div>
    
    
              <div className={style.icon_containerDivC}  >
                <a  className={style.enlaces} href="https://www.linkedin.com/in/santiagoalvarezwebdeveloper/" target="_blanck">
                  <FontAwesomeIcon className={style.icon_c}   icon={faLinkedin}/>
                </a>
              </div>
            </div>
          </div>
        </div>
    
        <div className={style.boxThree} >
          <div className={style.marco_izq}>
            <div>
              <div className={style.rowUp}></div>
              <div className={style.rowBootom}></div>
            </div>
          </div>
    
          <div className={style.container_nav}>
            {/* <Nav />  */}
          </div>
    
          <div className={style.marco_drc}>
              <div>
                <div className={style.rowBootom_d}></div>
                <div className={style.rowUp_d}></div>
              </div>
          </div>
        </div>  
      </div>
    
        
    )
}