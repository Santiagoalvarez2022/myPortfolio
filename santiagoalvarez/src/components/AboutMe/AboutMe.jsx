import React from 'react'
import style from "./AboutMe.module.css"

export default function AboutMe() {
  return (
    <div className={style.all}>

        <div className={style.container}>

            
            <div className={style.divOne}>
            </div>
       
            <div className={style.divTwo}>
            {/* <img className={style.photo} src={img} alt="" /> */}

                <div className={style.card}>
                    
                    <div className={style.header}>
                        <div className={style.container_photo}>
                           
                            <div className={style.shape}>
                            </div>

                        </div>
                        <div className={style.container_title}>
                            <h3>About me</h3>
                            <p className={style.frase}>"Cuando la inspiracion llegue, espero q me encuentre trabajando"</p>    
                        </div>
                    </div>

                    <div  className={style.body}>
                        <p>Im Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years . m Santiago Alvarez, i have twenty one years .</p>
                    </div>
                </div>

            </div>

            <div className={style.divOne}>
            </div>
        </div>

       
    </div>
  )
}
