import style from "./App.module.css"
import AboutMe from "./components/AboutMe/AboutMe"
import Animations from "./components/Animations"
import Presentation from "./components/Presentation/Presentation"
import Skills from "./components/Skills/Skills"
import Projects from "./components/projects/Projects"

function App() {
  
  //desetructuro como quiera  
  const [refpage1, state] = Animations()

return(
  <div className={style.app}>
    <Presentation />
    <AboutMe />
    <Skills />
    <Projects />
  </div>)
}

export default App;










