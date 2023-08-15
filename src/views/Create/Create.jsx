/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import style from "./Create.module.css";
import { postGame } from "../../redux/actions/postGameActions";
import { useDispatch, useSelector } from "react-redux";

import { getGenres } from "../../redux/actions/getGenresActions";

import { getAllGames } from "../../redux/actions/getAllGamesActions";
import { setIsLoading } from "../../redux/actions/isLoadingAction";

let gameCreated = false;

const Create = () => {
  const dispatch = useDispatch();

  const [create, setCreate] = React.useState({
    name: "",
    imagen: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    genres: "",
  });

  const [errors, setErrors] = React.useState({
    name: "Must be between 5 and 30 characters long.",
    imagen: "Please, enter an image for your game.",
    description: "Must be between 10 and 200 characters long.",
    platforms: "Please, select one platform at least.",
    released: "When was your game released?",
    rating: "Please select a rating for your game.",
    genres: "Please, select one genre at least.",
  });

  const genres = useSelector((state) => state.genres);

  useEffect(() => {

return()=>{

if(gameCreated){
  dispatch(getAllGames())
  dispatch(setIsLoading())
  gameCreated=false;
}
}
  }, []);

  let [addGenres, setAddGenres] = React.useState([]);

  let [addPlatforms, setAddPlatforms] = React.useState([]);

  function disabler() {
    let disabled = true;
    for (const err in errors) {
      if (errors[err] === "") {
        disabled = false;
      } else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }
  const [aux, setAux] = React.useState(false);

  function eraseGenre(genre) {
    if (addGenres.length === 1) {
      setErrors({
        ...errors,
        genres: "Please, select one genre at least.",
      });
    }
    addGenres = addGenres.filter((gen) => gen !== genre);
    setAddGenres([...addGenres]);
    aux ? setAux(false) : setAux(true);
  }
  function eraseAllGenres(){
    setAddGenres([])
    setErrors({
      ...errors,
      genres: "Please, select one genre at least.",
    });
  }
  function erasePlatform(plats) {
    if (addPlatforms.length === 1) {
      setErrors({
        ...errors,
        platforms: "Please, select one platform at least.",
      });
    }
    addPlatforms = addPlatforms.filter((plat) => plat !== plats);
    setAddPlatforms([...addPlatforms]);
    aux ? setAux(false) : setAux(true);
  }
  function eraseAllPlats(){
    setAddPlatforms([])
    setErrors({
      ...errors,
      platforms: "Please, select one platform at least.",
    });
  }
  function handleChange(event) {
    if (event.target.name === "genres") {
      if (!addGenres.includes(event.target.value)) {
        setAddGenres([...addGenres, event.target.value]);
      }
    }
    if (event.target.name === "platforms") {
      if (!addPlatforms.includes(event.target.value)) {
        setAddPlatforms([...addPlatforms, event.target.value]);
      }
    }

    setCreate({ ...create, [event.target.name]: event.target.value });
    validation(
      { ...create, [event.target.name]: event.target.value },
      event.target.name
    );

    aux ? setAux(false) : setAux(true);
  }
  function handleSubmit(event) {
    gameCreated=true;
    const form = document.getElementById("form");
    event.preventDefault();
    form.reset();
    setAddGenres([]);
    setAddPlatforms([]);
    setErrors({
      name: "Must be between 5 and 30 characters long.",
      imagen: "Please, enter an image for your game.",
      description: "Must be between 10 and 200 characters long.",
      platforms: "Please, select one platform at least.",
      released: "When was your game released?",
      rating: "Please select a rating for your game.",
      genres: "Please, select one genre at least.",
    });
    const newGame = {
      name: create.name,
      imagen: create.imagen,
      description: create.description,
      platforms: addPlatforms,
      released: create.released,
      rating: create.rating,
      genres: addGenres,
    };
    dispatch(postGame(newGame));
  }
  function validation(state, name) {
    if (name === "name") {
      if (state.name === "" || state.name.length < 5 || state.name.length > 30)
        setErrors({
          ...errors,
          name: "Must be between 5 and 30 characters long.",
        });
      else setErrors({ ...errors, name: "" });
    }
    if (name === "description") {
      if (
        state.description === "" ||
        state.description.length < 10 ||
        state.description.length > 200
      )
        setErrors({
          ...errors,
          description: "Must be between 10 and 200 characters long.",
        });
      else setErrors({ ...errors, description: "" });
    }
    if (name === "platforms") {
      if (state.platforms === "")
        setErrors({
          ...errors,
          platforms: "Please, select one platform at least.",
        });
      else setErrors({ ...errors, platforms: "" });
    }
    if (name === "imagen") {
      if (state.imagen === "")  setErrors({
        ...errors,
        imagen: "Please, enter an image for your game.",
      });
      else setErrors({ ...errors, imagen: "" });

      if (state.imagen.length>255 ) setErrors({ ...errors, imagen: "The link must be less than 255 characters." });
 
    } 
    
    if (name === "released") {
      if (state.released !== "") setErrors({ ...errors, released: "" });
      else setErrors({ ...errors, released: "When was your game released?" });
    }
    if (name === "rating") {
      if (isNaN(parseInt(state.rating)))
        setErrors({
          ...errors,
          rating: "Rating must be a number between 1 and 5.",
        });
      else setErrors({ ...errors, rating: "" });
    }
    if (name === "genres") {
      if (state.genres === "") {
        setErrors({ ...errors, genres: "Please, enter one genre at least." });
        return;
      } else {
        setErrors({ ...errors, genres: "" });
        return;
      }
    }
  }

  //!ACA HAGO EL GETITEM Y USO LAS PLATAFORMAS
  // let allPlatforms;
  // if (localStorage.plats) {
  //   allPlatforms = localStorage.getItem("plats").split(",");
  // }
  const platforms = useSelector((state)=>state.platforms)

  return (
    <div className={style.createContainer}>
      <div className={style.letsCreateContainer}>
        <h2>¡Let's create a game!</h2>
      </div>
      <div className={style.createFormContainer}>
        <form onSubmit={handleSubmit} id="form" action="">
          <div className={style.allContainer}>
            <div className={style.nameAndImageContainer}>
              <label className={style.createFormLabels}>Name:</label>
              <input
                size={30}
                placeholder="Name of your game."
                name="name"
                type="text"
                onChange={handleChange}
              />
              <label className={style.formErrorLabel}>{errors.name}</label>
              <label className={style.createFormLabels}>Image:</label>
              <input
                placeholder="Insert image URL"
                name="imagen"
                type="text"
                onChange={handleChange}
              />
              <div>
                <label className={style.formErrorLabel}>{errors.imagen}</label>
              </div>
            </div>
            <div>
              <div className={style.textAreaContainer}>
                <label className={style.createFormLabels}>Description:</label>
                <textarea
                  rows="5"
                  cols="40"
                  placeholder="Describe your game"
                  name="description"
                  onChange={handleChange}
                ></textarea>
                <label className={style.formErrorLabel}>
                  {errors.description}
                </label>
              </div>
            </div>
          </div>
          <br />
          <label className={style.createFormLabels}>Platforms:</label>
          <select onChange={handleChange} name="platforms" id="platforms">
          {!platforms?.length ? (
            <option selected={true} disabled="disabled">Charging platforms, please wait.</option>
          ) : null}
            {platforms?.map((plat,i) => {
              return <option key={i}value={plat}>{plat}</option>;
            })}
          </select>
          {addPlatforms.length ? (
              <div className={style.platfsbutcontainer}>
                <div className={style.genreAndButContainer}>
                  {addPlatforms?.map((plat,i) => {
                    return (
                      <div key={i} className={style.genRenders}>
                      <p className={style.genresRender} value={plat}>
                        {plat}
                      </p>
                      <button
                        className={style.genreXButton}
                        type="button"
                        onClick={() => erasePlatform(plat)}
                      >
                        x
                      </button>
                    </div>
                    )
                  })}
                </div>
                <button
                  className={style.xGenreButton}
                  type="button"
                  onClick={eraseAllPlats}
                >
                  X
                </button>
              </div>
            ) : null}
              <label className={style.formErrorLabel}>{errors.platforms}</label>
          <label className={style.createFormLabels}>Released:</label>
          <input
            className={style.releasedCalendar}
            type="date"
            name="released"
            onChange={handleChange}
            max="2023-07-31"
          />
          <label className={style.formErrorLabel}>{errors.released}</label>
          <br />
          <div className={style.ratingContainer}>
            <label className={style.createFormLabels}>Rating: </label>
            <div className={style.starsContainer}>
              <input
                className={style.inputRating}
                onChange={handleChange}
                id="radio1"
                type="radio"
                name="rating"
                value="5"
              ></input>
              <label className={style.startButtons} for="radio1">
                ★
              </label>
              <input
                className={style.inputRating}
                onChange={handleChange}
                id="radio2"
                type="radio"
                name="rating"
                value="4"
              ></input>
              <label className={style.startButtons} for="radio2">
                ★
              </label>
              <input
                className={style.inputRating}
                onChange={handleChange}
                id="radio3"
                type="radio"
                name="rating"
                value="3"
              ></input>
              <label className={style.startButtons} for="radio3">
                ★
              </label>
              <input
                className={style.inputRating}
                onChange={handleChange}
                id="radio4"
                type="radio"
                name="rating"
                value="2"
              ></input>
              <label className={style.startButtons} for="radio4">
                ★
              </label>
              <input
                className={style.inputRating}
                onChange={handleChange}
                id="radio5"
                type="radio"
                name="rating"
                value="1"
              ></input>
              <label className={style.startButtons} for="radio5">
                ★
              </label>
            </div>
            <label className={style.formErrorLabel}>{errors.rating}</label>
          </div>
          <label className={style.createFormLabels}>Genres:</label>
          <select
            className={style.formSelect}
            name="genres"
            id="genres"
             onChange={handleChange}
          >
            {genres.map((genre) => {
              return <option key={genre.id}value={genre.name}>{genre.name}</option>;
            })}
          </select>
          {addGenres.length ? (
            <div className={style.platfsbutcontainer}>
              <div className={style.genreAndButContainer}>
                {addGenres?.map((gen,i) => {
                  return (
                    <div key={i} className={style.genRenders}>
                      <p className={style.genresRender} value={gen}>
                        {gen}
                      </p>
                      <button
                        className={style.genreXButton}
                        type="button"
                        onClick={() => eraseGenre(gen)}
                      >
                        x
                      </button>
                    </div>
                  );
                })}
              </div>
              <button 
              onClick={eraseAllGenres}
              className={style.xGenreButton} for="genres" type="button">
                X
              </button>
            </div>
          ) : null}
          <label className={style.formErrorLabel}>{errors.genres}</label>
          <input
            disabled={disabler()}
            className={style.submitFormButton}
            type="submit"
            value={"Create game!"}
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
