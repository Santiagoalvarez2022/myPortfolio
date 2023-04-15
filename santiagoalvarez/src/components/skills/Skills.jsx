import React from "react";

import logoCss from "../../assets/css.png"
import logo_html from  "../../assets/html.png"
import logo_js from "../../assets/javascript.png"

import logo_node from "../../assets/node.png"
import logo_postgress from "../../assets/postgres.png"
import logo_seqelize from "../../assets/sequelize.png"

import logo_react from"../../assets/react.png"
import logo_redux from "../../assets/redux.png"
import logo_git from "../../assets/git.png"

import style from "./Skills.module.css"


const Skills = () =>{
    return(
        <div className={style.all}>
            <h2>Habilidades</h2>
            <div className={style.container_logos}>
                <div> 
                    <img src={logo_html} className={style.logo} />
                    <p>HTML</p>
                </div>
                <div> 
                    <img src={logoCss}  className={style.logo}  />
                        <p>CSS</p>
                </div>
                <div> 
                    <img src={logo_js} className={style.logo} />
                        <p>JavaScript</p>
                </div>
                <div> 
                    <img src={logo_node}  className={style.logo} />
                        <p>Node JS</p>
                </div>
                <div> 
                    <img src={logo_seqelize}  className={style.logo} />
                        <p>Sequelize</p>
                </div>
                <div> 
                    <img src={logo_postgress}  className={style.logo} />
                        <p>PostgreSQL</p>
                </div>
                <div> 
                    <img src={logo_react} className={style.logo} />
                        <p>React</p>
                </div>
                <div> 
                    <img src={logo_redux} className={style.logo}  />
                        <p>Redux</p>
                </div>
                <div> 
                    <img src={logo_git} className={style.logo}  />
                        <p>Git</p>
                </div>
            </div>
        </div>
         
        
    )
}
export default Skills;