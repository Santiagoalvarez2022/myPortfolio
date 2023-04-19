import React from 'react'
import style from "./Nav.module.css" 


export default function () {
  return (
  <nav className={style.nav_container}>
        <div className={style.nav}>
            <div>
                <h3 className={style.links}>
                    <a href="#aboutMe" > 
                    About Me
                    </a> 
                </h3> 
            </div>
            <div>
                <h3 className={style.links}>
                    <a href="#skills" > 
                        Skills
                    </a> 
                </h3> 
            </div> 
            <div>
                <h3 className={style.links}>
                    <a href="#projects" > 
                        Projects
                    </a>  
                </h3> 
            </div> 
            <div>
                <h3 className={style.links}>
                    <a  href="#contactMe"> 
                        Contact me 
                    </a> 
                </h3> 
            </div>
        </div>            
  </nav>  
  )
}
