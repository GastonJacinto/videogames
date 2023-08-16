import axios from "axios";
import { GET_GENRES } from "./actionTypes";

export function getGenres() {
  return async function (dispatch) {
    try {
     
      const {data} = await axios("/genres/");
dispatch({
  type: GET_GENRES,
  payload: data
})
    } catch (error) {
      alert(error.response.data.error)    }
  };
}
