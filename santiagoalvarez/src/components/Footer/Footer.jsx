import React from 'react'
import style from "./Footer.module.css"
import cv from "../../assets/Santiago Alvarez.pdf"
import {  useTranslation } from "react-i18next"


export default function Footer() {
    const [t, i18n] = useTranslation('global')

  return (
    <div className={style.all}>
        <div className={style.container}>
            <div  className={style.one}> 
                <p>{t("footer.text")}</p> 
            </div>
            <div className={style.two} >
                <div className={style.line}></div>
            </div>
            <div className={style.three} >
                <a href={cv} target="_blank" rel="noopener noreferrer" download="Santiago Alvarez.pdf">CV</a> 
                <p>2023</p> 
            </div>

{/*             
          
           */}
        </div>
    </div>
  )
}
