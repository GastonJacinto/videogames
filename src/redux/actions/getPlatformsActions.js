import axios from "axios";
import { GET_PLATFORMS } from "./actionTypes";

export function getPlatforms() {
  return async function (dispatch) {
    try {
     
      const {data} = await axios("/platforms");
dispatch({
  type: GET_PLATFORMS,
  payload: data
})
    } catch (error) {
      alert(error.response.data.error)    }
  };
}