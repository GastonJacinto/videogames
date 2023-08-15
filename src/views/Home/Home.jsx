/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../redux/actions/getAllGamesActions";
import { getGenres } from "../../redux/actions/getGenresActions";
import Paginate from "../../components/Paginate/Paginate";
import { setIsLoading } from "../../redux/actions/isLoadingAction";
import Loader from "../../components/Loader/Loader";
import { getPlatforms } from "../../redux/actions/getPlatformsActions";
function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
 const genres = useSelector((state) => state.genres);
 const platforms = useSelector((state) => state.platforms);
const isLoading = useSelector((state)=> state.isLoading)
const deleted = useSelector((state)=> state.deleted)
  React.useEffect(() => {
    if (!allGames.length ) {
      dispatch(getAllGames());
      dispatch(setIsLoading())
    }
    if (!genres.length) {
      dispatch(getGenres());
    }
    if (!platforms.length) {
      console.log("asd")
      dispatch(getPlatforms());
    }
    return () => {};
  }, []);
 return (
    <div className={style.homeContainer}>
    
      {!isLoading?<div>
       
      <Paginate/>
      <div >
 
        <div className={style.cardsHomeContainer}>
        <Cards props={allGames} />
        </div>
      </div>

    </div>:<Loader/>}
    </div>
  );
}
// className={style.loader}
export default Home;
