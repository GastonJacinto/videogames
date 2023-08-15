import axios from "axios";
import { GET_BY_NAME,NOT_FOUND } from "./actionTypes";

export function getByName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios(`/videogames/name?name=${name}`);
          dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NOT_FOUND
      })
      window.alert(error.response.data.error)

    }
  };
}
