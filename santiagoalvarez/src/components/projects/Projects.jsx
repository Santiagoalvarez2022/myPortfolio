import React from "react" 
import ReactPlayer from "react-player"
import style from "./Projects.module.css"
import videoeEmprendar from "../../assets/video/emprendar.mp4"
import videoeFirulais from "../../assets/video/firulais.mp4"

import { faL } from "@fortawesome/free-solid-svg-icons"
import socketIo from "../../assets/socketIo.png"
import nextJs from "../../assets/next js.png"
import logoCss from "../../assets/css.png"
import logo_html from  "../../assets/html.png"
import logo_js from "../../assets/javascript.png"

import logo_node from "../../assets/node.png"
import logo_postgress from "../../assets/postgres.png"
import logo_seqelize from "../../assets/sequelize.png"

import logo_react from"../../assets/react.png"
import logo_redux from "../../assets/redux.png"
import logo_git from "../../assets/git.png"

import emprendar from "../../assets/enprendar.png"
import firulaisapp from "../../assets/firulaisapp.png"

import {Link} from "react-router-dom"

const Projects = () =>{

    const divStyle = {
        color: 'blue',
        background :"transparent",
        borderRadius:" 20px"
       

    };


    return(
        <div className={style.all}>
            <div className={style.boxOne}>
                <div></div>
                <h1>Projects</h1>
            </div>

            <div className={style.boxTwo}>
                <div className={style.boxTwo_space}>
                    <div className={style.info_emprendar} >
                    </div>        
                    <div className={style.info_firulaisApp} >
                    </div>
                </div>
                <div className={style.container_projects}>

                   
                        <a href="https://emprendar-front.vercel.app/" className={style.card} target="_blank">
                            <div className={style.logo}>
                                <img src={emprendar} alt=""  />
                            </div>
                            <div className={style.card_presentation}>
                                <img src="" alt="" />
                                <ReactPlayer playbackRate width="90%" style={divStyle} height="50%" className={style.video} url={videoeEmprendar} playing={true} controls loop/> 
                                <div className={style.data_project}>
                                    <p>Emprendar es una plataforma de  Crodfunding destinada a potenciar el avance de proyectos o emprendimientos de la comunidad por medio de donaciones de dinero. Principalmente mis tareas se centraron en la creacion de un chat online y en el frontend de la app
                                        
                                    </p>
                                </div>
                            </div>
                        </a>
                  

                    <a href="https://firulais-1y8jbdr7w-santiagoalvarez2022.vercel.app" className={style.card}  target="_blank">
                        
                        <div className={style.logo2}>
                            <img src={firulaisapp} alt=""  />
                        </div>
                        <div className={style.card_presentation}>
                            <img src="" alt="" />
                            <ReactPlayer playbackRate width="90%" style={divStyle} height="50%" className={style.video} url={videoeFirulais} playing={true} controls loop/> 
                            <div className={style.data_project}>
                                <p>FirulaisApp es unaSPA "Single Page Application" .La SPA consume datos de una base de datos PostgreSQL a través de un Back End desarrollado en NodeJS utilizando Express y que tambien esta conectada con una api externa.
                                Desarrolle tando el frontend como el backend de la pagina. 
                                </p>
                            </div>
                        </div>
                    </a>



                </div>
                <div className={style.boxTwo_space}>
              
                    
                </div>  
            </div>
            <div className={style.boxThree}>              
            </div>
    </div>
    )
}
export default Projects;