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
            <div className={style.boxOne}>
                <div></div>
                <h1>Skills</h1>
            </div>

            <div className={style.boxTwo}>
                <div className={style.boxTwo_space}>

                </div>
                <div className={style.container_logos}>

                    <div className={style.divs}>
                        <div> 
                            <img src={logo_html} className={style.logo} />
                        </div>
                        <div> 
                            <img src={logoCss}  className={style.logo}  />
                        </div>
                        <div> 
                            <img src={logo_js} className={style.logo} />
                        </div>
                    
                    </div>
                    <div className={style.divs}>
                        <div> 
                            <img src={logo_node}  className={style.logo} />
                        </div> 
                        <div> 
                            <img src={logo_seqelize}  className={style.logo} />
                        </div>
                        <div> 
                            <img src={logo_postgress}  className={style.logo} />
                        </div>
                    </div>
                    <div className={style.divs}>
                        <div> 
                            <img src={logo_react} className={style.logo} />
                        </div>
                        <div> 
                            <img src={logo_redux} className={style.logo}  />
                        </div>
                        <div> 
                            <img src={logo_git} className={style.logo}  />
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