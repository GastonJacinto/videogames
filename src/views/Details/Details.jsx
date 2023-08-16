/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../redux/actions/getGameDetailActions";
import { cleanDetail } from "../../redux/actions/cleanDetailStateActions";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Details.module.css";
import { Link } from "react-router-dom";
import { deleteGame } from "../../redux/actions/deleteGameActions";
import { getAllGames } from "../../redux/actions/getAllGamesActions";
import { setIsLoading } from "../../redux/actions/isLoadingAction";
import Loader from "../../components/Loader/Loader";

const Details = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const gameDetail = useSelector((state) => state.gameDetail);

  let description = gameDetail.description?.replace(/<[^>]+>/g, "");

  React.useEffect(() => {
    dispatch(setIsLoading());
    dispatch(getGameDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, []);
  const navigate = useNavigate();
  let genres = [];

  if (gameDetail.onDB) {
    genres = gameDetail.genres?.map((gen, index) => {
      if (index === gameDetail.genres.length - 1) {
        return (gen = `${gen.name}.`);
      } else {
        return (gen = `${gen.name},`);
      }
    });
  } else {
    genres = gameDetail.genres?.map((gen, index) => {
      if (index === gameDetail.genres.length - 1) {
        return (gen = `${gen}.`);
      } else {
        return (gen = `${gen},`);
      }
    });
  }

  const platforms = gameDetail.platforms?.map((plat, index) => {
    if (index === gameDetail.platforms.length - 1) {
      return (plat = `${plat}.`);
    } else {
      return (plat = `${plat},`);
    }
  });
  const isLoading = useSelector((state) => state.isLoading);

  function deleteDBGame() {
    const confirm = window.confirm(
      "Are you sure you want to delete this game?"
    );
    if (confirm) {
      window.alert("Your game was succesfully deleted.");
      dispatch(deleteGame(gameDetail.id));
      navigate("/home");
    } else window.alert("Action cancelled.");
  }
  return (
    <div className={style.detailContainer}>
      {!isLoading ? (
        <div className={style.detailC}>
          <div className={style.backButtonContainer}>
            <Link to="/home">
              <button className={style.backButton}>⬅Back</button>
            </Link>
          </div>
            <div className={style.allDetailContainer}>
              <div className={style.imginfoContainer}>
                <div className={style.imgcont}>
                <img
                  className={style.detailsImagen}
                  src={gameDetail.imagen}
                  alt={gameDetail.name}
                />
                </div>
                <div className={style.pContainer}>
                <p className={style.detailsP}>Platforms: {platforms}</p>
                <p className={style.detailsP}>Genres: {genres}</p>
                <p className={style.detailsP}>
                  Released: {gameDetail.released}
                </p>
                <p className={style.detailsP}>Rating: {gameDetail.rating}</p>
                </div>
              </div>
              <div className={style.infoContainer}>
                <div>
                <h2 className={style.detailName}>
                  {gameDetail.id}: {gameDetail.name}
                </h2>
                <p className={style.detailsDescription}>{description}</p>
               
                </div>
                <div className={style.deleteContainer}>
                  {gameDetail.onDB ? (
                    <button
                      onClick={deleteDBGame}
                      className={style.deleteButton}
                    >
                      🗑
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
