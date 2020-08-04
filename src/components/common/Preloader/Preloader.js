import React from "react";
import preloader from "../../../assets/images/Spinner-1s-200px (1).svg";
import style from './Preloader.module.css'

let Preloader = (props) => {
  return <p className={style.preloader}>
    <img src={preloader}/>
  </p>
}

export default Preloader