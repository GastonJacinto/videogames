import React, { useEffect } from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlatforms } from "../../redux/actions/getPlatformsActions";
import { getAllGames } from "../../redux/actions/getAllGamesActions";
import { setIsLoading } from "../../redux/actions/isLoadingAction";
// let requesting = false;
const Landing = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  const platforms = useSelector((state) => state.platforms);

  useEffect(() => {

    if(!allGames.length){
      dispatch(getAllGames());
      dispatch(setIsLoading())
    }
    if(!platforms.length){
    dispatch(getPlatforms())
    }
    // if (!requesting && !localStorage.plats) {
    //   requesting=true
    //   dispatch(getPlatforms());
    //   console.log("Charging")
    // }
    return ()=>{
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
