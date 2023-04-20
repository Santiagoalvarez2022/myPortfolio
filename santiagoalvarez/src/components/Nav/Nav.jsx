import React from 'react'
import style from "./Nav.module.css" 
import {  useTranslation } from "react-i18next"


export default function () {
    const [t, i18n] = useTranslation('global')

    function handlerLanguage_es(){
        i18n.changeLanguage("es")
    }
    
    function handlerLanguage_en(){
        i18n.changeLanguage("en")
    }
    
    return (
    <nav className={style.nav_container}>
            <div className={style.nav}>
                <div className={style.translater}>
                    <p onClick={()=>handlerLanguage_es()} >ES</p>
                    <p onClick={()=>handlerLanguage_en()} >EN</p> 
                </div>
                <div>
                    <h3 className={style.links}>
                        <a href="#aboutMe" > 
                        {t("aboutMe.title")}
                        </a> 
                    </h3> 
                </div>
                <div>
                    <h3 className={style.links}>
                        <a href="#skills" > 
                        {t("skills.title")}                       
                        </a> 
                    </h3> 
                </div> 
                <div>
                    <h3 className={style.links}>
                        <a href="#projects" > 
                        {t("projects.title")}
                        </a>  
                    </h3> 
                </div> 
                <div>
                    <h3 className={style.links}>
                        <a  href="#contactMe"> 
                            Contact
                        </a> 
                    </h3> 
                </div>
            </div>            
    </nav>  
    )
}
