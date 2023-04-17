import React from "react" 
import ReactPlayer from "react-player"
import style from "./Projects.module.css"
import videoeEmprendar from "../../assets/video/emprendar.mp4"
import { faL } from "@fortawesome/free-solid-svg-icons"

const Projects = () =>{
    return(
        <div className={style.all}>
            <div className={style.boxOne}>
                <div></div>
                <h1>SKILLS</h1>
            </div>
            <div className={style.boxTwo}>
                <div className={style.boxTwo_space}>
                    <ReactPlayer url={videoeEmprendar} controls loop/>
                </div>
                <div className={style.container_projects}>
                    <div className={style.card}>
                    </div>                   
                    <div className={style.card}>
                    </div>
                </div>
                <div className={style.nav}>
                    <div>
                        <div><h3>ABOUT ME</h3> </div>
                        <div><h3>SKILLS</h3> </div>
                        <div><h3>PROJECTS</h3> </div>
                        <div><h3>CONTAC ME</h3> </div>
                    </div>
                    
                </div>  
            </div>
            <div className={style.boxThree}>
                
            </div>

    </div>
    )
}
export default Projects;