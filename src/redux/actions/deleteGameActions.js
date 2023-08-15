import axios from "axios";
import { DELETE_DBGAME } from "./actionTypes";


export function deleteGame(id) {
  return async function (dispatch) {
    try {
  await axios(`/delete/${id}`);
dispatch({
  type: DELETE_DBGAME,
  payload:id
})
    } catch (error) {
      console.log(error)
    }
  };
}