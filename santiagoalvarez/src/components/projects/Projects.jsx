import style from "./Projects.module.css"

const Projects = () =>{
    return(
        <div> 
            <h2 className={style.title}>Proyectos</h2>
            <div  className={style.container}>
                <div className = {style.card}></div>
                <div className = {style.card}></div>
                <div className = {style.card}></div>
            </div>
        </div>
    )
}
export default Projects;