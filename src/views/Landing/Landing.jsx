import React, { useEffect } from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlatforms } from "../../redux/actions/getPlatformsActions";
let requesting = false;
const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    if (!requesting && !localStorage.plats) {
      requesting=true
      dispatch(getPlatforms());
    }
    return ()=>{
      if(requesting){
        
      }
    }
  });

  return (
    <div className={style.landingContainer}>
      <div className={style.playContainer}>
        <Link to="/home">
          <img className={style.h1Play} src="https://i.gifer.com/origin/fe/fe9eebde5e19b66192281164142359e4.gif" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
