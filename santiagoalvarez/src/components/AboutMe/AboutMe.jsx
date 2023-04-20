import React from 'react'
import style from "./AboutMe.module.css"
import {  useTranslation } from "react-i18next"

export default function AboutMe() {
    const [t, i18n] = useTranslation('global')
    //<p>{t("presentation.greeting")}</p>
    
  return (
    <div className={style.all}>
        <div className={style.container}>
            <div className={style.divOne}></div>
            <div className={style.divTwo}>
                <div className={style.card}>                  
                    <div className={style.header}>
                        <div className={style.container_photo}>                          
                            <div className={style.shape}>
                            </div>
                        </div>
                        <div className={style.container_title}>
                            <h3>{t("aboutMe.title")}</h3>
                            <p className={style.frase}>"{t("aboutMe.phrase")}" -Pablo Picasso</p> 
                        </div>
                    </div>
                    <div  className={style.body}>
                        <p>{t("aboutMe.text")}</p>
                        <p>{t("aboutMe.text2")}</p>
                    </div>
                </div>

            </div>

            <div className={style.divOne}>
            </div>
        </div>

       
    </div>
  )
}
