/* eslint-disable no-unused-vars */
import axios from "axios";
import { POST_GAME } from "./actionTypes";

export function postGame(create) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "/videogames/",
        create
      );
      return alert(`Your game "${create.name}" has been succesfully created. `);
    } catch (error) {
      return alert(error.response.data.error);
    }
  };
}
