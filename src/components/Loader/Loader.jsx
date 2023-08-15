import React from "react";
import style from "./Loader.module.css"

const Loader = () => {
  return (
    <div>
      <div className={style.loaderContainer}><div className={style.loaderC}><span className={style.loader}>L &nbsp; ading</span></div></div>
    </div>
  );
};

export default Loader;
