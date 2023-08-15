import { ORDER } from "./actionTypes";

export function orderByNameOrRat(orden) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ORDER,
        payload: orden,
      });
    } catch (error) {
      console.log(error);
    }
  };
}