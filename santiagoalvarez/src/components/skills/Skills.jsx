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
import {  useTranslation } from "react-i18next"


const Skills = () =>{
    const [t, i18n] = useTranslation('global')

    return(
        <div className={style.all}>
            <div className={style.boxOne}>
                <div className={style.space}></div>
                <div className={style.title_container} >
                    <h1 className={style.title}>{t("skills.title")}</h1>
                    <h3 className={style.description}>// {t("skills.subtitle")}</h3>
                </div>
            </div>

            <div className={style.boxTwo}>
                <div className={style.boxTwo_space}>

                </div>
                <div className={style.container_logos}>
                    <div className={style.boxprincipal}>
                        <div> 
                            <img src={logo_html} className={style.logo} />
                            <p className={style.name} >HTML</p>
                        </div>
                        
                        <div> 
                            <img src={logoCss}  className={style.logo}  />
                            <p className={style.name}>CSS</p>
                        </div>
                        <div> 
                            <img src={logo_js} className={style.logo} />
                            <p className={style.name}>Javascript</p>
                        </div>
                    
                        <div> 
                            <img src={logo_node}  className={style.logo} />
                            <p className={style.name}>Node.js</p>

                        </div> 
                        <div> 
                            <img src={logo_seqelize}  className={style.logo} />
                            <p className={style.name}>Sequelize</p>

                        </div>
                        <div> 
                            <img src={logo_postgress}  className={style.logo} />
                            <p className={style.name}>PostgreSQL</p>

                        </div>
                        <div> 
                            <img src={logo_react} className={style.logo} />
                            <p className={style.name}> React</p>

                        </div>
                        <div> 
                            <img src={logo_redux} className={style.logo}  />
                            <p className={style.name}>Redux</p>
                        </div>
                        <div> 
                            <img src={logo_git} className={style.logo}  />
                            <p className={style.name}>Git</p>
                        </div>
                        
                    </div>
                   
                </div>
                <div className={style.boxTwo_space}>

                </div>
            </div>
            <div className={style.boxThree}>
                
            </div>

        </div>
    )
}
export default Skills;