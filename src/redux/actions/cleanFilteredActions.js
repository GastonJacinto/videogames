import { CLEAN_FILTERED } from "./actionTypes";

export function cleanFiltered() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAN_FILTERED,
        payload: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
}
