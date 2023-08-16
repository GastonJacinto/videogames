import React from 'react'
import style from "./Notfound.module.css"
const Notfound = () => {
  
  return (
    <div className={style.notFoundContainer} >
   <div className={style.h1Container}>
   <h1 className={style.notFoundh1}> <p>404 :/ THERE ARE NO GAMES</p></h1>
   </div>
    </div>
  )
}

export default Notfound