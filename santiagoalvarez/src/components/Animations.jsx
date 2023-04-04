import {useEffect, useRef, useState} from "react"

const Animations  = () =>{
    const [isIntersecting, setIsIntersecting] = useState(false)
  
    //creo referecia al elemento
    const ref = useRef()
  
    useEffect(()=>{
      const element = ref.current
      const observer = new IntersectionObserver((entries)=>{
        //entreies es igual a un arrayt con cada objeto observado
        entries.forEach((entry)=>{
          //entri.isIntersection e un valor bolleano del obj IntesersectionObserve
          setIsIntersecting(entry.isIntersecting)
        })
      }
      //,
      //{threshold : 0.2}
      )
    
      if (element) {
        observer.observe(element)
      }
  
      //dejo de observar cuando se desmonte
      return ()=>{
        if(element){
          observer.unobserve(element)
        }
      }
    })
  
  
  
    //retorno como array para poder desetructurarlo con cualquier nombre
    return [ref, isIntersecting]
  
} 
export default Animations;
  
  
  