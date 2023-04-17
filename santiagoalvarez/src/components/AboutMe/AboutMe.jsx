import React from 'react'
import style from "./AboutMe.module.css"
import img from "../../assets/fotodeperfil.jpeg"

export default function AboutMe() {
  return (
    <div className={style.all}>
        <div className={style.boxOne}>
            <div className={style.divOne}>
                <img src={img} alt="" />
            </div>
       
            <div className={style.divTwo}>
                <div>
                    <div className={style.header}>
                        <h3>ABOUT ME</h3>
                    </div>
                    <div  className={style.body}>
                        <p>Im Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years .</p>
                    </div>
                </div>
            </div>

            <div className={style.divThree}>

            </div>
        </div>

        <div className={style.boxTwo}>
                <div className={style.nav}>
                    <div><h3>ABOUT ME</h3> </div>
                    <div><h3>SKILLS</h3> </div>
                    <div><h3>PROJECTS</h3> </div>
                    <div><h3>CONTAC ME</h3> </div>
                </div>          
        </div>
    </div>
  )
}
