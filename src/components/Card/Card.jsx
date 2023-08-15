import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {

  
  let genres = props.genres?.map((gen, index) => {
    if (index === props.genres?.length - 1) {
      return (gen = `${gen.name}.`);
    } else {
      return (gen = `${gen.name}`);
    }
  });

  return (
    <div className={style.cardContainer}>
      <div className={style.cardNameContainer}>
        <Link to={`/details/${props.id}`}>
          {" "}
          <h2 className={style.cardName}title={props.name}>
            {props.name.length > 18
              ? `${props.name?.slice(0, 17)}...`
              : `${props.name}`}  
          </h2>
        </Link>
      </div>
      <div className={style.imageContainer}>
        <img className={style.cardImage} src={props.imagen} alt={props.name} />
      </div>

      <div className={style.genreCardContainer}>
             <div className={style.genreContainer}>

          <p className={style.cardGenre}title={genres}>{genres?.length>3?`${genres.slice(0,3)}...`:`${genres}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
