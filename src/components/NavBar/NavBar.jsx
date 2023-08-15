/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../redux/actions/getByNameActions";
import { orderByNameOrRat } from "../../redux/actions/orderByNameActions";
import { cleanFiltered } from "../../redux/actions/cleanFilteredActions";
import { filteredBySource } from "../../redux/actions/filteredBySourceActions";
import { filteredByGenre } from "../../redux/actions/filteredByGenresActions";
import { filteredByPlatform } from "../../redux/actions/filteredByPlatformsActions";
import { setIsLoading } from "../../redux/actions/isLoadingAction";
import lofi from "../../audio/lofi.mp3";

const NavBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");

  const audioRef = useRef(null);
  const [muted, setMuted] = React.useState(false);

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.02;
    }
  });

  function handleChange(event) {
    setName(event.target.value);
  }

  function clean() {
    dispatch(cleanFiltered());
  }

  function searchByName(name) {
    dispatch(setIsLoading());
    dispatch(getByName(name));
  }

  function filtering(event) {
    dispatch(filteredBySource(event.target.value));
  }
  function filterGenre(event) {
    dispatch(filteredByGenre(event.target.value));
  }
  // if (localStorage.plats) {
  //   allPlatforms = localStorage.getItem("plats").split(",");
  // }
  function filterPlatform(event) {

    dispatch(filteredByPlatform(event.target.value));
  }
  function orderBy(event) {
    dispatch(orderByNameOrRat(event.target.value));
  }

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state)=>state.platforms)
  return (
    <div className={style.navBarContainer}>
      <div className={style.imgNavBarContainer}>
        <Link to={"/"}>
          <img
            src="https://media.giphy.com/media/FtTfX6RsPPExhjuymq/giphy.gif"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <audio
          ref={audioRef}
          className={style.audioControls}
          src={lofi}
          autoPlay
          loop
        />
      </div>
      <div className={style.linkNavBarContainer}>
        <div className={style.createButtonContainer}>
          <Link to={"/create"}>
            <p className={style.newGameButton}>NEW GAME</p>
          </Link>
        </div>
        <div className={style.homeButtonContainer}>
          <Link to={"/home"}>
            <img
              className={style.homeButton}
              src="https://iili.io/HDlPXuS.png"
              alt="home"
            />
          </Link>
        </div>
      </div>
      <div className={style.filtersContainer}>
        <button
          className={style.cleanFilters}
          onClick={() => {
            clean();
          }}
        >
          CLEAR FILTERS
        </button>
        <select
          className={style.navSelects}
          onChange={orderBy}
          name="filters"
          id=""
        >
          <option selected={true} disabled="disabled">
            ORDER BY...
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="+">RATING ⬆</option>
          <option value="-">RATING ⬇</option>
        </select>
        <select className={style.navSelects} onChange={filtering} name="source">
          <option selected={true} disabled="disabled">
            FILTER BY SOURCE
          </option>
          <option value="db">DATABASE</option>
          <option value="api">API</option>
        </select>
        <select
          className={style.navSelects}
          onChange={filterGenre}
          name="genres"
          id=""
        >
          <option selected={true} disabled="disabled">
            FILTER BY GENRES
          </option>
          {genres?.map((gen, index) => {
            return (
              <option key={index} value={gen.name}>
                {gen.name}
              </option>
            );
          })}
        </select>
        <select
          className={style.navSelects}
          onChange={filterPlatform}
          name="platforms"
          id=""
        >
          <option selected={true} disabled="disabled">
            FILTER BY PLATFORMS
          </option>
          {!platforms?.length ? (
            <option disabled="disabled">
              Charging platforms, please wait.
            </option>
          ) : null}
          {platforms?.map((gen, index) => {
            return (
              <option key={index} value={gen}>
                {gen}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.searcbhBarContainer}>
        <input
          className={style.navSelects}
          onChange={handleChange}
          placeholder="Search by name"
          id="search"
          value={name}
          type="search"
        />
        <button
          className={style.searchButton}
          onClick={() => {
            searchByName(name);
          }}
          type="submit"
        >
          🔎
        </button>
      </div>
      <button className={style.muteButton} onClick={handleMute}>
        {muted ? "🔈" : "🔊"}
      </button>
    </div>
  );
};

export default NavBar;
