import React from "react" 
import ReactPlayer from "react-player"
import style from "./Projects.module.css"
import videoeEmprendar from "../../assets/video/emprendar.mp4"
import videoeFirulais from "../../assets/video/firulais.mp4"

import emprendar from "../../assets/enprendar.png"
import firulaisapp from "../../assets/firulaisapp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {  useTranslation } from "react-i18next"



const Projects = () =>{

    const divStyle = {
        color: 'blue',
        background :"transparent",
        borderRadius:" 20px"
       

    };

    const [t, i18n] = useTranslation('global')

    return(
        <div className={style.all}>
           <div className={style.boxOne}>
                <div className={style.space}></div>
                <div className={style.title_container} >
                    <h1 className={style.title}>{t("projects.title")}</h1>
                    <h3 className={style.description}>// {t("projects.subtitle")}</h3>

                </div>
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
                                <ReactPlayer playbackRate width="90%" style={divStyle} height="20vh" className={style.video} url={videoeEmprendar} playing={true} controls loop/> 

                                <div className={style.data_project}>
                                    <p>{t("projects.detail_app_emprendar")}</p>
                                </div>
 
                                <div  className={style.enlaces}> 
                                    <a  title="Ver repositorio" href="https://github.com/Santiagoalvarez2022/Emprendar_Front" target="_blanck">
                                        <FontAwesomeIcon className={style.icon_a}   icon={faGithub}/>
                                    </a> 
                                </div>

                            </div>
                        </a>
                  
 
                    <a href="https://firulais-1y8jbdr7w-santiagoalvarez2022.vercel.app" className={style.card}  target="_blank">
                        
                        <div className={style.logo2}>
                            <img src={firulaisapp} alt=""  />
                        </div>
                        <div className={style.card_presentation}>
                            <ReactPlayer playbackRate width="90%" height="20vh" style={divStyle}  className={style.video2} url={videoeFirulais} playing={true} controls loop/> 
                            <div className={style.data_project}>
                                <p>{t("projects.detail_app_firulais")}</p>
                            </div>
                            <div  className={style.enlaces}> 
                                    <a title="Ver repositorio"  href="https://github.com/Santiagoalvarez2022/FirulaisApp" target="_blanck">
                                        <FontAwesomeIcon className={style.icon_a}   icon={faGithub}/>
                                    </a> 
                                </div>
                        </div>
                    </a>



                </div>
                <div className={style.container_button}>
                    <a href="https://github.com/Santiagoalvarez2022" target="_blanck">  
                        <div className={style.uiverse}>
                            <span className={style.tooltip}>github</span>
                            <span>
                                <FontAwesomeIcon className={style.icon_a}   icon={faCircleArrowRight}/> 
                            </span>
                        </div>
                    </a>
                </div>  
            </div>
            <div className={style.boxThree}>              
            </div>
    </div>
    )
}
export default Projects;