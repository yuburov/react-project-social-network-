import React from "react";
import preloader from "../../../assets/images/Spinner-1s-200px (1).svg";

let Preloader = (props) => {
  return <div className='preloader'>
    <img src={preloader}/>
  </div>
}

export default Preloader