import { CLEAN_DETAIL } from "./actionTypes";

export function cleanDetail() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAN_DETAIL,
        payload: {},
      });
    } catch (error) {
      console.log(error);
    }
  };
}
