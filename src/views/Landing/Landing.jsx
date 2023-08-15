import React, { useEffect } from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPlatforms } from "../../redux/actions/getPlatformsActions";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    if (!localStorage.length) {
      dispatch(getPlatforms());
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
