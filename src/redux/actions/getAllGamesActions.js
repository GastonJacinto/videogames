import axios from "axios";
import { GET_ALL_GAMES } from "./actionTypes";



export function getAllGames() {
  return async function (dispatch) {
    try {
     
      const {data} = await axios("/videogames/");
dispatch({
  type: GET_ALL_GAMES,
  payload: data
})
    } catch (error) {
      console.log(error)
    }
  };
}
