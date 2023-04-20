import React from 'react'
import style from "./ContactMe.module.css"
import img from "../../assets/fotodeperfil.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram,faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons"; 
import {  useTranslation } from "react-i18next"

export default function ContactMe() {
    const [t, i18n] = useTranslation('global')

    return (
    <div className={style.all}>
            <div className={style.boxOne}>
                <div></div>
            </div>

            <div className={style.boxTwo}>
                <div className={style.boxTwo_space}>
                    
                </div>
                <div className={style.card}>

                    <div className={style.data}>

                        <div className={style.container_photo}>
                            <img className={style.photo} src={img} alt="" />
                        </div>

                        <div className={style.information}>
                            <div className={style.information_text}>
                                <h3>Santiago Alvarez</h3>
                                <h4>{t("contact.age")}</h4>
                                <h4><FontAwesomeIcon icon={faLocationDot} bounce style={{color: "#c3c6cb",}} />{t("contact.address")}</h4>
                            </div>
                            <div className={style.information_medias}>
                                
                                <div className={style.icons}>

                                    <a target="_blank" href="https://www.instagram.com/s.antiago01/"  className={style.links_medias}>
                                        <FontAwesomeIcon  className={style.icons_medias} icon={faInstagram} />
                                    </a>

                                    <a  target="_blank" href=" https://twitter.com/_santialvarz" className={style.links_medias}>
                                        <FontAwesomeIcon  className={style.icons_medias} icon={faTwitter} />
                                    </a>

                                    <a target="_blank" href="https://www.facebook.com/santiago.alvarez.5015/" className={style.links_medias}>
                                        <FontAwesomeIcon  className={style.icons_medias} icon={faFacebook} />
                                    </a>
                                    
                                    <a target="_blank" href="https://github.com/Santiagoalvarez2022" className={style.links_medias}>
                                        <FontAwesomeIcon  className={style.icons_medias} icon={faGithub} />
                                    </a>

                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className={style.contact} >
                        <div className={style.question}>
                            <p>{t("contact.question")} <br /> {t("contact.response")}</p>
                        </div>


                        <div className={style.container_contact}>
                            <div className={style.container_icon_contact}>
                                <a href="mailto:santiagoalvarez.job2023@gmail.com" >
                                    <FontAwesomeIcon  className={style.icons_contact}  icon={faEnvelope} /> santiagoalvarez.job2023@gmail.com
                                </a>
                            </div>   

                            <div className={style.container_icon_contact}>
                                <a href="https://www.linkedin.com/in/santiagoalvarezwebdeveloper/" target="_blanck">
                                    <FontAwesomeIcon className={style.icons_contact}  icon={faLinkedin} /> Santiago Alvarez                            
                                </a>
                            </div>

                            <div className={style.container_icon_contact}>
                                <p href='#'>
                                    <FontAwesomeIcon  className={style.icons_contact} icon={faPhone} /> +54 2477466229 
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
                
                <div className={style.boxTwo_space}>
              
                </div>  
            </div>

     
    </div>
  )
}
