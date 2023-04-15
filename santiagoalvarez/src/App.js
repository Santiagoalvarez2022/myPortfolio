import style from "./App.module.css"
import Animations from "./components/Animations"
import Presentation from "./components/Presentation/Presentation"

function App() {
  
  //desetructuro como quiera  
  const [refpage1, state] = Animations()

return(
  <div className={style.app}>
    <Presentation />
    
  </div>)
}

export default App;










