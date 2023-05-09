import { useState } from "react"
import style from "./App.module.css"
import AboutMe from "./components/AboutMe/AboutMe"
import Animations from "./components/Animations"
import Presentation from "./components/Presentation/Presentation"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Nav from "./components/Nav/Nav"
import ContactMe from "./components/Contact me/ContactMe"
import Footer from "./components/Footer/Footer"
import Favicon from "react-favicon"
import favicon from "./assets/faviconSA.png" 


function App() {
   
  //desetructuro como quiera  
  const [refNav, navState] = Animations()


return(
  <div className={style.app}>
      <Favicon url={favicon}></Favicon>
      {/* <header className={ navState ? style : style.nav} >
        <a  href="#presentation" className={ navState ?  style.logo_hidden :style.logo  }>Santiago Alvarez</a>
        <Nav />
      </header> */}
    
      <section ref={refNav}id="presentation"  >
        <Presentation />
      </section>
      <section  id="aboutMe" >
        <AboutMe />
      </section>
      
      <section  id="skills">
        <Skills />
      </section>
      <section  id="projects" >
        <Projects />
      </section>
      <section  id="contactMe" >
        <ContactMe />
      </section>

      <Footer />
    </div>

  
  )
}

export default App;










