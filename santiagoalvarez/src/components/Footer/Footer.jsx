import React from 'react'
import style from "./Footer.module.css"
import cv from "../../assets/Santiago Alvarez.pdf"
 


export default function Footer() {
  return (
    <div className={style.all}>
        <div className={style.container}>
            <div  className={style.one}> 
                <p>Gracias por haber visitado mi pagina! :)</p> 
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
